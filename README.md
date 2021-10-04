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

ECL is using Erbium, node v12.22.2. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.3/ec/styles/optional/ecl-ec-default.css"
  integrity="sha256-XAx17g2rchKUQZvvPJvWspOxSEH3YVJG5t1cxJFPotk=",
  "sha384-3fJcCUgqUHOVI27kAJhGGIZAWHxam3DJDBx7HpljhADMNjicbqa4pnsxmgh+UKox",
  "sha512-MteTHNk4WUn3N+UoPy42siUhL8BW1aKKJNY7PeQ8Dt8km24mKtPCGEtZu+dPJ+0iqbqajPw4P7GCp6HwzhkU6g=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.3/ec/styles/optional/ecl-reset.css"
  integrity="sha256-CnkUpR6UCggE97HbV9UUMtdlY8gxc0jI6fe9QOszFLI=",
  "sha384-zrCXh7Xmd6W7eQCb9vMne1oyEH8GAHeuQNh6yhb+Xeab+HlV9i2AhFJoEYVPE3eX",
  "sha512-+8o9mz7RGNSXI4o20YERH2k81GgpH3378TDBKGzsCArDcckymW/aTEpkxvgdhFOLPH/3RVQFxQ72W+66c6+upg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.3/ec/styles/ecl-ec.css"
  integrity="sha256-I4kuOmpizFd1Z4wYarwWoHs/Mx7RRwhUw8kURKcMXwc=",
  "sha384-vB5x8bslBaoyRK1okV/u2wvdVreUAsyBAe4g11Kh0Ffjh7kewOe4NlvWzTRPwz8Q",
  "sha512-AsdieBBN3OPz02+erNbzfexjHOJAW+PbnMZmQF+ApqLbopBbhN48Q6DAsGFCOiTME6TEMvFKFQQn46+anFnV7w=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.3/ec/styles/ecl-ec-print.css"
  integrity="sha256-IRurhLRU8OX5+pwpSavJXxGCWMk7NoXc4fJsbaq0Yhc=",
  "sha384-OpPEMkb0oDg6sAyGIHfNX189LVG35MgZpD0/jhkTfqUvLuHq/jPDJtWNkoMDZ+7+",
  "sha512-Jb5rph+rLnd8Kg3XyaH69bE+eP2s/2PrYkbJX+qMJUnjMqPFDeSuQjhkEilACksdqZr0z9B037lGnwK1i3ZOPQ=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.3/ec/scripts/ecl-ec.js"
    integrity="sha256-O9rnS9Lm+ENynqCm/7xT1CfRPo+On6OJPGJO+T3ycxk=",
    "sha384-OsRHHXUoUP1by4nplKKoInk4b3tE3HPMe7lrVy13gJuRzVZvBe9PlWgZ5vjokI5s",
    "sha512-CQelW2FrAwUqFth8wadq4pbpgc6iWpAqCuK3GKjdrrOkqVH+iutv9nFl7FnQcGrnS7pmTGqkqtODt+ksijmZ9Q=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
