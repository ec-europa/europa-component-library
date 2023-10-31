# ECL v3 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using node 16.14.0, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-XDH9/56STLXsjXi+h64CnyVTpnEMkk+rIC6dDFdI5PM= sha384-o0CtEWkkjCGxtooe0Dov+LV6wM3G3fuWbbXl4uz2vVQmXTOFckGUigD5niNXZfez sha512-+h01LkuKypC23kcWWT7kELSXv55QUhVZuG5fsaCFE9vPNk6hDtLx3GjA+05TbqW/RkbUW0x8AjdUrddkRzeoHg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-JpzVx7XNA8sMpEtF4AyWC2Xn3E6lb2fyIDvS79XzLrg= sha384-GyoB88Rmsw9j4/ERnky2bTJqT3jYmJR/au+zY1DN9aEuBVgRZ7ovsR6xlmKji69m sha512-ydfKKTlCBcB8d3ULJXreaDsT8ZN0E/ofSe1/5dst9b3KWYPZ3w2wQfwQ55b3gqA7qacNOFhq5kqyToWIwdwpwA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/styles/ecl-ec.css"
    integrity="sha256-AoPUp0VobXecs0mCtqz3yo/HyPixB5BJnzuHnbTh1bU= sha384-HWX2F42lXzrCp3fScd+Kpj8405tpKF5nad82q2Ol1QqW+ZKCn474353N5whFu8fZ sha512-kBDd22U2P22oPignqwdI2I7eNvw0luXs+fGm/pCqCCHBtQ3nnUVjfKzSj+mzm+NfvIaHUd9aTF7KHq3HNmeDgw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-ZMcRt2lvkWFfgMoyBDclnnYlig4N9rFpVG7k0mPkj3g= sha384-frYD1cX94XoIbfEMZLxyH/YIYxaOO1ysb6OaioPLagQOXl2LECTT+Bg2hc9mtLK1 sha512-XF4UCrlappWFFVtt/XhaPqiJKVksX7CONSlP1U5JXov1gbX31lWCL75zY7kck9rx2jh+OP5iGuQoQSc9fs4D6A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-CVUyO1322XkOkqAByK7l9D8IjItSq+E8aVVZddCa2IE= sha384-g2IJHha1wEuJTXjzQ6Nj3KzvnsJrIxDPFQEYI4iooCfTBx8xnMWnVstnYQ7XCXqL
    sha512-X7+qE0cphgTxIt2jltPsgqPXqkO1pUNyflRqHHZ4qGoYTlnZ/l1r/yHy1IF8NfDwA/2E5aXXkzrxVIZpRo/+2A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.0/ec/scripts/ecl-ec.js"
    integrity="sha256-kiisN1eaujveW2XXf/djyZNqA/Yno+WewnrHvmFee1Q= sha384-hr4/Fub1wLzNX8riBgMyzO1MFHbt1ucxz1QuDuncvVsAOzs4+bjV31zcUJRJLTQN sha512-SYff+4HiBhP6fxAh53od1UIt2X7DiXhT9t4PCXHKoMsBv0IBMm1Dti63dTsXLk23wWuGeRSa4Dhy/ouX01+7ww=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when
a datepicker instance is present in a webpage.
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
