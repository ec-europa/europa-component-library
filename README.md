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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-cpTJRXXrwfrpkoXcZ9ZGxMzPbjBvfqc4MurAqO3oPZY= sha384-Yk5f0kieov1JG5G8I3RDd7rW1aO9lo0fVgBjclg4/NSKJOHk9sH38ALgveQmZljY sha512-n+FcXGmwHFeDQXAI/9aqyrqECluOBm+9/iPm+oHIPNFH6b/GRwC3aFgYcLybabfXmZas9oBkmGCsdTnfE8+grw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-vVUOVhn7NQTSpAHhmpYXydT4GGaAh1VdH6lEuHWrQcs= sha384-jEeocaSvvBeTSqVOIR5P+XhzKqQZOD1bHvfD7VS2veP1hccCVYxdA6aDC2C4utSd
    sha512-PvxOetiVG4BQ00iHi+C2j1xw1xZRV2Y6bOEhXLa61osVVuklSUPeUtcn+hIlFfVng7jZYZBsoleeujN/gn/sQA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/ecl-ec.css"
    integrity="sha256-Z6D0xe1Akhr3U7Uq+J/vPa48ZhKYM+hlaQr69S3dcUY= sha384-O3hbQj9dwVgFiMMcC4sy7bPDpTWZrFFlQRk4fh15W/efPvE38mBJ1btnBZU1M8Ap sha512-SgXDqMwvorrhnfllQOxXjogqpyMK33JpSvIWhI//nssQC6+6/ypuNUaJjew8O3W01R1KPTeBRQVxjd0XtrpCBw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-L+fAForwC6a8EXUDTP9/bRgm4GjcKkCT6rOwfQ4l4E8= sha384-gzQQQ5CSRfXjNV2ihsTANLF8oq/dY4Ogrw5f6K1fsI4pJwrPGL1C/trh6Sf2Gp1l sha512-bbhzls84D+QobpUSYBO1PLUsp9XPpsIErEwVFjdnbmRvJO/78ACyU/SDS8SUf61X5cb5NvCf68m6MXpd9mB3TA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-2strgCYkaV9ef5lWmF9lKOn4nrDevVhLIv0BrSPXbiI= sha384-F/OAClmr5M5aeP160I+3zLzox50gqntKmuI907MvzglRPAiqntijRz9ifddHYFcN sha512-Z4oOtxyC2an8wkf3TS9oiXRhL0DZgf17JuwcfjmMrzIfUtiN9Lfy0gJORpJMghZ49UpUvGzYnIe+aSvmwINb9A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-V4jUK4BgxtWyK4lm8a1+4CILx1iSPahwWE3V2GDfr5E= sha384-Xj6kT3PEgMiukrRc22GQQtmwGksrYwss2UGzd6HLb6Xu4fgySoSY+ki8xbujMwLF sha512-AargNX/K11j1YK6ogJ4burl5ioS0LUzODQiHrifl2B8RVuAHfd3eUSqgWST0/zMc4qWCmpyPDbrd4J7r3Y6SOQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.1.0/ec/scripts/ecl-ec.js"
    integrity="sha256-V9+YPvkODqgcsx01etrmrNRAAMNeCjobgfaWk+w5mWI= sha384-bEGzkV9Vblq0UDu6AlNKavxCLfOMmYVBzz/OoUNys9XAbZRD5V+TDH+NeCsrUxQl sha512-+XlsKDMao4g/qG6RnogzAZv0djvUN5bdxY1rghC6uTZyJ3ErgAPEoYFI9ZO+cVwInyrzmZYIvoQ/ZQtkuYuYKw=="
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
