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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-YSH1aF+Ly//4S97LMvhQ5in1PTytDihyZhSAJLRWrR4= sha384-JJ7QS0zfURjZZUM4+wSUJM60a+QbS8Fe25tEsydagpYF/wgtkuE3kP/FJJFjapKv sha512-gykhFBP919zWDXgAbhUluOmAWLLWSGblFX+PGzQ66Cl9o4mu4DqtMDjIQz/QtnZoxZ9/hELvzDNoXYiKFf0HsQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-xgCVH9dM1zxnmjE4R7qyuPqt7C9tFkZ8Hof5kpuze+M= sha384-PrurX5OvropR7qlXiw3hcfo0fXkhy2iVUpRWsqp1tYPO3jgg3K28dJOqJP1epXWS
    sha512-CA4qvnLZOcC8LT9Ax3W/Saf5QUNCfD0vI1oqTNIrOM0SJuwKbSRyO9u0SoYYCm456iPbYcn00QezOD4eVb2ddA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.2/ec/styles/ecl-ec.css"
    integrity="sha256-yV/nei2DaIcn96eEiI5WtCXHmBcHly5WM6g3OboZJ0M= sha384-1cPdv3al7CpFza2frxJHEtqgw9CJIsFBI+HihtuCSXcxBKkoTGsFAu/cbRn907sK
    sha512-beSHfRJqfrA+jpaHaP/WFcAtRz4zYE42PoTiO7otYwk6uv+cNVx47LCPeebkuuuicVfyi6bqKfqwrnFxwVPryQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-i4TGxbNUJLCyXRGODzYcvqEt1H+19/EXUCgkPICLQsE= sha384-GwToMQW4RocYZ/v+iYsU3cBii4r/kwte/axyJ+brwMU28fmEYs9Hsr6jxvzsIesi
    sha512-mRpINtayK28NAUAwuvGQijz1lbfU/EtNfF5R8sX31N7ZJB/MLONdaYQY7w3/7aHsFWoO5UvEkK4BrOd9kau6Tw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.2/ec/scripts/ecl-ec.js"
    integrity="sha256-YQz0f3DhzqVK88AqMz8fuHQZN+f//0yhF5Ij53FKc8g= sha384-E+43Io8qhqrwM44Xx+IbKPpxviu2YNaF5eybp9+wRRWwZo0Gj5Qhpj2iyGW7H8lg
    sha512-K5haV7+X18q4ntDZ8Y7qf13lwgerVaoE4zYTAOHFfrDIYjX65AEaA+zwOgtkzcEddalmUuH3IaDKyMGn62VB4g=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: moment.js

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) which requires [moment.js](https://momentjs.com/) and this library is not bundled by ECL.
Therefore **moment.js needs to be loaded or bundled by the application or website using ECL**, depending on the needs.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
