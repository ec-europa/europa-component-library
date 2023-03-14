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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-Xd7pq5ltmk+RSD208pDdVSBlFW0u2jiaBoOeGR94zP8= sha384-gRPoUkMu6WYo/RwtoIGwh4rR1oHmg571JXzRAa8DZPpcsneXgBsxVfw94/UtVMVb sha512-EOrUziS6p7vjPvAHOpikC8jhsyBLnqdaCef51RCx+uCMkTnaVji8ttQjSvIbJtCwGDzTqGJlQxtJgw/ORHtlfg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-NJhlHUCpw9K7GcbQep4rbo6YaE2R8nd3HjM1ptWgdW0= sha384-+aUdT0vUFolctgFf0Ev2dRxK6Ro31D23RYiZ+gm10MQ8PxmKgHSM1POde+A2mbhd
    sha512-BXDw4vM3jyxw7QUlTYz7d5JtVY0Ks3QJ7Csn2XXz0m2bM8Ly7403F1CuvfmAVDMq601XGS4lqrUWKdbPVLZ4HA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/styles/ecl-ec.css"
    integrity="sha256-I0/BnlrDCgIBe/HVW7FgKzkKiS0aUYobVacFdMDtcBE= sha384-GhNsxvo1nhuyhc2GCq1MrtBBkpWINHv70NHvJSAJcc+TJVtLtzwPIM0LkeO1KJjV
    sha512-Ig1Qe8A0LuSgPWs1TsBVFTqRzgd9fe5BzwVLYuIGwETOpp3cvrZ3UJe93ty+BEVOZCKfKL/X4EcmXS7LUDVV4A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-Ivp/EijzRLPbca+HEiKmt0wBH53GAgNLZwjZ/r7/PTs= sha384-qWSQI4nlr/ZzyCeKWrYWsRrNPyjs+g1HXY5nWn60j2IoCJQKIzNjfkBs2oknT2nJ
    sha512-t5YoRCbVfpsXvHNn/z1+Ee+OAYCHKfM27nRBUkORCphvMzN+VZGuGsvTSCXBKcY7krx6WrI7Np5lrzFce6dmng=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-qIh4jSBcoSR5cw2A9UOyrKOy/I1nPcS25IwYVIxAhuk= sha384-+/e264Jsn1MnsqtBkcVEp7Tvz8OAdAqM5YXWVGbmpGx9p3kIIcWVD/dhA0H5pXjE
    sha512-9oc7mvnTVyztgDjqVkqcMLOBFuQlbAD9EvCujEM0GLYCjR/uxb5jpLL9qZeAJy5HjfWe39n5afvsU1YsYUQBlA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.1/ec/scripts/ecl-ec.js"
    integrity="sha256-85iYkyKf920cTANsUWX4YyMFrXVpusH1jr7D+f7yP8Y= sha384-+Bn+9hyc3brumdCNjOgARtI1yEYpiFFy9GoPZVCC7zRge/EzQB3zoq73T8+SQmmR
    sha512-0Im3Z1WeMCohDjcEsobMJM4mYSBh2iHqj04ex0Dmeqf1TTa6wvhNDC+cQasWaMp6TJfHHdvbMG0ulHQ9LHZpXg=="
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
