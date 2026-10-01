# eds-foundations

EDS design tokens: primitive and semantic Sass maps, plus CSS custom
properties for the semantic layer only. No build step required to consume
it — pure Sass, consumed via `@use`/`@forward`.

## Structure

- `primitives/` — raw color, dimension, typography, breakpoint and grid
  scales. Sass maps only, never exposed as CSS custom properties.
- `semantic/` — named tokens (color light/dark, spacing, sizing, typography,
  border, opacity, shadow), resolved from primitives.
- `index.scss` — forwards `primitives` and `semantic` (Sass maps only, no
  CSS output).
- `custom-properties.scss` — the only file that emits CSS: `--eds-*` custom
  properties for the semantic tokens.

## Usage

```scss
@use '@ecl/eds-foundations' as eds; // Sass maps
@use '@ecl/eds-foundations/custom-properties'; // --eds-* custom properties
```

## Build

Compiles `custom-properties.scss` to `build/eds-foundations.css` — useful to
inspect the resolved tokens on their own. `build/` is git-ignored; nothing here
is needed to consume the package. The distributed CSS bundle (tokens + Inter
fonts + EDS components) is built by `@ecl/preset-eds` (`src/eds/preset`).

- Standalone: `npm install` then `npm run build`.

## Storybook

`src/eds/playground` is a Storybook instance for this package, mirroring
`src/playground/ec`/`src/playground/eu` (same addon set where it applies: a11y,
links, essentials; `@storybook/addon-themes` drives `[data-theme]` for the
light/dark toggle). Stories live next to what they document — this package's
own story is `foundations.story.js`, currently a placeholder.

- From ECL monorepo: `pnpm start:eds` (port 6008). Builds and watches
  `@ecl/preset-eds`, whose `build/styles/ecl-eds.css` Storybook serves as a
  static file.

## Token export (`tokens.json`)

`tokens.json`, at the root of this package, is a JSON export of every
primitive and semantic token map, for designers to browse without reading
Sass. Regenerate it after touching any token map:

- From ECL monorepo: `pnpm --filter @ecl/eds-foundations run export:tokens`.
- Standalone: `npm run export:tokens`.

It's auto-generated — don't hand-edit it, and don't commit it stale.

`scripts/tokens-manifest.scss` is the single source of truth for what's
included: a `$tokens` map listing each Sass map to export, nested the same
way it should appear in the JSON. `scripts/export-tokens.js` walks that map
generically (maps, lists, colors, numbers, strings, booleans) via a Sass
custom function, so it never needs to change when a token map is added,
removed, or renamed — only the manifest does.

## Dark mode

Defaults to `prefers-color-scheme: dark`. Force a mode regardless of the OS
setting with `[data-theme="light"]` or `[data-theme="dark"]` on `:root`/`html`.

Implemented with CSS `light-dark()` and `color-scheme` — each color token
compiles to one declaration holding both values, rather than a duplicated
rule per mode. Needs a modern browser (Chrome/Edge 123+, Firefox 120+,
Safari 17.5+, Opera 109+, Samsung Internet 27+) — ~90% global usage as of
September 2026 ([caniuse](https://caniuse.com/mdn-css_types_color_light-dark)).
Baseline "newly available" since May 2024, so the remaining ~10% is mostly
browsers that predate that. **To confirm with the team**: whether that's an
acceptable floor, or whether a `@supports` fallback (reintroducing the
duplicated light/dark blocks for older browsers) is needed instead.

## Naming

Custom properties follow `--eds-{abbreviation}-{name}`, no extra namespace
prefix:

| Abbreviation | Category                                                                                               | Example                   |
| ------------ | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| `c`          | color                                                                                                  | `--eds-c-surface-primary` |
| `sp`         | spacing                                                                                                | `--eds-sp-m`              |
| `si`         | sizing                                                                                                 | `--eds-si-l`              |
| `is`         | icon sizing                                                                                            | `--eds-is-m`              |
| `br`         | border-radius                                                                                          | `--eds-br-s`              |
| `bw`         | border-width                                                                                           | `--eds-bw-xs`             |
| `bp`         | breakpoint                                                                                             | `--eds-bp-l`              |
| `gr`         | grid                                                                                                   | `--eds-gr-columns`        |
| `op`         | opacity                                                                                                | `--eds-op-50`             |
| `sh`         | shadow                                                                                                 | `--eds-sh-2`              |
| `f`          | typography — `f-s`/`f-lh`/`f-w`/`f-ls` primitives, `f-{type}-{step}-size`/`-line-height` per role/step | `--eds-f-heading-m-size`  |

Weight is intentionally separate from size/line-height — pair
`--eds-f-{type}-{step}-size`/`-line-height` with `--eds-f-w-{weight}`
yourself, e.g. `font: normal normal var(--eds-f-w-semibold)
var(--eds-f-heading-m-size)/var(--eds-f-heading-m-line-height) var(--eds-f-family);`.

Typography and grid scale up at the breakpoint tokens' `s` (768px) and `l`
(1140px) thresholds — mobile below `s`, tablet `s`–`l`, desktop from `l`.
