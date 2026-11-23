---
name: ecl-create-component
description: Scaffolds a brand-new ECL component package (@ecl/{name}) and registers it everywhere it must appear — theme variables, EC/EU presets, twig-templates, website pages and CMS config. Use when the user asks to create, add or scaffold a new component that does not exist yet in src/components/. Not for changing an existing component (use ecl-edit-component).
---

# Create a new ECL component

A new component touches about 20 files across the monorepo. Most of the work is
mechanical; the one real decision is **which existing component is its closest sibling**,
because presets, the website index and the CMS config are grouped by category, not
alphabetically.

## Placeholders

| Placeholder               | Example for `highlight-box` |
| ------------------------- | --------------------------- |
| `<name>`                  | `highlight-box`             |
| `<Name>`                  | `Highlight box`             |
| `<name_underscored>`      | `highlight_box`             |
| `<NamePascal>`            | `HighlightBox`              |
| `<NAME_PASCAL_SCREAMING>` | `HIGHLIGHT_BOX`             |
| `<VERSION>`               | see step 0                  |

## Step 0 — collect context

```bash
node -p "require('./src/components/label/package.json').version"   # → <VERSION>
```

All `@ecl/*` packages share one version, so any component works as the source.

Then settle, asking the user if the request does not say:

- **JS or CSS-only?** JS adds a `.js` file, `main`/`module` in `package.json`, auto-init
  attributes in Twig, and entries in the preset JS bundles.
- **Sibling component** — the existing component this one is most similar to (e.g.
  `highlighted-search` → `banner`). Used in steps 3 and 4.

## Step 1 — component package

Create `src/components/<name>/` with the files below. Copy their starting content from
[reference/templates.md](reference/templates.md).

- `package.json` (CSS-only or JS variant)
- `.npmignore`
- `<name>.html.twig`
- `<name>.scss` and `<name>-print.scss`
- `<name>.js` — JS components only
- `demo/data.js`
- `<name>.story.js`
- `<name>.test.js`
- `README.md`

## Step 2 — theme variables

Create `src/themes/ec/variables/_<name>.scss` and the identical
`src/themes/eu/variables/_<name>.scss`:

```scss
@use 'sass:map';
@use '../index' as *;

$<name>: ();
```

Register each in its system's `_variables.scss` (`src/themes/{ec|eu}/_variables.scss`)
by inserting `@forward 'variables/<name>';` **alphabetically**:

```bash
grep -n "@forward 'variables/" src/themes/ec/_variables.scss
```

## Step 3 — presets and aggregate packages

**Dependencies** — insert `"@ecl/<name>": "<VERSION>",` **alphabetically** in:

- `src/presets/ec/package.json`
- `src/presets/eu/package.json`
- `src/twig-templates/package.json`

**Styles** — the preset entry files are grouped by category, **not** alphabetical.
Insert right after the sibling's block, in each of `src/presets/ec/src/ec.scss`,
`src/presets/eu/src/eu.scss`, `src/presets/ec/src/ec-print.scss` and
`src/presets/eu/src/eu-print.scss`:

```bash
grep -n "@use '@ecl/<sibling>/" src/presets/{ec,eu}/src/{ec,eu}{,-print}.scss
```

```scss
@use '@ecl/<name>/<name>' with (
  // '<name>-print' in the print files
  $theme: theme.$theme,
  $<name>: var.$<name>
);
```

**JS (JS components only)** — without this the component is never bundled and
`autoInit` silently does nothing. Next to the sibling in each file:

```js
// src/presets/{ec|eu}/src/{ec|eu}.js
export * from '@ecl/<name>';

// src/presets/{ec|eu}/src/{ec|eu}-esm.js — add the import AND the key in the `ECL` object
import <NamePascal> from '@ecl/<name>';
```

## Step 4 — website documentation

Follow [reference/website.md](reference/website.md): pages and placeholder thumbnail for
EC and EU, a card in each component index, and four CMS config entries.

## Step 5 — verify

```bash
pnpm install                     # links the new workspace package
pnpm test:components <name>   # new snapshots are written on first run
pnpm lint                        # Stylelint flags e.g. empty rule blocks
```

Read the generated snapshot once to confirm the markup is what you intended — see
`ecl-test-component` for how snapshots and axe failures are handled.

## Checklist

Copy and tick off — the CMS and EU entries are the ones most often missed.

```
- [ ] src/components/<name>/ — all files from step 1
- [ ] theme variables: ec + eu files, both _variables.scss
- [ ] package.json deps: preset-ec, preset-eu, twig-templates
- [ ] preset styles: ec.scss, eu.scss, ec-print.scss, eu-print.scss
- [ ] preset JS (if JS): ec.js, eu.js, ec-esm.js, eu-esm.js
- [ ] website pages + thumbnail: ec and eu
- [ ] component index card: ec and eu
- [ ] config.yml: ec usage, ec a11y, eu usage, eu a11y
- [ ] install, tests and lint pass
```
