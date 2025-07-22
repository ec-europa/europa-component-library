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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-6Ye4oc1J9BWYucYG4sHGPUBFdFSnja/KsK7LZVOETag= sha384-blo+kkzjqpv0Y3u/lCcWxW5dN5XtdNJmt/D5pyMlOy5ixI0EAO1MwFcJsuZn1nC1 sha512-NbUO3p3oWiehSuofz7YtnSezkLqsaNsIT7JSZzhKntTJiPCrBX/HzgdC3qMpgAtITBXBIYP5S6Egfj5RG1TuLA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/optional/ecl-reset.css"
    integrity="sha256-2xWRA+lNDh1CZ2fcBTg5R834wUeswCyy1Wpm1Q2KtrI= sha384-/6mzMhAehCP/daEGEJBYlwiQRSHFcq+Og6IDhBtLKgQD34+JGYc57sg8DyPejcy+ sha512-L4iPyI85wL0mFJkPs8bx7FZKdbgsWyaViksIhiNanxWzWl5BduDnOBOZ1GL97AEYSVTWHxhA4aOwA3tmXUZ4Bw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/ecl-ec.css"
    integrity="sha256-WTj6jGaRVShhCzTfSIQ/wk0wbtkgYFzqMwqbKpDwPFs= sha384-jzMNYq6NVDIHnUH3u33TyU3B+hWWinzwV0RugtMflJKouwCC9c7sZ3BBEqpP51fI sha512-NQ1Ot2XZEUtS/QQFuJWhjqkPPSwtX11YLM8QrIWBIf5TcJCrCpVYO0t8vStlfgxqFPj2CYGxTOry3gsr8GeeqA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-2HPrxjc/kX+sD7ZfaMM2+lT/k8K6/3/rOLPpFpcTXZI= sha384-S9TiO/qvxwiZPxy9SRwEHTpBpvDeHoYBrzvl5otKY2ToTDFbJGVb1BROFSOpm2dF sha512-RiSfUVuJxbAzoy4gYKcNUU0G9zyvaNsZxZ9eBEiqFNoFCPNQZEloT17PsXzQVlp4a5a8syT1TwjQcgrP+SLO3g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/ecl-ec-print.css"
    integrity="sha256-VcFwYi4E5rCC/jc//ZZHvKaAP9sIRIsdxZ6Z/hPNZks= sha384-czKMUy1IYN7Myu1BM8eLVw0S6dSGiY5/MfwVBcz4kAlECeK3QslC5oDlxLa+F60Y sha512-ITZ4m1If3BeAsTlvadyZsaW0y93X2HqHsfGax8nxivYFX7Gg2oiKmZ5+GETZ0nVu7TiheCCwiEliSgKlG8093g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-wDG/khTPas4laejXswdrCekNMjBCWpK/eyIFThpun9o= sha384-OTT1ynXW9QbXv3Ru03LUHs2/pooI6Al1A/5/TNoTuBYCWf7h1FDb/sha512-IgoaXvlPfiWPtIcmhscNS44tejQLg0+ai9wZiEmKv3Buxeq0tj/cA0yeSxVY7UNuV7WQqQMZvY/3qrb8V5fqdg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.15/ec/scripts/ecl-ec.js"
    integrity="sha256-DYhLVyJUROherXErbdSOSVgOoVqSbjVCYuSY0NegxOc= sha384-KtxrIN1F4CPrLzIsFRIXzHgC5XkhUwwaq1X40HlDqrQ9TzozKPNsXkO3nUVtP35V Xwi4 sha512-neETMoNR6Ez6NqGi0whogXDG3Ln5IACS+zCSqVlGBRx389JclMaYQvXwgjLpO+ZArdErMyhhJkM+SaOEVo4wlA=="
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
