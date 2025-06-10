# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.11.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v4

Read the technical documentation [on GitHub](docs/Migrating-v5.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-142CX1cIJBMq+RVoxRYZnA3fufAJMmebwfTNzLLyoF8= sha384-SZQO4j0Xx0KkQbwYav1qIC5f/PPJKySruokzomp24EeLf1x+0TgzkxdwvOWFusC+
    sha512-Fkf0wk5AgNeQ07WFkWSovqHoYPewI80Tyu9q+f8xEqjrQCYAtQoX13BKvfoxh3YEaddriWn3m7bFGoo1m3Btwg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/optional/ecl-reset.css"
    integrity="sha256-KjT4LbNy6SlVCW89Q1vYmeOJ+HcJJvot63B0Xj+Fmic= sha384-hrXl0bB5lTEVeZBM8/41IYYio9bydSU5TCMb3/4WjOZr873vCHKqy7SYYwmLAA7b sha512-kz1XACFHuosRqVzXd4QTVBIhr6UNQxjrYttKwm0gF/yjtQKNnkFx9qPNKRcyvKkHO+GmxiYDyMzOiD3KOg5i7w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/ecl-ec.css"
    integrity="sha256-u1j5ILpU+bnnUegOG9Kb/9JkwsVOQupKeO3YiCOneVo= sha384-bdPtb8NZDBNxstGqkU31pdHp4YCT+rMDH3ziasp+6VCsBFcvsBlWBSOZzKadhixN sha512-SRa6Pks45l+sBfKfeKC1otWhAFCorHTfC+uhPblVXAiJDuyCar6b5PpNKklWutQQS3ffrGxf7ujOPj8u6FXc2w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-c84kk59OtsbGouWjRNbsqb8GVHSuXUqQiN450MqSyjI= sha384-LTamclizg8AHp7N1FPezqLAt2+/kbMqnHnGrXEJDHdOvLPzhL3FLrtb0ctO7Jy64 sha512-K5pDw3qd7JEEG8e2rV97X4HwjEuSUPA246Qy0umiOpxXUHuyJv7BKkHuDy1Hb7T6umAEpWMkKHPMcK5Cp7cZsw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/ecl-ec-print.css"
    integrity="sha256-nwnI8hYzis3x9V9yLI0d3UrqdCjldB7Qa4AnHhz2/ZE= sha384-6wDkU0vSSzmFKJoKmQEEMLOUZedLK9tZk1/sMp4kuDyNRE9AqIduH5gkE0ahAii6 sha512-5hiL4dGj94mcN5TKwikpayj37E4I/JL8ikJOU4yKF55Yfn2kpNdLZ9gYUZHk8JoH6NulT1BZUVzjcxpyFfeBmg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-ZKuFM7YUdOfIYAz/fT5KB7N5TplUxDh595WRtMZWyr4= sha384-VsFWL5zGPJZDl3OTtNUBjBVSFcQjVUsN/s0oa8VZqbXuGUAj0YFWlN6GbsNcCzkk sha512-pkkDqm+WdFYptYwCLL8CYK+01BEMF8XKa6cnNwmWt5zA1B3q+UJDYDMpFMxZZcqQ5Hd3GEgFh1ftKFmaL4QnEQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.12/ec/scripts/ecl-ec.js"
    integrity="sha256-jcVC+NZ+5cnggUwoeDirsFIHxJnycQUl8clWeeHhhK8= sha384-NWMEMg2/YhdiRXr3njC/aUQYhwCSmeUEJh2QCANNpmYxTj4KJbLPeXtcawFxTt9O sha512-KaWvL15+GfFSKoAxFa0ypDn3C4xLJHnWe85ssu/ONDTleRbgstIMogzkOogMh/bwmNlAc7DtzKIozfXW20UL3A=="
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

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
