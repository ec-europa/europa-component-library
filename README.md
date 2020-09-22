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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.1/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-lFlORoktSiJFD+F9nqKf8eS9PNTWJJJqq9JSbtku82c= sha384-TPkwcz5gVaQqYkH8f5d1iIjZrFN+d6GZd3aQ+Jw34lNgARgNwa26VLn30UlXYtY+ sha512-2NFadN3YuXkRRcfQK9lPZohLt0b/lq+wSiDoaE8cc/rPqClvYjbECStnUhCPzuBa9wwiMC0ZSHYsQHxMHLnoLg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.1/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-++2IPM/JeybqJsBohim8YdYoK52Py8sWnOg2VH2wCvI= sha384-O33+KA5fTaNz1/JsjnOkD2dDv/Lq0Uo4JsATtffn7p+ycU/VTqEtCTe6h1EVXgCH sha512-SNvBmEDBHL39oZ4fPTaaF5kDO9RNE2U2ZXM2B44xnEDxeHn9w5w1ilPkY9BLhWfexg1DbkwOBN+1kb9BKrm8yA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.1/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-lhAhU7bZs5JgKuFp0he8DLnFxfSlee51MuH/kfUlSkA= sha384-nEvImmNboa1/KsfhVoDvm4B3zqdAyR9R0wt4gNMoYR4ezqy2abVPF8q1RvJV9uTo sha512-fIoS+qmcHte38L3Xntd/Cbi3pBjPrUM8DKHk1qCtid3VZufb0HozzQyoQlfEiOOTULhh2CBhhy7jFb4yyeV7JA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
