import { analyticsEnabled, grantAnalytics, denyAnalytics } from './analytics'

const KEY = 'rmwa.consent'

function store(value: 'granted' | 'denied'): void {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    /* ignore */
  }
}

function read(): string | null {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function initCookieBanner(): void {
  if (!analyticsEnabled()) return

  const saved = read()
  if (saved === 'granted') {
    grantAnalytics()
    return
  }
  if (saved === 'denied') {
    denyAnalytics()
    return
  }

  const banner = document.getElementById('cookie-banner')
  if (!banner) return

  banner.querySelector<HTMLButtonElement>('[data-consent="accept"]')?.addEventListener('click', () => {
    store('granted')
    grantAnalytics()
    banner.hidden = true
  })
  banner.querySelector<HTMLButtonElement>('[data-consent="decline"]')?.addEventListener('click', () => {
    store('denied')
    denyAnalytics()
    banner.hidden = true
  })

  banner.hidden = false
}
