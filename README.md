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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-WygnROiOomtA6wS3GkH/SEClGYPem/NMrm3Ao2tuNHo= sha384-D4+mavKOe5UdrWjZ4MrE6aV8r3lfzJphbjODMc+mTmdH9CeT+sUzJOYSUefwDo9u sha512-G5VpSF1m+SNkd6+qGh4E92FZJNeoQtIxg8RFW0iNxmM0fKyX2ijsGVzMW/D2/0bbRg3hlYxlN+uYC+tKe0L4AA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-Xx/w0Dr/od0kuaNeSBgM0Yzm0NFEhungTRcCZwtGeWw= sha384-FMblYa8lSdUXl/nWMRsjd4+dMsWSzaTzKIyNBtPqJLGHdHKbtlqLOr91QJJOCpeW
    sha512-fnMx0xUSQDTkdvMyaGG573UjQxvCXoKPSy8YIScMSPbypB4SWIdm9xxehSRDQX8M/5080hv7DO5i61stIU0LbA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/ecl-ec.css"
    integrity="sha256-nRQgg+P2dQmFZ4nEdORH4TlQhYgIF1CqOEHhm27ZwF8= sha384-1qhu1mQViiFLKx1meIIuO3cLYjKrVW4ynMYH5thvtY/E35x0y5la3Bno+u2Lq7BX
    sha512-l6oxIYB+ZzVaFn/zjDbh/HLRHDLiLkxbu4TArBsUDwrGa9QOuVtn3bUhP4Z/auBebqav3CjwxgVNUwPOBQ5xbA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-QkufOLLf2b77Vcj8EZ3q33BMvgdsJA1U4x/ZoAlIGgY= sha384-2YX/JK0sHetufNuTH7T8C8xQy8zp1U4XsnT48yFZYqXpcAkRkTKSSM8cvtX/SWSG
    sha512-9P85M26gyJwK3VN+eIPt1Ref/+C6TXHY9MP2bPJNFhsP5iamaUExgTUvcf/WgFT350Zt/tMwxAFqjK8B5aUwRw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.3.4/ec/scripts/ecl-ec.js"
    integrity="sha256-yAh52Ou7s+4z84alpxMPd+xfeH5o8dEW8p4Z0Kh5lKA= sha384-TOqoTE6t0YrwHvYlQGQPTVYFpNIcGzRuznLBbOO75r7PKQSrYukvCb2RZ+zWrD0s
    sha512-webRLnZmI1I+M3HGAtHzB2V8ctOXQHuyy7wIZSMjKzjaTYfFAQKLCJ8bcspsX08eS73Oe7+o4gnT10dXGnE8pw=="
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
