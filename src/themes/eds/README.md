# ECL - EDS theme (design tokens)

Design tokens for the EDS design system, exported from Figma.

This package is a **parallel track**: tokens are not prefixed `ecl-`,
separate from the `ec`/`eu` theming convention. It's compiled into real
CSS by `@ecl/preset-eds` and used by the comparison components under
`src/components/` (`button/eds-button.story.js`, `eds-button/`,
`eds-button-webc/` — see `docs/eds-integration-poc.md`).

## Contents

- `tokens/source/*.json` — raw Figma exports, committed as-is:
  - `Primitives.json` — atomic values
  - `Light.tokens.json` / `Dark.tokens.json` — semantic tokens, one per
    color mode
  - `Mobile.tokens.json` / `Tablet.tokens.json` / `Desktop.tokens.json` —
    responsive typography + grid, one per breakpoint
- `maps/*.scss`, `_custom-properties.scss`, `tokens/tokens.json` —
  generated from the files above. **Don't hand-edit** — re-run the
  generator and commit the diff.

## Regenerate

```bash
pnpm --filter @ecl/theme-eds run generate
```

Run after replacing any `tokens/source/*.json` file. Review the diff
before committing — a renamed/removed Figma token changes or drops the
matching Sass variable / CSS custom property.

## Browse

```bash
pnpm start:eds
```

Storybook on port 6008, stories under "EDS / Design tokens".

## Token shape

- **Primitives** — Sass maps only (`$eds-primitive-*`), not exposed as CSS
  custom properties. Internal; semantic tokens alias into them.
- **Semantic tokens** — the public API: `$eds-color-light` /
  `$eds-color-dark` Sass maps, `--eds-*` CSS custom properties.
- **Color mode** — `_custom-properties.scss` emits light-mode colors (plus
  all mode-invariant tokens) under `:root`, dark-mode overrides under
  `[data-theme="dark"]`.
- **Responsive typography + grid** — a third theming dimension, keyed by
  viewport width. Mobile values sit in the base `:root`; Tablet/Desktop
  override inside `@media (width >= 768px)` / `@media (width >= 1140px)`.
  - `--eds-ty-size-*-font-size` / `-line-height` — a responsive type scale
    (display/heading/paragraph/label/microcopy/supportive) that references
    the existing `--eds-f-size-*` / `--eds-f-line-height-*` steps rather
    than duplicating values.
  - `--eds-ty-letter-spacing-*` — inlined `em` values, per breakpoint.
  - `--eds-gr-*` — per-breakpoint grid (min/max-width, gutter, margin,
    columns).
  - `$eds-breakpoint` — flat `mobile`/`tablet`/`desktop` → min-width Sass
    map, for consumers writing their own `@media` blocks.
- **Shadow** — each elevation level is a ready-to-use `box-shadow`
  composite (`--eds-sh-elevation-level-1`), combining the mode-scoped
  color with the mode-invariant offset/blur/spread.

## CSS custom property naming

Sass maps keep the full category name (`$eds-color-light`, `$eds-spacing`,
...); generated CSS custom properties abbreviate it to 1–2 characters:

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

The rest of the path stays full-length. Mapping lives in
`CATEGORY_ABBREVIATIONS` in `scripts/generate-tokens.js`.

## Unit conversions

- px → `rem` (÷16) for spacing, sizing, font-size, line-height, dimension.
- px kept as-is for border-radius, border-width, shadow offsets.
- opacity 0–100 → decimal 0–1.
- letter-spacing / paragraph-spacing (`"2%"`) → `em` (`0.02em`).
