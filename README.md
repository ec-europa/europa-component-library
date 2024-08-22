# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 18.18.2 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v3

Read the technical documentation [on GitHub](docs/Migrating-v4.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-lL/62RKMD42E1Lwo2cI8KWz8CwCF3f8Ez94LPH/GaOM= sha384-S4R8wjMCOz78G/RaJv1srHGJFMz8SpPXX4bjMBdwXi3Ky11rN13S/UopcCsJq8Wi sha512-KrY6SzaRsEPD+XFdfZoCbAYcH4hId1VFn3NXq/QDYZaNFU9ZL/nj2wL2cuxlXfiaBxWR0+c/5rBRMRR5S2FVMw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-IucCHMdHgcky1vycFSQfSNhA+be67fFLKcg1TM4QL20= sha384-0Mp88DK2+0g1YzBs4IynyV8ztJZv1f3+Q+Nr0G3x+l8nVf+D+IJUf1oM+N/Sf6sm sha512-uFcPDRl3qLDZ4lau46yOG1BW7O4sO3wuhWWfWDXzroTh20O61Tz8b+ezRtGaA273wkHqJWDoVsYmV5zcZNgk6g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/ecl-ec.css"
    integrity="sha256-U955Lcm+dDWFsolPCjjfhKTE+rbK1bYCdAF2ndPUJ40= sha384-Ytf3HkuvZwPATJVpXD3/wMdTrvv8xOkQknxd5Zw915BM0C55HBWDww/Ye9FZ/7pj sha512-7hBszWS4J2u1nvpyGCwZurcchBraySGKkh1soNjxK0Fc1vq2IcM+mgjvsuqI7yc2YBsOiuTYZBdXVWuuaDKspg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-5JXXd663nYNERXRbmB+uWOAj7yGlKKd8Lw0lgyzCBkU= sha384-dnOMBGp7wNWvaaoamRm2g9n/AbTjX2uJg4bOCEaV6qIHw1xNY/f8Q+/YSvwFCb6u sha512-6ZC2S5+HQ1ea+u9Adbk1TeyoW8azacJe5zKwczxtxagtxj6KY3oBaHgiQIbhofCUNKeGjEy/KM7r1P6PYwcfSg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-1ZhEl/oUDmQq+FLgvyhxCga7FIrpBBbxbhtTqKMmFXg= sha384-3QyZFKR/OKXf/yewKz9U5vA54VaPfD4JBCgIllHx0OKCqebTS/x68pl4XkrDLvV3 sha512-jdL4NHoeJeoLGi+vVMISHBLCDvGWJ+Jnye1X7iguiU0VlSnD7QpMrXet2vqhnez330Ct5PV4cplfvKeIXokMvg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-+TCn2mnm2z9P2fiOymwjC7C4m/nDLEqAlC8mfTo2b88= sha384-1FxbzQnlUYfclbMJbx2h5BNRIrZxG1hSDWAZboGRAn3YqXw93hp7VrIajgBkCGVx
    sha512-QfH88gxlmuJcc71hsnqnqfkP8FAQozWYZ1czh6+LXY693PQMmjXrVXbxFhG/5u83Nb4phqDtrz0+I5suYl2WzQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.1/ec/scripts/ecl-ec.js"
    integrity="sha256-ZS0k0KlvZFJ25ExfRQYgaAx7kODGCpuVF6ojCYLFpXk= sha384-zkZYwzov5FOV68U6x7JVjYKVthel3vQXTESTtWI7hKPUn9Jol0tbWpHNPH3yHt/j sha512-LWUkt+ks/W57Uexge+RHzX5fy8q+F16MZC36qZNygBQVK1GGYZt2y22fnh0TbAmRzbAWC1i+YeboFLSPLfyqbQ=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
Additionally, when customising the date format used by the datepicker, in order to get a consistent output, [moment.js](https://momentjs.com/) is also needed.
These scripts can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- moment.js (https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js) (https://momentjs.com/)
- pikaday (https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.min.js) (https://pikaday.com/)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
