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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.18.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-HtzHUO3ZJyE2JV+3kOa/2jCTSWtCwDK2OoPXkd+Bu0A= sha384-SQXmalhs6Gv7tyOax3TP6I0ZSnXTlg9gT3dGC1UpIynbc7YivL6GBqTho51flc9K sha512-SzxVNYLSQJ7MAsdGWw6LNTJPV2/Pxd0adFSyapg+XWBJvyVG0aJnJqQitFZMAgsIKOkor2e4SF1awLdgUU2mDg=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.18.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-H5kBHR9KRS4qeg51PYUDNa2DYKO3c0nGh0T9cTFOMYE= sha384-A/T+35RTu1EzSNsUX58hvxjhY5NCwUqcBvuO4P4qGSGdYBDrGANXehx7geCi6NFl sha512-/lAhgk/DOzS2UT9Ebn794sZzUStVzgc7ZQ/DXJz+7RgvBorWBMhoIYKvCIFh6PUW23MFfNo+a7BohinEcyBy+g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.18.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-s1WkAZrd7OXFfO6kUlEW/TR1G9WsmnJXPRbel3R1MTI= sha384-0hTM0LMGhYdr4PdGOpmwc3mSbeV9JbJNkXY9itzUniXOEM+aljtbshxFQ9AmtfDv sha512-17LE/oBp/8Dzi23GlPhLh6rnjLn/qsCiLAEeqkkacvsVeZX0LBUG/AAC/JdPSx2GCnfQNEIpKnQLgLnF2YEgZA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.3) - [website](https://ec.europa.eu/component-library/v1.14.3/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
