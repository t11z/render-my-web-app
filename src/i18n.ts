import en from './locales/en.json'
import de from './locales/de.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import pt from './locales/pt.json'
import zhHans from './locales/zh-Hans.json'

export type Locale = 'en' | 'de' | 'es' | 'fr' | 'pt' | 'zh-Hans'

export const SUPPORTED: Locale[] = ['en', 'de', 'es', 'fr', 'pt', 'zh-Hans']

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  'zh-Hans': '简体中文',
}

const DICTS: Record<Locale, Record<string, string>> = {
  en,
  de,
  es,
  fr,
  pt,
  'zh-Hans': zhHans,
}

const STORAGE_KEY = 'rmwa.locale'
let current: Locale = 'en'
const changeListeners: Array<() => void> = []

export function onLocaleChange(listener: () => void): void {
  changeListeners.push(listener)
}

function detect(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (SUPPORTED as string[]).includes(saved)) return saved as Locale
  } catch {
    /* ignore storage errors */
  }
  const candidates = navigator.languages ?? [navigator.language]
  for (const raw of candidates) {
    const lower = raw.toLowerCase()
    if (lower.startsWith('zh')) return 'zh-Hans'
    const base = lower.split('-')[0]
    if (base && (SUPPORTED as string[]).includes(base)) return base as Locale
  }
  return 'en'
}

export function initI18n(): void {
  current = detect()
}

export function getLocale(): Locale {
  return current
}

export function t(key: string): string {
  return DICTS[current][key] ?? DICTS.en[key] ?? key
}

export function setLocale(locale: Locale): void {
  current = locale
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    /* ignore storage errors */
  }
  apply()
  for (const listener of changeListeners) listener()
}

export function apply(): void {
  document.documentElement.lang = current

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n
    if (key) el.textContent = t(key)
  })

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr
    if (!spec) return
    for (const pair of spec.split(';')) {
      const [attr, key] = pair.split(':')
      if (attr && key) el.setAttribute(attr.trim(), t(key.trim()))
    }
  })
}

export function mountLanguageSelect(select: HTMLSelectElement): void {
  select.replaceChildren()
  for (const locale of SUPPORTED) {
    const option = document.createElement('option')
    option.value = locale
    option.textContent = LOCALE_NAMES[locale]
    select.appendChild(option)
  }
  select.value = current
  select.addEventListener('change', () => setLocale(select.value as Locale))
}
