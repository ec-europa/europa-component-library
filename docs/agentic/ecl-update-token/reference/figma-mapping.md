# Figma color-mode export → SCSS mapping

The Figma export is a JSON array with a single `"Import Color-Mode ECL"` object. Its structure is:

```
[{ "Import Color-Mode ECL": { "modes": { "<ModeName>": { "<Group>": { "<TokenName>": { "$value": "..." } } } } } }]
```

Token values are **references**, not raw hex — e.g. `{EC.Priority.Blue.50}`. Translate them to SCSS using the table below.

## Figma reference → SCSS map key

| Figma reference pattern                | SCSS equivalent                                          |
| -------------------------------------- | -------------------------------------------------------- |
| `{EC.Default.Primary.NNN}`             | `map.get($color-default, 'primary-NNN')`                 |
| `{EC.Default.Secondary.NNN}`           | `map.get($color-default, 'secondary-NNN')`               |
| `{EC.Default.Neutral.NNN}`             | `map.get($color-default, 'neutral-NNN')`                 |
| `{EC.Default.Brand.NNN}`               | `map.get($color-default, 'grey-NNN')`                    |
| `{EC.Default.Brand Alpha.NNN}`         | `map.get($color-default, 'grey-alpha-NNN')`              |
| `{EC.Default.White Alpha.NNN}`         | `map.get($color-default, 'white-alpha-NNN')`             |
| `{EC.Priority.Blue.NNN}`               | `map.get($color-palette, 'blue-NNN')`                    |
| `{EC.Priority.Blue Navy.NNN}`          | `map.get($color-palette, 'blue-navy-NNN')`               |
| `{EC.Priority.Blue Electric.NNN}`      | `map.get($color-palette, 'blue-electric-NNN')`           |
| `{EC.Priority.Green.NNN}`              | `map.get($color-palette, 'green-NNN')`                   |
| `{EC.Priority.Green Dark.NNN}`         | `map.get($color-palette, 'green-dark-NNN')`              |
| `{EC.Priority.Orange.NNN}`             | `map.get($color-palette, 'orange-NNN')`                  |
| `{EC.Priority.Purple.NNN}`             | `map.get($color-palette, 'purple-NNN')`                  |
| `{EC.Supplementary.Blue Ocean.NNN}`    | `map.get($color-palette, 'blue-ocean-NNN')`              |
| `{EC.Supplementary.Green Lemon.NNN}`   | `map.get($color-palette, 'green-lemon-NNN')`             |
| `{EC.Supplementary.Green Pine.NNN}`    | `map.get($color-palette, 'green-pine-NNN')`              |
| `{EC.Supplementary.Warm Grey.NNN}`     | `map.get($color-palette, 'warm-grey-NNN')`               |
| `{EC.Supplementary.Red Crayola.NNN}`   | `map.get($color-palette, 'red-crayola-NNN')`             |
| `{EC.Supplementary.Yellow Gold.NNN}`   | `map.get($color-palette, 'yellow-gold-NNN')`             |
| `{EC.Supplementary.Purple Violet.NNN}` | `map.get($color-palette, 'purple-violet-NNN')`           |
| `{EC.Supplementary.Red Tomato.NNN}`    | `map.get($color-palette, 'red-tomato-NNN')`              |
| `{EC.Status.Error.NNN}`                | `map.get($color-default, 'error-NNN')`                   |
| `{EC.Status.Warning.NNN}`              | `map.get($color-default, 'warning-NNN')`                 |
| `{EC.Status.Succes.NNN}` _(sic)_       | `map.get($color-default, 'success-NNN')`                 |
| `{EC.Status.Info.NNN}`                 | `map.get($color-default, 'info-NNN')`                    |
| `{EC.Base.Brand}`                      | `var(--c-g-950)` (dark navy)                             |
| `{EC.Base.White}`                      | `#fff`                                                   |
| `{EC.Highlights.Priority.Blue 50}`     | `color-mix(in srgb, palette 'blue-50' 50%, transparent)` |
| `{EC.Highlights.Supplementary.X N}`    | `color-mix(in srgb, palette 'x-N' 50%, transparent)`     |

