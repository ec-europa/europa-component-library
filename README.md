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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-DfDKnlQu/RumS+rueEDwQFU98U51LZhJeiNJ7L2Df1Y= sha384-H9jmCk86JJ2VCzNg+zJpRS2RCF0Ee5DSOW2QF9lbQnk5QSl0MJfBbR5Bl7OaPdyo sha512-As51sxxoCQfMjYS6QKm1oDRp9d/Wcim2u5puMrfy+htS00qnDYdo8Dr+foxBUL6lpOA5xLHyzVXLlIa3N0syZA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-xkEqegmEgprQxGC9DIBkzh/6vr8F9z+mFT3Wq7pShi8= sha384-yefzqdh1LuG9btOidZ83NTbMVti7OopV82TbdSewmjzQbAHPUti2jbkcLTNRXxPp sha512-ddhTqsLjCPcIV7ezECNfMXC7iGH09z82JVwv8JPd/COKUkaxzR4HiZy60KE05t3AI/En/QNMzpwDnEtLDQyDkA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.33.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-3C1F/rNaA4FkYVk8rieDhgi7qeBQYlnDxGTJQzu6oNE= sha384-oK7g4n2kNh3RdjCqUBOKnH2qa63Bx3cRQL0cynoP0W6iLvQYE82bk4U8ulUkCNR+ sha512-FDDzenPSm36J4I945cbh1n7HQjDrcLQFZ44H4/qlfsBZ7poLkzcf2H/1Wv8Nd13845uSKvzvp2bQX4XGZrFOjg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
