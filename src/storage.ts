const KEY = 'rmwa.content'

export function loadContent(): string | null {
  try {
    return localStorage.getItem(KEY)
  } catch {
    return null
  }
}

export function saveContent(content: string): void {
  try {
    localStorage.setItem(KEY, content)
  } catch {
    /* storage may be unavailable/full; drafts are best-effort */
  }
}
