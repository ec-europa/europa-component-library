# ECL - EDS theme (design tokens)

Design tokens for the EDS design system, exported from Figma. Unlike the `ec`
and `eu` themes, this package is a **parallel track**: its tokens are not
prefixed `ecl-`, and it is not (yet) wired into any ECL preset or component —
this is tokens only. Component/composition support is a separate, later
effort.

## What's here

- `tokens/source/*.json` — raw Figma "W3C Design Tokens" exports, committed
  as-is: `Primitives.json` (atomic values), `Light.tokens.json` /
  `Dark.tokens.json` (semantic tokens, one per color mode), and
  `Mobile.tokens.json` / `Tablet.tokens.json` / `Desktop.tokens.json`
  (responsive typography + grid tokens, one per breakpoint).
- `maps/*.scss`, `_custom-properties.scss`, `tokens/tokens.json` — generated
  from the files above by `scripts/generate-tokens.js`. **Do not hand-edit**
  these — re-run the generator and commit the diff instead.

## Showcase

There's no standalone static showcase page (an earlier one was retired) —
browse the tokens via Storybook instead: `pnpm start:eds` (root
`package.json`, port 6008), which serves `src/themes/eds/eds-tokens.
story.js`'s stories under "EDS / Design tokens".

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
- **Responsive typography + grid** (`--eds-ty-*` / `--eds-gr-*` CSS custom
  properties, `$eds-typography-responsive` / `$eds-grid` Sass maps): a
  _third_ dimension of theming, alongside light/dark color mode - the same
  token name resolves to a different value depending on viewport width, not
  a user-toggled state. Mobile-first: `_custom-properties.scss` emits the
  Mobile values under the base `:root`, then overrides them for Tablet and
  Desktop inside `@media (width >= 768px)` / `@media (width >= 1140px)`
  blocks (CSS custom properties can't gate a media query condition
  themselves, so unlike color mode this can't be done with an attribute
  selector). `$eds-breakpoint` (a flat `mobile`/`tablet`/`desktop` → min-
  width map, shaped like `ec`'s own `$breakpoint` map) is there for Sass
  consumers who want to gate their own `@media` blocks on the same
  thresholds - eds doesn't ship `ec`'s `up`/`down`/`between`/`only` mixins,
  just the raw breakpoint values.
  - `typography/size/*` (`--eds-ty-size-{scale}-{step}-font-size` /
    `-line-height`, e.g. `--eds-ty-size-heading-l-font-size`) is a
    responsive **role** scale (display/heading/paragraph/label/microcopy/
    supportive × a size step) that at every breakpoint resolves to one of
    the _existing_ `--eds-f-size-*` / `--eds-f-line-height-*` steps -
    verified against all 3 breakpoint exports, every single `font-size`/
    `line-height` value in them is a Figma alias into that same scale, so
    these are emitted as `var(--eds-f-size-m)` references rather than
    duplicating the literal px value a second time. Resizing the viewport
    changes which step a given role points at (e.g. `heading/l`'s font-size
    is `--eds-f-size-xl` on Mobile but `--eds-f-size-4xl` on Desktop), not
    the underlying scale itself.
  - `typography/letter-spacing/*` (`--eds-ty-letter-spacing-s`, etc.)
    aliases into `Primitives.json` instead (`font/letter-spacing/*`), which
    - like all primitives - isn't exposed as its own custom property, so
      these are inlined as resolved `em` values per breakpoint.
  - `grid/*` (`--eds-gr-min-width`, `-max-width`, `-gutter`, `-margin`,
    `-columns`) is the per-breakpoint layout grid definition.

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
| `typography`    | `ty`         | `--eds-ty-size-heading-l-font-size`        |
| `grid`          | `gr`         | `--eds-gr-gutter`                          |

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
