# ECL v2 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission websites (hosted under ec.europa.eu domain). The library contains all available components which you can use to build your website.

The Digital Transformation team (DTT) - a cross European Commission team led by DGs COMM, DIGIT, and DTT - is the owner of this library.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code for implementation

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Quick start

The ECL is bundled in various [presets](docs/06-presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/ec-preset-website` or `yarn add @ecl/ec-preset-website`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{preset}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.3/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-w015TZofBZqG2q4kMSOlyniyDc4E73ycQJC1PaZeWZI= sha384-gKotZoDvHeXTvucV/TIpUc1BTBXp1ky4tRPuihYrqfKIb9tiWzdtj2uxv8/PQu06 sha512-BGbLIXKDAmQHV0NiqmXkdWwKDDPoxa5eSbSMW5sPbNDPegQ0xVirFwK1p0bWRE9UJY/1GAYGmXLvoA9sdrgbWw=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.3/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-jL/EapfrS15YDqCg7dkQzHqkb/RHU8je2HtuZ7TQUJc= sha384-GuGVq5EudP4uR8aWOiy9ZYihjUazuuYTW+OjqLGR/EJBkGLIniP0Bd4c9v9luWa+ sha512-vaZY0Antxwyzdb1L4qzMwNJ99ZhlkKbl0oXuxifunSBD+mVC4NigMyABf6+1V9wcD94349FVg4iWEfc1cQMgSQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.17.3/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-YMb5ZFU1G7ApnnYHL6Yq+lWU91PuMIi5kLdpsDytYcg= sha384-lOMYE5Vi4fndijAbmKZsLBXhOywYngUBlmG46MxqRHzG7BSqk/hkD54AhVTch97e sha512-QuoZGg7sIO6dqTm7kMh6kn0kAP7/0xzc3uPvBEBc6mShdUsOppekVnO6U/dRZLBFfPFmzhbBxrO9bkCc5xXQFg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.3) - [website](https://ec.europa.eu/component-library/v1.14.3/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
