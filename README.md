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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-3ckVdevv88svPv7UZdgW/V4XtfYmgJCPVgavcOYngR4= sha384-cp2bZ+3szsrjhVrWJyQEuOPnE76GjqpjMFvD0Q9/ccJXyOxhgiGxvOpj3JZ65VhS sha512-buj//NE959gftrBTUEnh0vvQ1zy/bZSFbcE1TJOpXbSppBh7OD2ETQb+ChR3kSUI12fvFSukZi+ujE145Tq+Ig=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-mCFawRdOCUWxxHWFweckMzCLU28IERZBUsjt1Tjms48= sha384-GX3NxbQDKCq5XUFB88MU++bw9dWe6322pZYyUv2uVVejDfwj80D23Zu8ouS+1XFq sha512-vnx2wkoJT2ThhnHq/1DJP0/Sy7HfDua6B3B3WB6P2m/aRZYIMVihyxmQK1TZWyBmYr2sQZNaq6qjNG4CcxiQzQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/ecl-ec.css"
    integrity="sha256-DUI62/1WjWxv8Gj9twBf/TDtlabEaDBK9+i0F7roqdY= sha384-KsJzmCm+/Bcs5hQ8SGzUcXzfsNQWrZJPdG0k+WnHx6G/l4DYDJJnOZMHYfIEicHa sha512-2C0wG4mJgmq/51UOTPQZFZgdsVArlEGUlYXAsXV/Q5RUutai/dM63w7/QgkWJVttXuSrfX74Qhr7FbepK3tNzQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-AuDWtLk1ezQxl+5t0D0g6ajd0NVa8QIp5hsQ8tbUCkQ= sha384-REA9h/yYCGz5PETIqiesR9zRi4u7LDm7ItVjPanXdb0WZodWqY0BcBTx1I+0thTf sha512-aleWm4sdZ42vsRuAWwBVyMQIEt0LHwV0jALxwmD1q/whCvagyDA3zymlEr57EuvHpwJ7faQMoN/VXrRnq7TnrA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-TemPNhnI3UwuSPLcmYO9AsNj1lVwJvLZ/bMkIP+JOAI= sha384-oKCzPz8D12EpqbEY2NmWLuIM6e/Wnhf9/0OQuDFJXdEpZBHu7mG9Or3MTRBNQtCo sha512-O5916p8hCRsq4FcjEFoi4O2GpKmycVBV9J25K6GW8aR/aPsQyPw9E/W3cSHVJKoFaxxuUPGbWYwbYFj6p7pKBQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-G1waDkkwYHPCA6s/WkmQTKYc3XhU62Iq82lcDNqWyPE= sha384-WKT2J8yQaYYfuyyExQcT1xMgB4zTfX98Pq5NHfSazQh9+lTq0UsUkYVGq0jFE3jI
    sha512-E5MQdYItnf4oW6FGMXWbWif+nCtVaMsAzIvPDHraevBq/8DXxghxYxlXCxfci0GdLxsVcQzn+0/e+YobDeLFjw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.5.0/ec/scripts/ecl-ec.js"
    integrity="sha256-z2/zKFwD8zLsZgq3y+EieZks3XcsDrQtqr1HAjc9km4= sha384-61TiABXKEooXGXsb04M6hUjMbPum1TaitT0f4X9vr37hiQfadj3qrCRkk/ZD4D7I sha512-WCCVUuR7/MlghxDxlmQxmeEx0eUc0cRfkNh7E9Nc2FZpfxbVd60M8hiBnM9jQLouMxqzyjYREMujR6OIc16P/A=="
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
