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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-4CnndUZzrXFuMD0ASGfJWdN3kS9Xur15+X4H6YUC0BY= sha384-gLVMYyKdbr74XuaJjUaaUp3g1LMm53e3gJnEDY7QkZzEdn+MC2fCSaytLO7n1D5v sha512-1QEuhLPmJ54oVkw5kH7F+b8Nm+1L7yjfKUo1YQPPyXhmj1ZwHKeJUQlxad3X84pFFP/KlCDakKUlVhND1hLmOw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-W73dL0lotJ/w/guWCYk0VAiqkaHFMX00PvCvksDC4lw= sha384-k7eYdwOEK8xhuKP3VOi328tds9GMVnFZGnCALQQ4nPnLxMH3inQL6yRic1yfDf3D
    sha512-xV33o2PudlXQ6gBmLjHGnpZbS0US9L/VhvDeVVjuYGUnyIgOxesKgSVJRQmmDPP4WIA7lzfkFghcp3C2GOjFoA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/ecl-ec.css"
    integrity="sha256-xRk5/LACsyTPTOJ2D4AQ6te/2qZPQi6aLrJpIxfCyqI= sha384-Al0n51ljCxDHYBiQ3wyV5hyzeNTLg5OrZT0r3FhDrPL6HZzUwf11AMjueqYeiKJx
    sha512-gseu+mzkia6JAQBVsRz5fl2vNcJqcuhkxNKQgmeQJhj28qiGqNYe8RO11gVcIePoXejrj1cRZ7lOLTQy+ZzLWw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-Q2cUJj5rmOl1QcRlh2uFaqs/WW2uZ/El6AXDaf7cb9Q= sha384-ULdV/8zHhW7HHUwuMhBKrgCVvp9VW/NHeU22FIglAxOWD8FuJuYTmIKA0/FQhWr2
    sha512-omeYm7zcc/Lk3YO5Y9yPQKAuNSfeuMZCUYizN5VxoBylVQWb4nYkczUg64usbGxNVGIpU2yqp4qX1+1l24hOUQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-dkfursKly9QNolk6l2KgJrYEI/4XJ+TLezegdo1KCnA= sha384-tOICxac25XSY9eSeU2uVohiPIgrLnb42wfCFrQhNq1z49EUUCHnLBKwfAty2uDhI
    sha512-9gzCGhP2qIdp30vVMdE2zfgGT6LM6nHLZQtee4MZT2nAV8tZkRuJhGxAT4kCxoAXpwbAc6RdAIvdpgij6SS7Bw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/scripts/ecl-ec.js"
    integrity="sha256-6jLxDYEdOl6Vo1awDuWQumgUDYh2doeiJl8qMlFIGnc= sha384-XBo2MADdkMCAt8jOc0r4mAbMrrzzEx4C/i394U6isv5ufKc3QY9hU2qghhqpiubz
    sha512-0Nw/zSZUMDs+QDbD4duZS926iqgEKAPwY+5OHjnDmKkFtT6GtASRLuYw0Ki0URnwj0ZCW5/SCxhizZ01LK6wUA=="
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
