# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.11.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-7AFgImNrevyxVwaguXP6HRIaHJ0h+yu35YIVdLdptss= sha384-vmOkcrD4u+aVPlCoVG32Ys/c5+Xn7FSJqIy19rBhDNwjpF+PUkdl6GJbCtqzRnRt sha512-2pGUl6irQpB9kN1Rfgf8+TU2+XuhDyBTT6nQrPOHy1MjV0Es5BJ34eO8+R7lZtt9kx+yQGbGFUGAgL6XWOsS6Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-ACvD4MhKxaMPnTNi01Ftmjhnld/07BRqY9KvpRJwFhk= sha384-Ng1A04M6oA+zZlWlqHUtMUx22E9KVfefOGDcyhJlD9ibWlZsoabj0R/sp4ErKR4A sha512-QMzPGNqu/Q8uCaeTtZ9QxIrvLb87ZWPiH5akNbiK6CUaRGfJQ7KLq7HpJtGuFg0CaLn6DveiOiaocFbW9GoV+w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/ecl-ec.css"
    integrity="sha256-m2aci6qJFw1zbrmdglvUVwbxUzeLZH9MN120G5ewNXA= sha384-Ng1A04M6oA+zZlWlqHUtMUx22E9KVfefOGDcyhJlD9ibWlZsoabj0R/sp4ErKR4A sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-QMzPGNqu/Q8uCaeTtZ9QxIrvLb87ZWPiH5akNbiK6CUaRGfJQ7KLq7HpJtGuFg0CaLn6DveiOiaocFbW9GoV+w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-KXJxkQiqG/7oFXOjObnxx+OqtlE3KvWFFWGzbadeThA= sha384-3lCO+C+3WGov/Esl+TA45JuwbryzzCtYcxvfREbT5Nn0U5MTWPK97ltb0Irh+cbQ sha512-QQmqxJ7oqh0MbA7G2BzSqbP/m/3h3SrWiM+qlSwbnKrkz0XCVn3ifUBnm9atgO/uAjk/7CvWG/DffFsRDTiE3A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-S1DdRIgafMBw+EQZm19ifpgDnVhOjHR3UmiYNm9Kmi0= sha384-/YZM7QjjSUHkhay5iM1+y7lOm72lJAwQaTjautTmW8IYgFYMO9UybqcnAcJ8XQFt sha512-NbE4jC2MhPidqD7RH3EREB7EGTdHQmyy7zHH2ub2X1Us2npVLVGRPdNAS5C6TFD61tc9oR7qL+pj0Kcw4mswFw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-0XhnLwck9hngKxUIoDtCjt+Dx1EA4btQKfMdZ0ibaAM== sha384-4rQhi6hS37W5gkVlbF5c40JFIgpWdhyYDMkkR/XInt790kUwos67rApKFZpgRvRN
    sha512-LFetVRqi6QE8dXbtwmGx5c7ZsySb1Ddz9I7QS8TBekykY5BMMkO2WlXGPheW3YcDQ9o2uRQw5NBQf9nDElHr7w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.3/ec/scripts/ecl-ec.js"
    integrity="sha256-eTGwfMUJxuElIdPC25U+/FJigSh0qekoDJ9sDHHq/Us= sha384-dPBsNl/I1ts18dpPW4I5JZBnTeO5u2lJLeJTx1Yxbnw94qn9kKnOUTY/kKm6jD+E sha512-tKPrJjnUpXinF2VYSJLy/MzHztPwuBYlEbcaBGqNgro0zrXnyOlRmLnjTsGITRjKZaJvhthRNsrGsIOp5W9l6A=="
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
