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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-RfkydhjWHuESL1dRx9TMdTF9wSZBSVDQczYbxANPFlg= sha384-iyE8X71QP2Onrns7/sha384-PhiobZ43l5/AYShFNCGltSy//D9TQVWZeIsP5UwM30BhIrKi+DipZ9e5ejmy8Y4K sha512-npn8nY8mb0VWINKrLhaxY6a+/CbPknjWiPhMB/5V9ZuvQ81FmZUb9D3coqdv3vMjNbzDJqEx1L7Sqi1Ag44ZOg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-MfkbueC/tl/czyVwwf999X+Dn3WMyHPYhjc30G2CaYo= sha384-lyxsXxAC4m26ysiQWh2dKIoLD5WS7rIFShfI8ruMwJTlMzgN7VSCD5HYZUToTMxF
    sha512-lFu23NMF6jVhN7ZrzjHvfjA4WBy5meJGGEkOE/M3QKvdhvSK//aZbPLwfutfOvQwYzA0ZjlKRoegffkVQ79eFg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/styles/ecl-ec.css"
    integrity="sha256-iJu+1A85GM1M/tmXeCEQYZdt+5/dmtiuAQCJqYaZNIM= sha384-SJXbDvX6PqhkBUYFJhBu/rsaGJCcGrcThFtOtB4YbeKkTOvTY8UUGb5rc9qow+bU
    sha512-bkDAlEYhFPPGzjg5sQCRmZzQza9gwSI+jGE59KA9OFrMlbN0wXNjuUTxaq7t8OU9neGCZIpOL22aMJU/uCvLyw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-e6Zk3kJsGhPy6tziVyPkigRCOWiyytGZRxXqcMPCUG8= sha384-NLL52lxfTPLSFAfXnMHp4Cl2FeCL8WlcHl2272UllVkEa6F5Vlct6Q3T6FlxQDKC
    sha512-uQeFwTQ5S1jI53wWTLchDbGk+rxNKD7xqUohL8Y3j8I5XGwVS8BbwcsvpU6e/lyEkkzYVeX+svQ8Zl0JpE1++w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-IO1op1DTRcAcOmZdKLmngeb4b9jXXD5iTMzEk0WLECE= sha384-ZKX6KgSQOKE375Nod22T6HWXVSyLUqyHY2kcNtUqNd2w5PHygR8+iqWvD1+yyuDH
    sha512-0xfmbA8wWS8cQATZWwC0GeTkrPLJwQo9m59noP1OzePakWeCz8mENi0Z9lp7uuHZTc1H5PTMVmRfb5y0WFFvlQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.5.0/ec/scripts/ecl-ec.js"
    integrity="sha256-B79PinATM5UkkHlaS2EBNYe61drZCnvOgurwNf29ARo= sha384-DLMvy+XpEI8xWhKN8Jyc6MiOzz8vyf1+pkDOrIKdB2ucT9IGHI0wnLjiODCBUTPc
    sha512-B/FQWqDE2NMtDzO1pBFgMBy8GWbAE/23NsoKmrxltiYchbMdfa4DaJ6VkTtwvAhmFE3TgTTgoJszxMzCWMnuqA=="
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
