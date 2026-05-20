import './styles.css'
import { initI18n, apply as applyI18n, mountLanguageSelect } from './i18n'
import { initTheme } from './theme'

initI18n()
initTheme()

const select = document.getElementById('lang-select')
if (select instanceof HTMLSelectElement) mountLanguageSelect(select)

applyI18n()
