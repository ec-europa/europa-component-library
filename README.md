Informations for ECL v3 -> https://github.com/ec-europa/europa-component-library/tree/v3-dev

# ECL v2 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission websites (hosted under ec.europa.eu domain). The library contains all available components which you can use to build your website.

The Digital Transformation team (DTT) - a cross European Commission team led by DGs COMM, DIGIT, and DTT - is the owner of this library.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code for implementation

## Requirements

ECL has always been using the LTS version of Node.js. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}. Here's an example:

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.38.0/ec-preset-website/styles/ecl-ec-preset-website.css"
  integrity="sha256-PwQ12XC/4usL96v8qiuneU2XOPZgZ67bX9tNBNJJakA=",
  "sha384-oBed+os9urcXVZdiqfRuqEeSsDRlwtikumljxIOHoqh85M2JAbSNu0jSFLDQ/yzh",
  "sha512-rt0sUd36rAzFniGftOMkR0mSgGTx2WhvyqeHwRQxYAE7FiPhQDPU8yZDZ0l+1Cn20Q0bKQvSg3J0lpoUsXwOLA=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.38.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
  integrity="sha256-HQD/5x5TrwRe0gpKYMtzCFNLejq3HupS/ewLXpkoo40=",
  "sha384-EETXlx0gVUO+EA5p23VtKSnaWtlaJDVWAkYw1XtgUEjShJH9FRSukSc8EKcREogp",
  "sha512-QysuHUEzZHvz43nqbYZM4a/0nu/AtldChsXdhYoAld172kaBXuqmypW21em9MZyMJ4/iIp23a2ifeZaQZXl/+g=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.38.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-L0lSyPUTHTWwsMF/Dbx4CwxOS+iVtjX1gNRormeosm4=",
    "sha384-bRZrVJpKc6Sk//7K9/VyQ9jdhXj78GoLQky9KUCwyNQ4j0qAPM9QORJh/PXWRfKy",
    "sha512-J96cyekjLqw1HVgfs0DIYVp5nJfMGn3iEod22KVTcoa+9AWKdYQ1GkLnI9cP6njHWRu3/ReMvrELi3H3/gr2hw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
