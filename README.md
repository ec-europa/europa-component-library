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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-a2UEIrJr1UxozM7EqWSzzMHFpwxnT0PictXOCNO/4k0= sha384-s7E7d8gQNYLPUQNK9cdXTTGYLe+t5S1k7MVYJQcIJjSp05DGI2RRBKjko9jHYFwc sha512-pbnYmLc12k3TgUVnKQpyEF65R00ZZlnb5deiLiIoVWx7YpYxoxdELc1dKCuG67hcjL/bg2HG5mwPQkNPJuyW9g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-xLeeMDYbyryc+gpIRve46A1y3i2xQgtf9YUYnnu9cos= sha384-eZ656fTAZixN40E9QyH53OPzm+Tilm01OK6OkbSuiwrBujvBVOwmqK+SgRVKR0wA sha512-OOkjMb9mfm8EbBxyBzQByE4xnh4FHy2xG3bOsddUb8gxgGqJk884VHjQTiuSSvieyY0QDIbmGDg17kxE6R2UAw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/ecl-ec.css"
    integrity="sha256-ACAVR+qgp4ucrOT76LxC3VEZM13HJVtOhDqI71w9g4s= sha384-dHOayu8i7BGAKQmn1W3jz0jPNHU4PN04lXRIWdGkB+xBV+oV3ST4aZY+saaTVeY+ sha512-yrB3qCC3nV0p27+6Ntun2bGELiMNofRF37/UlQ+qEZlwNERT46jDwViQa3WakuETGF9fqYZPkknlfO0TuYAbBQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-Iq/kzGZi5zWiV0hEOk+IKhWZPc8UGdEbCNR0GOVX3d0= sha384-uPeZ2GGtL2xROoirHJ7C7jPtufSPVHYelWivcnJmnBneuQnTepIg76zxy46RhnGL sha512-jqSl6Bbgb5AAumMef7jPVIIIQxc++cmGoHIVcEC1LHvUEpaT+KwvRhYYbzlcU15gTo2Xc1NIo41q0iF7NjZgOQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/scripts/ecl-ec.js"
    integrity="sha256-ZkXW3TKcOqpqgvEbP6AW5zcjqihqwBYLD6nN2zvun6Q= sha384-3wM+6juqEbISR6if63KsSAk6xrNwIRYFgDCBu+6vPF15hN0Fg+tTDLUkmAxVtOV0 sha512-hvSztQt+GFzLJyr3NDJlKwzrADQh1WGsIgDY+hWI3a82RkoK0+o+De5D7zaC5p31lgEHTNDKzJLVipREXus3Kw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
