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

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.29.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-mf+hUjhiDI/8oiWNjVO1ABwDsbPBhNXMdQH8keR/4P8= sha384-Qenv0MjnrrEqpF/ja5gteUZPehIJ5onk8R5KilLBqccjMwZfxeyIYx53CvA2RtN1 sha512-N7pUvVUJqPFtgepCKVhhPlkkkXxsTUDoliNR3sw+JZgMjlsTzNFIW6Nbd5mVHH5bqifb33aPFWSF+vvMU9fV3w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.29.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-OFf0a7Jm19S7L/tE41hLLhF//Ap/V0AwwW2dFlNOlVQ= sha384-B80GoUpLDld/sOA35l0miZlC6W0gqrF1PjKm03FCQTI/hfoLfj/rxwVWqnPfUEjn sha512-4DlhiTCwgzMhp3DUT/7OANM3s/8+B9T8eC3CpgvKWBcQFkrkZJnoK2WS9dXhLK4uE+CoRoyYtyQ72cqanUeuUw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.29.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-52JAehrFA80nZQNiHKQJVeVc765QLPoibxxWXrKc0w0= sha384-/2zwiK2TQocA/951tR15S3n5O1SN74l9lRhV3ygX/L/WPNRwmSa1P24bZyaYNxjq sha512-Iya4mt5SZ7ThBP4gUDoVURmP27uOHQynJoH3QahYuJvY3hdsxiceif7hu8Vlhs5zTeY5RMAJ0gDh1wjTnVTKdA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
