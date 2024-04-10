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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-ggArz6sILA++CWMcaDT+3Bzyv/Fuy9L+KtB7Nm3xNJs= sha384-H4s1B/y8qfM2cE5vQnMdxAkDYhsTMHxorqbpB1nTxO80QOMix3pkZ7PaCw/WcvA1 sha512-lOrBmjuf2EvmVxwegjebRd7WKvMrLpNaB2dgKPdKfLgIQzAYA00GLrrhFcVIKBNJAdqitOm9V+XLPe1Yljhgng=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Dw+2mBhByfwMB3DwtYtNSjZr7D/kgMYiRXaai3zFcCw= sha384-CiPYpPaSJxZpjjyPV9fZfiPXLnLVrUWDUAHTfXzrJqmTukUI6juz85HCJ13EtGW1 sha512-uKUs0R6X16Gqq1iSR559UvYv9Zn2Hw5L+RCUYamDJL9KVKegMiYwoB7E6w7VVYhPuKyM9NhLLUyHvMdG0RccJA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/ecl-ec.css"
    integrity="sha256-sZbHLNPSIXhkIZODQFJFIoPKuSjUI5A+9Uj6dyL/xmY= sha384-QreUlgpudy7W/j3R/xiDQ3t69ldpBZOm/O3bW5DvR+2U3tRsvN1vU7UBXFzUR4in sha512-MsBcx+9DMcQrndzdEAwrWZP5qV9b/XSaeiBOzIvWgBHzikz7wGZ3OXYIJa22KlF2ZXm5YeNjEgK5yASxoUP8MQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-1DI6Uw3arnyGPbs6Ltoph4wxvlH8HcsB9u5+KKXtYwU= sha384-aOSOWhw64R/4wJM6O0EJu7dPupQsijoTjVTtRqRMCMby7jj4FsoO/cXoNJ31lQkV sha512-uFtWBg07ZeMlbTDvmrnMuuM8JYc3kTEYuDy3J9VUwnDNyoq5LFrAFtfZMfXPi7LxjGwSw74pQJiDMlK53lBFEg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-h/3Jkc4PuUhJ9RUwZgwpZhyA66srRobmCXSqcObgHSE= sha384-RFSkQkQ0PqngWXqddfZMs0Ga4y2dXRVjkPHU8PO9EX+uajM663tpDi1sV3nF5qMg sha512-Vz1OFUWWZTyhiXRYFGwKzGaJcZwwPp8RnML9FBkV0W4H8cdQwLv8B1PDLql5h6vMBjCrNpl6syJIOQPvRiOkwA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-ylQ7g62EE6u2H11umwjp0EdRvJQUeTCjldcdIs6qEH4= sha384-W6loxEKM5qaCDdeNLBxXo7a/TvLkmPISdStAipQE9GkKJVCjRU1Oxft3g86bK5xE
    sha512-QWypZXDcap61GF30pDmL0gQveYknh5oFkV5SIz8Oxeu3gTdg22R1O5wzWGtIRoL7BBfLi/OmEX5kZHXLpqsWIQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.1/ec/scripts/ecl-ec.js"
    integrity="sha256-8PCfBYcpEBFnP02YyHeJMsEEQAtb4TlJY2+Iag3q+n0= sha384-VuBVFF4jL4MkMCl/sTT2sSGmTpqTBr2rmLMOL1BnQzM8U/rjayAjRUsSpp8N5KfI sha512-mJWiwRfm7PXvJprMa3G9qPlPElfraPkxeP7Jm6r1MRJ80rBe6ylar1nMox/F2Oh77FrYkvAxJjGeA0iFd74+hg=="
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
