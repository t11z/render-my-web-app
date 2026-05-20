import './styles.css'
import { initI18n, apply as applyI18n, mountLanguageSelect, t } from './i18n'
import { initTheme, toggleTheme, isDark } from './theme'
import { initConsentDefaults } from './analytics'
import { initCookieBanner } from './cookieBanner'
import { createEditor } from './editor'
import { createPreview } from './preview'
import { initConsole, clearConsole } from './consolePanel'
import { loadContent, saveContent } from './storage'
import { readHash, updateHash, buildShareUrl } from './share'
import { downloadHtml, openInNewTab } from './download'
import { DEFAULT_TEMPLATE } from './templates'

function byId<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id)
  if (!el) throw new Error('Missing element #' + id)
  return el as T
}

initI18n()
initTheme()
initConsentDefaults()

const iframe = byId<HTMLIFrameElement>('preview')
const consoleList = byId('console-list')
const preview = createPreview(iframe)
initConsole(iframe, consoleList)

const initial = readHash() ?? loadContent() ?? DEFAULT_TEMPLATE

let autoRun = true
let debounceTimer: number | undefined

function render(content: string): void {
  clearConsole(consoleList)
  preview.render(content)
}

const editor = createEditor(byId('editor'), {
  doc: initial,
  dark: isDark(),
  onChange: (content) => {
    saveContent(content)
    updateHash(content)
    if (!autoRun) return
    window.clearTimeout(debounceTimer)
    debounceTimer = window.setTimeout(() => render(content), 300)
  },
})

render(initial)

byId('btn-run').addEventListener('click', () => render(editor.getContent()))

const autorunToggle = byId<HTMLInputElement>('toggle-autorun')
autorunToggle.checked = autoRun
autorunToggle.addEventListener('change', () => {
  autoRun = autorunToggle.checked
  if (autoRun) render(editor.getContent())
})

byId('btn-theme').addEventListener('click', () => editor.setTheme(toggleTheme()))
byId('btn-download').addEventListener('click', () => downloadHtml(editor.getContent()))
byId('btn-newtab').addEventListener('click', () => openInNewTab(editor.getContent()))
byId('btn-clear-console').addEventListener('click', () => clearConsole(consoleList))

const shareBtn = byId('btn-share')
shareBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(buildShareUrl(editor.getContent()))
    .then(() => {
      const original = shareBtn.textContent
      shareBtn.textContent = t('toolbar.copied')
      window.setTimeout(() => {
        shareBtn.textContent = original
      }, 1500)
    })
    .catch(() => {
      /* clipboard may be blocked; ignore */
    })
})

const kofi = byId<HTMLAnchorElement>('link-kofi')
const kofiHandle = import.meta.env.VITE_KOFI_HANDLE
if (kofiHandle) {
  kofi.href = 'https://ko-fi.com/' + kofiHandle
} else {
  kofi.hidden = true
}

mountLanguageSelect(byId<HTMLSelectElement>('lang-select'))
applyI18n()
initCookieBanner()
editor.focus()
