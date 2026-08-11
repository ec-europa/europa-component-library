# EDS integration PoC

`eds` is a new, parallel design-system track being evaluated for ECL —
currently just design tokens (`src/themes/eds`, `src/presets/eds`), not
yet an official system alongside EC/EU. Before deciding _how_ eds
components should be delivered, several small proof-of-concept approaches
were built for the same simple button, so they can be compared side by
side rather than argued about in the abstract.

Approaches 1-3 are built and live together in the `eds` Storybook instance
(`pnpm start:eds`, port 6008) under `Components/*`. Approach 4 is analysis
only, not built.

## Approach 1 — shared `@ecl/button`, themed via Sass

The real, existing `@ecl/button` component (same `button.html.twig`, same
build pipeline as EC/EU) themed through the eds preset's `$theme`/
`$button` Sass-map config (`src/themes/eds/variables/_button.scss`) — the
standard ECL indirection technique, unmodified. Proves eds tokens can
drive the existing shared component as-is.

- `src/components/button/eds-button.story.js` → **`Components/Button`**

## Approach 2 — dedicated `@ecl/eds-button` component

Its own markup and CSS (`eds-button.html.twig` / `.scss`), referencing
`--eds-*` custom properties directly — no `$theme`/Sass-map indirection.
Tests what a from-scratch eds-native component looks like without going
through the EC/EU theming convention.

- `src/components/eds-button/` → **`Components/Eds button`**

## Approach 3 — light custom element, `@ecl/eds-button-webc`

A [Lit](https://lit.dev) `LitElement` (`<eds-button-webc>`), light DOM (no
Shadow DOM, via `createRenderRoot() { return this; }`), zero new CSS — it
reuses approach 2's compiled `.eds-button` classes as-is. `display:
contents` keeps the wrapper out of layout/the a11y tree; a declarative
`html` template renders the real `<button>` from reactive attributes
(`variant`/`type`/`disabled`), capturing the label from an
already-server-rendered `<button>` on first connect if one is present.
Started as hand-rolled vanilla DOM patching, then rewritten with Lit to
compare authoring cost/readability — no separate build toolchain either
way, just one small new dependency for the Lit version.

- `src/components/eds-button-webc/` → **`Components/Eds button webc`**

## Approach 4 — reuse `ecl-webcomponents` (Stencil), analysis only

[`ecl-webcomponents`](https://github.com/ec-europa/ecl-webcomponents) is
the EC's own Stencil-based web-components implementation of ECL, a
separate repo/toolchain with React/Angular/Vue wrappers. Its `ecl-button`
already wraps the same `@ecl/button` + Sass-map technique as approach 1,
and theme switching is generic (`data-ecl-theme` attribute, no ec/eu
allow-list) — so adding an `eds` mode is a small, well-understood change
_in that repo_: a new theme sub-package, one `ecl-button-eds.scss`, one
`styleUrls` entry.

Not built here because the cost sits elsewhere: `@ecl/theme-eds` isn't
published to npm yet, so testing it needs a local link across two
separate repos/registries, plus its own `pnpm install`/Stencil/Storybook
setup. It gets React/Angular/Vue wrappers "for free" that the other
approaches don't have, at the cost of that extra footprint.

## Status

Comparison only — nothing has been picked as the delivery mechanism.
`eds` tokens/preset are also not yet published to npm or wired into the
release pipeline (`dist:presets`, `dist:storybook`), which affects both
approach 4 and any future real component work.

Adopting Lit for approach 3 needed one repo-wide change: the root
`package.json`'s `jest.transformIgnorePatterns` now allows Lit's
ESM-only packages through Babel (Jest ignores `node_modules` by default,
and Lit ships no CommonJS build) — everything else under `node_modules`
is still skipped as before; full `pnpm test:components` re-verified
green (73/73 suites) after the change.
