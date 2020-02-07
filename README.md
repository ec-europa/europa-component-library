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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.23.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-MES+x5BcL5HZMzqk85vWhAEjROis9ghWhWXhIV/MqfY= sha384-9cWvSPfImj320vAWEUIGQGZm5V+oqFfx/LxLHCscfqoxBr9t3jHJE38Yz1w1q7/o sha512-IiKsP09C+ME5WYM/MYmA3S5Xh0B4QtXEZTdxGSDAsmXk496JFgsxZ2VVcnye6JTfMr0oXROUY9E/uD0EaQQEZw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.23.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-p+euqw4l1jZuMJduzb2DRZER/s/jypcu4njiVhOxlDo= sha384-BnfZmdZhiAywAtSFquEf94ykpCJGcyN1Dr+DBVHnPeJDCT2R3IhrGmdk7lDCmLTd sha512-7A4fannaBpirhK352zgOgJ029Qqz6RD3ET/4EFYJqkKibDBg7velbRWCXcMv7+rn6kpRjuWVzMwMGdT/oEqJiw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.23.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-fijVOAJ6aPNmpmrWbcpxqEUBWpw65wHusU4vFjNdt8E= sha384-g0Hoy7R2YVvhhTn6Rpu+Rz/3x3QeHYeNdEo6gnIc/LYy+kdH+q45i47qvyuAvwXY sha512-QvDOrQ99ErR62Hyvfq320quOodsCFJqBK6lvKRWgQ6kurE2gbk9qECQy291NKNnCtx+8KfEkMBp47wXUGD7SxQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
