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
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.0/ec/styles/optional/ecl-ec-default.css"
  integrity="sha256-dCDhJRB/cjBF+ealbvMObpP04HF4906bm5uzIGxskJA=",
  "sha384-cewPTnbvEaSOVpIWuTN4tFZO99gw1HqORMDHVvZaSIQTtbmRhH3GP/0iK3PY6T8j",
  "sha512-b77lnu0j5DupHWo0y5Zpmc5jjLxhP260VjOz0Nv3lbPJW2yOZ+fZI6NRZmcbp55irwQkOxPrTXShOS1clo3n7g=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.0/ec/styles/optional/ecl-reset.css"
  integrity="sha256-MjqBYCI4cL7pRUCUrDS2hD4pGTzzoDwTxjIIIQ9xF6s=",
  "sha384-gVnsqziYlepHvxSeJnXpBzEPe8HFxunyioPTbNJ/jv5SEzYlo8nhtEHsavx8pM15",
  "sha512-4ShiNimpKW4ESEZmhdjOC3MhoZBJJIo4aG68cFNT+Xf83G2Otpqsx5sTd0FY79JjzVzONrPAYZmNHbs68cOKhg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.0/ec/styles/ecl-ec.css"
  integrity="sha256-8GRL55O0j9Apre0jFEwFWDh2aNfjdmmv3ECoH7wGREc=",
  "sha384-eHLxmYqZzbm/ZMCM0HZwDWLePLMPt9mNdo7JZuyIq9WgrIc53+MbYAlBFdojYGVV",
  "sha512-IkDwwVr1luSvzI4dBaokIBHzVaFjD+9g8sa33VgvOhKyb6KGbKVFms9hcXR4M5enpzCxaXZWQlTNAobhlkvYKw=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.0/ec/styles/ecl-ec-print.css"
  integrity="sha256-/yk0p0/KpP0buZnU1kPx9TBvxDfvWe5ja+kwUz6q3Go=",
  "sha384-OyQ6mWK+lINbw/57QHEl+jgGGfRoQwVbZTfY3a8XKpadcluCsfbB86pdlnrigEj2",
  "sha512-Px5krZOHsf3nXLSZls84n/v+86UhtaUdyP5Cf1YTtEeuOrxQrmzZDNX3O7nlogyqcpVSu5/otpugLamkZsULBg=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.0/ec/scripts/ecl-ec.js"
    integrity="sha256-6LE3YbG/E2dZDvFQWmDwWqHOw61TRh9SM3lCN+bmDQA=",
    "sha384-iaFxgNZxx1yrRG41ryIFCnCQ51qNH4fOKaXy6lUl4I8Pg0DcPSSnDEzr0nVxdokb",
    "sha512-vZaRfQx14FD888xV8KiV+a9iCCk2woMXWFqvMd2jnw3sWaqKqforu45/OTbXDHJQIh304xGDrHus8MF1Ut/foA=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
