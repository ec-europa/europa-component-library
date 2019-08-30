# ECL v2 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/adff9a95-45f4-411e-a148-fef1211ac9ed/deploy-status)](https://app.netlify.com/sites/europa-component-library/deploys)

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-tw++/aTiChPOOopjeAMph/+waoT71eupj0l2irhA7G8= sha384-Z2AH6/JvXn2QiAulMMSbdIiLn8Eul9cBccQkA0ST1ErpgncPv8CFoZiw7BJlBx1T sha512-JgXWCM8Ggz6L33oPUOVHZfHamCk+y08xNROVzkJpDom5EBmwUV50Qd2nLniV2e/pWWKEaFw3wJHGObLTGk/cUg=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-pKkJrEa0qKruuEOv8b4NNZiBe72k+JTbgo4WT/m6QD4= sha384-RoncSxM7yQ+/KbbDM6p1/crdcT/sKGV55QnE0Z8eGKGAoLPDhlNwLTlWEEaJQRbD sha512-8w79sBoDaFAYAkb7wLuH9A+uwLv9DSrsvUm/Z3B93egRlCO0mtueLeJ1ewY+BMfZhdFhN+iQaL47JOfvOrOHsA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.10.1/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-2w0V6aI01G8rEHK4lXJPoQTWKyYZV3bbIqU3UpQiAIo= sha384-ZWmY6TaV2OZRaeUgvUpJlf2xTF5IRqYqsyHDLao4D1+c1Wgeud8DUzJcAVrIdhQB sha512-s1FuXMFPJYhtIjoZa4CDUNjx3TfJIEuOsUMsXSNJrQ6zPenC5b2cq4J/bVzyCtZpX/jNwfiDzOAgCXCxPSZbXw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.12.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.12.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
