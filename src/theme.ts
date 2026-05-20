export type Theme = 'light' | 'dark'

const KEY = 'rmwa.theme'
let current: Theme = 'dark'

function read(): Theme {
  try {
    const saved = localStorage.getItem(KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyToDom(): void {
  document.documentElement.dataset.theme = current
}

export function initTheme(): void {
  current = read()
  applyToDom()
}

export function isDark(): boolean {
  return current === 'dark'
}

export function toggleTheme(): boolean {
  current = current === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem(KEY, current)
  } catch {
    /* ignore */
  }
  applyToDom()
  return isDark()
}
