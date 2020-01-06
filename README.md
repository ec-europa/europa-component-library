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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.21.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-QQM6bbg1EYAu63Vg1OR/KnFumDvBdRbHgyfMQsuzSqQ= sha384-8BHpQCUf9+UhuyFHkEQNzWTrPBuTzbYo+UnrnC7jWbDdmQbUaTegLjPGfaiUQkxY sha512-x+Te3spakRNOlkkCE6Nj7MFHPygGjZuBQauPR4DqYD1jELOO6A7MPbj35NRZXRsjm7zO/v2qPIphXW3Kg7c9nQ=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.21.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-mOgPDP/L/FFSOnDIkcmYXil7tgWnMzT/0wCKT1y5Ais= sha384-2tSUTs3khvGZoBzwSCGLey3NaS3uCUwS69J9BV8ubD6k0XdmF86Jqleby8tlllsB sha512-BXTNw6pAABpCidpPwd/ubWLfwzfEOAd+szy5Kjlbegb8wfahVhOMpWv1VbA1jSQiM3jFrJlhNATJavrN5Ntw9w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.21.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-zvLi1pzsO5xZlkwuzCe0G0u0EqIYQBAaGnOiqAuONfw= sha384-DL8cisoubU9b+4WpO9G0VGJDQ41J+vjA5eAfFLh2uasjFS9Cq7dc787dtCt0NQx1 sha512-0yTwf6D0KE++ozVRZqEBxdfN55fWb7bK26uaoG7JkMEUX5F5WMiewNK8m/yt2hoB0hBPQqXvOxILonsX575HxA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
