# 🤝 Contributing to Render My Web App

Thanks for being here — contributions of all sizes are welcome! 🎉 Whether it's a
bug fix, a new translation, a feature, or a typo in the docs, we appreciate it.

## 🧰 Setup

```bash
npm install
npm run dev
```

## ✅ Before you open a PR

Please make sure these all pass locally:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The same checks run in CI on every pull request.

## 🌿 Branches & PRs

- Branch off `main` with a descriptive name (e.g. `feature/responsive-presets`,
  `fix/console-scroll`).
- Keep PRs focused and reasonably small.
- Describe **what** changed and **why**. Screenshots/GIFs for UI changes are great.
- PRs are deployed to a temporary Firebase **preview channel** automatically — use
  it to verify your change live.

## 🌍 Adding or improving a translation

1. Copy `src/locales/en.json` to `src/locales/<code>.json` and translate the values
   (keep the keys unchanged).
2. Register the locale in `src/i18n.ts`: add it to `SUPPORTED`, `LOCALE_NAMES`, and
   `DICTS`.
3. Run `npm run dev` and switch languages via the footer selector to check it.

## 🧭 Project layout

```
src/
  editor.ts        CodeMirror setup (highlighting, autocompletion, themes)
  preview.ts       Sandboxed iframe rendering + console bridge
  consolePanel.ts  Receives console/errors from the sandbox
  storage.ts       localStorage autosave
  share.ts         Compressed URL-fragment encode/decode
  theme.ts         Dark/light theme
  download.ts      Download .html / open in new tab
  analytics.ts     GA4 + Consent Mode v2 (strips the URL fragment)
  cookieBanner.ts  EU opt-in consent banner
  i18n.ts          Tiny i18n module (detection, switching, DOM apply)
  locales/         One JSON dictionary per language
test/              Vitest tests
```

## 🧪 A note on privacy-sensitive code

The "Zero Knowledge" promise is core to this project. If you touch
`analytics.ts`, `share.ts`, or the preview sandbox, please keep
`test/analytics.test.ts` green — it proves the user's code is never sent to
Google. Add tests when you change this behavior.

## 🎨 Code style

- TypeScript, strict mode. Prefer small, focused modules.
- Let ESLint/Prettier-free formatting stay consistent with the existing files.
- No new runtime dependencies unless there's a good reason.

Happy hacking! 🚀
