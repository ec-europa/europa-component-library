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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-EYd2Wjuq2DbwrwzCvz08qugHd+jd88PNIdRluaRiWbg= sha384-qK1jZAqMhULa5XBmv4yXxEOAEkpCyas6Og9IjTojmZ4xdElVxtGhT2uhYAM3h5hJ sha512-QwP/Pdom/cSJ2nVv2/WrLeyorMcYPkxwrJICdrk0H85FMdmPbMhM8grHa3RT1VMEC1p1X7RblYQZdOBbjEYFPQ=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-4p9SAFnHwKlBXsCgWQMvJHtCkwbzeiLPYp8AVqHsfcg= sha384-pQEiZQlgsRva8hrsH4UIjLG1tTpV4g0umE2e4wNksw5kYAh17xmkoDwn3KsUmzSC sha512-92FZQmmnsL20WAxWz2PAoXLLhlzTfzEOyT3CRXKlVPQIlUUSMKVC8e1Hri5+n37qAQc5/hIyL0nGpUAbIUhALQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-gLSP0H+5Lt/+qHUkQ/GDq91UJATtEfgs+FXY41eiHPc= sha384-rKjes7id/ih0x5+vABP3qFjL4OAsfcVQ3/qmp1xlQBYcfxFxMsYFHVbIYX5hIHh2 sha512-bDiVIB90XqB6JNRJ3G697lcVe0Aeygd+q3dGsQNOgcS5mjTdqQJ31PPvTwlETKGcaqKh2cjTNha9w5fMY6o8FA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.11.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.11.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
