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
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.37.2/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-FiG8kCltMDFpt2J3o5RtUJdF2dhBGG2MZZ4Gu6yjXv4=
    sha384-NxUqmjEiDdJZ9VMp6u/VXzss9Oj5npTEUWMevSEiH/oxny4hs1kEk3bfQBUNQ7/T
    sha512-DnYEOFbmxQkqYflrpqG7+CEIzouwhUD+7bfXLksK2K4CqeW46Ukb/dDYEbZ6SmWNe3zlwOiTK9pieJlcelGerw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.37.2/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-xz1m/QP01GxG7mruhdY+oZ7AbYyrwj1biUo2ZjR793E=
    sha384-1HAbiJPLkoZo9lx2LUQgx4a+O1RAUSIUYBD7g9moG+GqQZola64bX8FADJAw17Kz
    sha512-lWC/f1uKVJjbTuVznQWyIoxbsFtwdaa+5hFQzDh3pGAV+Zc/qBb3DeHpiBideP2YTFldpVTfAzcTK+pVbkPL9A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.37.2/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-dg+mJ6917/DNmFdGEciGMoneB5Sz0Cz1sw9SByQhEYY=
    sha384-pb8P57rC8UeGbX720z1l4nSNjrLRsngvsiBuI768jwUVCqO/N29K70FvQkaM59LS
    sha512-WdnobymOmcCNJzLAJzLf34RjN0MsEs5st903lj8wJnK6DP7UhyQBXBB2vkvCOo+FL+UNzlWrWwgP5MtOONherg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
