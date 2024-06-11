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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-s79L2ewhUxSuT0ofW2vtIkowKl54W1Kyv1HXLVwSyu4= sha384-i1jiWiGfz+Hyi3J+vmDANJKscq07KwIyhuD7mf2EY4i9494H7Dxb8L6NLC2l8mL0 sha512-DCRb4qhXfP0Mo7J5pBSUjDceCoeQN8a0phxkskLD+M4BNuhQdqPWJkSjqNk6/vtFvQPzdPKgUMPXWB5fTcJcyw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Oh2BSkJct8RAMi6+eqDHpZ0gdY0gaOnBrjXcii6cfe4= sha384-/OMvsguAF0xkGkYMd23PI1AlEe8YPhW9wrEm4bE1sFJAE7hb8sMNh6XcAEnMBtyR sha512-VQV4FmphCG486wl/gYXYxYRETu2t7xHEe/NJKJjKDFCxjZ8J58PKqzTeDOoxAK23TrHgfK3WYQ90iNr3J3HwbA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/ecl-ec.css"
    integrity="sha256-Pu5dacsiACPfr7Lu2eIQf8gHC5/5Ifvwl3bfSgNg+NY= sha384-8T/JW2YYPHOKtv2nYT24GPUvs/vypyv2hwJzjacNfceEeecPK8OKF4XTUt3R+HqX sha512-7z8It3w1Gt0cXJ22bEf6c79Erdut7IBjLLn+TO08BtympJSflMX6jTlmCjI1OrsvkxLKTsd/aZEijqpy4zGytg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-h0Cegz7cmJ85PycmsJXR73o1TZcAIWmpu7BzoojmhIU= sha384-a+aBLHLJ+iSJNSPp/yPU4ILWOq0jPOdRwupVG01RUTQ3x8BxJXYlM4nKawl95MCs sha512-gL9Eap5CCjMCz6vUWnOtj8QYlAQWVXMbjEDi3dhH3sSWyEVpSOr1Yr7TEGhdby1J/8bapUY4Pasq430D/L3Pzw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-ASOfM38VmzunbC7OE8/xwzG6bgC5futAGvpbjBa9UNw= sha384-Ws2/8f6nJn1R2ETATC7ua7jIDxNb7YSW1HzWY/KSG2jjdvhaO175Eyj8vyshlysN sha512-/zEVNeardxh798awxxpvcyL8EsqlwjfcjGm+yQJO+a1UD06Gc9G5QUok8QiqrYCuF5B9gPRYCQHLPFj0H/mchw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-duwymFuC9e7sK0NFuUTViZjU9JSts4miwEGvEMH4MO0= sha384-aaXlDc+u7M7FiTLMA9V44JYmNpegoFbbTHRZYokVVmg05WPqELmIPno6Z3HU3GGZ
    sha512-5UwlrERRt5cIfOzFU3ob64cFsWaP4rS3yF/WrwmaUD2vz0HfV+Y2UxYWngylHbmfkPChh8NMxf6tt3Cdm+OBNg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.2/ec/scripts/ecl-ec.js"
    integrity="sha256-pn/tDlraE8Yeae8LSys5zsRvOh4oAnGbhagUepL6WuE= sha384-khog5ckTlvcN+UzcDB+ZL6belLC8qo4oxap2F8fdcgQCGJ+UsBMTX8Ok5r9RZtr4 sha512-Nx/SjA8XB/GUzXfrxkadDBB71DPdjrk41fZ07sCVBpzFKDa5uCMxQ4Dblhb+OPJusVgqG8c30qhNjy1UcG9AGw=="
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
