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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.22.1/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-O2YO968fs5QpIydvZEvxHXF7GmN6Nr1pRknnP2vUHN0= sha384-KzGRNtbfRziwi3mXPwtm9tWfRt/F+agi7yLHfsoTOirC0pwMhVbhjsGf1ep7HTyf sha512-xCswl9OHj73GVrzV1azfJ1PXPUEk0PqkjQfSOLWeqOso0KgXVvJcWTXcmgGKsd+TNZKz83S2eWHmjoh9YN1saA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.22.1/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-XP8Y1MY+aeKITmr4iinlHVCFdCArGlpr93GLIulsx00= sha384-b3ggdzKvk1KCNtOmlxY2Xt9a5CUOvTfdZQ9qOD8WfQdr3NmWWwcVw0m56yzE44xK sha512-fIkdDS0zNVArk0IFPxR+xxH2KqouH0hzx/vNKZdmgbyt8f34/4wrREauSEnGzYeWDY/Vu5kNZFG2r845fkMKMg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.22.1/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-oPa705p7CdEPZKs5PSSBPxauqmIfZuN6DUVKrUSisCU= sha384-7GzER4Y9wcomcCFWC/xZmp081yv66h+OMSVEEUEj1Y3SF4+Kw9wnAB14Cg2ubSsV sha512-dBq9V8Mlr4CmMpk4yWLcxbBci6PXa6pQ1nOCNLD0w20HccV/cPm8ThqbXxnd23bpeT4IqvYsDDKZHmBDqmroug=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
