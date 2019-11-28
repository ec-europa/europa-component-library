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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.16.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-7kX/h+SNydEhSktvx5zZEBWkmhXqAdOIdwhiyzDZ3dc= sha384-v1Dp+eBId2c1uaHM5Xhi8kfBybtJBdnMRhXmygq1esnZzrhVBr8hpbDKn5LVqRBD
    sha512-XAFgclwSUZyX9oeXGHEs4OTKEGA5kcRflFirjJKTUolAcR40EPeR1J+hOpztCcvDJ3f+j9sP1oYBANF4SHTR5g=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.16.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-WsUuOhKXXO40felqifdWsQ5YOLok9xaxAMokcdQJzlA= sha384-zSuJUBQ6PHGu6rvdRtMXf4wfiFC7olOYqcWSVUztLeUU4mw1SUYAQibNVkaqLjf9 sha512-sCPf86Sb/516BD0uIIh1fkQYTi2WOwr/DwUszan4IhEao+bb1LfAYJsW3zdRS9t/jZvr1JVlq6Mwqp8eht3AeQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.16.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-9hOg/MMiAO/wWCkWNNddyFOFYtofdtArP6G+aUe1YtY= sha384-RMfXIHG1Ifrlz7+y1P0aihKpkz7BGNoNc184BiEgP03T9zSZt8nTsqrZZ96FaSVH sha512-b3+Qs3g2RIHaMuyDR3axXixzNdgjY7Ow1iihNvK72dSJsoFTTsR5+qt6ZS1I3UKnXwpKcWOmVZ19Fx8SYdWmHQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.2: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.2) - [website](https://ec.europa.eu/component-library/v1.14.2/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
