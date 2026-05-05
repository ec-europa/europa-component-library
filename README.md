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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-IGlreiM18CKEvz+0EIMQupz0SJ4dqzZpZldu823I8/0= sha384-JJitQJy1fSSl1ZNW65PhaHOO7NghouiwMCsXW4/57hXnJad7/5uXfblLDt2ih0EL sha512-VgbZr46h1/qDgLgxUDXkp8nKOq7pK5KNEcibLFCxJVCWx0syqTOJb+QpKu27Jd9E0ZQ642CIfHraVYNO/qP7GQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-tn3Byvmr2Z2jj0ZC5TfBjf9cpqv6JXX+0y4cQmI/7l4= sha384-h5s9MT3AsqKM6PgGKXzkxsPSGA/+hj7lyyiflHsSkD2EtcmRHZqHc1Lw8Mux61uD
    sha512-fl+q3doDLf98HDodBuI4s2xPcBEAB9QEFsWbOnzk51bDb1gaBrdNcOFG34iQu5t82GPmAsDYQphwHvpuv5ftFw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/ecl-ec.css"
    integrity="sha256-xj7hmn5yxwLFbXkEo08lDG7lTroIk7/sDMF5vDmhUBI= sha384-Ovsd+D8PN9XU1yZ77ZXJvbNLfM7N2KTYqRZ59H3dnfYBSxruuJJ+hHJfjNgf4AUS sha512-zaKkswRDxa3obaVFw09AeNb87dqz8g+TjuqW/ZCqQnBJXtKayaoSMlRhPOGNvAo+WDMAeTOAIeF31nxQVTQT1A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-J+qEMbTDkhcFwhihL9hiCnKjDJ2r+kYG9U5yynZ7/pQ= sha384-ZTXTjk1tYnw5mihyoOUJsoa2vWffm0rTCZX+igmuBMuq/AQpukjkdvTdVzfWBBEp sha512-NZ0VAg8eo6k+bgK8duLbDCz91ATC17tPt+7PEkQC8LuKTxyws1U9lUAM5pa19GxRp9tHsLoVGRG3gEOTiwSBdg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/ecl-ec-print.css"
    integrity="sha256-wZMGNtgH9Jo/9NaRfVM5qE4gaHXRuna1GKJDzEdeNMw= sha384-Hbuw16bgaolZyKIwW0yg0mOmWSfI6YFNPydoa/N7sXlUZEvVB6RfgvbmqBCUc977 sha512-6PpYgUzl5UwOFD5xQiJvDb0bPf7EYWOW6Hyrcis5HoHsa9be8SPkyxhFCRgQlmjw8+HRdAoKQrUiwzHsCK+3MQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-XUdDGEItaB19JjN5r5dVB3UBl/VGpTnVcDmofr93Qmw= sha384-Gq/u3UVL0stjwfMXiy6UWYGoGlZGm4+XUFK3we05xgE8Bvdavx/NTMsxBbTO3Dbo sha512-AMHXMUjM6gzmrfHNGGHuf+K7StnwXk+fDlrdIeC1PdzJf3wx1trfL9mlQqeCpbE4ymNu7EYDzWbOiH/x1jeOGA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC4/ec/scripts/ecl-ec.js"
    integrity="sha256-diXjW2RT3BAl03wZwCZJVcH1ALMAVURRq8M4CoDbJEo= sha384-BEzbDJMHxaIe0XUItR4B/BYEKwjB15+EC4nL9DfjONObOZWuahfuApSfCsWjFV+U ssha512-Alu6Fpu2y3qsBG7xPbPPR6U2nrko8URJ7hXwbQtn/TiUVz2fQVDDAFyozTekKW64LLVxU8vUJCUM5ZN5yxeT1w=="
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
