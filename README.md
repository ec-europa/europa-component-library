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

ECL is using Fermium, node v14 but it keeps compatibility with Erbium, node v12. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-Mej+/YG1kVxy183K4kMsrB/M1Gs6eGRzgrLMaQMwIU0= sha384-m0QzPA3v4M2TzVOYqWms00weFxckHtczLsARuEikpc444GVXvagLHB/28iEl+fiS sha512-N8xPidvf80tpyA0NLisLOmRV/+UKfYr02JhKY1Q3LQQbfdFb7DEuP4GVQ/Wut/Rzk32zWEKp9GTxyqKfr2y1FQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-nb+xJAIpTy9EpNOfAzvn59Xon9nqY/arV8chzMTve+c= sha384-qbpbV+YPYEjek2LaRIxNNTPyZ/BaCgk0eeXiYmuRRtwLg9eIvYbby22iUFSCrgVw sha512-XIEr7JyQMBldJdFJFcIhoFaMNK0XrjaR8F7y3TZtjp/m92WHw8XZYE12D+T4X0LiJfkPRC1HkjMTGC72hUsg/A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.2/ec/styles/ecl-ec.css"
    integrity="sha256-GVp1Iww7ARE9RPoA3mDHoI8Fimp2W0NONRzZ2n5/otA= sha384-msx82jGXNsPNiHA9oxJ5Kt/OV5yiAw1pBQqHV4ShBz6kN7FGHfQrUkQapbaRpmz2 sha512-e9vA4XdGPfgmFhgXO6BRsQTRljon9tS+ZndOht8+iFNmE84lNcEiPSgE4GNyMGzVTbScaykIEqN1P5qt0oRU7Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-msZAbFOfJoMGDXnw4C+mlEW9nyBgxIc/B4lUGAI1Jk0= sha384-5/WvMGeZqUQ+lkIFPnDaJ1+oMX3sIyDpzN+mdiNj6kyzwPW3CEMoj3ZXUAYNBKYi sha512-ZjQi+Sz9dXjCk744hFi76w9k51dRN6NXQ76Ld8lTFyWv86qBlbZUBVe0Y0HtIyHHNJh201Sf+kNkyHr0pIjXfQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.2/ec/scripts/ecl-ec.js"
    integrity="sha256-12YSlidWdJUl40nqumP1cXQXXprq2IvdGYH+K/2IqhQ= sha384-tSJxYjcRcFtJhiRxSrE/crxkzkKZtcMyiuXDxMxt7778nq334/WD5MaWwOXMkX3o sha512-60PCPK3FujpEyNO+5QGrc7wAmXfb3RSXUcTfexu9650ShM4O8/MHg8ZTES7bfxbPxuP8pFjo3sztrKn2RdOWkg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
