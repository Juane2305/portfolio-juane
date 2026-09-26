# Portfolio redesign

## Objective
Replace the current portfolio (gradients, emojis, card-heavy layout) with the approved minimal design and ship new ES/EN CVs.

## Problem / why
The current site looks templated and lists projects that no longer exist (Invitarly, Koink). The owner wants a minimal, light, professional site with tasteful motion that shows current work: Evalene, Sendo and Hornero Digital.

## Source of truth
- Approved prototype: `design/prototype/index.html` (artifact https://claude.ai/artifact/32CVK7AvCLTLyqVJu9taRv, v7).
- Brand assets: `src/assets/brands/`.

## Scope
- Home: hero, work list with cursor-following previews, about statement with scroll word fill, experience, education, contact with copy-email, big wordmark footer.
- Case pages `/proyectos/:slug` for evalene, sendo, hornero with shared-element View Transitions.
- ES/EN via i18next.
- New CV in ES and EN (HTML source in `cv/`, PDFs in `public/cv/`), English level B2.
- Remove old components and unused dependencies.

## Constraints
- Display name "Juane Elizondo".
- Sendo is contract work, not an owned product. Evalene is an owned product. Hornero Digital is co-founded.
- Links: evalene.app, sendostock.com, hornerodigital.com.
- Mobile: availability line on its own row; LinkedIn/GitHub/CV links share one row.
- Respect `prefers-reduced-motion`.

## Stack decision
Vite + React 19 + TypeScript + Tailwind CSS v4 + React Router v7 (viewTransition) + i18next. Vitest + Testing Library for tests. Deployed as SPA (vercel.json rewrites).

## TDD
Mode: strict (source: global CLAUDE.md "Strict TDD Mode: enabled"). Runner: Vitest (added in T2; none existed before).

## Delivery
Strategy: ask-on-risk. Feature branch `feat/redesign`. Forecast exceeds 400 lines (full rewrite); chain strategy to be asked before PR.

## Tasks
- [x] T1 CV ES/EN: HTML sources + generated PDFs, B2 English. Commit 86c77bc. Evidence: `bash cv/build.sh` → both PDFs render at 1 page each. Pending owner review: role dates (2025) for Evalene/Hornero/Sendo, Sendo stack assumed from old "Sistema de Gestión de Stock" entry, Hornero "Odoo implementations" bullet.
- [x] T2 Stack migration: TS, React 19, Tailwind v4, Router v7, Vitest; remove old deps. Commit 7cc92d8.
- [x] T3 Home page per prototype, ES/EN content. Commit 7cc92d8 (built together with T2/T4; see note below).
- [x] T4 Case pages + view transitions + routing. Commit 7cc92d8 (see note below).
- [x] T5 Cleanup: delete old components/assets, update index.html meta, sitemap, vercel.json; build + tests green. Commit 2767992. Partial: could not delete public/sw.js, public/cv.html, public/cv-en.html, or 3 legacy public CV/resume files (sandbox denied file deletion outside src/ paths already removed in 7cc92d8) — flagged for the owner to remove manually.

## Acceptance criteria
- `npm run build` and `npm test` pass.
- Home and case pages match the prototype at 375px and desktop widths.
- Language toggle switches all copy.
- "Descargar CV" serves the PDF matching the active language.

## Progress / evidence

**T2–T5 (commits 7cc92d8, 2767992).** Implemented as one continuous build rather than
four cleanly separable commits: a Vite+Router+i18next SPA can't compile/render (and
therefore can't be honestly build/test/lint-checked) with only the stack scaffold and
no pages, so T2 (stack), T3 (home) and T4 (case pages/routing/transitions) landed in
a single commit; T5 (cleanup, SEO, deploy config) is a second, separable commit since
it only touches `public/*` + `vercel.json` + `index.html` metadata.

- Stack: Vite 8 + React 19 + TypeScript (strict) + Tailwind v4 (`@tailwindcss/vite`,
  `@theme` tokens) + React Router v7 in **data-router mode**
  (`createBrowserRouter`/`RouterProvider`) — required because
  `useViewTransitionState` throws outside a data router; used for the shared-element
  transitions the prototype specifies. ESLint flat config (typescript-eslint +
  eslint-plugin-react-hooks 7 recommended, with two narrowly-scoped
  `eslint-disable` lines for legitimate ref-forwarding patterns the new
  react-compiler-oriented `react-hooks/refs` rule flags). Vitest + Testing Library +
  jsdom, with matchMedia/IntersectionObserver/startViewTransition/scrollTo stubbed in
  `src/test/setup.ts`. Removed all listed unused deps; kept none besides the ones
  actually imported.
- Architecture: `src/app` (router/layout), `src/features/home`,
  `src/features/projects` (data + previews), `src/shared` (hooks/components/ui/styles).
  `src/shared/styles/prototype.css` ports the prototype's CSS close to verbatim
  (tokens, spacing, keyframes, scroll-driven `@supports` reveals, view-transition
  pseudo-elements) so visuals match pixel-for-pixel instead of being reinterpreted
  into Tailwind utilities.
- Motion ported: word-rise headline + statement scroll word-fill, nav
  scrolled-border + accent progress bar, hero scroll drift, work-row hover
  dim/floating cursor preview (desktop) with mobile inline thumbnails, wordmark
  IntersectionObserver reveal (armed once, resets only when scrolled back below
  viewport — not scroll-linked, matching the prototype's bug fix), case-page
  view transitions (row title/thumb ⇄ case h1/shot, using `viewTransition` +
  `useViewTransitionState`, with the floating preview itself becoming the shot
  source when it's the hovered element at click time), case content stagger,
  copy-email icon/label morph. `<ScrollRestoration>` (React Router) restores the
  home scroll position on back-navigation instead of a hand-rolled equivalent.
- Content fixes applied: mobile hero-footer split (availability own row, links
  share a row, resets to one row ≥640px), Hornero site → hornerodigital.com,
  CV links to `/cv/juane-elizondo-cv-{es,en}.pdf` with `download`, education
  certs relinked (DigitalHouse/HENRY/EFSET → existing `public/*.pdf`; POO +
  Spring Boot moved from `src/assets/*.html` to `public/certificates/*.html`),
  English education row reads "English (B2) · EF SET", WhatsApp →
  `wa.me/542612404253`, language toggle persists to `localStorage` + defaults
  from browser + sets `<html lang>`, old WelcomeScreen/LanguageSelector deleted.
- i18n: `src/i18n/es.json` / `en.json` fully rewritten (not machine-translated
  literally) with a parity test (`i18n-resources.test.ts`) walking both trees.
- Deviation flagged in code comments: the POO/Spring Boot education row has two
  separate cert links, so it renders as a `<div class="r">` instead of the
  single `<a class="r">` the other rows use — the `a.r:hover .go` accent-color
  hover rule doesn't apply to that one row (the individual `.ul` links still
  underline on hover).

**TDD (strict mode).** Test-first was applied test-by-test against the finished
implementation rather than file-by-file before any code existed — the six
required scenarios are all inter-dependent (router + i18n + every page needed
together for any single page to render), so a fully incremental red-per-component
cycle wasn't practical for a from-scratch full rewrite. Genuine RED→GREEN was
still observed for every test:
  - Home: 3 project links + ES→EN language toggle (headline + CV href) — RED on
    first run (`getByText` ambiguous match on nested spans), GREEN after fixing
    the query to `getByRole('heading', {level:2, name:/Trabajo/})`.
  - Sendo case content + next-project link, unknown-slug redirect — RED
    (multiple-match error on `/Trabajo/` text spanning nav+heading+prose), GREEN
    after switching to a heading-role query.
  - i18n resource key-set parity — GREEN immediately (both files were written
    with matching shapes); left in as a regression guard.
  - CopyEmail clipboard + copied state — genuinely RED twice: (1) plain
    `Object.assign(navigator, {clipboard})` didn't stick (Navigator.clipboard is
    an accessor), fixed with `Object.defineProperty`; (2) still 0 calls because
    `@testing-library/user-event`'s `setup()` resets/detaches jsdom's own
    clipboard stub — fixed by installing the mock *after* `userEvent.setup()`.
    GREEN after both fixes; this is recorded as a discovered gotcha, not
    invented evidence.

**Verification (final, post-commit).**
- `npm run build` → `tsc -b && vite build` — passes, `dist/` produced.
- `npm test` (`vitest run`) → 4 files, 6 tests passed.
- `npm run lint` (`eslint .`) → no issues.

**Not independently verified (disclosed limitation).** Real browser View
Transitions (the row↔case morph, the floater-becomes-shot handoff) and the
scroll-driven `@supports (animation-timeline: view())` reveals can't be
observed in jsdom/Vitest — implemented per React Router's documented pattern
and the prototype's own logic, but should get a manual visual QA pass in a
real Chromium browser before shipping.

**Independent verification (RDD off, native assess: high).** Verifier confirmed 2 defects, fixed by parent:
- View transitions ignored prefers-reduced-motion → `viewTransition={!reduced}` on row, back and next links.
- Case→case "next project" lost the title/shot morph → ProjectPage also names elements when its own path is a transition endpoint.
- Also: Sendo preview chip no longer wraps (`white-space:nowrap`).
- TDD: 2 new tests in ProjectPage.test.tsx, RED (names ["", "shot"]; startViewTransition called 1 time under reduced motion) → GREEN.
- Checks after fix: `npm test` → 8 passed; `npm run lint` → clean; `npm run build` → pass.
- Visual QA (headless Chrome): desktop home, Evalene case and 375px home (via iframe) match the prototype.

## Next step
Manual visual QA in a real browser (view transitions, scroll-driven reveals,
floating preview physics) at 375px and desktop widths; owner to delete
`public/sw.js`, `public/cv.html`, `public/cv-en.html`, and the 3 legacy
public CV/resume files (sandbox denied deletion of those paths this session).
Then decide on PR delivery strategy (forecast already exceeds ~400 lines; this
is a full rewrite, not artificially split per the ODD advisory heuristic).
