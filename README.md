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
- install the preset with npm, e.g. `npm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-WJRxRxYypLmwDOVsDGu8VDJUgMML4tPe/bPsGf2lB8I= sha384-u9rLMutv6902e61eFXwjNTN92broTzPYtFeb4Rn4emllO5nZyuVrRmdH7gDpGFw/sha512-6tDzH6ExqmEvl2uq4UYZwOzG06EX4UYSrxqGmR1O5occOXAvmYo19mrzrpQUOEEAUQ84r0oLXTOSkwKMI+mt0Q==="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Ay9bkFdWD+az18bkbJl1rxsEh5231xIl3NWmIDIJIDg= sha384-3J4TuhYeWZGg2TVLwX+y3YTE62kLbuUbsfVjTDDK1ZrEZcQa4xKZYx+3yUcqxfAG sha512-GXzvFnbDImllkWvl6Zrzhi73waHym6v7twNxQIOwt6ni6NPz8oV/B4RMNjS+e26d6AlCpnrinj2RMN8GYx8tjA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/ecl-ec.css"
    integrity="sha256-WwvnHgjfyeEts77wQr07amqVJiLpj57/ka315EJpCcw= sha384-zG+5oUjWMx9xRpucY0J1FEytY5H32pluCy1Wf+ONHuRt6pBZwUeTbCJQP6Mp8fZY sha512-hYD/vT5dE1Gda+QG24b6E8TXqNcVdmGWN1U7N/fbmmFnzWsi9+dslzTqDp0lmgh4AZ0mdbJ6upkZ7gre+WiuKg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-sZCZrCbNu+o4sgFeq2KLVyW50El4m+trBNvwr/uaAr4= sha384-TQjo8/fjToiwhi84T7amlbEmH0tST1QpeLBQfMZZKo+7ED/k1Sib8pvjGlaB4puA sha512-FRHQemTQdHciYDKoJ3n9Qu9XZqT3DGS1fu3d9vCvTrMb7yTgZyD6ebTzToSVpyJ+a7vqNq4Z4t6QTDZ5AMzZyQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-oMTw4/WLxafDmbBaUVjzEwqaUvMBVWgtQORv1bn8UI0= sha384-mmV71VByZgRM+3c0BIuRKWtzVj/22RiWcUybvIIpS9GZGHi6BvemEgdYrHGgZEzT sha512-e0eHspY0y1HtTecEk+y+/c0cvNcxQryiA2+aum3tdRt4Fd+1DKCBMoYveGaNTOktcaDz2IRV0iXCdZ60cvarkg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-lprcRnJ7obqFODnsS81Sb7OinvkJzgG3bG+fhe5Nb18= sha384-p9etG9Yp8E6RpkD3UvpCEmtPtA3zB1H6Td5hbVMu7yTfzONeleQm5PlOhCB6XS/M sha512-AOWgVK9bhVEh+Ly6YoVRlnB5v4tYU43qfRDc1Wip/eumxTFLiA8xSJ+YHLFVuxkjHdRhtaPniPbI0xBmF0ZpOQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.5.0/ec/scripts/ecl-ec.js"
    integrity="sha256-Ih4T3QyXnLcH0gt7L0zliO10lsHPPBOy+ptTj0uoHZs= sha384-Yd5+aeXo0zNo7jQpLnaM3snIVCqGx2UEo086BBw//RH8GJT5UBSgnfbPA6bMWstJ sha512-8y6VQA84g2SdAA+Fo3LmTZah2YLzyfKwIcCwdlCqO8FYvIlg5HwLkKQSNRH7G/72e/wk3sycGdXKd6r//sffGw=="
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
