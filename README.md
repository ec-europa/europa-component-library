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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.32.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-3A105jB2xQCFz+FTaZl8xTVEhUx4KL6m0O+5c+fYu+s= sha384-niWGWccySx6IdFBYSp9bTlcqWANioSWCGx4cYmA/W2Rpxf1uueOLkc2PvqelTYh1 sha512-880u+HY2JBHMJmc612Tt5me3jsppOwkYQ3xRgmIPdrPdKUsGNZ02TvyrAR2DlEFhnsa73CSquUsZ/7RnLfo6aw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.32.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-4xT+1T7FaMxI8zPfEmPIxsGxjCHZYM5wtPFv6sfUdqE= sha384-xsopFvd0BUbXuk1vC91fOte6OTAZbfK+TUCG6fVrCy980/cywy6M0/MqzMbwKyKm sha512-lCkZEefX8EdFHkCT69nNl8aYCXHely4noZh/U1Zi40kM7j6jmX6ao6tzFIubtsDoApf3XVJb3Jai8WJUvhB98w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.32.0/ec-preset-website/styles/ecl-ec-preset-website.js"
    integrity="sha256-+Ee3E+GoQ1oLckBYB0ht0UR3lQy+xJCi4UuLbsrrA1Y= sha384-lPm1p2DhRwDb0PqxWGA7SGct1bWcnb0DJtG/GDmw818k3E5hDutg8FpFyv++FsJS sha512-8E+r7WbUyj15sk6ewozIKDqECf/I3TwlQp73dw8sNRsR5auyXGLTmM3fLxudiP4sFndtSi43ki0mO9NtXFE2KA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
