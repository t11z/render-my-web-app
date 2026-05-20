import './styles.css'
import { initI18n, apply as applyI18n, mountLanguageSelect, getLocale, onLocaleChange } from './i18n'
import { initTheme } from './theme'
import { impressum, privacy } from './legalContent'

initI18n()
initTheme()

const content = document.body.dataset.legalPage === 'privacy' ? privacy : impressum
const container = document.getElementById('legal-content')

function renderContent(): void {
  const doc = content[getLocale()]
  document.title = doc.title
  if (container) container.innerHTML = doc.html
}

const select = document.getElementById('lang-select')
if (select instanceof HTMLSelectElement) mountLanguageSelect(select)

onLocaleChange(renderContent)
renderContent()
applyI18n()
