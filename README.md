# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.12.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

**📚 [Complete Documentation](docs/README.md)** - Full technical documentation

**Quick links:**

- 🚀 [Getting Started](docs/developers-start-here.md) - Setup, commands, and development workflow
- 📦 [Using Presets](docs/presets.md) - NPM, CDN, and installation guide
- 💻 [JavaScript Guide](docs/javascript.md) - ESM, IIFE, events, and API
- 🎨 [ECL Structure](docs/ecl-structure.md) - Project architecture and organization
- ♿ [Accessibility](docs/accessibility.md) - WCAG compliance guidelines

**Migration:**

- 🔄 [Migrating from v4 to v5](docs/Migrating-v5.md)

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-wV9+m19f3DI2eOcLZTzMdzNazH9jg7mAGPeJdFt5Avo= sha384-1kq/5+VHne/QN+hScS0DoFE+1En7/jy84bPRrEdYSPgDizBC1m9VumI8r7jhigNO sha512-Qp1r4lb6sQuUuEpoktmwSJadT1VluCUhvZlwMhfoKf/HzRyiqy1ieQeGq2THGrkId0GtjUV56BY4L6XKrhZ5vA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/optional/ecl-reset.css"
    integrity="sha256-axCWZpvLlzC7fUWoij22Hk9jFvfYcU147r2NO8YpTHM= sha384-jKUtH5tt+v1GWnhblUZMT6OaAUa/NpSIfJ+jkAQFQD1BxYDN9tLhFd7XWe1N4ODC
    sha512-bTKYGT2p9BcihQzrOVteyGtcPyyPi57wwhmABkTb4GU7iCVmYJzPABxTUf530rVu9Ki6vEZuHasRXExfH8s1sA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/ecl-ec.css"
    integrity="sha256-8V99B5rACXEL5rpmyDtGSuxuDUV2oH86sF8OdHtTB4U= sha384-O8Ucbd6NbvfzIRERHeHO2lkp7Cwn4m/amj9sCMYLTf6QsUX0S68V7TxEDCsqYD9V sha512-/QTSQctArht14uvLjdK6Oh6UzmTHo2J8rl8KmCZhKyYBQ4aijzqYuPVZrR/YTJa5WJLiC4SsvC27QufyEdZuKw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-70GmVgmCQ8U7eeAbKZju1mI7sXq3eFmSWf9trNYAp5c= sha384-+0TPEfXMj1y/NUOOgunlyBKFC8h+ZiZsRif4u0WaJIyGl6IdTE7TAyi9VVpmLgf9 sha512-XNdRXnjJUou2lx8Yx7EM8eErmpJcnag6A/BOoXYL8l1BH0SXnM3Qgvv5tVvdJC6379S8C1577XJA+MD4JEepiw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/ecl-ec-print.css"
    integrity="sha256-3r88V0agV8BlVbodS976XOni4qFUPBNORou5ifryYSM= sha384-Ii9GELqpUvg3dZpS8nUXn4oiUk8FiNLk+83zdz1rc2Rg4LFXl6o+SA6HuCUeC9mU sha512-H5MYOaduDbyL6+kZehbdmPq7NxKD1bpw+Xd5nGmZgCWOGvdaytW49SLL1G2WS3uEAp1OCcMd9yKfLY+FRWcnMw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-z2dzcnluogdlGYQvD2oOGvaQHQcsAId6UUhj6b/ILHc= sha384-H9s3Vjp0eQIy2O4CwRGmNAFCniw445Or0018kcBuZI9ZtolIUTNI8xrCsg6nh9Tc sha512-hbol3qyu13j6HnTrhYgknF9zeFSFXEOOyGhPlaeHU4sHOC3NMsowLMUqOauQzn+JlsHvcGn8koslHclN+RoDFg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC5/ec/scripts/ecl-ec.js"
    integrity="sha256-4MrePSK1aT1RMr1EvM6LVlYyWoaNkpNyhGvkCogn5YU= sha384-9UJXHqm102RCtllGGLQDa1fJDTbIgu6w6HFjgcH7Xdk+kgKr1SeyH9+BapAuLBl5 sha512-O9fRlqCS7i6k9D0a/G4fnTtblx2PkKia0H77X6YJOfXG8UvbRcWYWjHoSz/oZ6OQA5bnIPH4fVJovpW6ht52zQ=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This library can be loaded from a CDN or fetched from the respective npm package for then hosting it locally.
The order of the scripts should be:

- duet.esm.js
- ecl.esm.js

If hosted locally you will need the entire `dist` folder as found in the npm package `@duetds/date-picker` or in the tarball at https://registry.npmjs.org/@duetds/date-picker/-/date-picker-1.4.0.tgz to be accessible by your webserver.
More detailed info are available in the getting started page in the ECL website.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
