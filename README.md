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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-wMn2/tFxvEzzlgj1FY7RxLn7RTGH2tCqP2HAqm7pq1A= sha384-EtTHV0z7hxu+BnwldjvOoTDTlYXln5zpeu2fGMVgvHGX5RJvAbRuAICdTfGJGPXQ
    sha512-28jSK3/+Tl0R6AmN48WcL9V5nEUUPKNpc/nPAnds1+fpQW8xDMPTpBIwxLmyB/nHVPUttvSEaOjYP5X3pmmOsA"
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/optional/ecl-reset.css"
    integrity="sha256-NVuclxj+hlTrwJ/uLzqgxevoQboAfWGAPi+twznWPJw= sha384-6ZJC7FssuLKACC7mw4knQDgIm5iI40rA3bcLJoa5WM7I60TI19vip6I62nSPwwLC sha512-ssIxYs6j710N/sNNgCcx8rZZm34NnraEtWgFUcfPkkLXEsFHocaMIRRyZRNnB15iEp6VO/nbQeK9N+CG6IrRGw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/ecl-ec.css"
    integrity="sha256-nH4mAb1DbxyO5i+Yps1fHN1IDV/YDsDzj3E/okTBmsA= sha384-69XbCDlnvkybPcX6+f/9kj3u+u+q5kTOuZ3eerElkE5Ga6aTPX9NNaMQj4YVm0iM sha512-Mmo3SW6qJiliXchHzk4JvEfkDOMmJiy35+bwGmhdLYVqb/hob5gje7364LeM0Jzl6PVOKA65x9BT051+27G7Qw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-uIcLuGP9TlcxBw1m8BQ8H9rUuEhc3iv739UusAXvzzs= sha384-pJkfcGxpo6cCROTel3jPzCL7kAhwpoUUxyhaDdOmOuHj63FDowzbxYdatZa8Sz9V sha512-Btk+5U1tvaja6if5p6iOnz+SH0EvL1m+9VZ8FqqWrdbKfxvs1SEErn3aTiOiXiAN9EjLj8Knl6wi0NIPnePLuQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/ecl-ec-print.css"
    integrity="sha256-Vb6ese/VnuyRNY9WFxh0VcmD/8tKsB1/KDIhOFsM7LE= sha384-+73EvQIw6DZQyTZQf0QaPt3bDCm6oE/j1YL4yjrGlyeD8HaxQ5frTX69+WC8NhBh sha512-S9JPxg0H2NNixJsRgxlqPRZoFt+Cf308uTLuUHn60vmNet31/PQ3zhg6F8WzhwD8crtZZtLIqgbOS/lQ+8hjzg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-YSlmYOHMmQOvSeTyQ6iBBZiVMZkHaT9NWjk+2yZ+k2U= sha384-wvLKU4AN1p/n/3PmLEnGVcMQGamzp8q5xRxEkNDU4HesmLsroyRnTM8Dy8OEfce6 sha512-QtK4z36E9W5hcPHkEdAsFbvUqI2t84pjSClsJnNKKwpTsJlXc33O2NKAzZVom8kQStPhOr0Ud/25bZ0uTcb0uA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.11/ec/scripts/ecl-ec.js"
    integrity="sha256-6P2rQ4kOebJvm/hEVSmr0S+HdGavKaNEiz5g7KPne9s= sha384-qlr0a0zQQt+p/BEERd9ALBwBU2h1TtZlOUdJww4sTDsNL5GZkTRKpXWMP0d5yX1E sha512-L5iXImatIFtC5uLUcmCj4sdkJtGh+lc/4KArxPXUUnRXn5KYbs2mjHPQvkl8yStzjdzIE6tMJEVOXekZKHdZ5g=="
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
