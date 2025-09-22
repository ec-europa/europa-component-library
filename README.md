# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.12.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v4

Read the technical documentation [on GitHub](docs/Migrating-v5.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-5C0rI4Xr6sMQ9IYgfF5jZfr5wz87dAA0IJny3Xx0xv4= sha384-YZuA0bWzeA5BRUd2xOSCYSnpL7ttMmYyNO393EdEUaJ+O42hfWwYgCj7r3XCTdGL sha512-NTMsBcgteB72PFw9PbcYp+ES3sG5zUvlQ97sxX3JHxGlxZvEPnKA8KD1tbkprXPbTn4UrU7q2lY/3r8QW0knTg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/optional/ecl-reset.css"
    integrity="sha256-mu6P+SCEAC6VmCqEMTF2+s0WhVm9Dn3VmfvPl3YfOqY= sha384-DdER0XUh+mjtihS1N+lepFRvE7y3i8uhIGxJy0V3tTgYeIx7KnxL4xu5WSHZY89w sha512-+vIV9P0MQDcDJC+YH+jXwv8GFkg+DwXuZoFgkRXgYys+NOkvZ/aYpEcMm55QSjpGpmHicxsBQoaw0gPrTQHtPw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/ecl-ec.css"
    integrity="sha256-F4OIcpyykiMgDK1trhOcl31x0c+CjKfDrKjjnSqJLUw= sha384-KKgTwt4eylpxdKeCFAFze1gXYhOFkw5tvToJZQeh/yUwVRBRcTh5pwCFPgKOjcH1 sha512-HcGSvftyOyzMvgrWfaMMCqlV57voEE8nuGtR07G0UcWbwFu+E1SOT1mbNT4n5Xl0FxKDVjbc1+iTwrr/3+enGQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/ecl-ec-utilities.css"
    integrity="ssha256-WE/USVupFoWWoypyFD1dlYhPZcwx0BfeiZ3ULYKnhAo= sha384-LUu1c2/dcgl/DE4brJj6/fdSC4A3kZaVdYIqL5pauQpWw7CfwNI0MD+DTmGZ99T+ sha512-QgCmRK0dFOP6SuQsmq/LxDEK00kUng2dL6JSsB/ujkqmcp29z7YeX9yVajGlqsb3ALi4r9c0ydKBJlYNVZYiZw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/ecl-ec-print.css"
    integrity="sha256-rOBqc+1Tl5GADbOW2IBTE0AWvlEje0jxRfq1T5Ce7g8= sha384-16rXRuJYt2hq2NAFiWGozjkV3qm9wztJsGMJdVw6ft0yiDh003aSN9P60mOPq3e9 sha512-5CTkj5d7m7QE2hEMRIWBLSBlu4LAs8NUV5xDt4DxcMi/ClFamtD4vM9Fr09219XZKlV3R9VR3WbVTe3jJz9Eyg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-kdSO9nMmOQ8xRBbMHCjC+QxvSSbg2v+IK4gh7IRR+FE= sha384-9Og1jsf569pwY/wOIiTDmLs0IU40OD+KOnf5nTw/dS+YMZgzILE6IrnyyVRAeTv+ sha512-l2XVH2I5vCH9Q0mEkDy/elOokgH3d3kd5nLlfy1QMSTzv5j9cfrRNgwnAkTH8U+9/5u/ctwOtYz1BjUbpvyXIg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.16/ec/scripts/ecl-ec.js"
    integrity="sha256-31v2he01H1aiRg5W/CmIGU8XYi7X8Clp6ny//7o0Hgk= sha384-j8SsUbuBbic/zft/1RHrpCnICzjXgvER7O282VoVGaSnEgtZlNwg1ctLb9Cmg7RK sha512-J+JaB7XRq4Qy3BK/fnCENACqrlukKF92Df+ToZpNN2F0yUtn8S58nH2FaR1n32HgtPqP4Emk53T4QDuLiKcOEA=="
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

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
