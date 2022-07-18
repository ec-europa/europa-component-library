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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-dGBWvDqzawPj1I2ja7UX+ua/KLb2DTvcVwbCjTNkjbo= sha384-TXqJLfu1menuUh53t1P4d1HY4rGjQLIewVmB04aBC6EUNg/ediru/KjRksN8j+8a sha512-/cLtGYzABR6JWNECg+KuAGGc1gHAvoeOuGNit8T6P0JZ0cTQk3Htt46xDFtFeIdN7CZFpgTaJwQyiT5767Mr1w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-flSv86Xsii+MsXix4sn1WgyCNh34uH+rz11+LvzmcJU= sha384-NK8gKHq8HbPe2L5WDqWMZYuf4ATafxMjChs4UyVAd9xPK1rmfmjSn/Qf0MNRBGgi
    sha512-l3hhiRhaISV96BtLmf0U6Y697ta5FDJth4z039uJRHV62hunBuXQCwCaaTHB9WVGTTI99b+kl2rp90pGEddczQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/ecl-ec.css"
    integrity="sha256-8PNCvAFrmH1z9HKERa2qHsc6Gg9RkcEjSPZnEJNXTpc= sha384-PS6Uls5xTKr9f0jkXMDM5IYHFI8dVxFLexZqJzL6mWLwYXsdBHXEmAC2hTERwGAi
    sha512-zzv7DbGJ8HMXvniqIkhltpQV1f6x+15svGypYn2nbPmR32RKXjyIAh94ml2NkLQTACl7AR9IBUVMKpYEJp+yZw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-Jw/aSh2MX3p2ClY0iFMa114oNtWaZUkk+8TtJ3TMDxo= sha384-QPh6ixwpkY6oCyJvy/jAtpJaY69wF5WXUE1+px9rdaP6YvNY00R6DvdSyzwWbPRi
    sha512-Lm362ab4C4ckv+j2z+ik3pcoXaH28ahYs9MkgXa8agVMInKU/rMrescUlQlSatA7qkLUtyFnCskR68VHCuDwNg="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/scripts/ecl-ec.js"
    integrity="sha256-WGEnRxbKG7UXv4N+YvjzmxzmSz/cE+en7mIZ1/ZCYV0= sha384-BNHNuP4H5MLb9KtRgNjBcFD8tOuu4FaJiTyKzciFEgoU0Vr3dZJXB5x5yCn0b8i+
    sha512-RT2OPYGQv9IQjLYsxQ/pFfnYXbk5LQH0xUYG5/IlqsmHKq78SuNem/fI5Z3ociLnEogFiTbgH7UI12tttrZfpA=="
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
