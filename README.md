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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.31.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-PRLtz47AI9HEQLXWxkSKz1r3KPgihS5tiwFtViFCt1A= sha384-+/o5cjGp7sMJZmbZv0pd0KBDYVS7HSM8FS37R2Rnimv2K132MMdYQfNS/QRvN8j2 sha512-c671XHuEaRQDTYb1ZYhOL6vGbxpri/JH0nzFZMIgIaI+M2bnYfVDg0LUU7A2s8AcsMAhKbBUf6ejt5VK1wz33A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.31.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-6ueEEoNbkNFNBUUOo+gOp8mHNOU3sEktRIIEdh4vNaQ= sha384-Sh88gB1fNabtxtWs+tCkdC3uHplMAQw0GN+TCT1gw/QYeHD905DpkubLAq6vZGrN sha512-xqXmjyN1AKqJhADVoX/S3e6BEEmJIRO8mS8jSYnEl2TytqvfA1tOcUnP7Y1mTGPtN8EU6zJwPxTy9Trra5UILA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.31.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-Knhkp5N4gIb1pXddW9bnNDvqOuTjf6u2ZIHjfget5As= sha384-AZUJdYZ+26VqGbvOnmBNnwsGpkhuOqL7q/7TrA2q8qq04eWyE+si6/xTP9M069w5 sha512-EARZXZAFziS7N8rCY9nnP+PGH9q1PnyZbRslAOSSJSZFh83R+Wgm40v0XDXEX9xoLOZ66OsMntXWKi34QkHO4w=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
