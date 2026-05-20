# 🪄 Render My Web App

> Write HTML, see it instantly. **Your code never leaves your browser.**

A minimalist, **fully client-side** HTML playground. Type HTML (with inline CSS &
JS) into a tiny editor with syntax highlighting and autocompletion, and it renders
live in a sandboxed preview. There is **no backend** — nothing you type is ever
sent to a server.

## 🔒 Zero Knowledge

This is the whole point of the project:

- ⛔ **No server-side logic.** The app is static files only.
- 🧠 **Your HTML stays in your browser.** It's kept in `localStorage` and,
  optionally, in the URL fragment (`#code=…`) — and browsers **never** send the
  fragment to any server.
- 🧱 **Sandboxed preview.** Your code runs in an `<iframe sandbox="allow-scripts">`
  **without** `allow-same-origin`, so it gets an opaque origin and cannot read the
  app's storage, cookies, or DOM.
- 📊 **Analytics is opt-in.** Google Analytics only loads after you accept the
  cookie banner, and even then the URL fragment is stripped — so your code is
  never sent to Google. There's a test that proves it
  (`test/analytics.test.ts`).

## ✨ Features

- 📝 HTML editor with syntax highlighting (CodeMirror 6)
- 💡 Context-aware autocompletion for HTML, CSS (in `<style>`) and JS (in `<script>`)
- ⚡ Live, debounced preview + manual **Run** and **Auto-run** toggle
- 🐞 Console & error panel (captured from the sandbox)
- 💾 Autosave to `localStorage`
- 🔗 Shareable links via a compressed URL fragment
- ⬇️ Download as `.html` / open the preview in a new tab
- 🌗 Dark / light theme
- 🌍 Multilanguage: English, Deutsch, Español, Français, Português, 简体中文
- 📦 Installable PWA, works offline

## 🚀 Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm test           # Vitest (incl. the "no code reaches Google" test)
```

Optional configuration — copy `.env.example` to `.env`:

```bash
VITE_GA_ID=          # GA4 Measurement ID (G-XXXX). Empty = analytics + banner disabled.
VITE_KOFI_HANDLE=    # Ko-fi handle for the donate link. Empty = link hidden.
```

## 🧱 Tech stack

Vite · TypeScript · CodeMirror 6 · lz-string · vite-plugin-pwa. No framework, no
backend.

## 🌍 Adding a language

1. Copy `src/locales/en.json` to `src/locales/<code>.json` and translate the values.
2. Register the locale in `src/i18n.ts` (`SUPPORTED`, `LOCALE_NAMES`, `DICTS`).

That's it — the switcher and detection pick it up automatically. PRs with new
languages are very welcome! 🙌

## ☁️ Deployment (Firebase Hosting, Spark / free plan)

Everything is static, so the free **Spark** plan is enough (no Cloud Functions).

Infrastructure is config-as-code in the repo: `firebase.json` (security headers,
caching) and `.firebaserc` (project id). CI/CD lives in `.github/workflows/`.

One-time setup:

1. Create a Firebase project (Spark plan) and a Hosting site.
2. Put the project id in `.firebaserc` and in the `projectId:` field of both
   `firebase-hosting-*.yml` workflows.
3. Create a service account and add its JSON as the GitHub secret
   `FIREBASE_SERVICE_ACCOUNT`.
4. (Optional) Add repository **variables** `VITE_GA_ID` and `VITE_KOFI_HANDLE`.

Until `FIREBASE_SERVICE_ACCOUNT` is set, the deploy step is **skipped** (so CI
stays green); it activates automatically once the secret exists. Then:

- Every PR gets a **preview channel** deploy (URL posted on the PR).
- Every push to `main` deploys to the **live** channel.

## 🤝 Contributing

Contributions are very welcome — this is an open-source project and we'd love your
help! 💜 Bug reports, translations, features, docs… all appreciated. See
[CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

## 💖 Support

If this is useful to you, consider buying us a coffee on **Ko-fi** ☕ (configure
your handle via `VITE_KOFI_HANDLE`).

## 📄 Legal & License

Licensed under the [MIT License](./LICENSE). All bundled dependencies are MIT —
their notices are reproduced in [THIRD-PARTY-NOTICES.md](./THIRD-PARTY-NOTICES.md)
(regenerate with `npm run notices`). The app ships template `Impressum`
(`impressum.html`) and privacy (`privacy.html`) pages — **please have them
reviewed by a professional before going live.**
