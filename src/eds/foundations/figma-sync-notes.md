# Figma sync notes

Running log of differences found between this package and the Figma token
exports it was built from, across sync passes. Not part of the published
package — internal tracking only.

## 2026-09-16 — Primitives (`Primitives - EC/Value.tokens.json`)

Corrections applied:

- Color: `european-blue-25` (`#f7f9ff` → `#fafafb`), `silver-fog-25`
  (`#f6f6f8` → `#fafafb`), `silver-fog-50` (`#f2f2f4` → `#f6f6f8`),
  `graphite-400` (`#4e4e56` → `#6a6a71`), `sunrise-orange-950` (`#763105` →
  `#471b00`).
- Alpha: `alpha-silver-fog-950-40` and `alpha-graphite-950-40`, `0.4` → `0.5`.
- All 15 `cm-*-950` domain colors: Figma now provides a real authored value
  for every one (previously approximated with a `shade()` Sass function
  darkening the `900` step, since no `950` existed in the source at the
  time). Replaced with the literal values; the `shade()` function is gone.
- `border-radius.full`: `999px` → `9999px` — our own transcription error
  (one digit short), not a Figma change.

## 2026-09-16 — Semantic + Breakpoints (`EC/Light+Dark.tokens.json`, `Breakpoints/*.tokens.json`)

Corrections applied:

- Typography semantic model restructured to match Figma:
  - Weight is no longer baked into the size/line-height step name (Figma
    decouples it entirely — `font-size`/`line-height` per step, weight
    chosen independently). Dropped compound steps like `heading.s-medium`,
    `paragraph.m-semi-bold`, `label.l-medium`.
  - Categories renamed/split: `microcopy.2xs` → `supportive.m`,
    `microcopy.xs` → `microcopy.m`.
  - Two new categories added: `placeholder.m`/`placeholder.s` (same values
    as `paragraph.m`/`paragraph.s`).
  - Real bug fixed: `mobile.display.xl` had `line-height` (28px) smaller
    than its `font-size` (44px) — would have visually clipped. Figma's
    actual value is `44/44`.
- Letter-spacing replaced entirely; Figma's actual model is a small,
  font-size-independent named scale (`default`/`neg-s`/`neg-xs`/`s`/`xs`).
- Grid primitives added (`columns`/`gutter`/`margin` per breakpoint tier).

## Flagged for the Figma / design team — not fixed on our side

- `typography/letter-spacing/neg-s` is inconsistent across the three
  Breakpoints files: `Desktop.tokens.json` has `-2%` (correct, matches the
  name "neg-s" and the separate Primitives export's own value), but both
  `Mobile.tokens.json` and `Tablet.tokens.json` have `2%` — missing the
  minus sign. We used `-2%` (from Desktop / Primitives) as the source of
  truth; worth a data fix on the Figma side.
- The Breakpoints export's grid `min-width`/`max-width` ranges aren't
  contiguous: Mobile `320–480`, Tablet `768–996`, Desktop `1140–1440` —
  leaving `481–767` and `997–1139` uncovered by any tier. We only used the
  `min-width` values (768/1140) as the actual CSS switch points and
  ignored `max-width`; worth asking the design team whether the ranges
  themselves need cleaning up.
