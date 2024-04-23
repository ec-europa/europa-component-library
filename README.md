# ECL v4 - Europa Component Library

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

## Migrate from v3

Read the technical documentation [on GitHub](docs/Migrating-v4.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-7c1SPImTb0Wt52Agr3OeKOyKJm3HOpFulIZTFD7Z4r4= sha384-RqaQQZ594aIZWqgc7bQoKfX2LQeoAh1svT2486hEOFKIM9Ewe0Gn4LRCusXLzUzf sha512-2vkcds5GgwltNT0NEBQBsXwrmt15RWTbbt+HrcZfVhysmlmvFl+yNxIq2wfeeH9rcRpnQ5IGfedh+Z9TD9Kwpg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-/voTzmFYftXMEKuh4ZR7+bFw4UkJhRpeO3xUunAm4wE= sha384-kti2nvvMJ50xgFDd+DI087HlZZofOOMwc9LUqGgUfqY5m/4oALATI+M8Nnjw1C1n sha512-CV8lXerMcfHy0Ub+zXi+1qjTVn+PtjpA5ZakUEGY9cYFfWpTBwU1t7s+hN/it2eCnXD27KynP0ZqGTxDJVZRlQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/ecl-ec.css"
    integrity="sha256-y4J9LYadtGrE18D5f5gjoiFMChciP+YjXis8rDLm4Cs= sha384-ybDnVpijmejCKKJ6RgilAfyfRITCIT9tF/t08oDensdKRsbpqCAhzL7oB6hN/7m7 sha512-wRkMrdtWWOkMgCJKUSuFOM0DrSQBePe5NNYMQf44yU4OVz4cPUnLnojjBpPmYjIGvum/n1162B7XhncehhEngw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-JoODCvocyZJZKH5HlnlHLgDf0sGMPKITRBswaUqlN1s= sha384-wQKv1yCy0fOO9v4fNCfd0u9JVOXLVFcaO18lNfH3qpB9cvcviCVymacc0+AStCNa sha512-CTJCIz/kpVELvXQv3IgnkcrIkYd2VFWAUnEJ1tufefQXXQCxUqKEyLFx4RgRuQvmyB48k28HixmzNQNJ3NE0jQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-a7SDye/KAUXlg+xEWf2TWFJa7Nk7NyZw1xw+raa23XA= sha384-s4SW+kLLFEdVyaSBkWttqrKLsyk9p2QJKFUT9aQqyjimNHV0y5ea1GVj7AR8U6f8 sha512-EX9KA0VqUE5+LN9nSyvd+RrRq/jdGBVAaqQVFfNOGj0krgEaVAx9Z1r56u5fvyz3W/JTUAC4sXAGcUuFXpaIHA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-NUleN53OslY/4c74jyBr3apKB4NHPeo2OyC/sjNR0Iw= sha384-VvnbFuH0m0GqzzdGW3QQZBrPoT+hXQH6NAX/xJBmCGWttSvCNm6ukvxLs+LQKhbK
    sha512-7NoclJHwjKrffTxNlGw8takgFxfUsHPj0jW9aVyyzoyU2+t1+PxLXKBHCeHQQMW5jyWqTXf0oH+L4MqYW45CKg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.2/ec/scripts/ecl-ec.js"
    integrity="sha256-+euvsG3I6o35xWwet+CZzeVUK6FB+eZgIdfR6aCHToo= sha384-IxMCevZTQzL3eMpI4JsaydtZOirrviCnBBFfyeccUZph/eOfYSEZEbvaz1ca0OMt sha512-dohzBNESgLb8oXNU/UPGhFAMyV1tzxCoBbtBuH7iQIUyuOc2/mgnV29alBmahgnWwL2NNSNE8VV97JF9GjEyqg=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
Additionally, when customising the date format used by the datepicker, in order to get a consistent output, [moment.js](https://momentjs.com/) is also needed.
These scripts can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- moment.js (https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js) (https://momentjs.com/)
- pikaday (https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.min.js) (https://pikaday.com/)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
