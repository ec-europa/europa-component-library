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
- use the CDN, `https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}`. Here's an example:
  ```html
  <link
    href="https://cdn4.fpfis.tech.ec.europa.eu/ecl/v1.8.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha512-u37zBszqTQf6P1bGLx5PALAd+BYRMlt2tl4sS+B/DMX0iwv6r0NkhrAJ8gUEtVsUoAC5GV3PYgCmfN14vN9qAg=="
    crossorigin="anonymous"
    rel="stylesheet"
  />
  ```
  ```html
  <script
    src="https://cdn4.fpfis.tech.ec.europa.eu/ecl/v1.8.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha512-dj0xxwe3UbOaJEp0B8vCyeyoo8mVLteubJr25i6dffl9lF4fRqTLlBy8P45CFwBv9VGv3Y42Mq2IIDHoFVdavw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous versions

- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
