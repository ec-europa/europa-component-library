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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-5sWHdRLWGv6JGD5N/RVOQ0k4NugFtNAVnk6olbT0fO8= sha384-EK8yafOp9cgtwwUa7bykmhTzJE6OHTDKAskbBXwN2nrnikg7G0CNdOIeuHO+s4Th sha512-tb3QBHoTimU2GyNH4DkYdRwTC82QSClEdozuNllB+AJixnzBwmHDT2EZBHB4cB6WaND07dEdaFW5IRuHWXg5kg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-ahQDmfUd+Y7BomcM3u1IKUAMkI0OSdkEk5Irl7Slft4= sha384-xvga1SQSZn901dMM6Iuc5QGbvpfqE4vT2qDmPIcYthUqiww/vm0qrTik59EkucV3 sha512-cqXniJ2kOk7ggiUzlCPy7sblLHZ21SLoPRi4hi1l6L/phcn/cowxctkPnKOooVzG4nyPvBDaj1gQbCvYCisDxQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/ecl-ec.css"
    integrity="sha256-xRSvkx7T/CkLXJzNLtWaxbOd2L8NauH64d889cVmeuQ= sha384-91obr9oAIshwOyXl0/M49EEyLjbv7JQ16gtw/cAC4TQBHQD0ZVpgOUTIaOroWfZf sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-VBDmdZ/8mQ7couXkpiztOMbnggyXVveFxgumJ1lcrgtfXcu/WY4785+eQMEFrollm4VsgQRoEGIKuG0cbaOCQg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-c2U3aVZ1mOj81hoUQmYYLsUxtuylTyGacJ3zERrFuBo= sha384-4UKZwA0mC14aXbMMXs2nmscZedbBjL1Bi4DGB118QgTiFxUa/HF0JvAtAlRwW5cb sha512-XHujR4FTrx7o2+7CBE9ECiI6vI4TRFkefBQB0E/cFyPOx1m4R4GZW9HaF7L+7RQGssZPmD7b6UIn57TKFPHxRg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-0+DlW0PkgMbR6l7Q/Nh8+BNDcbACLoAmcSIUF999ZHM= sha384-Oknie9YTi66xfPvDHufPOjEUeVgmMToRlUdgM2rOSEwcjqOQcTWMrkjp2+tA4soj sha512-g5ghg0XNMGSmol5ERhi+C74q9koweMYxs6szjrr9kYPaPKf49PjSGaNt+G+YCyXcWmOg2m9zVKIRtcstTy0+GA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-xgJszQmZuwwBDeSgkm79hIYeikjD01SGDtWDNl8pNb8= sha384-FmMGYWi7U1a8jdsI6A08xDjKvQ8X2yTPlxxlDywo4BpD7Q4J+zQhikOADnzbJQe3
    sha512-qttCs8hPaRWkg6w1d34DJBMvKbr6NhZuGVwwv8yLT0aTV4lS4TC0r8wcGQqPSUozWWGvScHAKStaaqLGIr235g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.9.0/ec/scripts/ecl-ec.js"
    integrity="sha256-0CCwDTErdIY/ptW2MTRwWW+Admwkhc0uuZ9Bz7rAZBY= sha384-HYW5BsRsv1bx/LtpKa1GU4vR0T8W0Ef3ZylaPJyAEkgBBlvBVVbozjQxI1fsMIOX sha512-QPPivTavtolIsvgCgyzePqALU+fkFuT1pBYzrXKumH5UziirdhCMFTo0WNjy7iI9r1NM66RnPDpMR+BJIP0LDg=="
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
