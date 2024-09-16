# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 20.9.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-BD+E0XhzZlSy2TArNJucnJx0z8oITqwS9Ua4PTiO/WY= sha384-M2OnmUTi4/672Vf++HSAGxBHeBBSk71rOmgf5/AZ7LK41AOd8+d9W9rzjeftPmgj sha512-Er0kp2Rr9q9+i3quatm9aXWPISqEM9W3RfY5KsVn0I/GCrvFltz1tCWTN1iLDcz28pi5Wb4Jc8TPHrLLkpcoNg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-NE2LVLTCPUaU1vrkZIaYilV9G1TDDyVZmLNFvKHs2eM= sha384-2Ye4VvSEOGWfuZ0GYwcmdzderqy11dwl3CutMDCrJisvYzrlYIT/S290+RpXM1/7 sha512-1XHZrNRO1+qww02pu23dNKhSOYHaT+9peKBSUa2phwaABLL8uuk495EV6rGb3Am82IVqKswOadvZu4Pl6fcdXg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/ecl-ec.css"
    integrity="sha256-Weza2EJ9K1wAIyOZIWwarcfKGpeMSaipF8Aa4iLi+9w= sha384-VeGLgG9Cd9KX+fsJk1per8nuqJRZDZEjVGV9sfbN+arQQCgUNdcDtfcH21npz7Rn sha512-tGaOGhN/zIE8pgAmWipQE1efR/JHMyeu/tM5orHi1u/slHIVS9o8dyK9uZ2uXOOPwQw34MDoDxcNvE04lSXInw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-vXPPqxGdrv+A7/8QZ3f0n5SKC8T+/mO8JGYEnGxHm7Q= sha384-8/Fi2z1PE2k8eM+UA+lmO+f3mUe0b5/iXP1iM4I3NoJ1DmdYVR1aoJpzjhr+SZML sha512-Z9WSa6IBhInnlwkgDrbVu1KvOBQazXkh06STKDNjDwOlgwl/laezbMfIy/iUg9iWxo8bnn+aJnq1p17G3O59Ag=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-p7iwa6+AbY52YPXww6w5uQun9H7xXAoDXCbobwBBIlo= sha384-BLScrF2BZrJSiO2xDOiw7t4nkOZGHHE2h3dJN1EIesas+6ql/DSFAPaxKBae/yWf sha512-kRrJTVcZb3rrLhuRa/Gc5pjV62PhSAJOQSI3UUuOxR5exIyJyJlkhRGk6kvLTdmazW051qZj2PwDlJrAfSdqoA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-dpqKOtU1q/ZOuO2bwTfvLXBBJ3AnESBtyflEZ3/xyjM= sha384-mNEhSkTPj0Y0MgxHTimmudBEkxxIv6YgHJ0zuhjsURhdaIZiPNloQsvCXG2Q8zqg
    sha512-J7pPh9Bu3lZleRGrRYP+0EsiPBC+hv5llVcAE3LRvwap9akIcjIJH699WRh1SRQ6bWMqhsxiXlCZLyo9uEZeww=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.4/ec/scripts/ecl-ec.js"
    integrity="sha256-KRD0PSiA+ymzpzcv6cg2XMEaw6FpA+7aItdkPYNUndY= sha384-zaIwlG7F2Nli54yahBd6dpp/DIrninDKpeWI3Havg+4X5mqXqjBiHndaw00gx1sM sha512-FInCjGcWxAm5xtU7Y2mN6cxLqpW7zRkQV7GHZDVwIrzqy5LF4ojnHSHP3+mbQ6NhBLKUE34LgEWZclibVFviBw=="
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
