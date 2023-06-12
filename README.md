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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-uZYsXDWGHKEUcLuH1UnG5pGWJQRFtjt8y3Ep/LqG/pM= sha384-VicyI7OWUmdN7zAFIKs9qPIR3Ug6sFVo/oRw8fKm6p25VF2nE+kfsjIvjEZmDOrv sha512-7grJX+75QdEGDqaKxSaLrE5ESxgSrXa5Xa3Xi/efYhJyDxbzzN49NivvOzqzbbu7C54ABWdUCUii4fKdjlyKiw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-ZANLBb/2+Pnrcw7IguY5cc3AG4ZfXIZI4ieKsNO/L2A= sha384-xn6VED6Hb2NXwN9+VaMq2dcZpCUWzxcheeJHpVMSoNkoXczZkOjhkpsfrA0XjlQg
    sha512-4d+KpykuggbUnJvpxsp8CNx1li3e728rIPJ/oUd53PxtriF8cOzb809xGN4SntGOIC8iA7mhzUAF5tZyfdxnCA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/styles/ecl-ec.css"
    integrity="sha256-YQlYkEQC2Vu5UwmDHZLwE9hhwAerHZDv2Fm6mfsxSwE= sha384-XipukMAI4lupjpBVpByc5NOOiyV5jnCcmAG7jwhgObaT5HEjz5GH8/Gnprw0vl/3
    sha512-phWWBbF4GK5h+mqjygjvLhAADN9juFxaBWe5wNoB+TQevWrLfw4OJGf5z43rcgsI1+UJVYXlDs8EyiJtG9mYhg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-W2XWMlWgPLSW98XiTm4bhqFfolBbFTCWYRwD7PMxNs8= sha384-xWt3BgMNPlf2czPQdeagIIHqIR9ySZPH2x5SWAAbidvC/vY5xQbNz+SM9j7NDfRt
    sha512-kvoTUu5GQgDJQWpESWQ0aQnFd9c/+V2nKFduMo2wfhJLquoySsoQ+U0J2Lv/yHPGXa6wM0guh/9I15aPcqUVAw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-uHrlMH8zFZca62UKf3gNihFMR+HRM/Ctnyx9M42b2qU= sha384-0QiMu3afJXMgEYRGx1CyKOvDeHgyph3WrGwnPgP7XHrIAj17v3fqJUmPevyfsbTs
    sha512-h1kMEzFCX3CB43nau+wtm7D69QdIsd2Z2+mYL0CnFLLZ1X/Oup/a993pSJFCAEglqrPdJqWVnHJI2TIIOhJECA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.3/ec/scripts/ecl-ec.js"
    integrity="sha256-dk47DIAaTkZXhjevO7uWdcKPT1rsQiGcmgp7hZ3BkfE= sha384-sBOY1n5SHuXXAfeLrjO4QyLzMhgkrlWrPROVqIHqPbQsMVy2/OaaeFe15IBD0bH2
    sha512-+eXr7jgAZCr2NHGZlRGJTGMXoaZ8YP0eeGjMGaqXkssk4bJ4cHtWum3QJqrGim3LuF8UsuqSvsDK9SIaPH+NCg=="
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
