/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_ID?: string
  readonly VITE_KOFI_HANDLE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
