# ECL - EDS theme (design tokens)

Design tokens for the EDS design system, exported from Figma. Unlike the `ec`
and `eu` themes, this package is a **parallel track**: its tokens are not
prefixed `ecl-`, and it is not (yet) wired into any ECL preset or component —
this is tokens only. Component/composition support is a separate, later
effort.

## What's here

- `tokens/source/*.json` — raw Figma "W3C Design Tokens" exports, committed
  as-is: `Primitives.json` (atomic values), `Light.tokens.json` /
  `Dark.tokens.json` (semantic tokens, one per mode).
- `maps/*.scss`, `_custom-properties.scss`, `tokens/tokens.json`,
  `showcase/*` — generated from the files above by
  `scripts/generate-tokens.js`. **Do not hand-edit** these — re-run the
  generator and commit the diff instead.

## Showcase

`showcase/index.html` is a standalone, dependency-free token browser — open
it directly in a browser (no build step, no server) to see every color,
type-scale step, spacing/sizing step, border-radius/width, shadow elevation,
and opacity step rendered live, with a light/dark toggle. It links
`showcase/tokens.css`, a plain-CSS copy of `_custom-properties.scss` (same
content, `/* */` comments instead of Sass' `//` so a browser can parse it
directly without going through Sass).

## Regenerating

```bash
pnpm --filter @ecl/theme-eds run generate
```

Do this after replacing any of the `tokens/source/*.json` files with a fresh
Figma export. Review the diff before committing — a renamed or removed token
in Figma will change or drop the corresponding Sass variable / CSS custom
property.

## Shape of the tokens

- **Primitives** (`$eds-primitive-*` Sass maps only, not exposed as CSS
  custom properties): the atomic palette/scale values semantic tokens alias
  into. Internal implementation detail — consume the semantic layer instead.
- **Semantic tokens** (`$eds-color-light` / `$eds-color-dark` Sass maps,
  `--eds-*` CSS custom properties): the intended public API. Of the 257
  semantic tokens, only `color`-typed ones differ between Light and Dark —
  spacing, sizing, typography, border-radius/width, opacity, and shadow
  offset/blur/spread are mode-invariant.
- **Mode switching**: `_custom-properties.scss` emits mode-invariant tokens
  and light-mode color tokens under `:root`, and dark-mode color token
  overrides under `[data-theme="dark"]`. Consumers opt into dark mode by
  setting `data-theme="dark"` on a container (typically `<html>`).
- **Shadow**: each elevation level is emitted as a ready-to-use `box-shadow`
  composite (`--eds-sh-elevation-level-1`, etc.), combining the mode-scoped
  shadow color with the mode-invariant offset/blur/spread.

## CSS custom property naming

Sass map keys keep the token's full category name (`$eds-color-light`,
`$eds-spacing`, ...). Generated CSS custom properties abbreviate the
top-level category to 1–2 characters instead, to keep the compiled CSS size
down given how many custom properties this theme emits:

| Category        | Abbreviation | Example                                    |
| --------------- | ------------ | ------------------------------------------ |
| `color`         | `c`          | `--eds-c-surface-primary-default`          |
| `spacing`       | `sp`         | `--eds-sp-m`                               |
| `sizing`        | `sz`         | `--eds-sz-icon-l`                          |
| `font`          | `f`          | `--eds-f-size-m`, `--eds-f-family-display` |
| `border-radius` | `br`         | `--eds-br-m`                               |
| `border-width`  | `bw`         | `--eds-bw-s`                               |
| `opacity`       | `op`         | `--eds-op-50`                              |
| `shadow`        | `sh`         | `--eds-sh-elevation-level-1`               |

The rest of the path (everything after the category) stays full-length. This
mapping lives in `CATEGORY_ABBREVIATIONS` in `scripts/generate-tokens.js`.

## Known conversions from the source JSON

- Unitless px numbers → `rem` (÷16) for spacing, sizing, font-size,
  line-height, dimension; kept as `px` for border-radius, border-width, and
  shadow offset/blur/spread (mirrors the `ec`/`eu` themes' own convention).
- `opacity` 0–100 → decimal 0–1.
- `letter-spacing` / `paragraph-spacing`, exported as percentage-of-font-size
  strings (e.g. `"2%"`) → `em` (`0.02em`), since that is what a CSS `em`
  means relative to the current font-size.
