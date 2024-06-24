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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-+7cRcFR98e34GCGLfd+xSBo7IqwYiuDaU9aKTvZM3No= sha384-Uvq+ooPMOAU+e7ESfwHv3yVDqRKCMMKK7G9cSYmJBjgQuVf3pVrH3bONyeJe1a33 sha512-qTNLiFWJmKesT/nffkGXpjL0QPcQFh83g2nxcaqbcrppwRZUn9ErssCUjylN9fkZphI/Xo2/O7OBSYwmZJX+OQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-wBGK5zb0hlYBeXHl/UcOdvrc8FcJVdA7t7nux3WkgoQ= sha384-CBjQcz+fcsmTIHuVlm/5klHO1fWBnfQlsNi0ALQXh9E3p6XEW3Z6q/3X2+nciDhB sha512-IGCaUS3zIVn4iweMBLkzNXFM9vjApRiS4GeIpe/VB09n9C85vqKHJSZsRJJKoTVsYq/6DExW8L+zQOm/P+NMXw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/ecl-ec.css"
    integrity="sha256-v2jxDh17NJX52nKdclIhkmCYQRl/yMn57vQ3pcG1Xwc= sha384-7QLzW0l28NlYsqD4UNguYoK8ScpHNx6zTvZ6aD83zPpk0Indv/u3CZ+gSkf2wfkL sha512-xYCa0xctPJPYl3spJZrZmcpG4dA5ee+MPQtcipqaoig4spD5qe/8rU/cWRlih56/RBLCywkeKAxulLqC09c+IA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-rUw4lqKVoVuI9L9/RP6TwRUVdP5xgxGKjHo0uQR7OhQ= sha384-Jm94Q53PfwqIWYtbT78e0wOFOpfwbwQPey/Z1dK9eDFOnYTKbDYqGbS+x7n26Oak sha512-YVB/L3QZbsCWcgJG655Qm+jpGqnKJBMhZ5CifHEFNz3952s40Tfh3HlBoliZah2e1xFdpqzX22Ns9dH+8SCWkg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-X5oEEsUqdtGx+BV8D+LjIDWsu+Gay8g1yo/2mLNyOzk= sha384-sprZMv/yF2a4KEizO4rAbTIsQ+1UMT7B+oxzoT9bmympoefxxFxyRB62mve4lx52 sha512-bEXeaQZjw7w7dl/O0xJl82EmrpYV0cYOKiYyY/HwozBBijJ7TszqB14lhjNBKk9cLDgPaJ2/oDYPZENQWPzqJA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-jJGdGdbReJveDQ05fwYVnnrhddF8k2XTN5T2TConVWs= sha384-WpsaqHZUhoy8Fm+lMnadumnxlwd6zM12QhPQf4O8cuhmDhceNU24SLK0GXwCCI5v
    sha512-skaMgyu8l69rBYNzkXr7yw1Ulrv0mYVQaCi1YZYMMhUSvlq/XnuZlAFCtBAlXlchvV2G/6iTwHxK4BhMphmIBA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.3/ec/scripts/ecl-ec.js"
    integrity="sha256-9IPfKVkYBmUd+/LrNoT0xnUSjLDHgBpqVax9Fc12hBQ= sha384-3yzypUCLnaFlfSVyAyFswfYJSRwnDa9ATl7ZeEuZNDM8WtZ+ixL2suM3C+zzwLq+ sha512-WDOS63yyv/yEhdtgpccPnqyVVZ2d/TZD72JT6A3TMXms9q40SrBfmmDTIiephjcBWZ8rRA3kal196w0SXtMcRw=="
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
