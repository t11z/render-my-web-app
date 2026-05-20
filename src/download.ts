function withBlobUrl(content: string, use: (url: string) => void, revokeAfterMs: number): void {
  const blob = new Blob([content], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  use(url)
  window.setTimeout(() => URL.revokeObjectURL(url), revokeAfterMs)
}

export function downloadHtml(content: string, filename = 'page.html'): void {
  withBlobUrl(
    content,
    (url) => {
      const a = document.createElement('a')
      a.href = url
      a.download = filename
      a.click()
    },
    1000,
  )
}

export function openInNewTab(content: string): void {
  withBlobUrl(content, (url) => window.open(url, '_blank', 'noopener'), 10000)
}
