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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-WJJdRUSVOSw7qV/NXG6iKZbCpLDlamplkMqdTjRiVnY= sha384-omIH4FzBb4Z/5s18onnDxEcUQgAc638dzKlhlVZ/dysPqrhOU32LXO7rSE4MkLx+ sha512-Lz8wmpVFCAynasejvr7XXhfGZVozjLTzc1aP4NRyjjadfjLPyw4mt1z1BzA7DRTtIEGwopWDcqNEdXDZWqJ+2w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-viy7xBCDzEn00IEhh1hrK4kR49iS516tDEP1fjqMgdE= sha384-yna5PkYydRqAp/3FIXU9uMeaObzNYw+RPyU3eZIDoF0/bBeUMkH3xccgMYNXHKyF sha512-h4nJrpIhMksFsOC9VK2XBnY4DBaRwZegWAAqeW52hmKWB+7Xu8oFGXMTmURTdVgu8m8B35PoQ3UcANiMRlXNNQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/styles/ecl-ec.css"
    integrity="sha256-5jdfvvCcG50gHtBmcSKVKrINlPBprqms8NGCHUdwakQ= sha384-/utSUqOU8bQaIfYY9ZQuQOkXzc5ZV7en7epKDCfzZf+8j98SKgB26wsuUbL9b5/F sha512-4I9GAB5wvTCz+K4n+hl4yfWGUnN/ooWMoS4idxyLVWQx5JshNID33HD5rMbx1xK7EECDu8iU1OhyaeG7BtN9nQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-COTNQLMV1tEJTfkv/R40FW+NFLMi/dr6OMI8x5Jh9As= sha384-fXcSOTWhEx5VAtrYPAfxCUyTrmyX+HlIJdhX3nZfp4NnPMVlWeBxGhl5WiGNCAPu sha512-EaK/1nB1w2Kc5+QS0gAVO5ZQa1o+3tyEx6WnDVKy+QQ2/3mvOo67xPlIjZWLE2Gm8bdHBExR//QxZkYa3TRXEQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-nuXigcyHqPIeDv1/QkdCDzUkCsdkbx5V7+9Ix+tDojY= sha384-yW+MZH/2Rr1sKYyMFFCX3y20o54Ucti94qG+yjTsI63bcaigyJmSlSCnxcq9n3Nu
    sha512-3ntK2QvPdbIFHFZqkh74fO979JLZAr9tfcs6OxtxxsBGYtaiK9/G7+9bPkH3/mA+HmWVx/CWg0Ib1f3ZvxDiqw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.0/ec/scripts/ecl-ec.js"
    integrity="sha256-RI2Y5dY6/rWiO3OK23/3p82nfyii11rKLtA7IC4ctJY= sha384-GmKyCbUB0qUFU4Bn3va9ITQ7TedWGOuSx46UNO6fcuuCHRaMPz8mxBiUk844wO3S sha512-rR4plXP0EwIY65Sf+D36htkqJW8JJ1dgqfWsvKDyx+BnyThDrfC6EEtUc/ThLh2Krr/cqMu+ji3UU9/bkt8V5g=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when
a datepicker instance is present in a webpage.
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
