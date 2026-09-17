# Figma sync notes

Running log of differences found between available implmentation and the Figma
token exports it was built from, across sync passes. Not part of the published
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
- `border-radius.full`: `999px` → `9999px`

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

## 2026-09-17 — Domain colors (`Domains/*.tokens.json`)

Corrections applied:

- Renamed `cm-*` ("color mode") to `domain-*` throughout — primitive family
  names (`cm-purple-violet` → `domain-purple-violet`, etc.) and the semantic
  `surface-cm-*-subtler`/`on-surface-cm-*-subtler`/`border-cm-*-subtle`
  tokens. Figma calls this category "domain", not "color mode"; only a name
  change — all 15 families' hex values are unaffected.

Discovered, not yet integrated:

- The figma export reveals a richer, dedicated semantic model for domain colors
  that we don't have at all: each of the 15 domain families (plus a
  `Default` one using `european-blue`) is its own Figma variable mode,
  providing 7 tokens per mode — `surface.default`, `surface.strong`,
  `on-surface.default`, `on-surface.strong`, `on-surface.default-strong`,
  `foreground.default`, `border.default` — using primitive steps `100`/`700`
  (not the `50`/`800`/`300` "subtler" tokens we already have, which come
  from the original Light/Dark semantic export and are a different,
  separate concept). This looks like a mode-switchable "domain badge/tag"
  system, analogous to how `light-dark()` switches color today, but with 16
  possible modes instead of 2 — would need a different mechanism (css class or
  data attribute) since `light-dark()` only supports two values. Not built —
  flagging for a scoped decision, same as the earlier typography pass.

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
  ignored `max-width`.