**"Highlights" references** always mean 50% transparent — the number at the end is the palette stop (shade), not the mix percentage.

## Export mode name → SCSS `$color-modes` key

| Export mode                   | SCSS key          |
| ----------------------------- | ----------------- |
| `Priority-Blue`               | `'blue'`          |
| `Priority-Green Dark`         | `'green-dark'`    |
| `Priority-Orange`             | `'orange'`        |
| `Priority/Green`              | `'green'`         |
| `Priority/Purple`             | `'purple'`        |
| `Priority/Blue Navy`          | `'blue-navy'`     |
| `Priority/Blue Electric`      | `'blue-electric'` |
| `Supplementary/Blue Ocean`    | `'blue-ocean'`    |
| `Supplementary/Green Lemon`   | `'green-lemon'`   |
| `Supplementary/Green Pine`    | `'green-pine'`    |
| `Supplementary/Warm Grey`     | `'warm-grey'`     |
| `Supplementary/Red Crayola`   | `'red-crayola'`   |
| `Supplementary/Yellow Gold`   | `'yellow-gold'`   |
| `Supplementary/Purple Violet` | `'purple-violet'` |
| `Supplementary/Red Tomato`    | `'red-tomato'`    |

## Export token name → CSS custom property

The export groups tokens under `Surface`, `On surface`, and `Border`. Strip descriptive suffixes (anything in parentheses or after a dash description) to get the canonical token name:

| Export token name                        | CSS variable                         |
| ---------------------------------------- | ------------------------------------ |
| `surface-lowest`                         | `--cm-surface-lowest`                |
| `surface-lowest-variant`                 | `--cm-surface-lowest-variant`        |
| `surface-lowest-1 (page summary)`        | `--cm-surface-lowest-1-page-summary` |
| `surface-color-mode/low/high`            | `--cm-surface-color-mode-*`          |
| `surface-low-0/1/2 (…)`                  | `--cm-surface-low-0/1/2`             |
| `surface-medium-0/1 (…)`                 | `--cm-surface-medium-0/1`            |
| `surface-0`                              | `--cm-surface-0`                     |
| `surface-0-add to calendar`              | `--cm-surface-0-add-to-calendar`     |
| `surface-0-text and media 30-70`         | `--cm-surface-0-text-media`          |
| `surface-variant-1-featured item strong` | `--cm-surface-variant-1`             |
| `surface-variant-2-featured item light`  | `--cm-surface-variant-2`             |
| `on-surface`                             | `--cm-on-surface`                    |
| `on-surface-1 (page summary)`            | `--cm-on-surface-1-page-summary`     |
| `on-surface-1 (timeline)`                | `--cm-on-surface-1`                  |
| `on-surface-highlight`                   | `--cm-on-surface-highlight`          |
| `on-surface-swap-0/1`                    | `--cm-on-surface-swap-0/1`           |
| `border-low/medium/border/border-high`   | `--cm-border-*`                      |

**Note:** The export shows `on-surface-1` twice (page-summary and timeline). They map to **different** CSS variables: `--cm-on-surface-1-page-summary` and `--cm-on-surface-1` respectively. In several modes their values differ, so always record both. For `surface-lowest-1 (page summary)`, the default mode uses the format `{color.secondary.50}` (not the usual `{EC.Default.*}` namespace) — this maps to `var(--c-s-50)`.

**Note:** `on-surface-highlight` in the export is often a raw `rgba()` value. Verify it matches a known palette stop — it usually does (e.g. `rgba(221,205,243,0.6)` ≡ `color-mix(in srgb, purple-200 60%, transparent)`). When it matches, keep the existing `color-mix()` form in SCSS; only change the palette key if the underlying color changed.

When in doubt, search for the closest existing key in the target files before assuming a mismatch.
