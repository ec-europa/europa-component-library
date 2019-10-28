# ECL v2 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/adff9a95-45f4-411e-a148-fef1211ac9ed/deploy-status)](https://app.netlify.com/sites/europa-component-library/deploys)

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.14.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-v1CTxn+z7+oVPpYRmw8Gh8qapgo218h3/140B1nzyDc= sha384-c0RBCTUiD8yt8YwK3/NS8SQOc/zEoG5oTbCaS2uMFM4HHM6x5GKJxWrHTS4123vj sha512-KHvO0JEeM4P3ngZP610J+9uUbP+M4+JVm4g0Bc4IGC06NKR5GG8FD7ep2HlWzMoa/E7QxgLvzckBmkeFNlOPZg=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.14.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-Oicmd78HPlXNgaBKrj/GKr21oVIuZuMAj7ZiBwa2LrE= sha384-RRjQWYP4a5Ap8F9ekTg2rjkY3RCJ0Cq/knH2sUbQNuILe6A9nPUHG//d2qpzcaai sha512-d0vldNfLozGMEqIkk5EAAxY4APXdMrxWaQtWhiju0KOOrCCQluLE8NAnc7gR647ejQfekerPjJQKRfCedWpZNw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.14.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-ddS7yILqdOs46feuieCI4JNcIjXf3fwqgYtdaNJlTTE= sha384-zBsN3ulpDj5Xzs40cYPxJ7TLzRq/ClFYbsXx0HtvvmzGKzP89lziyUgBZEZfybvS sha512-7bihYFYdXefaZmj+6WlBfPWGRA9Piu40Do0cBGOjzfEknLhrWTJhncChjEyrS6OSiR9bLcU03vZqbOZVzNDKxg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
