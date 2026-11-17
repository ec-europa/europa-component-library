---
name: ecl-update-token
description: Updates EC (European Commission) color design tokens — palette hex values in src/themes/ec/maps/color.scss, color-mode semantic tokens (--cm-*), custom properties and the website colours page — from a Figma/design-tool export file or inline name=value pairs. Use when the user asks to change, add, rename or sync EC colors, palette stops or color-mode tokens. EC only; EU has no color modes.
---

# Update EC color tokens

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

## Step 2 — map the new values to SCSS

- **Export file** → read [reference/figma-mapping.md](reference/figma-mapping.md) for
  the export structure and the Figma reference / mode / token name → SCSS mappings.
- **Inline values** → token names are already SCSS keys (`primary-600`, `blue-navy-800`…);
  confirm each exists with `grep -n "'<key>'" src/themes/ec/maps/color.scss`.

---

## Step 3 — where the tokens live

### 3a. Default palette — `src/themes/ec/maps/color.scss`

Contains two Sass maps:

- **`$color-default`**: base palette tokens — `primary-*`, `secondary-*`,
  `neutral-*`, `grey-*`, `grey-alpha-*`, `white-alpha-*`, `monochrome-*`, `info-*`,
  `success-*`, `error-*`, `warning-*`.
- **`$color-palette`**: legacy/named palette — `blue-*`, `blue-navy-*`,
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

The `$color-modes` map in `color.scss` holds per-mode
overrides for `--cm-*` CSS variables. Each key is a mode name (`'blue'`, `'orange'`,
`'green-dark'`, etc.) and each value is a flat map of CSS variable name → value.

The Figma export's `"Import Color-Mode ECL"` collection maps directly to this.
The export's `Default` mode corresponds to the `:root` defaults in `_custom-properties.scss`;
all other modes correspond to entries in `$color-modes`.

To find all color-mode references to a palette key:

```bash
grep -n "'blue-navy-800'" src/themes/ec/maps/color.scss
```

The **default** `:root` values for `--cm-*` are in `_custom-properties.scss`
(`grep -n -- "--cm-surface-lowest:" src/themes/ec/_custom-properties.scss`).
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

---

## Step 6 — verify

```bash
# Make sure the changed tokens compile (@ecl/theme-ec has no build script of its own)
pnpm --filter '@ecl/preset-ec' run build:styles
```

No need to run component tests: snapshots capture HTML, not colour values.

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
