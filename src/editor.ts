import { EditorView, basicSetup } from 'codemirror'
import { keymap } from '@codemirror/view'
import { EditorState, Compartment } from '@codemirror/state'
import { indentWithTab } from '@codemirror/commands'
import { html } from '@codemirror/lang-html'
import { oneDark } from '@codemirror/theme-one-dark'

export interface EditorHandle {
  getContent(): string
  setTheme(dark: boolean): void
  focus(): void
}

interface EditorOptions {
  doc: string
  dark: boolean
  onChange: (content: string) => void
}

const themeCompartment = new Compartment()

export function createEditor(parent: HTMLElement, options: EditorOptions): EditorHandle {
  const view = new EditorView({
    parent,
    state: EditorState.create({
      doc: options.doc,
      extensions: [
        basicSetup,
        html({ autoCloseTags: true, matchClosingTags: true }),
        keymap.of([indentWithTab]),
        themeCompartment.of(options.dark ? oneDark : []),
        EditorView.theme({
          '&': { height: '100%' },
          '.cm-scroller': { overflow: 'auto', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' },
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) options.onChange(update.state.doc.toString())
        }),
      ],
    }),
  })

  return {
    getContent: () => view.state.doc.toString(),
    setTheme: (dark: boolean) =>
      view.dispatch({ effects: themeCompartment.reconfigure(dark ? oneDark : []) }),
    focus: () => view.focus(),
  }
}
