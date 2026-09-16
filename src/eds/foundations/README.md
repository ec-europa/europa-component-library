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
inspect the actual resolved output. `build/` is git-ignored; nothing here is
needed to consume the package.

- From ECL monorepo: `pnpm build:eds`.
- Standalone: `npm install` then `npm run build`.

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
