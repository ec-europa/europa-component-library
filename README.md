# ECL v3 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 18.18.2 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-5Qypq7NqV/Dwv1/uF2x4wo+9rSzJ8xffgYG8PitMm0s= sha384-S8qfyGjDS2GUL49/sOnmUsws29sUqn6WMQR4E5EaDacrvW9ihWMSJYt6Sd9px9/G sha512-CU91Ju1IUrUIY4dF+sNRFah50ZzAYIKpPmY2rVg+ENN2xcoXb7juKtbRxnRYLSwLHFBQfsJyuQz1psdW88mjnQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-huiRFhR5X4V/x+sXqmiHnRGYOI9WGltpTHok/zxQyXU= sha384-R6C0aXTlglrsW9/MFf/3e1OV7FYYrFhU5+nYqI1nQ/rJQnnKmy3/1U/KSmzBclP2 sha512-xn89a8uy8XBNwtEq7ZGBCMsMsoOZSHOinuhoNKg1frJotdPdMheYcdkr8MHOdiareR8okfIYo38Vi3Tq1aMbzA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/styles/ecl-ec.css"
    integrity="sha256-083Fe/fwGwtCHNOrQL3KNRGmdAvCpHy1bsIsEni4Ock= sha384-q0h9TBFocRj1in7j/EN9ilmazriOuLOkJJauyB/Jnf+72a6wGvykXJHmkrWeKTO7 sha512-x+9PuKv26QzzH+47YBhmkMxvvQ4jKGIdQ4rvy9ZxWmrzeeSq60wGNpEu2osgniQC21D3ZfzPSsvj1/uxEWOLkQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-YgxAb5c8rRRyDfIlmjhnc93nhAFovfqliY7YXsZayRQ= sha384-tQjvzYxqwAsclkz3vMz6Vezft6+6q+XjLlbzhF+hM+HDJqM1ZCO4tDDPs22p1o7w sha512-rP+gr7IT8hDel4l1LOChWBO7oJ4Hwxt5rQMlHaMLfqpnGuNnKEppwAmrfJEywVSRf89QGhzy+0UBVzd4/BGuCQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-crOF0onRFuXsvxQ4K0pT5st/XiKk+d0XQShSUIcXc40= sha384-OZ1PCY8rQWHL0taLJgt3j+akuFVLjVFs4BVGZXBjLYjZQgsfspsOA0L4LshaXPkn
    sha512-ExKypu8KWj8ABjbOhkLwWOiy2qMEKJ0nnJ5XbPEp38toxS/aL6vjc+3SCJDkWAcDHIBhNjvsD3V/193EClpGIw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.12.1/ec/scripts/ecl-ec.js"
    integrity="sha256-kzXkwzRiSmr4171LWXZeCVW2VIc64YGR4EE4W8QX17k= sha384-Voiqix0AWWYJwjIz+VDaaXCPfxqmAapM2TJ2GETq2B0KwWiw+V+HW1YikTc0dlFk sha512-IYZPCCgbx2kZGZVWLc51g/oy9gTJd/MYpD4J2FCn2WeesU0EVkLSyAF+jc9hshhkNRd4hBgsWiliYcVKYdVnSQ=="
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
