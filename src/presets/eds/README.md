# ECL preset: EDS

Distributes the EDS foundations (`--eds-*` design tokens) and, as they are
added, the EDS components, as a ready-to-use CSS bundle.

## Output

- `dist/styles/ecl-eds.css` — `--eds-*` custom properties, Inter
  `@font-face` rules and EDS component styles.
- `dist/fonts/` — Inter variable fonts, the local fallback for the
  `@font-face` rules (the webtools CDN is tried first).

## Usage

```html
<link rel="stylesheet" href="styles/ecl-eds.css" />
```

Sass consumers who only need the tokens can use `@ecl/eds-foundations`
directly instead.

## Adding a component

1. Add `@ecl/eds-{name}` to `dependencies` in `package.json`.
2. `@use` its stylesheet in `src/eds.scss`, under "Components".
3. If it ships JS, add `src/eds.js`/`src/eds-esm.js` entries in
   `ecl-builder.config.js`, mirroring the ec preset.
