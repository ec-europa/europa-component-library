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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.30.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-pwqQpUU/mN6twUSyWi4rjmfEsMj5Bt4yCTfJzZboazA= sha384-7Hb6mgXxgY3fTn/ZVfj6tdsI/xp4kbQFY7F6wxx1/d3FDJPHg+njpKVY45u4FFEB sha512-Bd97LwvSYztqo7LC0RCO2768eMJe1+oJLnj3ynNFMPIlNex4xVM4WxR3F7bDdx+bYw4QZJcbC0dDS/WRTrrfgw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.30.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-x1llDzUefOGpkbENKHFdM0IiG73Dm/BY9hKpXBvdQDs= sha384-Rpr5AqELcID2TrCmtY0ytd5LBpBvrVTleX5nBhmzZo6BsgGKX7lCUCJLThQk9+db sha512-XQjUwR4ONK+NoLG4xa9dY8d94pXdCqH16xaMxfJ76krA0PzC5SZktOS/+L+xXh4CwvPm+SODmL/FJhb7QORmcg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.30.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-imo2X4moEg/iChL8dgcgP8/NPgo8H/f7m44TI+SLSN0= sha384-iuvjtSYpR2jnwV4s3u+2WGJBD0Te2QXjaSnByMssi4GwG9X41vpdgQuIGB7yuV+E sha512-RdUylBVVDfmbStQVzmQk2ylM6vSsEjxodpWViU+84NudYuBlz2iTocIworGiu3wc8oKVCUfx56yR3EWFZCuD+Q=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
