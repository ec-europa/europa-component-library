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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-KdBAkS2Bqu0Dlfe5nms9s03whQ2NFFuEv5fAVqm7Q3c= sha384-scf8FsT7VkEqGJLUPmCas914wgsoeoqP1qQq5OfkdCKvd4h2rC+AWHhtAXABQN4N sha512-S1wPoSuYkgzTOmw8xoCrMxM9YoLWCD3uYeWMnRnFYAt8OqmrEWzh7NWEUqPVe/JZoNpx/bc9WaV17vv9OhiV6Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Qymrl/xyII+YTpf1/bX5OgZaAn87bUF1rZJJVH0JH+4= sha384-9Gr0pTu3ZUZRzeoI9FJoEYem/8+S11zMx1F7GP0D2XpopjL5HirBtGJPXA0YgUuX
    sha512-5FjY5Xw+H/DjmKBpCHrLEeesSdMXUtJWIbb/dzA0ef9bm7XJTMTae3XoHlgQtcjvjBtsIBGc+T8loL5D0B5kQg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.4/ec/styles/ecl-ec.css"
    integrity="sha256-/3/ZcStWcFZtCo57fGP1VwqOkza3nPS3YNRB1KWuQMo= sha384-+r7eFG9IMuPNO9/qK6D3NHq/UWxvDzMmuCT6i9JfPKmbzTZm3M8tmCWsxoNVBafz sha512-noQGDTA9Xz/cq22vPsSpMhol9pWOByJ1xP0n08f3Tbf/qtYetvoX8FMvcX6U9DlSQ2ZhGn88ZpREouVqrBTiPA="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-Tq6qlXJdSTOlqVo9lNS89v8UIIkNa0Bw96kcaJUTknw= sha384-z5/w0fWe/XpAqnBWbzz6srelERapzuw9j9CcNkqxH0ysNExlKduQMzirMjEV6R4
    sha512-jwN7V1a0fnmn0Ohbeg64UYSJ/YfieolqHb03qIWXSJHqtXn+2QBAHqs8W31trjPoZtLdfMjQsrLBop8YR//oOA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.4/ec/scripts/ecl-ec.js"
    integrity="sha256-bh7GCOcDJcaHHCbdg21xa9W6C0j1aIGLhkjRLs+JFNQ= sha384-vH63fuwjb8P0RUlT1+RD3rFVCXdMBxKTA7jEDcAamt5ibFos0+IfCdd3JjLYrRUi
    sha512-6QdUW/tcDT2xkoz2wREK7DFdepQD1QMHIfVQvOqcpO/TItalRMz9cDA38EDxsOQ1rL+puPsEyyJwM7XvDyoekw=="
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
