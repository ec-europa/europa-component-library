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

### Option 1: NPM Installation

Install the preset package via npm or pnpm:

```bash
npm install @ecl/preset-ec
# or
npm install @ecl/preset-eu
```

Then import the CSS and JavaScript in your application:

```javascript
// Import CSS
import '@ecl/preset-ec/dist/styles/ecl-ec.css';

// Import JavaScript (ESM)
import { autoInit } from '@ecl/preset-ec';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  autoInit();
});
```

### Option 2: CDN Usage

Include the CSS and JavaScript files directly from the CDN:

```html
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/ecl-ec.css"
  integrity="sha256-... sha384-... sha512-..."
  crossorigin="anonymous"
  media="screen"
/>

<!-- JavaScript -->
<script
  src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/scripts/ecl-ec.js"
  integrity="sha256-... sha384-... sha512-..."
  crossorigin="anonymous"
></script>

<!-- Initialize components -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    ECL.autoInit();
  });
</script>
```

**Note**: Replace the version number and integrity hashes with the actual values from the [latest release](https://github.com/ec-europa/europa-component-library/releases).

### Option 3: Direct Download

Download the [latest release package](https://github.com/ec-europa/europa-component-library/releases) and include the files in your project:

```html
<!-- CSS -->
<link rel="stylesheet" href="/path/to/ecl-ec.css" media="screen" />

<!-- JavaScript -->
<script src="/path/to/ecl-ec.js"></script>
```

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
