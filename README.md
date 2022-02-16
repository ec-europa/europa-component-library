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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-qzzOjoZhDye7pKD1v2MTBGV9oKFBOkCZ5NdQPtN5S2w= sha384-pf2DGj9RNo4lpnM2zs5Dps/vEC0bi1QErqpQKNfdrevhzYBIp0z5jjYxhoP46Fgj sha512-585tDXoyhh6Pswcn7bPrElOf0TwUxCVn3aZguPppGWjwr/yiDLkyPkQcQijh4m4djpOLSTRE2uOOg6eeLX+OUQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-IZXOl1uomyf701cRC4F08E+7GympvMUYTcNDTb2o5PA= sha384-RkdpyIUC06oTmR1aL6C8nuM/ALebKWkSaDSzZ2Qu3Bga6E2uvq86WhIiNm5zaJ3J
    sha512-JJCh8OX4j6CXH246bqcN8jlE/yyFVtO59Tus8hsX0du3JMT76XEkYfwEm9u87zznhKqZTtIPu+ZpOWauT6SXyA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.3/ec/styles/ecl-ec.css"
    integrity="sha256-b/nAIHv5w0FrBKLX3dH1MPsC9WLeinFL70sC+ksJMdI= sha384-fq46kn4idnbLYg96g6fYd6W41yjWbnq+JzGTgShGoHwpB3rs75aggcwt5lS9CFU4 sha512-8dLkp7hEDduICCxT0HmJsBFhiDnsyhvDW5pV2kx/0P2dnMeb09N111LRYvlJcqq/a8bjvmDIPpUTjB1LD3sdpw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-DHstEA90sbwGzV3KacoganpkNYhcHsutAj37HQEwhk4= sha384-Se90ZsNvPV4PIOcOLlNsesjJWzjhDyVNbCVPG63GoTcN4wYyvSGGsM6d0r1agZY+
    sha512-kG+Usi+RAPqTDMgjF4xrU8/xKGxMUvQcAKPJ6QzpWjyFkGsuIXJa7KdgmQEG+0bm1slQiT/suZKNzOlomXzlGg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.2.3/ec/scripts/ecl-ec.js"
    integrity="sha256-3laVx7Z9HDAgWPllrhItTPJsJ7Rx1cjizlckB8JwKuE= sha384-xlgHAfQQ6ULZUzL0T0mZwHH7B2i5HsAyOC+tZlMDnf10oxHxeER8chEaCoR0kGLZ sha512-xTQ6uwAC5eKErwJ7Rgh9RTUXeE0ExYTAUmNr5k/YJW5wUBC6P3+6BJa+rMR2KXAEyicyjnaKGgoX3fDEsMs6Xw=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
