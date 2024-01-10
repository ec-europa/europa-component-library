# ECL v3 - Europa Component Library

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-LRKxYWi/8COwnhx1jT2SZPujRieTCFnPFR8JndqrtOc= sha384-t4l7pqZwXS+mNZkAp2QAlL7KT62Gat8UcHviHLIZLaW9N8/3Kfp1xINSYs7SK6xH sha512-+kxR+X0c2D9/SEaYtovAPp/BtoFQJ82Elj/OyLAxwNLpFm7D2VDgu0bQ12IkIzUSEDxKbXPZyJxjCeih5kzzfg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-dpgzf06gdg4nPw+xcpgxmjdoM1xzDrWOMyEVB2NEKTk= sha384-yqOuX1SMllf7SHAJRmr3+DiuLyc/f/IUFJBov8SXtG21+Rei0lWszR43No7slVLc sha512-6y+IQhUJAuSD8TwOCgYM4uiMe9iCuGG/5BYlCF0HUT4FlZMUWuVN+2GvS+Sr5ur2a43eO65eSrAeSmIAh86nYQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/styles/ecl-ec.css"
    integrity="sha256-QiJSvfFFhFMV/NpgOxOoz6BCpHOviVIFwl/9FPgTYnk= sha384-gwrBV9QwrKzpJE7XA4LZUOHVATlCIQSsPPQov1aJMIX9teyBB+XAhyruJXEfDt/o sha512-xtLFj3b2P4bAx1U8kl7wdQx+K0Niv5iCg/EmdvfJum5+PRK6nseAXZgw+fCOq7vLLVl4WY+nWkJXyBms4TA9pQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-jiRFuHG7stRKKjEen2wbpzyPuvvm6WcB48UZ8xSZack= sha384-GpHXad1cAomoWyEntINsPdjFDYs8rKRNRKao6Tom/OPQs7rERZpPs6OOb9qtc5R6 sha512-bBfAgaPxzpU7EdW52xeu8jXavpISy3VMHPTP1Bm2SlgMMIxb9WNbWrYqOhyFNg4xewiRkGyz/aDE1vCXuGVF4A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-ZdTp/918baeyBLmLcVmnPNofQ5H1pUk19nfC/04xMqg= sha384-kjKJL3D9RihAfNhc7izbVq8TAVH1imKC7eDurv60j4ix0QySbSOPxaOQtsBkMLZn
    sha512-bNuW6Y+LBaMAzdsp1Klr6AEO3QEHRHoI3GcgBTNQJ1jB+YA+EOWSjV7yLVXLlmH1qV/8uVdG81v7QqiMFYfn9A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.13.0/ec/scripts/ecl-ec.js"
    integrity="sha256-mDrQCSbCKcrcs+aiZiejwF5RPhkXPjGQGtMM9fNAU2I= sha384-HTpK0mMUxpF5Lxhdth6s6BtWe8a1eiO3qXQZjiuc23Xf8wm54EoX/iBVFDqRh7zc sha512-jPfFm1P6ayzPo7HT9raoHU8lT7FdWcH/yT+E+6mJ4nI9So1nIti+wT9RklGPaHI0WZWBg2mBtwn/NJ3Qrp3XMA=="
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
