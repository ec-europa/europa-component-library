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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-OJrPbZuxSp75O5zgM9Nv1x0SDXpVRux3ZY0nOjqyNAI= sha384-BO1XT8Nh49v6n/pSuxnaAZsueOHkyVbzNZCIpz4q/HFrb/wK1QaO2+trCxtAyevm sha512-neGU4Gh+WLEA8Dx4UlV48IDwasE3FpC5+qpA8ZmdUz2Nwjw093oNar1GJj2ZPMJEVlIRnXo/nt5uFyu+5RJJgA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-og+18VAxV8mQ/2OFfP4aTjiyU1VHeJopCS0yDROj5Zg= sha384-GoP/czZ90ydwTcrI3gWJHADgNNPw3+FNJEZcUSRCwmxFazoR3AxQ1nvE/Avwg8uv sha512-kv/QVZgF0Ni4mnU7bXYofk4EYlWvvi7kismT6pDOglxeNSyzma5YqxmOqFnJ0W6kyvU07J7gooPkGdj8uParfQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/ecl-ec.css"
    integrity="sha256-o8CZ4KkapZZb0Pr7IFAOhwj7e2kqXGik8yhQxJjMX70= sha384-ap3eXuDUvcsd9hmYDdL75AqXrhoX7s0kKgxrAKQCcgzoSpHSEtZfl6YDV/ai77zO sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-ZAbPtiMu34g7ClnP/OKKWk3q6pFdJzhg7fXpYPyCxj3S+jIUk13/Qdb295VJ9fLRP8uWtNCAtDoUcKObvLhJHQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-cD3mT1SNJkmaOCxBGg5yrpJxtj8xBTbOs7Rj6KwxCmY= sha384-EwZiUC+gYDD2ZVZG6xdGG8Ly4knRDQiP6gQAxmJqwXVM5yMvPhBnIX32+B60KI9l sha512-cLdlb75MHsAkQP+FMNE2TGO8f3PEnxu65cfb+w8b/l41g7n3w0b8e/WRQbst5wwop5QoTNnl94GIzGb4uigOsA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-lGsJzeOFuaqZS9shwnjxQ6THoVHEiRNXUdC6pB93uM8= sha384-6KSQOblHRUInGoWqeJZpnVrxaPcgyT7fDD7A6ZlyRJ3rGgEuV+xO7YddQTXEsJnq sha512-xINVDnoXcqd4CwQtQJQ0zlcw+gB2XRgAJz5rz5m2QQaG6vYwtwJg8hEhop/DsmVzmMk1he7JPAYTriYVH+AADQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-qpCedRLtGXBwonM05H5nQrAi+3N3k7yMX5U8ug7/2c4= sha384-vF99833q79v2l9JcMAZUukq33D+cqc8FfwNr6NgTbC0qAcH8MAi251Nrwf7viL39
    sha512-Y146+CF0WBH+dZOn3KpCStE/AAkLLXWOI+cwVZxGyL4YLTmZ/n2QXRX1tPGgRTk1Cbe2LbcpQwNSvwuNBnNvBQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.10.0/ec/scripts/ecl-ec.js"
    integrity="sha256-3VQGQ+4+ZQYD57O4GrzZHs1UuKaKSN1nzDuzshYP6OU= sha384-yt/6r8cfW65qintphzyoeMJcWB3TY8yaPblNcjO8VyVMGRN0wIH97qtvyUAPh2aw sha512-HCQTbudw8Jq6NR57+7bCNzFSR7+TVdp6Roz6Ym+PvzSlKtEVsgh7P01EFzc3c1QQoPO34aC6lBMjf4HGmIlHxw=="
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
