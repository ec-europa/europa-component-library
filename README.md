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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-GMNViNvrmSgaQbRqpK1hfpwaHurGJ3darX2KIa+BVGE= sha384-qyiUXuE1hDRz82ifPaR038pClJSpLfz/Dpu8hhAu4Az0eBIQ1qFOS47h2qT8xHDm
    sha512-XRs+ZRCW2GJ6ftWkW9ruYktMpyhBD3EsAryCiIdHgG7/EUk3HRwwjoMMSinzRyvtHaAtNfV+tOG2C8fa00B/LQ=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-a+HUOz0i7nRF66uaUbChhT8hxeZiJkRoctq2es+aONI= sha384-NjrehZ4Rlgo15rb1dBXeLbwb719HP77DLIeYymKEmBPV/jcOE+IQKEaejaYh25qR sha512-srNf5U49/bVp4CHhQSLg8ZyPxXOqzUKkIjdbp3wbAX9YzRNS7/ygO1TARdsxeJVMu+mXwphCfCrFH0v7q7RMGw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-kPpkqtzUXgpXXtD1OmeU5sSfuymh51OaXKhvBkX1KjM= sha384-H13J7il2zpNjq8VsqOUGaasZztv6h5pZoo4SDQHhVcknDrNmP34FyqAIeWy0USI2 sha512-60XcHHW3ZzDqrXXnAL+a+3ML8P40Yb4Ovu3MHa+/s9R8wEuHuPPje7WBQmhs8gEc8k/GmpRisPp68M39jCjCHQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.2: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.2) - [website](https://ec.europa.eu/component-library/v1.14.2/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
