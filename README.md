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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.13.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-1SG3vmgt5q66zaX6pmq8a2rxyj56vjkk+O2f6pN4D3o= sha384-Nwsmb6y9kPqMqqfgZdevuhu2TjdicAhaALwi4G+yQDJ8vAxfNi/26K6rQPuRcJiO sha512-iqzgJM6ZZ6atmcERnZpPcNQ47uzsr4av/Yh8QAymF9HbC/VW43GoWBuxdQEESrhrLctMP8I/bQ2uAl4mWxm19Q=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.13.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-Jv4KnaDLzLxPkRKVtXx6YxSblKnTGwYU44PY//rchi0= sha384-GkX/QdOJVvBB4ZxOLYO58NDO+X1baNIETRkZfWVqWHB0yH/mnWGUBHsXhckNUnXc sha512-9SFvAAhQMBVBg45Jlcs5s8fGtPttcxonrxdD9VE6qwaU//hO9lxSher3FknfJKMDAmDh3Op5cK46j4k+DqdHfA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.13.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-veKOh2unsEfL5o43c8APZMQ4oHLLZK2hryxOZkTFB9Q= sha384-oHVe74VolaCkvgn3Bq9TJ0o3z/iEmNB9qYG2xuZtxpzUBabCHAaDFu4vgxn31DAe sha512-63xB9vCB7NgBasW1xLENFRBJAB15UcygN3znsz6Hemwo+yYoqqefCUQ1GUpEtgFfAC2KendacKj5+2y4XKUL9Q=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.13.0) - [website](https://v1--europa-component-library.netlify.com/)
- v0.24.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.0) - [website](https://v0--europa-component-library.netlify.com/)
