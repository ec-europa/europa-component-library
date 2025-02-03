# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.11.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v4

Read the technical documentation [on GitHub](docs/Migrating-v5.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-+ti87jPFQFMYAeiDSZbTCw1SbjwuLI2yrPkockk8UJ4= sha384-LNnLVlQ+zw9o/JfVPH+YKyDrMZ0WHXIkJgX+zIEk3+MRwdztPrUalmyM3peVMAtS sha512-Hm3YWya7t1aBzDH3LZHsgJ0z6mzqE3Xai2gNWwYml3HODYhgHNIbe0fGEn/vUQNyiuu0ID1I7Wdqvm79YWZdQg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-qnD/oI0AeHa5NtuqNpyLqZz/itmrFTEt5dmSPDgEofM= sha384-xJasokX3STLn7zf0xqEIfgX3Tva11kxfxaf07kwzOVGTzHLHDChU7KjmzZHjlxiA sha512-Al/04V3xsxiWpAIImz1AjeAwR8L16eSdzz2igV46eyMYMKiBgKAIpexjo8EA51Luw4vhOtVRKdEKaTgx48eHGQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/ecl-ec.css"
    integrity="sha256-/9nv4LoYfOFjOE0rj20cY1G5lm6QdleOsGo4deSdsd4= sha384-xtGu1W5IJaRFNfE8wLJQ/CmPvN0FtEDhrcUZXkjMDepJTdOAfcKVxjIT8VrrjTt3 sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-q47MfOAuk65umSaU8YfM4xPCL9bo8G6oYIKp97oqUNlEXPU6tKKOySiU8UAbSyAx2GslKLVrQkIVrDvqXPq0rQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-qwNu+7wqiXGp04XZCM/+T8ZhKZadEfqGEmSwKqyEi+0= sha384-km8tYLXDX3gBhySEyNUEP2IVfoscuseB8lgXQoAobI4PA8/x9YajI28GLncgQKIF sha512-5IQNL44WZPc8X2j4kse0gHxcMFbSFB8s/g4JAP6RneoJph77KiTYFQZhE/B/vqqElBIK/MVosao+FTH+ao9PNQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-mFViBnsO+265hOlua+fqlMVDolil5XtToLjuWZ2kCWM= sha384-yDoo6vDGwivPrJO8xu+pPdjA5HmEPBjCUh3BboXlwy9xGH8vsy53OXNPaVBK1HYT sha512-tQkCe80Zq0TaL1ss11ozp/LL1Xoh60QZ3ZNCJp6gU8A2r2oXuOtANaWnEfxvV1Ie6gANfZNmb5QW1MbCQ7WF5Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-5B20JXfvvGVPgXPBGVqO/FtvuuMYLKtKIKtUCuIUpME= sha384-hnx4YiKQdbP9r5VPiMRjjGFEso3q4MSTK5J/z9+IZE5ioR+/RZGndbmQKSADRU60
    sha512-OWpnXdAJven5M+yH+pV5NBLuzN+w8XrfsecsdvoshsK/oGiThtWTPk0bHaHx9VOXm62pOxWbxIiMXZywmqtVMw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.2/ec/scripts/ecl-ec.js"
    integrity="sha256-sjmzWMMJoHT/Z/qJ00nwcRjRNoPjQTGVqECoUBbK/VE= sha384-k0EphLEg12JK29YPIMctgR4M7HT1YxOGS/nOqpMaq7LzRMS6M/Lx2MSkrNu+mbGg sha512-OXI8zOht3C91prpIrdYC8ENMI3vgm+0wgBIk7+4vsqTP/InMbaPEtuvbDw5mcvBpS0AbjMDGEtc0t+7HVih8hA=="
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

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
