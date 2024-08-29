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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-+W/QHiPnaf6fA9UPwexhu/lXEBi5y3Cs5mF8LfVj6e4= sha384-OvwVbI9HTCRyJKFLZq+Sld6el6N/LY3ZPdpsCIqy094s9LaGX3iwuxpX4zAMd6kd sha512-j8ue06/4wXWVtNuyf8oyil2qUYSYRUD8PJ54Fgo2Za3ztfpOxTC7SBLAIBTNIVJRroDqUCTOPrkxjKf64m+qeg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-26n2qFZkd1s9Pb+kTgZ1gM3OGr+KlM6gCapnvS7nIvU= sha384-1AXvoCPftzdijjUmTRyJ6hCFLuH732f/3P2UYI8Ohc3Aw3y2mZw+7X8YRMqqv+t4 sha512-kcrEXIRahUo30N0HZvw9a09zeSqKnaPmgwygRDI2mTcEszVsQbfwecMg9jJvFkHxtCeyEfootN4sagxPAbnDOw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/ecl-ec.css"
    integrity="sha256-DgOk/JYtW0uH5a3wnfOhjFUb17zQe3gfY4KwPppVuL8= sha384-Mjv6qwI4xs/hFUTioDipN9XZ0u14IlQGYlZNxez+41zuhhgdYBSwfyb15/jIYOOJ sha512-XkUZAAW9EtThQMeKVWq/9/TpvoX9eaFZYYw1rvfyepqYVtzAxu7THa+x1oyMuJlgfQRgGrDrEy763wGnuKisYA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-2OqXtR+Xq9/jEBCWzziCVgBAstWjXLvzmQbAuBJufXk= sha384-z1rZkawItmFO/gWITeXLw18AxrZ7933+ZE/qrnupW4K4FBmTyp/zmy62hb+LtLO3 sha512-WFvo7brrTfcoX+SRggFhTz/BtguDWLBhENt+2Qla+Tn3mdWuU/dbVYm3NWDiV0Lv/CFCQs7Zpo8X/Sjl7c/97Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-chpkuq5oStYEd3qBbKC1JmDemF0V8hws8ZOIGHnCQZ8= sha384-Lg9GbcIQhcmS2FnPPqK6C1ZtZrVojecFyt7B/TSxzuVCwDprZ/NpdqM4PSc++ZPq sha512-7sLpHsfalD7XoA65kSVGXuwx23Krym+zaWQLH0XyonUXv82opLD6dnRdDaD+ZUqOkPK8lGrJ+aaEIap5mhB2NA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-nWBHICmYP0660/iCqNpp+HrdBTRvITlUfTLw9fMGzhs= sha384-DJQyJENf99Z1q7qQ4k13TTgvBmm/A4pOv3pfUy6xoMXLEOm06gx9NQ5Y5gdYHTfy
    sha512-XeLHDyIBKizLoDhUZMXwQZOjNuQEOchNJ0o91roiJXmm8wNGu1VIoGPp1WPkoUSa2InjNrxz1wNz0i+a6t2ojA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.2/ec/scripts/ecl-ec.js"
    integrity="sha256-bcFzNjoNq892p732QnNyPpmtIPBssDjCWsk+HpHrBV4= sha384-uGMao7gN9eWdaQIyr5dBOiaQ1rLxYH1VSsHP0hK+/jU4oEgA0ipaZzrXXVmE6+4s sha512-wpSTPWAHBk9k93XL1qh70+rv08TIt55XPMTMzi5tsKxgMoJzjyWoi7OW+sYi/1T8jjtq0xwRMuR9hkgDKq4l5g=="
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

- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
