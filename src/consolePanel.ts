type Level = 'log' | 'info' | 'warn' | 'error' | 'debug'

interface PreviewMessage {
  __rmwa: true
  level: Level
  args: string[]
}

function isPreviewMessage(data: unknown): data is PreviewMessage {
  return (
    typeof data === 'object' &&
    data !== null &&
    (data as { __rmwa?: unknown }).__rmwa === true &&
    Array.isArray((data as { args?: unknown }).args)
  )
}

export function initConsole(iframe: HTMLIFrameElement, list: HTMLElement): void {
  window.addEventListener('message', (event) => {
    if (event.source !== iframe.contentWindow) return
    if (!isPreviewMessage(event.data)) return

    const line = document.createElement('div')
    line.className = 'console-line console-' + event.data.level
    line.textContent = event.data.args.join(' ')
    list.appendChild(line)
    list.scrollTop = list.scrollHeight
  })
}

export function clearConsole(list: HTMLElement): void {
  list.replaceChildren()
}
