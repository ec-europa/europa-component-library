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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha384-TCdeftr8JZJ6U2OPrVasWqqxr1+IHRhDWfyNz5NdVsWsDBIsrrilyEeaqvwIzURE sha512-MneBXv2Moi1N3NTUjCL4Jdc7VLjv3Eg6f6Se9Qh9J05IEn5xGquULy/S9Jg9ttdwwvCtu80rxilnyF0u8yLfAQ=="
    crossorigin="anonymous"
    rel="stylesheet"
    media="screen"
  />
  <link
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha384-0wiHCN5l3vO+CQnypH72KzRfbTbVoQ/k2aIcjDOiSINeWL8hpMt7yP1pb60tWqqq sha512-oTclNxvBg8RF5HqewlSHFeAzBRyTt5Kp/iSY3azY3RTHnSyKl3rNONk6yAtsP0WlS1xaBoc+p1GzFgl8AAwJEA=="
    crossorigin="anonymous"
    rel="stylesheet"
    media="print"
  />
  ```

  ```html
  <script
    type="text/javascript"
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.6.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha384-Jw0ict9Muw7wg/taf3NS0tR4pITlMDZ8w0PiHvO5LgjNEUMLZ4LImwP11Pe6hI3X sha512-v7qN+34OMSCHLw/X3dNSZc84axtsfq6jNHsANHUbD/0mMQJaWgla3sdWCE5wG9K2BlgrKi0YV5anQuzCEPsKsA=="
    crossorigin="anonymous"
    defer
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.9.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.9.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
