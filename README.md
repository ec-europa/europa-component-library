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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-64FePm6BuPE3Mipu1aNcBQQ8yahmjiYwGmPBvcGFEos= sha384-1uk1S7g+zUYw56eMxZabAkuMo0+UXVPxHnW24am/v7arjGsjwToSLelrSnPJzOL/ sha512-m4A6Zl6KDuZXUFBP/Hz5Z3lDJUps1NUA11fsSqYZNqqMVXMfhg3nKPJh978jBph3ldz6/rmHU4JBUO8tWvTOwA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/optional/ecl-reset.css"
    integrity="sha256-FE4CfxofJ2ztTEljdldk0gzv1YKasB4ipx/6Q6Lp4k4= sha384-bzZwpSpWJmMIoCfIUJP5qS6CAsOIA0XyeE3gXN6vrR6n2wcN+LS3ZUBiGZlYBmcZ
    sha512-zV9skk127SKgVnwUNn/+eTWq2CLLUJQfq9O6Cyj4YqrV81yI9mgYbUaUB/Bqh5e6vAvL70KZIufaELTPbUW2iw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/ecl-ec.css"
    integrity="sha256-K8BP3qK1P9uUN4no5Sh9TNyaqUP/fQzYZEN2pjdi//E= sha384-twr/QkgTDdUXN0yvrb6/kM/SU48XeRHwQCFC47dsKlrMcw3N8o7J4M7Sg5j8UmR0 sha512-NTXWlxrp06CD6JSytX9APrCeKYn+JqMgC/Flsf5kGA4eylVzuETbBuJeenkHOrA4kh1/LHS8SvobnLx5gh4i2A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-o4usRupOHG9U9Zc9+i4gFuNJUotUI3peej2aZn1DjXs= sha384-1/CmqQZeTzodNt22w7664CkOdltgB5pijgQ/5u7xM7mRvwXyy0Y4ETFP3ki6msdO sha512-yzLbNfvlkToKm4wcRm7cXXrwS385wfziS70+oJShWGGCl8CCV7cm/KnRRbdiY9uq0xkqqNoMl/ACUbKKLnM3og=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/ecl-ec-print.css"
    integrity="sha256-xAjWdTfiIeILw6Af+amHH8aMeKP0gxEoHuX3Fnvz5S0= sha384-+OaN3hkL5dilDwgJetlK9e2tUJmmOCZSQ7/EQtr/c0fMRXh0CZRuKs78iy/xFLcj sha512-f0xhMCKAMUgijyd1rWAVxRmrvluXQLU8BSmoh5Eq7sSuQeqCeBxs1ADdYKLlOXMPdn9mcOBhMuQLRKVBrEW24w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-yJy977WOma5OPI5BEdOwoMm7GpY+TVQ6WbkvLsBo8a8= sha384-30dbiQu91UoA2TSRRS18ccqZuY99zBUOP/BtcnKSf9wMCGxcWrfyR4s3CQg7BeyY sha512-FYHpB9YjJabAx5GBSiINKAJ6oWdEaeLya0P1r9Ti38py1EYe3qHLSiMxffcuIcDDNgJkjh61I0isY63q0eBJHA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC6/ec/scripts/ecl-ec.js"
    integrity="sha256-KhqpVlPBOlsr/7Va/Bt7ngIhyT3qaYDqQFeZ90DhoYI= sha384-mtcri/TdhvVieycJFK/fv5b3hz25g3UtpVVeBmc4raAstd6bXA+xi8HK37o3JrUc sha512-1N1VvU/XFC0R2dCt3R26E7+jjCbO07odTYZFYbF9xNko4R/rqcQAdO+LJdC+9Fpc+IJaR8UtpXYIo/pqqG7NRw=="
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
