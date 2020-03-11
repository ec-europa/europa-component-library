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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.24.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-9j7SsICl+ZX7Fp76FW0ujTGffmyeiYjozFz5CrW8cBI= sha384-ylCAZZb1gOTwHIcxzpGsGD7dBgLgo3+ElksYZVMRUNEai06BznLjw4s4PygTkhUR sha512-NT5nVMJhZeIXxAs9GpbgD3YFbW8j9IuuI2MGUYrIcV9w9ZGK1RiI53UX1B3z2hOGUq8EsVpVwsd7tv6yoISjAg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.24.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-045tJgqAj/Roq6CMlkNAeuqaVwsVkgxRlx2yVAwJ+K8= sha384-DRy0ViDtsad7jBr29u25O6IVB7x/ioCf+NFF/VYUADAqtglqsdzgyRAI6Ws2ditv sha512-xLJwwvWHtB4immzoa6KERTGK5tRsYg1+jlFucj3FNfbiUd1yanLTVtHvpvM3GBYIo+I7Vk1ks1rhnkYh+KEcJA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.24.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-Q2icCzfXqIzarWF//++9auyORJSdr/5R2newRbUqAcY= sha384-yI5jQ21QIzGHSfKXItEmh67/e5g91zjnd+UAmAAzdBv/XaCQC03tMWTErk0tSpKw sha512-CHeXGc8jzWghhq20L4P9OhLMC1LfBai2Xh8+nV5FGvyP8ALCSU3s1bdmoHK0Ve2L6RVr/e5gChZuTZ7jsi5oug=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
