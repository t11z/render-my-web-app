declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

const GA_ID = import.meta.env.VITE_GA_ID
let configured = false

function gtag(...args: unknown[]): void {
  window.dataLayer.push(args)
}

export function analyticsEnabled(): boolean {
  return Boolean(GA_ID)
}

export function initConsentDefaults(): void {
  if (!GA_ID) return
  window.dataLayer = window.dataLayer ?? []
  window.gtag = gtag
  // Consent Mode v2: deny everything until the user opts in.
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
  gtag('js', new Date())
}

export function grantAnalytics(): void {
  if (!GA_ID) return
  gtag('consent', 'update', { analytics_storage: 'granted' })
  if (configured) return
  configured = true
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID)
  document.head.appendChild(script)
  // Strip the URL fragment so the user's HTML (stored in #code) never reaches Google.
  gtag('config', GA_ID, { page_location: location.href.split('#')[0] })
}

export function denyAnalytics(): void {
  if (!GA_ID) return
  gtag('consent', 'update', { analytics_storage: 'denied' })
}
