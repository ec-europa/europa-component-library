# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 20.9.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v3

Read the technical documentation [on GitHub](docs/Migrating-v4.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-6mXnLvT23COyW4+RRBCciucOzLcBrEEebzu9FSYX2Fc= sha384-ms33ukXe4YSJEI+p4GgCEESD5FHnOF+tZQUYY8iAw0K/SG1izAW5m3gXLmd3sVDG sha512-FoyDAWgjTpp8tgreZThMW5kg0PlGz5K1L8O4+w90S6u8EKraoQTKpMTM2E3s5QP3oeUCYhtP/1l3lnTG+Bci3w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-6UjY6zZDh8DHMxC8RdRhtRthQ2pWthg6y0TP1rjysJ0= sha384-voHiMlPRUEhCYyUBH8JzFs0A0lkb/8h6h1YkPfGyV7PJbxMzrN3Deowo8iO9Fw03 sha512-PxfJC/cnypDYbdDB6uCcAF9NqTJ861/gPbcNbDQUylR1yjDiLs21HcD2SOiUzEeDKxCsuRMHrKBkn1awvHD20g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/ecl-ec.css"
    integrity="sha256-Clmkvl3QmT/sdxf859ZPF96QqgQtfdJuP10CG4Tb7sk= sha384-KU0MEZPbyOFjN23EppbXqYffJX49jdmvYQM6Lc0HE8L2WVneCNsHVuJ9Qv2YKdLw sha512-JOdS2CDxIE3YZQFuR3s7Ox0rZTCDHCGmfAuHl6388upfYMKee0P4dSUc59GTJ0UaooaWf37r+CnhZXuxAb3sgA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-2Yyu1IOcubGrmc/3kyHZQbctGu5P/oDDF3Ras696dHk= sha384-PnttWar/GQi6H656iOch/StZchTVqtdOXZb5DMPLe6IzS68EkUTghiOZxlnh4/lP sha512-lpyv2MAnswabCgY1haSq8nTPAmVXfOMh+6t2D/tnFwxSV1srOwzwZK8yK8DNlolOhalIh4XqImNaXMFEupk0JQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-KoWYDDuP10DVL/Gf/G4Jlu6E367q6t5d4KU87yq3SoU= sha384-JZ9iXwo3C4AKVi8VQ/VK2X5zCq2NKuWM7yjhvoNXTevfv/Ib360LIlcusWgz1npr sha512-ffds6T5qkj9DTU5tfcCllmvRrvuWoU3IkltR/WUzzTQmUuTp9TBCMw7Q0S3sp1+KpLslIn8CwsJ/mrat0DX8Tg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-n9Bq6FKXyqU8sGPazChB2L46qYeezpJEHtNL3Ur/HcY= sha384-wk/GK3a2NGEfPtKbNeRKTEcm6g7e5aqKraw9gjwWfEhOY/PrqraOQCWkKvmICr/N
    sha512-ZMmXjigV/UYNlod/VC0dA6IF6CQlrdwIyUPuUby/yrKa0GL1EPIv60gMpX4fv546WQfxFo9v0x9BuIClPGGHaA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.3/ec/scripts/ecl-ec.js"
    integrity="sha256-Vy//tdPP4ts1+/vWALDAdMuOBSvCMOG7C9SIOdcZ+KU= sha384-gIIJtocftrtr07HKmkpTTt3O28/htXPM4ljVL8TKxw5e4iDecI0N0YyHgx6lhyLi sha512-Zu1930Ap9uj+M2YB3a2cyM7Lw8NhCjk/8f1BoEWRb+ViO/8MywBb2Q/NsRqrIpyx5Lr3YlV8sbm+ZF9jIoqHWA=="
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

- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
