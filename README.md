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
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-onZoGLSQ0JkKPi2l0KVH8i/u2oz4meM7VZLLCGJRgWA= sha384-ezqdeKUOB0/DjLrBL2DcC9eY3FsNFnq9SXnEkCi6aIpOdJXwE3MWMXMid9tTZpy5 sha512-U/9MdqL6tXdzJxbVrvL5CjCySy1qxuVFnrnN396YdeSiHCk2MHCAnDa/pvmiEoCzpr7sEAohY1VNq3Q0fOT4Uw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-9H81eFo5J9LJ01ify5LLqOyahBIrxrh83bw0BhKWc7g= sha384-uy7T70y5Eofm3jcXfw9c1qGAIX0/J0QVGeGzd5lfN8+YYN5ZG8R8XM/BUX4dHX+C sha512-FolETLaI6cYw5u+w/g+pHrg0BiPx3rTOaCwc4MDBJJpf0/OtJbqUn7+gR8geCenLzZLXrjaXA8lpVrPazvmerQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/ecl-ec.css"
    integrity="sha256-vHMAyhgLn9xSY0/4LGcrhhc6LZzk6YVQ5jktqrvs31U= sha384-8HadT45LPf7AsHUlOALMtG6rjOhQ4gJiMnwJ3s2/EilVB/244DIbBGRaZfj80Ixt sha512-nl3Oscwy2WObPB+NQ2qf23nkNNwm+OpX5o8z9T2KDOw304/XDL2e3Vzt3olaWhjb0m/91IzUQ1fM50X3j7cxlg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/styles/ecl-ec-print.css"
    integrity="sha256-BA1Prqrlh4Cc8DQbBOgBVqBfNQlXtseTFuwx0hJsFDg= sha384-bWhRusbUnfJglB7HIAzV9bV3dpy9ZIqOpNh8Spj6b37akSUynJj3RcCQGbTgMebF sha512-BhJHlFyrpEHBtJZldnb1Fhbkw7omuGODT9+s92C+/+cEm1laJDI3bSmk3/bhQVvaHv6ciFfAxniGf1szEXzqZQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.3/ec/scripts/ecl-ec.js"
    integrity="sha256-vHMAyhgLn9xSY0/4LGcrhhc6LZzk6YVQ5jktqrvs31U= sha384-8HadT45LPf7AsHUlOALMtG6rjOhQ4gJiMnwJ3s2/EilVB/244DIbBGRaZfj80Ixt sha512-nl3Oscwy2WObPB+NQ2qf23nkNNwm+OpX5o8z9T2KDOw304/XDL2e3Vzt3olaWhjb0m/91IzUQ1fM50X3j7cxlg=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)