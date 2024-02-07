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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-921kWh7uzqYQRCzPiUdOUnUJGI73Npf/qLSpDUdpdBk= sha384-uUiLEhp0NFleezRu3PyP8kV/Wh5Qd+UbM8MhFQhH0QJCQZ/O0m41YrnX+vIICiZX sha512-AIte7bnnKn4uyKzBiFzdXk0P0Ybk+JAryzQXHliGmwORGIgPWOI2erOAfG8GaDVip8yl+oCulWWoeaPtAuOP7w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-mGcOisv0RZHjlErSUZQ8gDtju0dZ8ERs0dopuY/BDPM= sha384-y9ty5nMW/ofZxuO0o87fMetfGzaS12arSkuF0F7A/TEwOfD+XKxzDwYR3J/HueHP sha512-5LNzqDAh7ezzTQbPdZ8Z85j9IWcO3lOKq6c+Z6UhJcTx99JGjlHbgR+WY+4nisYMndfxuLMSeb8TGnLfzkyG/Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/ecl-ec.css"
    integrity="sha256-kJ4g9Ff/IYIiDA3li0T+4dPvnR3MRi7gzE9OrYEFLaY= sha384-psrYK8U24Y4aEVxYkztQTjHb9mQWlaKulX9DcsLsv44XPrvg4Zk/mkzOLAIuG5MQ sha512-Ak6L7OJIS73QF8eRnG62BOk+cd7uumRMRE5TNqhdE7prJMPZCztwj7TOTDgmI/AXsKzmEAwbPmB7jjHazae+Dw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-KoDtGJKXTijb0IIqlkXcTl9GwjXIjcQklk8Qq3xRXeg= sha384-jWF+9LID2gsbasoXcMNpkqxk6MDAZ88ngE+jqjA1rPIsaTgQbjVOaXxq/EpHR9KY sha512-bzuUQndzvNua2uoIPIDX/ewVxKESb+xDTziQ95V1/r+lYzHnpYyqkVcSseWMdji9g0+SbMbxTcL50pRFXgDEqg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/ecl-ec-print.css"
    integrity="sha256-GXvgxircNEC4dF7SpSX2hqJLtQPp27ly8MDTD9zFjx0= sha384-4cb+f/wBC2S4kUft8tGsbvlKROlWthrsivdjww9Qa8u2+b4s+jTv/2eDLNAMon5c sha512-+vpe7DesMFCkBonCRikpYDIMIyTUUgbKVxl2lJvnaHPeKdcnL1eUZD9OQq9pYwifaBHYAlQxfK8KQQhizT/gog=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-OJxoazTM974RjO6l53aFXj587gy90/Fkl5qSh3NmFZw= sha384-D33nJE123k2ODyU5HmRaR55bL4mFsr53L/qvBhkKpojnT1p4cnmUXNRZB10vwGQV
    sha512-MF0OJLWvNI4hwOZOyNKH+TaLaQsg5++dXr97GCC2CTUWFQYcftSFAdliiEInKKHiuHIkfA4KlQ603dvLc70Vbg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-1/ec/scripts/ecl-ec.js"
    integrity="sha256-aa6d5W9BsJGBrTs+j0RwlWJkp6HtHmrrG6KgKTYysqg= sha384-a7ogbOD2e641JnSZuEavbDgfQCbPF15Yfy+3VngMJvgCbzgkr+OAQS5tnHEfFpAX sha512-K9o/Cc5CoaOGD3o3W36ejtv2GRyGXBJP44ZxIOXxWDoyMgv7vP6bmihT3rFyll8LsM0acl2qK8DFGOjOMXCWPg=="
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
