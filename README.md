# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 18.18.2 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v3

Read the technical documentation [on GitHub](docs/Migrating-v4.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-mgSKbXbDjZsMACGEWe3e9ngIgCZQ6FDvE4NMa1YHoIY= sha384-4Y8Zhvb+CYm/P4CtkBHNR1z7rO5iPzfLmPsXkL72NfCqEeVS2b9WhuGp5hI9aZFf sha512-tkHUIjo+V0z64jOW1R7Hf4D2xETOF1zP7yg33oiZY8kNtgDWKIPcDGqVzKwJpzYSpeqsAaWmbPEjBxYe10Ga7Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Ylc23hbeI66ZSd63fktz2j81xHtkgJL24/VmdMFgplQ= sha384-VOfgsAa0AY+dz0y25lUybrCxmcB+df7wYlPzecERS6tDQF3d64h+erubPU2ITniy sha512-b/tBqnoj2JB0NWD5EYAeCNRsLB7tesRHafMr37IbdxFY6J2ugJ+zKUtD61rWPfcg28bV/3SVBIJ6lxgg40hvIQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/ecl-ec.css"
    integrity="sha256-MbaddwLA2UrM8hOvPuxQ7SijMDOE+WZxgJAmWUdQWqM= sha384-XxE95DSfU9ktSjjdeXRuKJia1PzOZ8gwu/wjvS2/jVEFNWoUmvLHmkzwq9oUSvx9 sha512-Sel/P81mVZrhUN+M7EcLHjAEHqk+BdEgfrowu6X/OoT7ZjdN0692noDImqFf965LqyTubhQG37+Hd9G8nUeMDw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-mXSWN/YDV5z1NWgjW0Vd7h3z2cUcBWOLKMchVHsTHc8= sha384-Qad9s6fo7xQTi8j+wVnmLhzfUbdhRCK/mqIjViia8u2KOdWJJ/s7lUd2/GOCaAqS sha512-a6sgs+X2b7+DNH5JGkIBGfeJDLYb+sOTmn7s5155rrr+wK6Ync3YIn5Ju/NoGF+XGlhWNgwCeevjiUlkw6bqdA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-4bFImfK2waWIoRd4x/iDSauyr7jnQT2h6wOYnFKvUoI= sha384-6ThGgJOG3meGrA6n8swEEEFUlPtsc9BFHlqf1v9H08s9xTyXn3W4Pxs2dpuI8HOG sha512-dAzltjYjniPj7l1fjpgB8LK8RtVhRb0yBakxS6HjUORmG5yLTSRp9VAstihGMhc8XIH7qDbq0RZWntu8lrkZyA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-z2x8dqxSOFVzNgd/S9XtUrYXdYwEJ5TngViZUTPrEk4= sha384-i6oC0Z8PjvJPD4leNkmh1Vx5AgyYKuKm7tyPghAItvujuIWhJ8Zokt1v4Gqg/kWb
    sha512-W46iwYP3JOticEx43u701aCCZfqsu4pxwgMCGBXhHB4GXJR+gu1228C5xUQYPVBZPz2SXskgVkq+l2la05q+5A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.3.0/ec/scripts/ecl-ec.js"
    integrity="sha256-sc1OXsnFAaO1ZMNGWF2pMwvmkeUKej5+jZyRayEEpac= sha384-iWuH2HLkZEwybMMFDYAIe3rJKx1sr95IM1mIaUQbmslYLQeoRAM9P9XNbY+UIqoj sha512-pcOc/jsrgCYLGI+K5RR/yDdGMb62/MUN8h3lki6ZJt5WFohmtXKp1dwK7PobZIIe28rZU/ke1UE1BX06VA9HXg=="
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

- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
