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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-hnYh8rvtQLUE3bxW7rZQMrZxUpeMdMq2OGGGW1edNyQ= sha384-rx7QPfgL7um4iSrK0WaNsNhrXSNBELWaC0Mycjwa/lgAKsQ+vUcNIzg3ZbI4Cgth sha512-gKS6pSRug88dxweuMcF4/j4egn4ALIIIpOC8JcwAzMg552NX2c+ly6pqXkV1f9x18jblwM1khkljZ5d9J1cDMg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-VlFFZ9Ej6rFw4zkF913s77jVd3EA6im1Y2oPPoeUJtE= sha384-71RIz2Ydy1ZfxJIIz5Vf3pqDkOpZ0aonrHNCCOwHV5sOjoEcerte3i5V8GjvnQWY
    sha512-q627F4MD+E7eYarPvxuUPTCcG6JdxJ9XBbrQzTC9QHzDJA8IMde8FUE9Re1mpIozsQfBryIUSH3JH1P5T+NmMA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.0/ec/styles/ecl-ec.css"
    integrity="sha256-9hB7Zss9Fy4P5dlADDqyveRhzPChTQqWzVOoYYhexcY= sha384-5qs63uca/zsCB9vXqTo73SdhJb4+U/61VUJqXgzz9+96zi771wTyZ2ujULlkrUCG
    sha512-IA4IKZB9d/2l0OY4zzlQRdZdSLcJyohz11QQFBVTQfIMpwJy1ldh+7JlnZwXZWkJMWoQkTVi6hmPyYLPamGVJA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-hqoDb/BAober0a2d79vfDqGtwoBXwhj66gAsdrE8cNY= sha384-TV1qN16RJ9ChcoiSFgCcEyJE7ALQm+TWzdY4az1DZWpMAY/2Yq9A8Xs+vTUiYJWq
    sha512-6CJAYF8vf497IOHt+aBvEgib5ehTnF/o5Ns8AwD/pujOt9ATDawU/VC9cIa9nA3qgca7oevsPBZnVSE7TpNHyQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.0/ec/scripts/ecl-ec.js"
    integrity="sha256-nSHRHtPIBWiiSUaurPO/XcHKk4OInqte9c3bucF5QW4= sha384-GLZc9N+UkifZOr8avXTZN7bkl1slivbaPnS6KNhYsnHjhUd9xLD8G0iuAXBxgBu
    sha512-rQbZjR1omGgvi1RTk4jb0nvfqtyhhcNj0XLmTn1nwyp2i+6qOB1H14JRYU8706JmjN9iEc9S0h01VgHBHHqHmQ=="
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
