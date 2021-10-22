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

ECL is using Erbium, node v12.22.2. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.1/ec/styles/optional/ecl-ec-default.css"
  integrity="sha256-smsSMCyH5sTZU1Hdoc8MbijDXIVBXld3M/o5a/plfEE= sha384-jJQ4BDocADKqGAa9VFpYAVrH9BaPr9LR0cMCs6J9sxlQdewmL/0tOuTmOvm7C0jP sha512-8pyWeE8K2m5IcSIYjm7NVtF01E/LYo1bHHMk9hzGBujBj2H08eO158DDXQ/mnh7pJOemi+Js9PP7rgw4ZTbz6w=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.1/ec/styles/optional/ecl-reset.css"
  integrity="sha256-OP/85pdFEfl3SBAoNwOSJaE2GyPIyaDdDe6FpmUcxiA= sha384-M7x58gB6CBiXYIghCyBFMPrLh54GFq9IwqPvhmfBkMZ1ZuvvGbuzEfi7tqyXJHIa sha512-zGEjwx5Pfu3a9XWPFqoFx8D9UiebVoqyc75FK8lpfHee/GmYaiPr+z/vheAGII6y83P/Tk3+mnOr32d/b1NMPg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.1/ec/styles/ecl-ec.css"
  integrity="sha256-zVNTBVPKkiIOWREl87xoKJYk9V9W++kMEaNJ77ISISc= sha384-RlIORPo1/B0cdAIvM2s0cjlFtBx95diwus8ZVdXTPILgql3xD82qjmCiQp4PnmCn sha512-pIbOnSvROklInFbyHIhoWgw1t1SF8Mz01i0nbLg+SVbkhZYbt426ZJzXzg6vqFvdZHEwKxNTg2Lnk4hwuhGXUA=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.1/ec/styles/ecl-ec-print.css"
  integrity="sha256-Ov8zxA6wMGC9eio3r7N6TSI3qqmx4n+NhDlZS9CjO80= sha384-JyTYvuFf6lEeMwrrBYZcqcKbHBTfgiTtpjhhxo1Oy+VK1nk8xYkw/0B39IwxLYgg sha512-TTxWHZNBBOFXP3fNxxsrW1+E4+NXxy92JENta0j6ETBqFxVdhYzRUgnCM6KD+GGL8vEq2kNWeBsUzGvXTy7KIA=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.1/ec/scripts/ecl-ec.js"
    integrity="sha256-BMLNoBe4bNOF7rIBAEYlBOCmqs5WlCsz8r1w6sCtnXo= sha384-kxt+qF/nw/jBQJnf5iAgeUObA2Vjrq6tUe094GO6Yrme1LALgpozBrPna8y4WNLE sha512-RGCb6UCHLHpYLllWax4c/o9pDL5wlU0cQeYTrxxNZDXkfo2fEMM1TPf4JkLWukWjcSSrsptys+soztJRejkxPQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
