1Informations for ECL v3 -> https://github.com/ec-europa/europa-component-library/tree/v3-dev

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

## Requirements

ECL is currently using Fermium, node 14 but it's still fully working with node 12. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}. Here's an example:

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.39.0/ec-preset-website/styles/ecl-ec-preset-website.css"
  integrity="sha256-5gtjJdzhQj/6dDgp8U5pEU79zmJt3tOZXtU9KGiPckM=",
  "sha384-ERo8XH/B7LiOKgppaZUgZcAXFYmnG9YmFGVXJL8GLRmrIdRJ+25EyMgqQlAHX7tk",
  "sha512-iml+ef18jNra9w1C9uT45dQEcC2Mjun2X4Em88F/sA6hpktGuvb5Rug/cQK/uQFACW3gxo4dZMOgFjov7i44qA=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.39.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
  integrity="sha256-7W96/0QE9AYUoYHTTeRjEtpBeZxKRaCmS31d09tjUZU=",
  "sha384-PTC+d8Xi3nX1JSOnLJWXDUtz2KAwWMMIbZsuKHPNJn6CY8O41ATk2FYOJde+sU7q",
  "sha512-W1yLeUjXwua1SJbEmqPWhfsZ4uYfZKEQM2Q3b2K7ekhWyJtjjdrAYxTEUpCYE3zw2VE52RutTQeOtX7c+IwIVA=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.39.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-yUbijtAjATuk84ne0cK5+XpesZtkSngBLvavTNYCu7s=",
    "sha384-ML+E8uznb01P2wSN1AMxHR8q0v/9ss9Yn7iOeZgauX3PYq7GUsicWPcklXXMI+jn",
    "sha512-vdpwGmw8qnh7tmdZn0BFOJvoDNDyA6n+UNE4j2EGR2EmyOVJrGsuux4tMF0xWUiv4bdpbdSBuq5Mz+a+t8D7Kg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
