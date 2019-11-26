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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.15.0/ec-preset-website/styles/ecl-ec-preset-website.css"
    integrity="sha256-JK0I/s/EixnZXfWOKiWy4em0Wrau/qXWiawJZ6a4T34= sha384-eEKeJpEYiKZLS7fszbJ0WAx+oayCIa1P+7BNrbmO/R9786zK6Bw20E9kyfka6NF/ sha512-uraI1o1TSA1Q4wb9vtP/PAcsZEulsVgp9aWxXpF6YJei2KoFObMtiLEbK3cZJ1N2urjntuDZNdPPf1OI5LNLig=="
    crossorigin="anonymous"
    media="screen"
  />
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.15.0/ec-preset-website/styles/ecl-ec-preset-website-print.css"
    integrity="sha256-1jFa1yh+zs+2GdhMP7ujtioTAI8/9+vSQDZNyFSJ51w= sha384-KcrAYWJDwKcV6cfCp+novv8OUw6tTbUqH0g2mAgr0Q7L65CaSTaCvVUD5E/NlLAz sha512-l7O7k4D2IjhhIQgF9QYllo5zp+de3K6Hjm9glQdMP9X89ZtZkjvgn1MMxvrWUSBNlI/tKb5otSOjbdPwSsuwtw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v2.15.0/ec-preset-website/scripts/ecl-ec-preset-website.js"
    integrity="sha256-F0Hf915coB2Kv0libvNrOBArirGQ81SWOxpvYbGl6pI= sha384-NOZXBSFlf7qb05PH5uLySmOgdIwu1gsaLFMkCq9wkhJmvxLfTTm/dfvxFOdGS+7H sha512-XoZWYnd1fkYDWaSDRmrQCHVdVdDjXWJ+dWTo00fRoE4784JbJVBh5ibzFGUthj9PJUPiBUm9U+QvaSgSS/6Qqw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v1.14.2: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.14.2) - [website](https://ec.europa.eu/component-library/v1.14.2/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
