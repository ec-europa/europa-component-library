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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-x8fih3RADyTg37xs+lR1sIidW5mgUf0yK8UDHY4Rm9U= sha384-KD08i0qyIf61vH1kF93sUi3Q932qZrHisbdvexnELlRoJ+n/COrZsc6/8K+uAAet sha512-xALIh7KYbWvrEPDFPRwKZOPUDjVC6xVtV6xGyj9JJsgfBrBzbr+OfMro6ADKJ1VeVe66EHXvhMpyE8AUiblfuA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-BsLipE3B+JMUJuCSddF+w8UNNmpluPVH7rX59fFwdrc= sha384-NfpHY27Sb4yiOXZbaX+bGXwtuUhmbHRqViHxWOqRE9hZAptnQ0yC8wTe2nItKHJg
    sha512-wh9Wr+w4xrRCT4MCSnMEsycVrPvVyO4gfUwevB1h184iDKR7uZ1Fqg7MCPHHas2ExS84FZNow+SiFIhnKsSLgw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/styles/ecl-ec.css"
    integrity="sha256-eq1ruNJETdnmLcCMJcdlb4g2PW9zWdZhMm9ScBORRYQ= sha384-9xQ8HWD3WENGWISeTSRaIU59UJqQV/17IvcSs4+FnzaXcG00+kbWqOBJbWIXFIeC
    sha512-3znTwjdPOInNt8qWFxx0Ri/tYERpftuY14JK18GyoOs6jjt7VtGs7TVAXcAo9ssuLw5H+8jRMGZw54GH3If/XQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-DpUqeaO3gTAxoZV+/dNJjsn/wFojDSRppeA36ds+Q2o= sha384-yvgsuBTLJYmdV8gol72a7IlHFDBjS8HWKeJricPuRCLIKT6MQ4/GUXoWQuXiqshA
    sha512-7HyPew89crgtyPZuHmvHgale//UCGHbUWz3bwjHNLulAU0UGBFIiLelzwpP4vqj79TK3Lrg6I2ERxzTBoJR2EA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-06Qo7wTwd/mn6JrSToAS5fGW9nDixscbC6wwthi/m2E= sha384-UBw7V2CvKKuSiEQiaRAvvlUzAWHMpy/bkGtgaL+iSIgzzkWK377y7xKOnOn/fVmO
    sha512-dhtDpBsggnx6cW5oY8I2yf095Sn3yKoISRlx+NKbZqs5bx5vXzU6WKvw4B/jgCyOPw0r4s9KtmB4ej2/tYzguw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.6.0/ec/scripts/ecl-ec.js"
    integrity="sha256-Hvb248YVPfMU4FcB11VDxG9EvsKDmctUIJGFu7aPPTg= sha384-F2LSWmMdUSGmoMMoDiiLy66P/eeXqHYsf70HP3aHS3vmnzL3sd46vCnpSaeRmON+
    sha512-HW6dlOJrhbHAIP3obZnm+uRxDaIP0EiXcNkyt+KOtGa7QI2vhLaNx7q5nywPDajuMVoA2IJZE2OKST5rT8TlcA=="
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
