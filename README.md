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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.27.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-bwtkvW7BRBAEhEEsFE/ebr7fkZvb7JOUrXuZwKxCZFs= sha384-HCcnCPOZ+XvTV9wbt8WxhQ4vnZttzmmflvh1bEZPr9z6RgXPPhdEVGW4jwajw37V sha512-WHo2OIEwQkCY8PYQ2w6tmunj+6jrUzOEBUpLYAOTZyGzOWFrT8pHmNrf7ELj+WX7/iTTP57dWASjWG5PREntqQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.27.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-z/sMzUyVW7T4w7amk6OYpCzq+lWax/057gNJtaAZMcY= sha384-pCXoyvk8WHwIyzamFkdgOBzrBaM5L45RFOmajtp6175zkSpVHIxn88EbJR01zf8m sha512-xnWEhew9uVBCIZu0darcSR+eKBLMpCHKa4vmhfrToZtv2X6u7jp9ZHb2EPBstdG0HAAMBu2eDLPJoKsnfVNzdQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.27.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-knt02XXQs7zdlJu/OOHAh0tF1yRqyeQ3LdLgOV+rZOU= sha384-ob5Ph2FIGHpIbnCAgc/qG8HsAOwt1X+Vt9XfWXc9uJuBa9cVNJcIKofgBHUywSQg sha512-UA8/K8LQ6Jzna2z8bwFLdPl/99Du+AqeyYTklZqvQZu8kvzBp26LcoLKypLn3AhuqMEBwlaWCbRBsIs98tPV6A=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
