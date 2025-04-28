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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-Lj2oBNE+L4KZpT7yyMEP3I9cNbwt0RNtUy6AQRBV1UM= sha384-t3tmS8Cs4ej9NCk86/wlFsle5jguajQEps6AYAgoyS11gYl5p5Ic0lfFa0ARxnpx sha512-/92LMCMoasGk7rXzF83z2ZxmByNoNIb1U7vhKyPZv0tBhjTiU8wOlGQ5pdBjUVXWnElx4tM+Z7rTA7Yv/t5jtw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/optional/ecl-reset.css"
    integrity="sha256-E4JMpljO97/WbJ36rzd59pmR3Ls/UqCc3G4FhcAz1Yc= sha384-VSo0y7r/mHhTpXXkCkk+qlBnsru7yTDQWRxWaVHKDdxuEeyTSZZ+jhRVO0jkc6Ed sha512-RsAl2Xb8UmS7GXdapmTVjsUvcZPVsi9QHVPOdWfbbC+V/AfYaTuQDx3h+keXLUXEzYHMX84Ezrn6Zdp7TK4R6Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/ecl-ec.css"
    integrity="sha256-iTIycN4kizxJmL2/bHWqQMwKnV+EBk85iWU3PqJnhmY= sha384-2LuRMBHVJHNM3Q5cTSzVgDidA2Zi6ePhIb+M+binEMMSJ7IsOvjSwWlVlVpiDHhR sha512-pp6T3Hc72gCyrA+6g81Jjeof5Oi3TQ4LIIwiG3pt+f1moVax/r1O8Hja6ZrWGjjqjOXITW4b+5Xc9UTXT9RJKA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-LRNCqRL65m8fYwEBcdWKGuHUlJaxobHl9csoX3dleds= sha384-TGh1JIdZYGEoYHuwecK7BPhU2R8H6tgNIvbaenoRCzziN9IVXB6hva6USBi+zeAX sha512-Y6xzVBScvglStpY+WLIi4hiO8byADbdzJMg/XqXcYs/iKeD2dbQc0nFVmWCtM6hsKSbibMC240c7Y4tEUc0TEQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/ecl-ec-print.css"
    integrity="sha256-ZzpL+eS1o2kyOCuh0PF2s3irH9IfWgr2dbE6ONXuxog= sha384-lbWlzzqkorrmVUvC3vmlmv/Eru/DKZgUjuF9Zf/7vHi1rLAW6dSpVTyrOy6XaEqP sha512-s0GPPJ4GPiM+w0MaoOp7CW6sJL6fZCkQi5jprwdewTn1KnU2O+5rAsBMCJ4sVO+cB2hDnpdfRnHQilSzjzPy0Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-sESnVKDTCXSQFBsYMRpyCBbpFj+U22mxZiHWdk6ehbI= sha384-IxFwNWnEM3UgR0sypZ8VQL/zTR9jYNvPNbP+7jK1i9YS4RbUippczdslQjFhNHEb
    sha512-hd7FBfODDizmhUAbLQAj2TS/MXSwocPZW5wuEMfNXuOnjrAcXugAiUwDsvgw+d3fy7rvHFiH260r/CCF/iVTxw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.9/ec/scripts/ecl-ec.js"
    integrity="sha256-BmVEJuMZhkAAmG8jf1hYmj3JBHj0FuS+kYVYVfQYr6A= sha384-MC5U6sGuAgA+VvKlZ/sClnIYDfDM3K9Hboc6w44hXN0WV36nTQHkhWSFVEX7Ymqk sha512-7dpb/y1MaxaqeW/nG4lw0QUWF2QCNOd9d7GeSQIR55yxKvi9QCXIaLBO7ZWcZXxy8rkDb2yPjL1ZoT5+dbP6JQ=="
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
