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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-6TDXwOAwlKl/d15XpYJn1vd7Fbl5ojiTa6ZjCnKAm4g= sha384-4wO3PdkI7dLsMqFjq/Xo/kBCFPxVyRxt+K1p7x1kwKFZjLb4ZnmNEghOe+tl91CJ sha512-IY5bLEpm/4GksU2BjAcCSeg/GyXZdj6hZjL7e2h+d6Niz8L5OG1IEm5fXv6WteLGkfxutjPqOhquJJu1zqTrWA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-q0O5Ytmhim/YLOSrn/xAjbMQyIh2dVI5B1vgTmeagN8= sha384-mF0atpSZD4XueV/FknRJrBcq7vVbZLyHbnlB51PbYA9XKrZnHFe4ENwiuwgpud7m sha512-yAWCk9f59yDOzjq/GEEnxs9R9s+L1XU1VYAR256+Ehb839L73k5/8aTVvmyZkiU1fjbuZ9tWJwyZyqrzP1drFg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/styles/ecl-ec.css"
    integrity="sha256-lGhoN6lA5BSKrQGEtiOx/xUIOJlJCTOYDsdeAH1YNhk= sha384-MKiUC/7XhTlJ2S80i9lZMTWJwoHVkGCHP1VsQLgztN6Qlx4gxLcdqeI5N3kadfe/ sha512-ppwPmERjKKY0OfvIBG8PYZOVZUsydDb2fV/N2DxL1GoP7U6I7D7RbBFzoR7LmuDkqyBq33eShoNDQ5AnUFVSow=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-GWr2iMKxeWdn4BlRNu+JGngJxZgYxF0RMoaraWCU5Qs= sha384-u0820s0ITVND7Z1h+MeNCknxE62wvDMFzA2lPW2SvtXLLI4/PK2hHGf4bxdLKfep sha512-YkDDh1k8lgdVbsGy05NArGpOo5xmr5RB9TFCifVi/GYhiee5P2y5eZwmtxHoLCsuuWC8BY2vr+Pkrs+WTNdjFA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-TsGEgxE4+HtyWPdcQd9skwcNrT4I+20hsY3NzKHs/mM= sha384-FKmLkUAPmQ0nPhM6xe7rZUedBZnMEnU8i4F0sXj3lLt1xWcdy5VtJV0OikCricXx
    sha512-cAGRd1WcpdSRs1sxOQTsAVrLKi5Tdxqqt5Xy9El30YQZqeUu68V1a6BtKR+3R0quiUR0Qai2Gsn/wRzxX3vxQA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.11.1/ec/scripts/ecl-ec.js"
    integrity="sha256-tAGp+7w26Quw3zANyjefrNZY4cZNJvlJroIlj4aYFZk= sha384-w6N53Agg8ZLrl9XkBOaigiQOUO8zeYQidMBbcxp+KSnhFt1LF4r9zW33tFwnMYLr sha512-08e6ETth3l1wiP59MKaaGUq1PX3du/s5Usxw02tH2pjlpNH0R8whpHKrFdo90X29FYnjQjTmbW5EWww/gwztGQ=="
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
