# Skill: ecl-update-token

Use this when updating EC color design tokens — replacing hex values in the palette,
adjusting color-mode semantic tokens, and keeping the website's colour guidelines page in sync.

---

## Step 1 — determine the source of new values

Ask the user:

> "Do you have a token export file (e.g. from Figma or a design tool)?
> If yes, what is the file path? If no, please provide the token names and their new hex values directly."

- **If a file is provided**: read it in full with the Read tool before continuing.
- **If no file**: the user must supply the changes inline (token name → hex value pairs).
  They can also be passed as arguments when calling the skill: `/ecl-update-token primary-600=#0046ff`.

---

## Step 2 — understand the export format

The Figma export is a JSON array with a single `"Import Color-Mode ECL"` object. Its structure is:

```
[{ "Import Color-Mode ECL": { "modes": { "<ModeName>": { "<Group>": { "<TokenName>": { "$value": "..." } } } } } }]
```

Token values are **references**, not raw hex — e.g. `{EC.Priority.Blue.50}`. Translate them to SCSS using the table below.

### Figma reference → SCSS map key

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

### Export mode name → SCSS `$color-modes` key

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

### Export token name → CSS custom property

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

---

## Step 3 — understand the two update locations

### 3a. Default palette — `src/themes/ec/maps/color.scss`

Contains two Sass maps:

- **`$color-default`** (lines 1–158): base palette tokens — `primary-*`, `secondary-*`,
  `neutral-*`, `grey-*`, `grey-alpha-*`, `white-alpha-*`, `monochrome-*`, `info-*`,
  `success-*`, `error-*`, `warning-*`.
- **`$color-palette`** (lines 159+): legacy/named palette — `blue-*`, `blue-navy-*`,
  `blue-electric-*`, `green-*`, `green-dark-*`, `orange-*`, `purple-*`, etc.

Update only the entries that changed. Do **not** touch the `$color-palette` map unless
the design explicitly changed those named colours.

### 3b. Custom properties — `src/themes/ec/_custom-properties.scss`

Contains `:root` CSS variable declarations that reference `$color-default` via
`map.get($color-default, 'key')`. These **do not need editing** when only the palette
hex values change — they reference the map dynamically.

However, if the token structure changes (new key added, key renamed), you must:

1. Add/rename the entry in `color.scss`.
2. Add/rename the matching `--ecl-color-*` line in `_custom-properties.scss`.

### 3c. Color-mode semantic tokens (`$color-modes`)

The `$color-modes` map in `color.scss` (starting at line ~346) holds per-mode
overrides for `--cm-*` CSS variables. Each key is a mode name (`'blue'`, `'orange'`,
`'green-dark'`, etc.) and each value is a flat map of CSS variable name → value.

The Figma export's `"Import Color-Mode ECL"` collection maps directly to this.
The export's `Default` mode corresponds to the `:root` defaults in `_custom-properties.scss`;
all other modes correspond to entries in `$color-modes`.

To find all color-mode references to a palette key:

```bash
grep -n "'blue-navy-800'" src/themes/ec/maps/color.scss
```

The **default** `:root` values for `--cm-*` are in `_custom-properties.scss` around line 505.
These should match the export's `Default` mode. Only edit them if the `Default` mode changed.

---

## Step 4 — apply the edits

For each changed token:

1. Find the exact line in `src/themes/ec/maps/color.scss` using Read or Bash grep.
2. Use Edit to replace only the hex value. Preserve spacing and comment alignment.
3. If adding a new token that did not exist before, insert it in the correct group
   (keep numeric suffixes in ascending order).

**Hex value formatting rules:**

- 3-digit shorthand is acceptable if the design uses it (e.g. `#039`).
- `color-mix()` entries for alpha tokens: update the base hex inside the `color-mix()`,
  not each individual alpha stop — they are computed from the single base colour.

---

## Step 5 — update the website colours page

File: `src/website/src/pages/ec/guidelines/colours/index.mdx`

This file lists `<ColorPaletteItem>` components. It does **not** hardcode hex values —
colours are read from CSS custom properties at render time. So you only need to edit this
file if:

- A token was **added** (add a new `<ColorPaletteItem>` in the right `<ColorPalette>` block).
- A token was **removed** (remove the corresponding `<ColorPaletteItem>`).
- A token was **renamed** (update the `alias` and `name` props).

The `alias` prop maps to a CSS variable alias defined in the website components. The naming
convention is:

| Palette group | Alias prefix | Example                              |
| ------------- | ------------ | ------------------------------------ |
| Primary       | `c-p-`       | `c-p-600` → `primary-600`            |
| Secondary     | `c-s-`       | `c-s-400` → `secondary-400`          |
| Neutral       | `c-n-`       | `c-n-600` → `neutral-600`            |
| Grey          | `c-g-`       | `c-g-950` → `grey-950`               |
| Monochrome    | `c-m-`       | `c-m-500` → `monochrome-500`         |
| Grey-alpha    | `c-a-`       | `c-a-500` → `grey-alpha-500`         |
| White-alpha   | `c-w-`       | `c-w-600` → `white-alpha-600`        |
| Info          | `c-in-`      | `c-in-600` → `info-600`              |
| Success       | `c-su-`      | `c-su-700` → `success-700`           |
| Error         | `c-er-`      | `c-er-600` → `error-600`             |
| Warning       | `c-wa-`      | `c-wa-500` → `warning-500`           |
| Color-mode    | `cm-`        | `cm-surface-lowest` → surface-lowest |

If only hex values changed (no structural changes), **no edit is needed** in this file.

**Deprecated tokens:** `--cm-border-high` has been removed from the website (deprecated as of ECL 5.x). Do not re-add it to the colours page even if it appears in a future export.

---

## Step 6 — verify

```bash
# Quick sanity: make sure the changed tokens compile
pnpm --filter '@ecl/theme-ec' run dist

# If any component snapshot tests reference colors, check them
pnpm test:components
```

If the build fails with a Sass error, the most common cause is a missing map key — check
that the key added in `color.scss` is spelled identically to any reference in
`_custom-properties.scss` or component variable files.

---

## Summary checklist

- [ ] Source of new values confirmed (file or inline)
- [ ] Export names mapped to SCSS keys
- [ ] `$color-default` or `$color-palette` in `maps/color.scss` updated
- [ ] Color-mode maps in `maps/color.scss` checked and updated if needed
- [ ] `_custom-properties.scss` updated only if token structure changed
- [ ] `colours/index.mdx` updated only if tokens were added, removed, or renamed
- [ ] Build passes
