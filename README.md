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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.26.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-pICTinIlnqu5vgdCM4NHBJxvJldihASU6R1ncJ8R4Po= sha384-HsaXDZbcd41VtV08Yx5dutb+BzIoyDK5vgGlbG1QypGHQtYTTe0eksiJqXkRFGTP sha512-R1opMyIGpdl5sW/pM7wyWQJA7YfpIFDCqpPCoVmolk4cOTXoZ6vCRql8PxSv3Y0cjZ33oQ3u6BtejfXeeKGQQA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.26.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-byQ4uJilN8Uw5mq8iV81Dyyw8aYr7cnXlQ5C2UHNLCU= sha384-EoiRpTGVQ6glsPzLrgXLdByCO7AfsK1IOFDHwA4xtR4Y6ValkC7ZiFHGkDfmfWRa sha512-OTRH8WlgJJKFrwYOMo7hASnAWzZb0fXlfiDLn0JMeKHs6OAOpQlcjkxKNXKMSG5XJWX/jIvJa7ieNP4h6ODQkQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.26.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-tKhucXCd25Q3+klbDPsNxS2mXWqwAY+94SRVWqwRYeo= sha384-7tmxjZpXgnYOQfdfPD9Sa2U2/Ua6WQFZGslFK1puYjLx5OsJwkg8sCiPLG7oMDlo sha512-mHpJdPs2WVUBzAjOQKa8zHhvF/SACDbvXAcaniCQNmP7aDRSr7Os9s47m4VtJZ/hyHiIirZr0rKUpvRndhDasw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
