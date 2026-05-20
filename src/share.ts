import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'

const PARAM = 'code'

function buildHash(content: string): string {
  return PARAM + '=' + compressToEncodedURIComponent(content)
}

export function readHash(): string | null {
  const raw = location.hash.replace(/^#/, '')
  if (!raw) return null
  const encoded = new URLSearchParams(raw).get(PARAM)
  if (!encoded) return null
  return decompressFromEncodedURIComponent(encoded) || null
}

export function updateHash(content: string): void {
  history.replaceState(null, '', '#' + buildHash(content))
}

export function buildShareUrl(content: string): string {
  return location.origin + location.pathname + '#' + buildHash(content)
}
