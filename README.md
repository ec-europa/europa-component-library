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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.11.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-atwsgzfIcyn4eGZbfFyEP1kvu3j67ADpIJyFmiTsdi0= sha384-ehSSvAb7R88CNLkWqvTgYesW5N9hHcQ6YQQSgYCuqIutnio+UGfSNGA4HBKlmlIS sha512-/zy7Z3exQbOy0J2fBxuUoKdER8Ovx7BC6u12N8+oHcqW7DliLyWOr+B9rW8dW3As4XaE+CJre+WjEqy+ZAmm4w=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.11.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-HuBMK0KPOUWqFqb8IEA+9M7rMDrnrZjxXQYBBZsCVfU= sha384-FM2+s84wZ3pHM2aedY5t3uo8xuxOYwHJ9BUFndrRwJCl0EmHtEzicIulTwgfFWAX sha512-R71DFyLC4Zew5Ht546vw/3tuO4m84osTGlMdgFKAWwrvDRQdQs2eETrhyyNDlw0EegG+Z4g1ypNyX3YphDX4Zg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.11.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-aS2BgfdUSOJkq4cXY6F+4Az6TcezoyjKfd4lqAqZz8o= sha384-pIAT1lpGelGP/3txKW6QfLmrZlf7vGliP5S7uXNRN8PJbBmpHe8hIVx1KA+Pxcir sha512-gL+ZVpeWmTGgVZOXhjHfo0Ld+jIfAz0PcKo2rcIWxHRf8lbti7HKvcA36faj9QCHsIXqHiNsvwro9HFf088DYQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.12.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.12.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
