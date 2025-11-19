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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-VFI+5En/PK0MyKXI2QbHzcNFgSgeJR35omx/7614gj0= sha384-ESK/466shpA7wlGcgdwS5otW1zpiMiyf4XUMOKZQ8pKBqgD2KeRLbH2nHyEM1TRs sha512-cBoLPl0rQyvsYG21QzWj/vck+cvKc5jiTmkD65Z+qBYzD+uyYUFcxdmYbfE6PmeBsGiKq3myomqlpKAOg+BEbw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/optional/ecl-reset.css"
    integrity="sha256-RQUtVfQKADCRuGIHZXHnIsCeySsAPdhg7i//DdVIiR8= sha384-mVShTAju9jgtfFMO6mWpLDSTtrmDfPUxHrYZQH/3QvLogW9NkHTvbHzEbz2/uPjn sha512-xPUeFRSlp5iLDjIqZqk0xkMGl2xN89sI4BThhNoE1FBEJSPFRTjKfWQFvh3E4vT1DdSkkUfggiu72q3rtzKsXQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/ecl-ec.css"
    integrity="sha256-FvcQ+Ldjb9OTz07yZze5sElegB+wkbuOZ8EKPFj2Bp8= sha384-D0OkQwRnsXTWa3jhJuiJ1dWDv/3vIJH5iUhBz/8/haLzayZubZrwp5+zMtRnOKr6 sha512-OMQJJM0VW+Tic/Mt9IHyHGl6GSzkJz1SR7L4DAPOJnUgBArZjUSp4R591PIZGlLw44lwBdhVFUDSyI6EKDiqbQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-5T1Z0ciMoN0GuGhJrGDqBZo5Se3Pxt5YmqLfHBL4oJA= sha384-Z74xeclXM60TNGUWBJTj0P/F0RnaXHZsHaCaDkoRHYQg4eRppGh8iNWEdXSTVGYC sha512-Up/+y4mn2XqVH3bR9kQhm0KHzmFdKmNVaZX5LRq+Y6+vb4L0jj8MqiVWGyc36r+SBVAtBG4d8YGZABjVCToZRw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/ecl-ec-print.css"
    integrity="sha256-71MivTfYZ1EcwSWhry/S8aRbsytKd86lJMRFGOM8KQs= sha384-lSpgRCgA+8KROGq3f9nEB0LeYMXtPizUJbUcPJOirSwCu1AJMt4E20yqB2f/fsqK sha512-1GvU0ukV03gfo5bLAbhLXK0ofP4bST90KNQEhfeLPPccAb0NJA6DQCWk9yhVQ2XSTaJAlRHcToRbj3i4dm3V3g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-RM4pGpORBqn4TjL3RXE4nLipyXJQNW3ETaImldT7jFs= sha384-ujRSi6X9tvWzF5WLEM5baN0W7uRQiNeQ7tlgWCk0cKeo52BEaQw350u6Me9vDt2/sha512-I3TU5rAjbd+BBko7t1yMGO5JfajQQHxlPuMfHoRwbtI2iQvpRlJ0iupg/CnUTEL79eYFTLbu6q1/2D2KQOJtVA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.18/ec/scripts/ecl-ec.js"
    integrity="sha256-6EFDQeOKBdLsjicpldhzbm/ccwl5weS8UMsazn2fuwY= sha384-5m4LoFwAKNAsfsaWG1np9reswVjYh+Zi74x/eZ4N00+u/n6sl26GK0GY++zSXG9q sha512-Y3qRbjYtsU+JNAeXkBE6YKefsAgUBqqFp7S1CiRmcrkdVrMKFQIXC+OliQl6CQ0UKKrqWp4DmIEBShwS/nvalQ=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This script can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- duet (https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
