import './styles.css'
import '@fontsource-variable/inter'
import { applyIcons, setIcon } from './icons'
import { initI18n, apply as applyI18n, mountLanguageSelect, t } from './i18n'
import { initTheme, toggleTheme, isDark } from './theme'
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

const themeIcon = byId('btn-theme').querySelector<HTMLElement>('[data-theme-icon]')
function updateThemeIcon(dark: boolean): void {
  if (themeIcon) setIcon(themeIcon, dark ? 'sun' : 'moon')
}
updateThemeIcon(isDark())
byId('btn-theme').addEventListener('click', () => {
  const dark = toggleTheme()
  editor.setTheme(dark)
  updateThemeIcon(dark)
})

byId('btn-download').addEventListener('click', () => downloadHtml(editor.getContent()))
byId('btn-newtab').addEventListener('click', () => openInNewTab(editor.getContent()))
byId('btn-clear-console').addEventListener('click', () => clearConsole(consoleList))

const maximizeBtn = byId('btn-maximize')
const maximizeIcon = maximizeBtn.querySelector<HTMLElement>('.icon')
function setMaximized(on: boolean): void {
  document.body.classList.toggle('preview-maximized', on)
  maximizeBtn.setAttribute('aria-pressed', String(on))
  maximizeBtn.setAttribute('aria-label', t(on ? 'toolbar.restore' : 'toolbar.maximize'))
  maximizeBtn.setAttribute('title', t(on ? 'toolbar.restore' : 'toolbar.maximize'))
  if (maximizeIcon) setIcon(maximizeIcon, on ? 'minimize' : 'maximize')
}
maximizeBtn.addEventListener('click', () =>
  setMaximized(!document.body.classList.contains('preview-maximized')),
)
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('preview-maximized')) {
    setMaximized(false)
  }
})

const shareBtn = byId('btn-share')
const shareLabel = shareBtn.querySelector<HTMLElement>('.label')
shareBtn.addEventListener('click', () => {
  navigator.clipboard
    .writeText(buildShareUrl(editor.getContent()))
    .then(() => {
      if (!shareLabel) return
      shareLabel.textContent = t('toolbar.copied')
      window.setTimeout(() => {
        shareLabel.textContent = t('toolbar.copylink')
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

applyIcons()
mountLanguageSelect(byId<HTMLSelectElement>('lang-select'))
applyI18n()
editor.focus()
