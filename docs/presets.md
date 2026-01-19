# Presets

A preset is a set of components from a specific system (EC or EU) bundled together for distribution. Each system has a set of ready-to-use presets:

Main preset:

- [@ecl/preset-ec](https://www.npmjs.com/package/@ecl/preset-ec)
- [@ecl/preset-eu](https://www.npmjs.com/package/@ecl/preset-eu)

Additional preset (included in the main preset):

- [@ecl/preset-reset](https://www.npmjs.com/package/@ecl/preset-reset)

The main preset contains:

- the main css for screen and print, in the `styles` folder
- the main js, in the `scripts` folder
- for EC only, the color mode css, in the `styles` folder
- optional css files that can be separately loaded in the `styles/optional` folder:
  - `ecl-{ec|eu}-reset.css`: simple css reset, based on normalize.css
  - `ecl-{ec|eu}-utilities.css`: contain the definition of all ECL utilities, to manually alter some styles or spacing on your site
  - `ecl-{ec|eu}-default.css` and `ecl-{ec|eu}-default-print.css`: to style some basic html tag to make them look like ECL components or elements. Mostly used in wysiwyg.

Using presets is a highly-recommended approach of implementing ECL.

## How to use presets

Check the 'Getting started' pages for more information: https://ec.europa.eu/component-library/ec/getting-started

## Optional Files

### Reset CSS

If you need a CSS reset:

```html
<link rel="stylesheet" href="/styles/optional/ecl-reset.css" />
```

### Utilities

For additional utility classes (spacing, typography, etc.):

```html
<link rel="stylesheet" href="/styles/optional/ecl-ec-utilities.css" />
```

### Default Styles

To style basic HTML tags (useful for WYSIWYG editors):

```html
<link
  rel="stylesheet"
  href="/styles/optional/ecl-ec-default.css"
  media="screen"
/>
<link
  rel="stylesheet"
  href="/styles/optional/ecl-ec-default-print.css"
  media="print"
/>
```

### Color Modes (EC only)

For EC system with color mode support:

```html
<link rel="stylesheet" href="/styles/ecl-ec-color-modes.css" />
```

## Choosing Between EC and EU

- Use **@ecl/preset-ec** for European Commission websites
- Use **@ecl/preset-eu** for European Union websites
- **Never mix** EC and EU components on the same page
