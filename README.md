# ECL v3 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using node 16.14.0, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-XlVWuOrSIX13Qh+TIFD6TEdWkd3Ke94QZi552iwvbUk= sha384-nHJLW2KyTiXPnjHGmc7bWbV61vKnB2q1Uz6A3xKtgz6oSV8l4Wn5kUA2qIOdJzDG sha512-E7CQ1HqyVZGFKLOi/eEAuptkMJ7uc6CFYK+J9hI8DiRpUf6v66tW0Tf3ccSprlBN3OnvmEojqaCwidvl8TGxKw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-riEtlxiUl1/y2sN6h5qjibunmq4Cp1if2ThqXiXSciU= sha384-sRj/BSjTklFfw75MIyweh5Nk/afMYd8oASwAZCHvcybcejwJOmDBq+azrMAzJVej sha512-spYmpJlrEggquVILtb2kuLSdrQ3mI2M19LNyMfCS/iDXixUYW1XrpuCgGahdgvIyhL0P2OFycIAjj5WmNcPy/Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/styles/ecl-ec.css"
    integrity="sha256-0zRqC/6eLuVDDye5qE8BFP258QkL1B0rm2kFIv9QNZw= sha384-lM8ckpRRZXbx9MZOw2alQ5IgNRzx6dIAHZYK/kTR19IYoz67xoDLQyWkLdhQaSUO sha512-B7VbIvT5ZvN/Beo0ZbigT4NgCaLzx4QCLJQOnINY5R3P5qro04ckYu8d45ILtBrUORTM//TM2YgMpkoq0ZmjVg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-H8VRG2RJnJSdbZrp+3MldFC5og8tvmsiiPDANiok/Cg= sha384-wfacd+f/GhxVZ0shaacbkLTI5jhFD8Wd1l8dNxmMDTDNbkjJqdqoCWFUEfykyYrr sha512-a5as8/tL7/NKo6DZnXqV1WbXRIfXmRknBOqhgLf5VvzbsfvlWjdBiCaVTdJHENNrD2ua59n7y9fkJ4KyzvFaow=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-uflcHAn/vyM9qv9nADMu4IWk4SydTtVZZGZYQgqTbh4= sha384-Uucm7dSvAXh8P4nsnTfTzqEIxHGVHOqqPucXPsFq3Zdd3h0F2Oh6D4GZEE94h/DN
    sha512-usC/y+HaXjV0GGk63TKO6nqrdxHHH7LMVb031EWW1jK2DAHXej7mXB9x8KkmpbzW4h0MOiFVp6SgTNwMZOZaxA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.1/ec/scripts/ecl-ec.js"
    integrity="sha256-J7A0H1Gql3wuyCBAoGGCOaA/ddZa8RkHC/juwINnR7M= sha384-N0a8BaIXDr6u3Pi/1RzwIqvaJ9Ihb1mxxU5a+tC1ynkt0KSyyEfYMZcJpzhrNeFT sha512-cMaWltrgUH34OSJ6Eye8q1kGQjhFaP3syHJ+ZqsyiaKNrEbeKGvxCiAMnwcKbEeVJ4v24ZdzWhShtSPwksVDPw=="
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
