# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 20.9.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-7XbRWz/KIVcK0oC0bwOCo+I2AudyAMkeyu3L5Wpa1wc= sha384-+KnRIij0RjiqhQ1MN6SG8J1tPISkjN4CghvhKRlobxy/hPbe6ZbO4UHBNmcFuWEO sha512-W7YFpSpRijcAESw/ScePE87EiYwk3kyM2UJhvW9D2eKCfqytMYrq2h8vVw9Ft41bQPXX+esTFR4/g3ykEiibCg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-kgkV2jwxAv9rV/pEZMO1ZIUGlOeYhR/sWNko+nQzL+U= sha384-V/h7UkJ4neaFSddbrlgsdHZ7Yli4BsWBEzbGY1bL9s//Dne2gMX3qBW2mtGsI7gA sha512-ztGS5PYfTTDqz0ywyhsqxupHv+yX0t2ajqocSE/xviVoxLRZVJj6TARDt25xytzQ/6jP4IEl7nkIL6Ypt4lUQQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/ecl-ec.css"
    integrity="sha256-EWyRRzWds5Kll0v6q5hOpX/JF7OZ20oTOXC5wweVx1E= sha384-4Ni640a5KqYEDjSOoyKYiBhrHoX0nl8s7ZVTPtbkguA9cJJtWbkbmXm12UO71a0C sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-WxR2fEkr9aF9hu1vMMgSH7UcZZiuIxQJJ5x4T6WPlG5pJYcLywgeHN6rS0T94KoVTMfrC4IZB9rSsJgfXImo4g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-GEHoYH4ZcW2uFOMihBBHPncRO5Xi3drLBpAzDvZhfE0= sha384-R6aumggDj8zDCF1rv47z32s/8redxwP05uM2mTmF19tIsk9MbXCQ1eqiJk7n/uFEl sha512-Z78+yQmeHpPDeoB5PHJWVwyvZqD+lfbnH20o491Y4e8eXdW4jUMhiHVLVclE0RNnQ0iB9X4LXoRuXlgdLA/BPQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-+h9JpKfnsC8n6oaTvvrKOaLro9ki67E1HUFSgh+FxP4= sha384-vH3QMqdGG/7+vk2t/Ai2GZ8refpKk/xVlspeMbdG7WxjPEYIqKmvfRl3PJ6Zb+Kc sha512-3vSGPqgwLC+wl9k+xN+XsAoxvoQGSrGCN6iq/52pCl5daazWFA8QrQkJSmX4bydX8IdOr2d+7K4TKrvnO7OiOw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-r2h4/l+cHzvLXT3QvfaB7jlmj3L0xwOM83Wo543HE0A= sha384-iE/iHAMCZzQX5+ukUTK7xPB87CoAlgklPyLndBuJlWvwd3JqXO5/GaO2ePOF1pAW
    sha512-wGTofG2I7XVxGV7Lrnpizbzu0rHLtAzmWKpcCudLDJ0sfro2TBqZB1MwkxjTD6LGfkoiC5f5jssXNLHClOiGRQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.11.0/ec/scripts/ecl-ec.js"
    integrity="sha256-3ml+N1xH9anWmelzcIUcky/E/V29fpHAmvjc5qcHZzs= sha384-aR3Es/0z8R1Y4mve1kgTY0/X2DSqpmRmmvXgRpTYg0pwT2C8f4UrWMDLXyBYlmJC sha512-TqIr68oz3EDBP2P+W1N4V1k01NSaaVwcJWXNjPRxcQv5fO8iD281WyZkXaSVIp/bhA8SfEqI1QjJ6fjyWzYIJA=="
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
