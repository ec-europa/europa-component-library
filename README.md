# ECL v3 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is using Fermium, node v14 but it keeps compatibility with Erbium, node v12. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v2

Read the technical documentation [on GitHub](docs/Migrating-v3.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-WoDkvxAJAa1S7L+s7L1K/NKt8yydK7SOMb3nwJxLWD4= sha384-Dxis5gHgzlNrUdoI7V5UfyI6Q4uCk8VjQC8LOy1B5pvaSMch5YZ/g8dWcQVmDNtg sha512-CviMi1QzyLWflY6d8dRhT9xkXEaq4T0YZ2zLdP71mAc/QfvEcqvLtUi8oY34RHWWLTEYFpgj6ogEMNXOjMjMQQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-dp1fNx/Q8m2pB86TCwyNR1x/bH1fvn3WFpI4ovea/cw= sha384-y5e3QBPtjN9R+r92JKRrAEoelW73rlVpS534yIqmCEhBE3ENg751fXYYCG/nOoo2
    sha512-9f6Lzh5YC44pI2pmAshFsAatIUER58uLSiPtMiyWJMWmf1Q3MgNUZm+U6JiP37YX7NzVmF8zJ7ChN8GP1T0K6Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.3/ec/styles/ecl-ec.css"
    integrity="sha256-+qgi0wVs2uDe4MZbVyewYwhI3hifS5Ms0DisaIz0HTU= sha384-mpKSzb31K+se5ty8qB5yrPzht7uEo9sp35VeoSg2uXLD7yJ3oSBdEHIamP2UuDD3
    sha512-svSd6YROVFQh3ao8Fh6avqDERzNU5VpW8SmkeUVGf9hYJHU4J1sTCqkn0Q72YkaYL4/JUr3SF05vU3sun03z3Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-lBX5HeFt1/ohlg1xRxGBuOw6jLan6pawRxvdfswsSvA= sha384-bHxjbcrC/F+ioaWiUH7mWEPFbAZstJ7taINv/HdjT1OiibN10j5iJ2RYOwl7nwyv
    sha512-TRVQEmKTafXEg0VjviExdIqlbFQj5ELVoLek9pee3qKgbdtwe/E0yMNlJ0PZx9j9Ieh+YWtK8bXHP7Eq1yR7Mw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.3/ec/scripts/ecl-ec.js"
    integrity="sha256-lHyQhdolsccRXRUM7QD3uhWpbhAhB5k0t3l/9SrdxjM= sha384-MMeVW20aRMI8eTWNS57uBdixaP3wtA8g0Gx7szcYmyWW9B8io1N0igLdXGnRVltV
    sha512-0ixxR510NhsWAjgFvZQe+7ps8IIBi2PeKITeMqN5CdhIAzcoI/PzR7NYg5cCR32UGNTVV6cNKNB3nVN1X/r4ig=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: moment.js

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) which requires [moment.js](https://momentjs.com/) and this library is not bundled by ECL.
Therefore **moment.js needs to be loaded or bundled by the application or website using ECL**, depending on the needs.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
