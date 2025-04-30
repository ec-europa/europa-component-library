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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-yUeVT1+0N+bNhF+l4hW57STNXHSRpcr1wqmfb8qWo0s= sha384-LGnsd71WAib+vVmwdTXVqYCMYbt0df0wN4i1Ha0waMpoevx6mTKYnZEdg8rq4ntF sha512-dYGk27LVqhqA/bOLHkW1jJqFjjRKCJ5Daf/nqC82WYwK+vYXed0RWB/+wDwLrDuv6YueUP2twpFqA3PFVYMosA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/optional/ecl-reset.css"
    integrity="sha256-lhC8rlv8g+8MvjHQIToYpFdTKj/+QIaQRAOkOlB3I4g= sha384-9BVI7lxy5kHUF38RS0gQysaRu8uw8ffZZEcXf6HXsiSJ3M+SKyRWlam+sQLqKhC3 sha512-HJJZt9O9PNDwqXYyvYPWnhQRehhr2o9zrlzZ/WE/5KGWIkev5m7AjF6lN/W/QhDvVquCK2/wxz8DEu5CQDq0Cg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/ecl-ec.css"
    integrity="sha256-SD21V0QzlFvdM9lSZd0b74tSVY09Hab42DySv29E6qQ= sha384-EwxbqQUFnh8AD4QzoWs9v3lT1kYCuGTBAPLoo2S/ZbtoSo2ZBC38m1Y2he+GQOO6 sha512-LU16VZ8H1zUr8m2wd9IOW2pK7A76nvy5DoENoEQfGzQw9JidCFA8xwJSdctll3gkQHJt0B7KrFVr1A0vWoJ2ug=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-1+IVvONuzscTtq2sG265++XrU2CxqB5qKiwz8qiBh74= sha384-ZT/jxSo4I7uV6wN4h9o1a/3rqHjVr+X4/X7rhq0j1Gm2DEb0RhB29olbjY7WHMuN sha512-WSvN8wiEuv08ZcLkmJh6wfeyZmyieouveUPaFI+kq84Nx28XMf2N9QrvDHMZwsL7yLDEqiW4r12x6zEf9xLaog=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/ecl-ec-print.css"
    integrity="sha256-devm6VVpws/AlFsINQZz3CHS+DS80K3ZHW8GFM6z1KI= sha384-77krioPk1pMCUg3BRclYspZVD18bnBHQvL4ffWyrbIgER6Za+zHtyiVZKuV45/sz sha512-iu9kBvEq0UiJrGBebnPf7+eHuJ9OmyK/NnlgbyjOCnBWcWb0doUrk6DLf9iK8rYPBK99jldeva57VHBgib2ygg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-MeTkUChWecWvkWfRuiZMqRSNqaKy2rA4WBxiHePHUB4= sha384-KHnepQ977tDwHDOH92M+aQmXa5a2Ait9FpO/oz5EDAMmTXRXqZmVcoPAERVl1DrY
    sha512-SGi4T+vaNWAZ+SXBma3MaZwznDDJpg1aAliyeqw5jj84gcZUHrnbsqNjaUQl+ndr+Lty7wHImNecFatODiIfPA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.10/ec/scripts/ecl-ec.js"
    integrity="sha256-CTUF/3Z46zhARqr2j8//URRMSfCdbFe2qHIcOPAg+LU= sha384-MV2xvSyT2AvXjoNIP8HDbRJJJY4038ONJ6cDNgeSg0Wdp3fzF/nw4ZB2BNfwmPz9 sha512-r+SlnPgG3p+BfwAmSOmLq7KYmPj3FDJ6GjiCUwmfqMTFaTios/tURoOCoPHSKwWHO36YuxUH0ens7CdnSM4AiA=="
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
