# ECL v3 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using node 16.14.0, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v2

Read the technical documentation [on GitHub](docs/Migrating-v3.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-bnWVfwmzlPtV1JkO0+PaXhPmyUTXWMrJdxg8A67TeQE=% sha384-euS0TzHytrJIu4LSOphT/RUKyOQIc2QIh9DhrhQeJdtXB5ZeAM/dSRpS6qMhyDYA% sha512-l8inDi/r7uEVbUZjhK13fYSVCyJgfnJVb8mY9y/AG9IwLhL96rsKAw63PpWUCgOJao28Arpe7Az7RmbRI7WMRg==%"
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-2t6FkL4jsYbx3LL8r7tF6sbQx90FAoZc6SW3q9Mr5Eo= sha384-LI+O1qg565lW3UKsSx4rM+5YG/WgRdWLS79kBldnCmWh2HuqfWsmP7Q5bizy9x3f sha512-XNu6mQoO8efIj0vm+cwUkyh6WOFtbbROEOPVAROKVJJvu3SGHXD5uOOFiL6Sl1/PgVmV6xPCfi8mN0C8uyWtUQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/ecl-ec.css"
    integrity="sha256-h5NYYyvGyvyIKEM+zuPru/1q+Gpca1s9pD2zXlOSkIo= sha384-7ztV6EzVTUCl7SU5DvQIqS4bGU2YJAxYjd+I8l2WaqKwk7qq9XOFExsQyd6XFJ6d sha512-OTKv/Z3gDNw6xc+YVe6s+cdO4Qi9nHIP8uTB70Wq6YJpwwsQsC4+t/RCGAtSVFNAgQGBnN4nwWTesEI04GdYcQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-0k/4dMhAcLvQonZystPaCulC+S8uKPFVjKYq+cKeBMA= sha384-CwmL7zQ0C0To3ON6jVD3vi5m3cxFCsMGlc4/EjM79FR84wQ0km/LlNxtmVBc96I1 sha512-CWh8gttOoU/C3dwLm1wzKhEyA4vgHiqNG2+nRQm7lwkO8OIOLqiTmS8FAq1AzH3fR7yOuEx6RMqAuc05eEKZ3A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-qUbOVTr5+Iz6NteHk2F3R7QJeIXN/Kp3RlXBkiha3o0= sha384-RGr8PRRZaBSWRaK/h+yjHJTGNUsjwB/BAlLDO7Y2fHoEGwRJuDZprdodKLBE7z2Z
    sha512-XzBLt2AzY3q4x+o7sfBlh7c9NHo9CKZ/NtsWIWpik0UXvi/XHYEOoPoMkRe8E12rvoB0qvcnhru4V4qrPAO+Iw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.4/ec/scripts/ecl-ec.js"
    integrity="sha256-9TxyzaCWl8DqlM6rjPZdoTBb7QPVFKj8JCCFUmmepW4= sha384-tERD/va46HqB+D3g1RV9uIWo9FHT+KGC8wiC2rCkDukh6L2FvjaC2naUy89SIHBh sha512-ZkY/9VwQ3JbZMuYeRruID1o5sBBEpIM6HYnspTYPCiM6rkGKnjYX0TsG69RfnUULLdxp6L8xO+iK8uwiRTGl2Q=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: moment.js

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) which requires [moment.js](https://momentjs.com/) and this library is not bundled by ECL.
Therefore **moment.js needs to be loaded or bundled by the application or website using ECL**, depending on the needs.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
