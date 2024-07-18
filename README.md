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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-aZV8vPgvvHpGK/5f9lKBisbZRpmxsxrF+7HD+8InVTA= sha384-oJkKsGw9+RYTEc48qsTvtA7a8H2Vn/yawk+fmRw3FT/2jpzojyWgYTbo/gmDwg+g sha512-At3aCSR313d1zy845MPSh/P1c1QBOcVkStP/xTjDvj0pJGLn1y07wKnJsHYJxzsVOwU0KToKj8HEXodWyIlCkQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-HRaUBASAD1DnuIzJuJcXTaqEHP2wNw/AIX9thBBqC2I= sha384-GuFyM7YYXFhWHEUljCEmpdIMXxSPYrjtqhsp6gPempQa0qQear2Z0LcVo154befj sha512-oqd+MVkecHQO05izvlmkLYOl5SLYiKK9tfI/kZtUwlk6rKTd/WQkmEu1Gc5N4K0W6NVqK0d6i4LZUXw68e9cyg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/ecl-ec.css"
    integrity="sha256-GjnADjeh7KkqFZlRN7vckZC3OK+btfOMmTmajGSVLCE= sha384-+CL8tQlbCDtQT4rFpw/5UgeRaKDLg1aPLNpknZa6hj+WKFlZHCGwQo3qEtGNISgK sha512-SrNGUq4zprH8W1NTDWryqujVQuL/0MNs2FyyPTK0kjdTN3l2EYQLqkmSMZU6vtG7rMd2tYUt+EMAhKTRRXL7bg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-UaKVb7pr4N/2kZk/3f75+oDntnV6RQr1Q+bpi6MFPao= sha384-Bkm+hDk+AyfEHaMg8FOvTIFsQhPXSMaUDcf0aO2CQx2zzNAhf4aRDUedYAHfI6EM sha512-ajYk8mDLhdAOVD12HrWLeM+psKuBc22Ld9bKyLnVwUuh1ju8Y3pnOd4kfYW7Xrg+UT37SJypg2JOfj+QpZmNTw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-trlgkBhbdXPFYkkXgQKEKGNUBNjCpBn6it3RCJ/Q+cg= sha384-6cUDXiG+N185B9wlbBxaaqDrqoGtus+Cc4tJCNcF8lCovMspKa0kcIkdT5nZcQtt sha512-QFBtmhHsQ+XZ8gDfd9d4tWz97Ww8N0iTE1z31jJVtI3bA0i4GstZzO/Ptse6rB6iu3X+mbAKzf25nmLxXCntzQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-vSdfwSY91q6tSDrHbhN72uSe84oYnYjxiQNUFWPcsqg= sha384-dyXDkdGXlth6E9ckSLA2s64Hu6+H9NcfCbP/PkssweK6+ERLDf9QqYNeyx4MxIkX
    sha512-GPRHSYBYWUGfIo1X5FiwkACdlxO4+EOv6YKDkzXylKsdmqS4pm3YLHoz4zbT130rBZM01tX2mzssRcpejSMAqA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.4.0/ec/scripts/ecl-ec.js"
    integrity="sha256-/UVS/g24g8rBxZn2cTnG2N49NfDnVR858SlztlxPoGI= sha384-kbB+ZSzTFsLsChfqCQiIupEsfQHe0Z53utuBxPCpnP26UDtxjKc8QKQ0uglacWBh sha512-EXgKVCXsmmB0SGSFxUSQiENx3F6s0i1dDpWdwsvYHsT31POYkQMEPm7hOUKNED+PDtErT501YenN60DlQ+5KRQ=="
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

- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
