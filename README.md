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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-nbbKf2MLLv+Xro8k/CGg1rzJfyOPno4Z2zWFHbBXV8U= sha384-0AiYWQbc6vDN0jTqoIO9vCOcuWeMC0fT1AGr6mBM7HucyY+WDI0hN/NhEo+qGjKq sha512-300vMd/rfukykeAx/FAJRV9XD1aQI0whi1uPlTI6T+XG4cz7/wdCzmNTtk9ROhVTgQKhd7fx2NTc+QE/uMvj0w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-R/lWqVaF0+DnZYv9mps6zmN4HZHlynwPJc6owd9lkMs= sha384-UhHDt/UstMH/n5HFxN/uRN7bb46bokhFMjE88kgWHrI4qz8awQGmhhrNacToDgyY
    sha512-KZA6TqwMvhd9xa+c78YN/KXzeoHIDp9SX6woQs7W+1h4rKWNIBqtFH+CPNxzmevLATNTgqj83x27Ia1fBohu/g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/styles/ecl-ec.css"
    integrity="sha256-ZdpU8ceybZJrA2Wrwn/eMYUN2CcWPI74zyrjeeNUku8= sha384-yC56h5ewovjkjGHvHAKHxbM3V5aQoNp+fhu3jW6DUe1xpqPheP4olfuoAE1LRqNt
    sha512-AmZLFl1p0U7seKqqVCROPCN/vNkJhyBPUnHZnU3CCRLaNF3HZYa6/+U5yva37N9LwROsvEcY2t0oEW3WZMAtwg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-gX25jbQVjrlbaxzbaXMs+WbnP8Pap1Rx8QKm0GOePNc= sha384-g/dqKLDockch8REprtj1C0v+l/Mh7mpjGklFiY9+7KwEEX7QwHaV+Xse9zO/jmzk
    sha512-uYoXL7aMUEwwuYCI/z2ryb99hcGa1FcLSFkFOi83TJTC5vnOCCmGi376z32Kh3Xp1OGCptblr9/tAwkrjHo5QQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-YMmGrk9GOjgMElkRxpux8pzpRhd4wX5PUduKNcjB31I= sha384-TrVtoeTLGRmOTgH0TbuoxX9D8rpEPjM8ApNdrRTqugjwtzvFhY99N8lgD1Mi22lm
    sha512-obZC6ucyrEXMZXO0DfVvjKNeOKFYbrbxYxwaAkmx3t95Ub1Tioy/LnSTs7dx0EIR9UA+ZkRSV2OaB81WZPzQPw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.7.0/ec/scripts/ecl-ec.js"
    integrity="sha256-jkFgE7y8Q6ahu/3K0IfmGG5Dlhn7BZbX2p7n5JAXRhw= sha384-XeyzBjyWZFSXPpNvWFVMjKzgssCAFbHgGyqmL1XtZef5LfKdQdD4//K/WzkzriiU
    sha512-yclcR6vLyRbw/qMYkQ60dP8U5NRW/1+HdaA8J9JBHc6h/f6m2Gm+GEx9lREBi6e16mh2wtlurXQzaYNNK9OPKA=="
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
