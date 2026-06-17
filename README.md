# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.12.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

**📚 [Complete Documentation](docs/README.md)** - Full technical documentation

**Quick links:**

- 🚀 [Getting Started](docs/developers-start-here.md) - Setup, commands, and development workflow
- 📦 [Using Presets](docs/presets.md) - NPM, CDN, and installation guide
- 💻 [JavaScript Guide](docs/javascript.md) - ESM, IIFE, events, and API
- 🎨 [ECL Structure](docs/ecl-structure.md) - Project architecture and organization
- ♿ [Accessibility](docs/accessibility.md) - WCAG compliance guidelines

**Migration:**

- 🔄 [Migrating from v4 to v5](docs/Migrating-v5.md)

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-kv+27sZoI+jVqla0LmBo2eSbAYe+77TFrjY9AiApJjM= sha384-dlZXNN3Ga8Lod0AJnMw6u/OV8/Hsy7pVcddsc6fRl5b5wqDkCVPVWYY/TLozvey/ sha512-m4A6Zl6KDuZXUFBP/ sha512-urjIGduqNOulISeq2xkyQXXO0Ut/93xKUT2z3AC1rVfDHUlDj38NuZJdu2HwbbzfQFqsN90dk9w0FM/DuTuYTA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-9qgn6vYu9guPMHSt3sstXDNrgR7jne96kfMNyKO2BF8= sha384-VNuz7B3NvChf0nWr+hgZPBfLLNF1ub5gRdKdnsW5DmWLArgsnMc8X5XlcaeKILLt
    sha512-MvKn9jYJQkFqtKqidfDra94pxWn8ouqec+Ijmhiv/WYdx9I8UWd6uZ0I18rmf8aLSob0W5fRgbZ7eAszRIQokQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/ecl-ec.css"
    integrity="sha256-weUneFSjn83jJCX8p6SXkiL7O/ELJ5qjeHkXVBvp9tc= sha384-J/bNUgAqQHSiGdPSEtoRzFWccxz/UGACbztsM22NqLMIEkaPz47XREsCYpsHXFn7 sha512-QDa31gfjTve9qnQmLnhstL+wQY04J5bWaR/FX1sKD3FGUN15Gh7qBht+4cFV9Fy+aDXjeZo8NQDjijxZJqZKiA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-tzCVavKTt+N5Y+psolq0WE9X7EWZBJ2BW0e2bD5hzZ8= sha384-W4pdnDD2y/7lqrtGNiOoG86XmYnvPWlLiM3MFiF3Z/dXZnn4Ned7GzQxerKcx2p8 sha512-+FQ2L/Oap+2JfQgPuKbPRLDAH1XUXOBJY44ZtIflgqo4qCl5HSfVIIgJGZrj7xM4ezLpyp4R+L/jTpxWBTjpRA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-v897WX34kjWN1/2YynPS+E+hfBAlCJ9J10XHBEYjpxk= sha384-JZSRDhfHysSLH8qJEstmeurB7J1P5pSqH0pSBfebqxKeN4HRGNU4n9GrT61c7cUB sha512-i31c295GDofnToKn8TyZGoKGjHirJX2L26gfvqXsa6XtL2Z97vu219idnlUHZzjPjvurXHs+q5VM07J5Nk64Uw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-VH+/TUZkxzAHJlPgp00medDpw8ylgBoPdbK6720aPCA= ssha384-o5oTeYMxANqgK/fKdAo0C3/6byFw5NfGjkqVIwUHr6KfMLn5s5JM4NeU5BCi25vP sha512-+n1wRhQv8C0KcQ00G2U7dOcpcUEu4e1aD/SF/an68d4KE2VQmW7HVgyD95qZO/yjYdX7FMyt1l+JKm/xAN1GRg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0/ec/scripts/ecl-ec.js"
    integrity="sha256-S2awITcVb/6aj3/wbDSx41Y2JQ/bH/ONG5jRlXnsbtQ= sha384-j9gQRIypkcg2UTTkuHR3ZU4Z9XhGZRmImxpfdRuy26MCcEH3mpC67NGMeMrM7j6z sha512-4QxgWbr72Do4fwpUojgwZeHnBxvKKHIHN/2sMqxhYVuoHvBm7H3VxD/BDOL+mvHvT1ZfHLlSpzXI/pCfjbahhQ=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This library can be loaded from a CDN or fetched from the respective npm package for then hosting it locally.
The order of the scripts should be:

- duet.esm.js
- ecl.esm.js

If hosted locally you will need the entire `dist` folder as found in the npm package `@duetds/date-picker` or in the tarball at https://registry.npmjs.org/@duetds/date-picker/-/date-picker-1.4.0.tgz to be accessible by your webserver.
More detailed info are available in the getting started page in the ECL website.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
