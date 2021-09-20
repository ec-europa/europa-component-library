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

ECL is using Erbium, node v12.22.2. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.0/ec/styles/ecl-ec-default.css"
  integrity="sha256-pnOxgj2hnvojwPeJ5+wcWXo+IkRdTIxLRjRAph/y4u4=",
  "sha384-9nzE/tUsJ0sSYLvk3Y9tqGwU0qeq8UpAkz5IG/t8mNLHXx8i39UI+gTAc8+MnDNG",
  "sha512-wY2uk3YgdvDAUs1as8vvVg+bOSXOSFs89Ur624OVuGs+Ssf+y4vXAI3EENSaa4cYBzhDlmXIYnAnFM1c/Zm0hw=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.0/ec/styles/ecl-reset.css"
  integrity="sha256-EbSTOBDo886kjmZbEcCiGQMVFVl182+UGO7Tzfj55tY=",
  "sha384-SjdjgeZM1R7hy9RT+fhMm1oQzf0RcpfuGh5DAiTDHbmlgC6qVKODn68gAzY2nvZE",
  "sha512-4lDZ4K6RLw9QSGX45OjljpDLiG7x4HjTgoLbsm67eNLokjXfY5GCRvFIrCkSff8yUcLP6ot4zssXpGJqM3QhFQ=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.0/ec/styles/ecl-ec.css"
  integrity="sha256-jUlRDyQeZ8nA1keLwppSnaKmL1m4rFDmlgyOk09lsxM=",
  "sha384-hxp+Isd4ZVf3KcNhfJTjprfeQzCFMFQRTJuEc6wvTA/qOeJSi9iYzwUD5E75TQUG",
  "sha512-Q1xwDut1tnJWlZWKZw9TMOl2Fp6VZfeNIB4lbl1aswwbepOYg9N1EHPTrM+E1hGvdbIXjYRvfV2VZhONazq/vg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.0/ec/styles/ecl-ec-print.css"
  integrity="sha256-l8JCwCj+ILIn36+T8ZiYSqfPZGo6V3ldlJi/uYnPmvQ=",
  "sha384-hBtBuCk++gO9DS9IzKpHWuzR9UHCvGEzqCsjMSr6Th+Jw7rHgbZica5QvqWv2CGL",
  "sha512-T8lm/y47aDvCG0WMXObaKW+APgIw47zbPJAsyQc/cBnE+E7t1In4r5vN4qyXgTWDNyPYfzK7F2jrv9d7sAxqNQ=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.0.0/ec/scripts/ecl-ec.js"
    integrity="sha256-o7G7gHMzFqOTnXEujA1W8zbhel8riwoYyrAaAI1wwNw=",
    "sha384-bpL6SfeiEj3xUySJP0mI8pw4U1hqWGRzt5/TK5sH0IOFweBAZC7pbIY+m3/4Fu7b",
    "sha512-WjrWqaIoCBRM9BSgNj1m7ZeyKeXa3IIZmwQHltgRCfcXwAE95BDlJULc4AZ1jD9ZAqGiQdVkgP8lyNoyUl2uAA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
