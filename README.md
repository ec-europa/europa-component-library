# ECL v3 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is using Fermium, node v14 but it keeps compatibility with Erbium, node v12. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.4.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-BM37HVT9HDa+V3JI9AD38G92AOiqbwrmNzxnRtExUqU= sha384-tXCRJt4zNUBu/DU0TqPaE5viHyp1pg0Qso66rcNpGiM6ajte71ur6SUm0CDesouf sha512-i3BuCn2fGIeot8i+C04vFAnZRNq6EO7ICdeTkUoTfWmabRlPotlxpai0++D46KIYNVClc97WhOg9e9yHChZYIg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.4.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-pZaE0XkFCJRwn35n6wGUzhibejdPuiLUb0h6Rkv1hj4= sha384-Hf/oVXQ67uQvL0AN+eXPewLkFTD9xoVHMTfpJZ3BfDGo4BRgemKQRGYOA6t2wccs
    sha512-0jvn4tBhoaiRw4ZnSwR5fuxV1GAH4cjhzAGo1Lgqso82JgG6g1mHRyZdHjemZKMF2AIX34xnOABHFjLYZj/f3A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.4.1/ec/styles/ecl-ec.css"
    integrity="sha256-cmhXtlz7ptu4N7c6C8iMkhtHyWRbrOknZB/t6GXBSJg= sha384-XMPIk2KJWVoVMQIat2KJwJUi0oZlBrGgQMz9+aq8iTNpv7/oiDYuOZD5ydfOxH0m
    sha512-wY2+2mhlcOEFYBdOxF8YvvkDmffFvjJHfmCYluMWaTJ3x0J7o0RwsRZI+xIn3pDeI6nUP5Goe4l2mzwCdoK38g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.4.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-FD68iol70tdBCTzVJSJDRYc7BmJ6NDfUxbO5s2OCz8Q= sha384-VABMHT35w/Uv3QoQ3yv/KPT3UFS5KWioJ2xCK5yayErsWNaptApZg5Z1achVZNfw
    sha512-hwQRCchSAN0mLqLbyf6MVeHocwlrMsWoHy8lt+gi2WWX+Af5B38KJhY8NPjcFCeYg1Nlpt22AvFS46+l5KgS/A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.4.1/ec/scripts/ecl-ec.js"
    integrity="sha256-rtHPJQFE7B9bNlt8cekMB170aJ3K5Ug9/FDHR8SZ1m8= sha384-gSjxV5m6WfyeLuJvdRK55yZaVWCyRmCmdCz6LpNd1XMpNiCR37LqKfzfWrXqK6Tc
    sha512-R5fZezLHTj66zK9MGiZUhGABuGzdC1r7KDWPriTpkDWstlyw9PCPdh2rbL9LbO1RQCQ26j7jXGIuvcz/t0v6xQ=="
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
