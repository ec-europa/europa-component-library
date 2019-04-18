# ECL - Europa Component Library v1

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission websites (hosted under ec.europa.eu domain). The library contains all available components which you can use to build your website.

The Digital Transformation team (DTT) - a cross European Commission team led by DGs COMM, DIGIT, and DTT - is the owner of this library.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code for implementation

## Documentation

Read the documentation [on GitHub](docs/README.md) or on the [website](https://ec-europa.github.io/europa-component-library/ec/docs/overview).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, `https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{version}/preset/path/to/the/asset`, e.g:
  ```html
  <link
    href="https://cdn4.fpfis.tech.ec.europa.eu/ecl/1.8.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha512-NZnv7eOlU4nXqPoWqgcAGHvzXJRib2tkUFAERM8J5LOigTvMmy09IvT+1hVclbsZTDrc7OAa/RtPK6vsOFJy/w=="
    crossorigin="anonymous"
    rel="stylesheet"
  />
  <script
    src="https://cdn4.fpfis.tech.ec.europa.eu/ecl/1.8.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha512-jSG2kq8C//FvuBJz3Lxf+0aZ5v5h8l/6J/S7MHlgLT0sY2KxU0gC/Gyf9UBsg2/R/4RpPI0abxAijoh9GejiEg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous versions

- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
