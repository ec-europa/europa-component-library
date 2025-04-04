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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-jTwSPgb/achgPF3unLkmaZDIJmu/OV1OfjlPg2+z4k8= sha384-zXLHAmd9Xfs26g9uNwwYBqPSOFiyoyyIL178aSKUOtjHKVjZGjEWy6mnFyJ1tpM/ sha512-5wUHMpKimq0Y1M/tHOlqVpSukorNER0Tqu7B/Jtk1tqon1vxScK+/QNimGZkMZjwgujvLaxLGPL9bwmymuhPBA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/optional/ecl-reset.css"
    integrity="sha256-9hFeNKRFbfW+PCO8ml+HaQdz5BMOjpZ1ZDqkrcVSHbE= sha384-+y0CdpMR9a1FwqgeK5lkhrEgr6sWn7+4HDYNIFNJIk0sjAZd0CWycc8nqB+ZlpUL sha512-jiHEOklVta41mIH87QZ7+TixP2VxDMYqhDcEWrXPeXnyhrDq7aE0VwBQN4ueCBur/1ObsdrNTZAglLvTZ6i7sQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/ecl-ec.css"
    integrity="sha256-2L8yKadv8TMxebZpuKTJT5LnwbfkW4W17dT91/tac+E= sha384-mzl1W6CFIaQ3M40gcgJ19up3Ehl7dCaxCzBg6d1M/C4/Nnn519pseKF9eK1Qmyh5 sha512-9/AgU/URbA4L7g0Ki/ethAHenP3W3IF2jEhNLu2fe2xxSIZpYutNKz/KGttNlO56x0SMXO936qwFaDH6aCdiYQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-pqdxAnAKT7Zn78osU7A8+zhiDqNzFXtKAbOXNLUE0is= sha384-vYgqOlYyHCErdpEnDdKN91NSgpocP0+OKuvAyiMGPIe7lgo5Y/xA9UvFr7+ygct5 sha512-S9iMC0j4B+5uvh+6vswCkubW0eXmhJnwKHjEFTgCUdfiKk571keixI4lQze2wUThmqvdZuo5KO/qzwuw+kYZyQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/ecl-ec-print.css"
    integrity="sha256-UsjYWxX3ZuG2b629RtUEnZ7B4zr9N7DVvrhFmgPO2r4= sha384-jw450KdAEf4HqvZ/6CphnQzehtyxKYAD6ythZGV3722fgCjta1wcNSr0iWzUrjcn sha512-af5IdzODbx9HtjytQX0v8PWsDJiSzTv1L1DR0BIKQrpe6LmOSXSTctiXGZA9RJPZYGY52+TgZ2fXO8sph1xx+g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-sESnVKDTCXSQFBsYMRpyCBbpFj+U22mxZiHWdk6ehbI= sha384-IxFwNWnEM3UgR0sypZ8VQL/zTR9jYNvPNbP+7jK1i9YS4RbUippczdslQjFhNHEb
    sha512-pwhfGfsPpV1igr4VpcJXl1CY+u0Ay56LsJ1oArRnnpWV/8dZ/Q2dh+YXdw+q3o3Siu7FVho+Kg8CgApbEiZXwA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.8/ec/scripts/ecl-ec.js"
    integrity="sha256-mITyKJAm3K5BKY24tFz7iYPD7oW36aEzo9kHYWnlwtw= sha384-Oqr2HzXa6U7n1lGNqh0GeBIoB3qbuYn6LyHoNECzmXIwEEGNC6zuNjE5Rx+4XNLQ sha512-J8OZQer1S32I2fy5qnpY85SPfOeIPO+sL20T8sP+fIUGGFeD/JCirV3Lzv38XPUyyrG2z8iZwl8wVm2A0PvTVA=="
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
