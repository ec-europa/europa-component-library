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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-FlRnZnx8rL0zc8SdoToJgsE0KZDiCLNEVd+0Onapkm0= sha384-suRu6b5A0axTPLEc4+qHMLfG8OjbTW43L+SbFcOmMTI4RTpy2cE2F+Zbo2NnQdzI sha512-2h1UpkXvInJN1s3rOSMHYpwHpq0pqZ1FGu6rYr2Um1xaq1Xmua5L+ugEBQewD29JWydZ5LAjkmVOy1fEIvFqow=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-a1DxMRuPMFZUHC9lyTs3syaArnvy2d+lg/09mKl87G4= sha384-a5hUaffnI5egAZ2MhNkb5YpzuASFA7leo/QgnXhMCqGdTGcLy7alf/kRcWt9QA79 sha512-OXBgHQAjBf45FR1FaOgpkZJ3j5ky/aQSxNcQ09lO4CQJTnKFmb+If7772F3Z4fwhPL1ey6mdK9uc97jmAWUC+A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/styles/ecl-ec.css"
    integrity="sha256-LkZQ/rExnBl8MVHlJJ78lfS2CLPbGwgDvYDxsyUBeEs= sha384-lXBeCnbcwbqBiz1jbDX8TDGLDkOphNbczm554BVXhhilIpDCZfusJStxpuLl7eiD sha512-XZxRYBGAF7s3y+bakiQuu6F6PFn7uGl+qmgiFs84VkkV+cop0I11fnrzOqWv6tyfs6DsGuz8mz1Q8xN1nSdTvw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-edXJvrhYfHTU5xx680r1+n6qloMZMy3Xl50WF0iUyjA= sha384-U63yjgcoje0q+rVMXzoVUX5mAdLsPXYFn6KPh4izK76e88vbzK0a9zwZH2/OqZ9/ sha512-bA/NrI7mhZ9GnEiDsNYftA4h95e/QnVaqPFoYZNOAn8uaPrvzEbA8JPNl96AmOL6nMcZdAG8BIx5bUHuw0ICkg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-DfWv+2mG7wiy6llz/A0P50Ixr5/j7bt6Us7cx/OdGSs= sha384-n5/nVi084B90IaapmSUZgb4+s7Q3YGjp2u/Pl2ru4x6NJkYa2wwYrq/d4l27ai2z
    sha512-isDf1Cp4t6HHP7TVncE8f+dO3q6czCJ8hbmx1MQDiLREhh2bVWnrw+hF5Qyft8WBV1Ox0rcDDQ9Egdsls0mxTg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.10.0/ec/scripts/ecl-ec.js"
    integrity="sha256-ICYsR6NMP/osNhqde96SOwfdbuJ1bgn2WT09/j5L+Zo= sha384-q+JVC1MKLH6CKQy8OyeMG2k0zaZwcmpiStdzYGT7HxjRQuGIGRPBYSPdGeMcik6R sha512-QEL5zylgnhLu3NOxuodwryH7IcQUoFhl/8L6xc0u8YojKOwPc6dDkPYgOkS2TJzUIdZJTUBozNFTK6MN27W2LA=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: pikaday

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) and this library is not bundled anymore by ECL.
Therefore **pikaday needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when
a datepicker instance is present in a webpage.
Additionally, when customising the date format used by the datepicker, in order to get a consistent output, [moment.js](https://momentjs.com/) is also needed.
These scripts can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- moment.js (https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js) (https://momentjs.com/)
- pikaday (https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.8.2/pikaday.min.js) (https://pikaday.com/)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
