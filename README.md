# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 18.18.2 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v3

Read the technical documentation [on GitHub](docs/Migrating-v4.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-I1xx/XJ0GqBhZ5NT7LgAqsNIZMpb0kYNPV447wkW49c= sha384-SuAYkmK76oosXjYvcYnRvWSlURs7b59sOxy3V44VpZwK5L/UBxFmigD4Z7EPxtCN sha512-k9ju0rK3ljqhYfGWtzzp7WPFoiHIEcmBIGNtXZnNGTuXhcST90rTFw2tsJcqANUCgs6zJU8bMpO6pdaoSdYCcw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-AGG15tiCmd80dSATMTyVPIcqCcFL0T1m3KPQ99mdMCE= sha384-I1F0Uxulq4ovSkbetl4ld5B9IlM416WNgcXRjvrql3iBt7NAMsaOTiZu5OOLD92H sha512-4cayikKTxUwl/tjQNA/4thcHcAUSFRzMpKW587ylIYnly1BMCEVAneYKy4OEQuTfPUGQZ9GyklwEwGuWjf9WGA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/ecl-ec.css"
    integrity="sha256-zm4xP+At5TbgjxXU5l2QZgepAS3a0uXP+JpEPY/mJu8= sha384-7W2ZqaogeK9UJyqiB4KMaaEM/T5WRCE48kT175N5qLMVd5qm3jzI8Fiy5wZB7QMO sha512-JeeCfFn51uKcZwZ4vfGQPMdO+781PFPZTRSMdLSPw2iU05JD8ie23i07te5Z1L0kspQgtWw+IXiwCNeixNKaMQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-o4Bx3Kkpy7NaMseVuhQG93qET+tw2p+1KV9GiQRjWjQ= sha384-MnJdAwxQg5TnYYyObKeljf5uT/H3PUntE2AvUAE9Zsz6/58/9se7mjy6bH+9xy5z sha512-mNfwDSZFdPk3bmF4QFS+bWD4l1s7Q2qScKXaazhadRljU8KsB1tZQXWKUj6/rrOL8AklKsq4qEiJuraSnzRFjg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-GbkofhRrVgOdP7+k6MWfVX+ufcbKCYngKQ7oWyGx6dc= sha384-P4sVI7ZO3T+DLB5ZwqwLHZIsBBYJQpJ7YW3FN3Ff+AaZS7wXRNViN56q5LxqSQoq sha512-3MDNY7cRPPq+xt6h7je2slOrRCd5+xkBved3dYablW04lmeVhVUZcM3bWOwRk/Z7XOMhEdOSLpQz8dmuXrltBg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-S0EDFbkY7xJneES81ti5vIsxBm0qaypIBXbleX8d2YA= sha384-L7bEIV3MMM1JdFqjJUhUVg8IUUwPO3t++5EWcJrdghFuUvjdLlRrjTwih2IsIE3Y
    sha512-QBwgOZD7apUsL2ZfNad0UXJfNsS/v2UpsMgbpNupn96vf11dhSmghfaLdAy+blZT/NyB8TRYn1aNIBtpfCGbDA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.0/ec/scripts/ecl-ec.js"
    integrity="sha256-qyiHTl2c+pvCLk7YE+KZbGiLtxtdZMG6CVdYMSA/p7g= sha384-o2SnrSqR2BoqXxJEkMfkc0qywm28xX76vMvee4UAXuMFE19fdViyvsoTsO0VVB8O sha512-rpGYL2zgfFJjoMVNq+w0c0Pq7V0VqqRgi/ls45/3Kw4h7/L2wwszLzG1KoJuWR5IMHl8pv6XbEuOSIfSS2iohw=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
Additionally, when customising the date format used by the datepicker, in order to get a consistent output, [moment.js](https://momentjs.com/) is also needed.
These scripts can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- moment.js (https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js) (https://momentjs.com/)
- pikaday (https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.min.js) (https://pikaday.com/)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
