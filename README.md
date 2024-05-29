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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-u1X+Cs8E+jgReOLtT7pnecXGbdNRo7mfY8PVmb7mwVI= sha384-ByPjGFURcmfRjEeAQTPWEsivJO/h4SX3L6ccVxvht7SvcE/Uk+HllEs31n4x/AKh sha512-c2pWlEer19xHWm+NyMHkrZkL+hc/eJD0DAWCfK2rULHs0spp3SZOysjGzGj2Rn2quL/6Y+C4EiMahJiloh+MzA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-MtU4YWNKrkryvhRoTvWnB8iRvix0RG94MJ/LpVVu6ts= sha384-OseKGGG5NkG8+rIQtuyzsGJJvhIubCxGfQRNlnk4WDha+QvGYnRSEa6IrWcIs1i+ sha512-Gw6YB2SCq1SI6t1NQ1vwN0EY65b/7KSlifJw6W2okcQpRuxqZcFh4MfOI8cNFmk8Cj9E0ac4fg9WwJIkhgafcw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/ecl-ec.css"
    integrity="sha256-KJe8clCo1riffcwU5YFaaLwuZSAVVld4+/+qPP8Q1y8= sha384-lvWvzGzcy6FJARc1hjs7OgJlR/la6yrwgOQgbnGdEy25tYSwXPt0w0YE2I1Iv9gT sha512-Nu0K+0b+BDjLRIVM/FMcyNx0nzqcYVIEdpr7qDJkMIoruCUZrzMoG2iwz7ble5oj9p75bRX8fJvzmZhI8xNgxg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-dtR9xaFUnu/HxmV0tT93rtw5Aq+I9R71j+bZA1i0rLs= sha384-G2m9s3ujuog/b9XVwHLHhjHRGvd9D+f6hVO8EqnQGLxfHaRGYlGR56I8vUbikKEo sha512-g/AYu0TuDIcantyONPRiLl5AynVJTY4Gyw+8NtWBEbSk1zd/qfq0CsmGPqP+pIRyzeaaMb6DqqDVbSCYTeBfuQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-VL3JXdUbgijzXCdG7fsZeBpzAxtVKxuDsA0wuSclsAI= sha384-We1cVUNcgu/WxVW6gcvwGxWg+Txqq3d1ihu9UtZTElmoIrKwVxlbIN2j67FvG16F sha512-W0fxcSvmRQugP9jjWRIdmXLzZSriIuGhDAawWsqjgXd6kbDKVSXHu2fLp1XXJ8SpjTY77oljFpqivXhm47gCrw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-A6dWCR18U1Gp0qOS3xmeCbLqIGaA5pkS8gYLTofj/h4= sha384-jbRER/qF+21q8NrrDv8dzM+Cth4eujp7z28kJbZbpei+2SK3asG9gNrZH2VrewsA
    sha512-rr2h/pRTGsaId0OaGbiIEZfu9JRMaVh5dBUNwjQKZLIFj500mFVDvpH+fwLETmdqQ3ftU194o/2/e8tuQ2PHBg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.0/ec/scripts/ecl-ec.js"
    integrity="sha256-q/U/zjHVUKQbkS2siOIee9hyejUTFoqm9V4qtXW8fNk= sha384-3TIoVoxb+LM9FHuNc9kYUX7oWFSDCb3Ge2LIdNFNbeviZX+qoBNZHAU31P3OcbdK sha512-tee8a4AdTFrDg4SmWOl2FMgi6htiERis4xYJrT6c7H3mOJa97jmLo6QT6CormPHNGV8o2YoGR8VjBeyBnOEiCQ=="
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
