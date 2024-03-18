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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-0t0KebOrfhoTEHyE4bEEjLqPdqB3GjOEL04kETfxmq0= sha384-xBamnfUPkuJ74GYQZhpxumKw4uS+2e5eDZp4jb7mnE3TWI53/XI5qUbTJpdYnIeI sha512-G33yp74w/SvfbOEeHkxXYpy+zuRpUlCJjAhl3uT5HkQrjdixFgskKr4LA3UEm//O4MTB525cZF6HnStv5t9VYQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-lS0A7IQuzZidWT5zuc1SwUpFsntE0EFLdk9NShXZ1u8= sha384-pRlBXWMLHJ4hH/wHGO0T2/wKKnAqGnFBahN+0mpU7CxbUGBlyAvQi24E1xazJ6Ey sha512-PiehM6z0VkPnDki9Uq6wYNZyPTm2OgOabmTyHNvBFGgvA6P+Z/whFl9OEWax40gaUpxws6+7FpL32u1ODkhhfA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/ecl-ec.css"
    integrity="sha256-2ikzI/IAJMZsvtJdsWfY3i/9zn/jhB3dwjUoIODVcIQ= sha384-yGKTNaiqeMaDDqZYZ66E3afx862E60W/doMEB6YmyK96Z1f+MfqLmyRzlzPR8wUo sha512-O1w2QdKJ303iDxvS7CG83eExNWJmUwQueUKsE/yPXdq6v1h56ElbgoOCIqYGnGFsjJQPnDNEFvVeZJc2q9CwAQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-PwlRlsrEXj6fyFz6BS0CKhDTQcu/NdnjKVLjmvSxuIo= sha384-C8uwquXQGqALEaxqd6jb1xhjLNqmOmS33KSxfarVmjjQFwms2F2Vd1yulI7D9Lsu sha512-+yaY9RfLu0dc0KIFNeaKUhEdBqnp5pjOFRzPwb5lb08v0Jl9/pEU3NMx8tXYB05n7LkUJdX0rIRUn5F8/YiTng=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-PVLy50U+3qWmAk/eutNFxJUiEW46Loa2VXyDfZl16FE= sha384-+MoQQgO8ntk+7DPdYKc7KD/XM9gfBm8d8obxAh8DWA6z9YCKTyVKKjcnlkVIbYrv sha512-/fwaWbMRQ1iswtUYCPJzOtUpOoj/uunjr8GlnIGmc7hCiz/3HS5T3C9oyPhpq6prczsbL5EZmAVyi2G9RFVuug=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-FRyRKww7xUd5692IH5N03vx597WSEWNpQqoZhDKRlVI= sha384-h1aYpxO53u778iIa4f+ARvBi+ZRrnj/RNZuombHXD1djp3Zt8MPrelfONVacqO7f
    sha512-EYWmxsG8iDUbobgocgUy4CrRmpXoBPMNePN/8ilprqa1V7ij7edhfALob63RBlAuunjlB+PQO2H12di0eZYemQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.1/ec/scripts/ecl-ec.js"
    integrity="sha256-vzlrIvxVWOAszk/CHd+XdGN049topyPlo/axhDb1cfQ= sha384-E0s864u2Vr3izdsFfgSYJGTcYl3KxaKlhKmSmBdfH7yPNbhW+YPTf7zwAwBOUnqO sha512-UpWo+7KSOJyQMBqZAKaKRB+f1xeSaDgjI+6nwfRpsEoNbNfbcbuXpNJZt1i+kawXTA793djW2sF9Q+mEKd+HNw=="
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

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
