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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-TeuxXHftRR6C3Mwl6ENA5MDCy+beLB/ICZwTvIe48h4= sha384-Dp/9g2FHombY9FoRmtI6AdADWUi1wGR5F3rQC2UcYHerAuRvzSkPNRSZawBv8nlJ sha512-/8BciqitYUacXfKcLu9mwx3lIbhGK8hyEVcn63DYNZ3+7NyCRpkWC1R5T9omOEZpGIi7QU83KhMXBQgTGFXbWQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-cB+2gaO93E/6X2XbBX3QuN9+ejz3jKej0sMuijifNoM= sha384-1vuM5dTmA3nkg19AWFmNXAreNq7QcdtzpbgCOviaJdn2/S8KJkcU+yHqg/7dtBWq sha512-4e8LdEHI+dszIbp0Vl6iTtIiU0Urvtxv235RDAtgLws2IVYS8/I5RVXAPyszvRgYRsxJofT0Hi2EhQOXn0lAOw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/ecl-ec.css"
    integrity="sha256-oNltnbom13hjNbjf0bOaoEryztGBjIM0dxW+6B6K4u4= sha384-UCzb3Wr61GTH9ni7H9lsXJ2B0dSjXAP+KXSviP1naNe4WX+JPQFB6hfDYhi/AwoL sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-xdo5nJPjpTjayd2nwR14AubkmVzk3rZjqbBOllQqW0JFfmqjbiRiycKVvQ02scSzjRMxJ6gvP4erDhQGX0rc+Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-217C6y16s0jsO4sNoe+I5unypBoaoLYabmrfu29fAWM= sha384-9E7cKdcPqPNWMNmx5Rn9XJO58MGACUQ+rB+yJVxmQm1ED4/hWFF6al7DwUoykrxi sha512-Ml1CkmJYpMt/yPbFoUUqy7Fyhd/xMmLDU5XoGG8Zra5oO5GOJEXGScoSpU+sxu5b4u/onjsFeJeMFyp1S/PxYA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-AFmDvofMQUkM+cb5fKJCDj3hZGfFZOThrzUTqb76qow= sha384-/uofNQJMnNJCjn/MNbNy/lUoYxxPDSB12tig+dwd2nu49k7j1nFufhV5ivO0fCLO sha512-sC0EIvBeW5/lfXHLbAsr46LzA/sBcCa/zk9QwuNBbwUTs22FRG3buHYY5tT2fP+Pyo7ybyVbcWmu82w+S0pDMw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-e6wiiv5iwhwzmLA3Pcl9A+TB0d9DrG5qWAyg6SnZfLo= sha384-NYnav9ZCqzabkWyUPkAAUQTPxvup6lOi/zJBD/o7z+XSUzHyUxUT2WSAbs95Psoy
    sha512-gNqfQUCcgOJEfTCjp8OuSCx09scTMOG9cjdwu6aWVSdrC2BNrizsx5EMV96iQppTcyYtveLnKWkPLM0DMTubJA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.8.1/ec/scripts/ecl-ec.js"
    integrity="sha256-VOOznNL01iIXXxHIVxWu0kTfOmdYrW6Un8ngtthsAH0= sha384-91T64v17CucFrrb07DcuKQFzcvyRWybQVoLrqW9MtJgR1aiMC1PU6s/ld3di9Ll9 sha512-UBifZnadnJZR/x1oGsbgKIkDSEx0fB/JdO0aTYLoanC9nZzYRrD6sYvvcDXSRsIKijlCwxYsIPuQbPs7HX4bYA=="
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
