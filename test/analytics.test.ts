import { beforeEach, describe, expect, it, vi } from 'vitest'

// Stands in for the user's (compressed) HTML, which the app stores in the URL fragment (#code=...).
const USER_CODE_MARKER = 'USER_SECRET_HTML_PAYLOAD_8675309'

function setSharedLinkFragment(): void {
  window.history.replaceState(null, '', '/?x=1#code=' + USER_CODE_MARKER)
}

function getDataLayer(): unknown[] {
  return (window as unknown as { dataLayer?: unknown[] }).dataLayer ?? []
}

function findCall(name: string): unknown[] | undefined {
  return getDataLayer().find((entry): entry is unknown[] => Array.isArray(entry) && entry[0] === name)
}

function gtagScript(): HTMLScriptElement | null {
  return document.querySelector<HTMLScriptElement>('script[src*="googletagmanager.com/gtag/js"]')
}

beforeEach(() => {
  vi.resetModules()
  document.querySelectorAll('script[src*="googletagmanager"]').forEach((s) => s.remove())
  delete (window as unknown as { dataLayer?: unknown[] }).dataLayer
  setSharedLinkFragment()
})

describe('analytics consent gating', () => {
  it('sends nothing to Google before the user opts in', async () => {
    const analytics = await import('../src/analytics')
    analytics.initConsentDefaults()

    expect(findCall('config')).toBeUndefined()
    expect(gtagScript()).toBeNull()
  })

  it('never sends the user code to Google after analytics is granted', async () => {
    const analytics = await import('../src/analytics')
    analytics.initConsentDefaults()
    analytics.grantAnalytics()

    // Guard: the fragment must actually carry the user's code, or the test proves nothing.
    expect(location.href).toContain('#code=' + USER_CODE_MARKER)

    const config = findCall('config')
    expect(config).toBeDefined()
    const params = (config?.[2] ?? {}) as { page_location?: string }
    const pageLocation = params.page_location ?? ''

    // page_location is sent to Google. It must be stripped of the fragment.
    expect(pageLocation).toBe(location.href.split('#')[0])
    expect(pageLocation).not.toContain('#')
    expect(pageLocation).not.toContain('code=')
    expect(pageLocation).not.toContain(USER_CODE_MARKER)

    // Nothing queued for Google (the entire dataLayer) may carry the fragment or the code.
    const serialized = JSON.stringify(getDataLayer())
    expect(serialized).not.toContain(USER_CODE_MARKER)
    expect(serialized).not.toContain('code=')

    // The injected loader is only gtag.js for the measurement ID — never the user's code.
    const src = gtagScript()?.src ?? ''
    expect(src).toContain('googletagmanager.com/gtag/js')
    expect(src).not.toContain(USER_CODE_MARKER)
    expect(src).not.toContain('#')
  })
})
