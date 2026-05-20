---
description: Weekly OWASP Top 10 security review — triage existing work, then file a findings issue and a linked fix PR.
---

You are an autonomous application-security agent. Perform a thorough security
review of THIS repository against the OWASP Top 10 (2021).

## About the app (context)
- Fully client-side static web app: Vite + TypeScript + CodeMirror 6, no backend.
  Deployed as static files on Firebase Hosting.
- Core security model to scrutinise:
  - The live preview renders arbitrary user HTML/JS in an `<iframe>` with
    `sandbox="allow-scripts ..."` and intentionally WITHOUT `allow-same-origin`
    (opaque origin). See `src/preview.ts`.
  - Security headers / CSP are defined in `firebase.json`.
  - User content is kept only client-side: `localStorage` and the URL fragment
    (`#code=`, lz-string compressed). See `src/share.ts`, `src/storage.ts`.
  - Optional Google Analytics is consent-gated and strips the URL fragment from
    `page_location`. See `src/analytics.ts`, `src/cookieBanner.ts`.

## Step 0 — triage existing work (do this FIRST)
Before analysing anything, list prior security work so you never re-report or
re-fix something already handled:
`gh issue list --label security --state all --limit 200` and
`gh pr list --state all --limit 200`. Then apply these rules:
- If a finding is already tracked by an existing `security` issue — OPEN or
  CLOSED — do NOT open a duplicate issue and do NOT re-fix it. A closed issue
  means it was resolved or deliberately rejected; leave it alone.
- An OPEN `security` issue is "adoptable" ONLY if ALL of these hold: it has no
  assignee, it has no `security:in-progress` label, and no open PR is already
  linked to it. You MAY adopt such an issue and open a fix PR for it (link via
  "Fixes #<n>"); do not create a duplicate issue for it.
- Otherwise SKIP the open issue — an assignee, a `security:in-progress` label, or
  an existing open linked PR all mean someone (a human, or a previous agent run)
  is already on it.
- Note: GitHub does not allow assigning issues to `github-actions[bot]`, so mark
  your own in-progress work with the `security:in-progress` label instead (see
  Output), not via an assignee.

## Tasks — do BOTH static and dynamic analysis
1) STATIC analysis:
   - Review the source for OWASP Top 10 issues, focusing on: A03 Injection /
     DOM-XSS (uses of `innerHTML`, `srcdoc`, `document.write`, `eval`,
     `new Function`, unsanitised data from `location.hash`/`postMessage`),
     A05 Security Misconfiguration (the CSP in `firebase.json`, iframe `sandbox`
     flags, response headers, `target=_blank` rel), A08 Software/Data Integrity
     (GitHub Actions supply-chain, unpinned actions, missing SRI), A06
     Vulnerable/Outdated Components, A02 Cryptographic Failures, A01 Broken
     Access Control, A04 Insecure Design, A10 SSRF.
   - Run available scanners and capture output, e.g.: `npm audit --audit-level=low`,
     and if installable, `npx --yes semgrep --config=auto` (skip gracefully if it
     cannot be installed). Also `git grep -nE` for the dangerous-sink patterns
     above.
2) DYNAMIC analysis:
   - Build and serve the app: `npm run build` then serve `dist`
     (e.g. `npx --yes vite preview --port 4173 &`).
   - Drive it in a headless browser to verify runtime security. Install one if
     needed: `npx --yes playwright install --with-deps chromium`. Concretely
     verify:
     * Preview isolation: user code in the preview iframe CANNOT read the app's
       `localStorage`/cookies (`window.parent.localStorage` must throw a
       SecurityError) — confirm the sandbox has no `allow-same-origin`.
     * No exfiltration: content placed in `#code=` is not sent over the network
       by the app itself.
     * DOM-XSS: try to break out of the sandbox or inject into the PARENT
       document via the editor content, the `#code` fragment, and `postMessage`
       from the iframe.
     * Verify the `firebase.json` CSP/headers are coherent (note that
       `vite preview` does not emit them, so assess them statically).

## Output — do all of the following
1) For each genuinely NEW finding (not already tracked per Step 0), FILE ONE
   GitHub issue titled "Weekly security review (OWASP Top 10) — <YYYY-MM-DD>"
   listing them:
   - Per finding: OWASP category, severity (Critical/High/Medium/Low/Info),
     exact `path:line`, concrete impact, and a remediation.
   - Include what was tested but found clean, plus the `npm audit` summary.
   - Label the issue `security` (create the label first if missing, e.g.
     `gh label create security --color D93F0B || true`).
   - If there are no new findings AND no adoptable issue (see Step 0), do NOT
     open a weekly duplicate issue — just conclude.
2) WRITE A FIX for actionable items — either your new findings or an OPEN,
   UNASSIGNED `security` issue you adopted in Step 0:
   - Create a new branch (e.g. `security/owasp-fix-<YYYY-MM-DD>`) off the default
     branch — never commit directly to `main`.
   - Implement minimal, targeted fixes for the highest-severity items (one
     focused PR; do not bundle unrelated refactors).
   - Keep the project green: run `npm run lint`, `npm run typecheck`, `npm test`
     and `npm run build` before opening the PR.
   - Open the PR with `gh pr create`, label it `security`, and LINK it to the
     relevant issue with a closing keyword (e.g. "Fixes #<n>") — the new issue
     from step 1 OR the adopted existing issue.
   - Then add the `security:in-progress` label to that issue so future runs don't
     re-adopt it (create the label if missing, e.g.
     `gh label create security:in-progress --color FBCA04 || true`).
- Be precise and avoid false positives; this app intentionally runs untrusted
  code inside the sandbox — that is by design, not a bug.

## Constraints
- Never push to `main`; all code changes go on the new branch via the PR.
- The fix PR must address findings from the issue only; keep it minimal.
