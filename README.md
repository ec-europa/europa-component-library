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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-lmQk7a3/3SV3bNhVH0TXhL3lRY1TgCqkjItPVprZJ28= sha384-YTVbIgZQ8eh1Pfq3MlrI3O9ojJ1j5mXi2Txy06R1/MS6nvzkraWqZB4NDR+pE0FS sha512-ORMNFU9QBqecowQIIUcBKdiK3LxiKJ5RAS3sLkYB3xgwHhb9z43FQqfgEyc3aEC/w/HmxN6kPGgQQtchBAn3Ig=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/optional/ecl-reset.css"
    integrity="sha256-4JfhrOAOctZdKco8svH9w8VVKmQVBArpGut8/kfG6C0= sha384-Zdc9om/Jv3gvkUfyz/gj85jK2Gcmwm3kXdIrZ8WNWbdAHamYkvBgaMaA793Bx4p3 sha512-to6lNZn89iTgjEvsK0ouac+K1kPtSERXprpdqb3+/YXETbfDznpK+EIUBBHu1Sxt80iG1otRyruAdALZiHPzJw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/ecl-ec.css"
    integrity="sha256-gtwsVk9ygehojtU6R03FLYU3Xvmg4RIeqDWgMjcQb9Q= sha384-UcUQRMy1DIf2ZEC6nYEP41JN6AEU7kydSw9TgpzfRAgp7S9NPRD6Qg+i/HAi0zvF sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVa sha512-1/lVzsqI0ZvOtYqFR8Hv/oNvNzkSTLIYbHw84N5FW5u+4K36IiAcsGKGqdjjLoOiWyNbhl7rvpX/TNkRoF95bg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-rgtzFA9+EU1CKidk+M6Sc6oPFVI/W08il+T3RZtXC+I=sha384-06V9W1gi3ZHkbrt5kmWTaP4FLQaN2Rn/91XaQu/T53BDIaFehtgJKknBW+SHTKtz sha512-JNhAG4tX3hmNoiwqOo//kbJmeQswlMttZtW64AXDx6dvis6mkiwzpOnZ3FqLKr8Ux5XieGMG8bI+9vh0kqb6Mg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/ecl-ec-print.css"
    integrity="sha256-r6iezQHxX8bldaPIN202h6wLDJz9anPOHVFa7yxzbx0= sha384-Hb3cAQxm46VGiFQ7ADoVtKqidUneh8vx++7wmdbsJ38moz5FEVTzYEPcBNIEipV6 sha512-PSI9jQSu1TAuw4QGkq6jWm4DXNJo5o7qurC6UGd4eGwMXaGCIZbHUg/HKnEgFnEaeSgiUFQ4yoVkgFLMFfpToA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-GS9hTr45dgVO+l3umBlbcQsMMHYzld+2J24aVECyz3g= sha384-NPZRJk6nUsIfw3NbBg+KAwlkE61QYF2rsB+Hgd/UNLq6W2UAo+qVUwSAtfjSXLgj
    sha512-UwPoVVG6bzxEbgk/NcEbUTca0CNzQu9NKJYxU4BvH8mcrqozUVLqbV301QdgUVhfkdBfdKQDwG7bSFbqMtUsNg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.5/ec/scripts/ecl-ec.js"
    integrity="sha256-3Is3wEiz47KbEgISTNYWJpORaBZ1m5w3l+sjX4cZg6w= sha384-KmzgjIb7NyalfI8hw5PZ4nAFYfHnWFI10MTtfclylSW9jxVSweZrub/VOCoRJ3+7 sha512-PU3ALbBv6bhZk3BtN0Yi/dyVAUP7VW/EfvQp6BPi3+DLir5rp4VpKVflZ3KgGfGVkSt2BNXFDEV+y36TmeNnGQ=="
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
