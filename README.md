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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-Eddz09zc9hUerxL+UdSufFSodYuRo2hn+bjVkWAmc28= sha384-Ki4fGTuQj1UcikooO1mvdyBxhToiWexH8rUjATCt49CIlhC8scE28QIRRWIpbs0R sha512-jJLm6EjjgexhLQ3xAld+z0SqlJhe4jNM5FojQzwWD3cPkzWggdU5L6GJkucNI2RhsQlzOTLPySCkYSw2IB54PA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-qO0utqu0XP0M7yQKqV3Rynricpvn1/dBwVf5Itum1qE= sha384-3kVMOpQmqOYLdNsOfcdg6spgWtnqjCopZPS1TihVgDxQEl98vqS6a8EkGeGrXVcA sha512-gRnFRQlrcm9vJrx6aLfvDuoYYu2x9+hwF7VtgbMkCpRj8Chr/uaj+ozK+SAc8eYb67TjSQa5nl8blDe1dMYMHg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/styles/ecl-ec.css"
    integrity="sha256-jejuLRrhpmGKa1Kb6nGHdMqicfJHGwQ9ow95XagjqE8= sha384-7rhhFJRGJD71oaNKqBrSoQSN9POZTPVkPAcvQGnm5sXDCBYGtrRFElQE7jdieH5/ sha512-b0o8uIM0dvV2MV8FL/yO2J6eE+z/dw6jNj/nUY0utPwUQLc7OWXkEKV0OzdMtdigRjiV2gSowMVofzsznpanXA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-vHnpp1whXvfmszH86HLI2Vj4FkAIoeOodrdyI2UT0VI= sha384-dlSWLpeITx3A3TIDPEfxn1ikpugi9q4u6MrsI9YAUSzw+l0RZVMb8PC2wwvvQdIX sha512-Tmr72Cb05yWrgcYO6711OsIdXX1Yi2X5GYQzNYlives+YhtX3/bpF4tRQHRJqwgEL92AlBraNIYBlXwLg8RTqA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-e7vEUcmjkmvAcbcNP93+FMngWPy7vXu6aGFqWGIJtdA= sha384-QJtKJkm5iuDi5lpdziH/A1Yx3mgGqkd1BBYvegG3zJzhebSiERVi1MVl3ZzrwhbI
    sha512-idQI3gdOLxo3C30117d9vVOjkiPu+DmwMl5PAuIte7U+QUeQCBelVjFsdPxepM1To2No0+WsRwDuqVOwakqzTQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.9.0/ec/scripts/ecl-ec.js"
    integrity="sha256-ofxmU16esYAu7AEhKwGRGLCMneCrkT5EaShqooKdXa0= sha384-Vbu9hFkAYiTtE2m9gQ3dfujStuY/0Mfu9Kkn++S1EuSjoYXOHW37iMq51Q0MnQmV sha512-g84xfLVKfN8NELS7hrz0cT4sPlfKO2zcb3gSjbEf0CtNKZbOKJegSdp0wPYvoCTJAjy3bUOeqSf535voCA0K/g=="
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
