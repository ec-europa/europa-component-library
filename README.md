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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.20.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-mMNRiNYVEM1zcsY5ANhDKs2YPXgO4kZRp+3so25kLeI= sha384-54vX4pV5g4fnjZBGzeNKh691WShvYmGrS7aThZBZKBvtBHk1L/T0hMormva7KZ+A sha512-bEhNgici/uhNkekz+YGFA8gzS+Ly70/k1WAptBKyHB6gQWaaSbwlVGC9qh5PCzmqjgeLGfL/KWTzeVpEh8ENog=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.20.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-1BufkLNHtG7FmlPCJ6LC8D8hvbknqlfSM0fAeynstaU= sha384-tmPdEiK6sIoWPoaogsXNtJiilYvY1lORo2RLiwJ7GkE2COjcwfPKjpRDIeyBU4vq sha512-0KszbXUMrzjjoUt5EYt0Yhup4kDLyWZorlO4msBB9yRVMN+lKN4ZivTu5d1UDwuKXEEApzTOPQy6W1NUWvEX7Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.20.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-v9Kg1nui4cIjbICfTQ3I7SstUPJsbdO7pIe8m0lcfvI= sha384-kfnCV7ciOFXX5m0YcdrRTJuQs1x333n6mdauUoo3OSrTDlR7XYnX3F2gqB7M4/tx sha512-2uRyX5CYjNXcApvCKVWyrhbQpE3YNRc9WK96rhSFbR8bs70iX7GvEt0ARMVHYbdmcE9WbU5MT6ksu7Q4pNxLrQ=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
