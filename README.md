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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.12.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-/sT3apQa2GaJ8o90vDVyVYWCWQrbgLnquOuwe0CSwZA= sha384-SjVsHwST5vXRVSO++I64bmZ67ABq3C0mcyDNLBWt1Y9OD2z/dkj2pX+c2+Y/FMUE sha512-hfyL0S0E3Qo4/wJ8cxiEhi7l1yYNSq4/u5YRMTdEjPa5/MAB1clSqPHtgTI3YtnOdq4ewu3BkmGcd4VI9S1IUg=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.12.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-Jc39hPNlJbxo7m5wO7Fb23BfT4VX1PYMi6/fxIKsHCc= sha384-GNmYY8w7ypnny808T8ZPnm5TLMoMd8ADObKPZ2gRRCW967JrMqDmpsHF3k0i/XJQ sha512-Xit5gQZktqSPrucMNwVTHKcJcGyFbrP7F1oMihQDJ9dDdrZALnw1LrUcxCyD+Kb5SE27DfBwLzPLnortfZytyQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.12.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-rXNGwt2MQ1k+n9CvL7I13sWakQl5t7gJhYKseynWX90= sha384-ajZqQ5o0363ZcwzjJ1vV0yEKaO6gzWAlD6L3O7m7iqBJPnddrQezp5oorZ1/SlpX sha512-R5maBtyEu0xkD1sOzT7AfB1sHXGWyKQth0WPUm7+qz+iwG2PFu/XDBOBxm9N52/PbjvgVQKM0pj2wfoJMvHj7w=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.13.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
