# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.12.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

**📚 [Complete Documentation](docs/README.md)** - Full technical documentation

**Quick links:**

- 🚀 [Getting Started](docs/developers-start-here.md) - Setup, commands, and development workflow
- 📦 [Using Presets](docs/presets.md) - NPM, CDN, and installation guide
- 💻 [JavaScript Guide](docs/javascript.md) - ESM, IIFE, events, and API
- 🎨 [ECL Structure](docs/ecl-structure.md) - Project architecture and organization
- ♿ [Accessibility](docs/accessibility.md) - WCAG compliance guidelines

**Migration:**

- 🔄 [Migrating from v4 to v5](docs/Migrating-v5.md)

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-A4BtBJkWqyuLimXY7EnJy/s3uYRg/lpHSK7aM6S9R6k= sha384-N2S59RCbMOnYg8ibiEm+ci31GXO3LZZC5Ntf4ylZRIjjFiI6IseaKpR3tPX/bo4d sha512-9to5fuqh2w897G0lpRay8/eDf3xulMzAjeDnZsmyDz7FXHU76CuH2Q7Cy5cc1gw0qODKsfRkpyZPbO9BlVYxnQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-AY7w/EkBLwuv9NXMlwFfaAKTgEVfeYE2ee1Srbt27MU= sha384-KpciaJO+Wm7VG9v9naU1Z1Ex1WVurIkUKDv1egEQpR3cTacEo5Btfb8B/kMkmr/R sha512-8kbvbcTrM/cExtmlIUcJmMWu19ESGT2Y5MdFQkb7JV8IxZrIDMc+eROuNCB3XwPnH9EoFwGp35KzXL5h5drbqA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/ecl-ec.css"
    integrity="sha256-4pebbExH+tSXWWeve/tXiKH7QTZvhTNRBFAaDshvf+0= sha384-7ik1JyvhzfmqKUVE0mRlo2li89RiP1Jh/O+mTYnsH5F9Kv0YaX4s+HoDhx+hsCEn sha512-vObXkMd1bpQOLU0ByRq95ZZTakhN7z/yKCr7I2oSRwi6p/hAhoeuanY7vBol5eA/DJpoNBVKTSIeh6lC/r1tew=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-i8NrsVtN2Exr2fmHRoxrZ8iS5Vg312GFEqQRwOItzUk= sha384-BgMhpKzg0lwaklui98d5zxPvDzpgUKRCfeBnXSWfJ9z/DvH96Ts8VBUt76Tcq3YF sha512-AzxFdf0wHAyAE3/WgXbBkpThUtFUX0y0s3PSiiMnLuMNqTswz29NWQ7LvNkfLqWiW231WAGEYhJRIs8vJwXFog=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-Zt9vlsDBKVth+Sy1qVz/eDlVjZn/BulRaMcA0D8FAFY= sha384-Ao8Lsj2BsrWfERYnQ8Uz2jLA/FQrjHmG2/8NvD2SV/ZL8xUEZ/gemGTFvYCkv9yy sha512-ptnA4yc0VA09dmRsell6LcdXlUEwYRIddWp3v4LKbXDOwifr31HMhwOWBp5C9ZlXTPiGqoUwB/wdYKpi4HOymw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-sfQBZ/IWjRrIxVEQbTvZavMWqgetzyN7CmC9Qf/vkSY= sha384-4W4at61UJZ8DsJ975ESiIkbkVBplT9yE/flyk/2IafWDS+uD5p0AJPh1onnWH7ks sha512-URmtasIDPHUZL9D/8egEocUNQ1D79Y9eKROR9hXQeopInzrpFepZMy8Yoa+b1k3CQornnYu22rG9q+j4oqNFLg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.4.0/ec/scripts/ecl-ec.js"
    integrity="sha256-4pebbExH+tSXWWeve/tXiKH7QTZvhTNRBFAaDshvf+0= sha384-7ik1JyvhzfmqKUVE0mRlo2li89RiP1Jh/O+mTYnsH5F9Kv0YaX4s+HoDhx+hsCEn sha512-vObXkMd1bpQOLU0ByRq95ZZTakhN7z/yKCr7I2oSRwi6p/hAhoeuanY7vBol5eA/DJpoNBVKTSIeh6lC/r1tew=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This library can be loaded from a CDN or fetched from the respective npm package for then hosting it locally.
The order of the scripts should be:

- duet.esm.js
- ecl.esm.js

If hosted locally you will need the entire `dist` folder as found in the npm package `@duetds/date-picker` or in the tarball at https://registry.npmjs.org/@duetds/date-picker/-/date-picker-1.4.0.tgz to be accessible by your webserver.
More detailed info are available in the getting started page in the ECL website.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
