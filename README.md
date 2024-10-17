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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-iW7hhMZXv7yvITW7e+lAtSX3LP2oN+kMfisPvjEFR80= sha384-90cZ0eB/WItWc1lC4uryBB0/aNO84gk9eU2IQHjkTW0MZIs+sz/NUykutVRvkdtW sha512-WsI01nbLVzMIXdluwM+eyr/jhs5UVFrwHKZMcz5NmiakQ0XWzKl/HhTNAH16RHQCVwlxJe5dAtdEJoXLa4lqUw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-EdkdYgVECs2jW/ibm3HHO10jaG0AOeNkDlf/ucMlrbU= sha384-P1sBTcqevL99sC0B1zmBV1lMqsbViU0cqnEN2jAHEQd3VmSNfegxVKv2dxYu9GhUsha512-KzbAuvXUKtELOvX0akYYtBs6bfeIdrKhEo8xwXt9FxLxgQ6YT1EDXC5c+HKsGGDhrfRe736D4BhIzL9a9HETwg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/ecl-ec.css"
    integrity="sha256-GtPoIEuv04ZOW0sGmPFzuKxsg5vg5oKk+c3Jr5/nsDg= sha384-UCzb3Wr61GTH9ni7H9lsXJ2B0dSjXAP+KXSviP1naNe4WX+JPQFB6hfDYhi/AwoL sha512-RelZzdtLiUDJISd764PXYp/BalPoq/JXQXxZz+2IppP+q5wikB4p22uaWXg3dk/28UHsaY7wrP7oFJyMlxhb7w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-3Vdb4VSfr43FeJCapxuQ5wwcvTAau6fvPO4yyEMCE5Y= sha384-uxtSW7PSydM9Ow3jU25ck+o9xHET/9y1RW5I9Kl2dx5zVkKRX/LS06r82yMuQsfO sha512-blsB5JICQnYY/aj6wUN404YrYCi3OcfGAaQ6bfh5oCttV2+ORUhbFZ9y//IDJlRQLqJ3UCnanSV+mM42LUVKTA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-6WGwnimzcT/CCCt4y3uoqZRB2PyvFYbH8a6mKiOzfu8= sha384-gxx+5NguJCcrRIVRDWZDLi53ih7mh2U9rCeIxNJZuINCSEQrJjHUXK4OUVTT/Mxj sha512-yjc+86Pd1po51IU1IJqKCd5GyYSW/TTAHs8ieoCacUAaq0NLWqbD+WuliI7i04ZGde8dK5mTL+oPojQvUpefAQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-94GWM6UMwYIhx3EpBu0gDNUiYXmx4kbfl1qhBkjvDSY= sha384-UbjfSU0KUoc9nhgsAfKdxylzfUEHxvM1k2mYOt8/bLydYrFbL+ERbzqVRrjb9t8b
    sha512-YBNIoVWgXrfrji4Ux+iN+gW3OfU+euRbbMOApTBdMGxC77592yWlvyKwPYTF6UR5bJwe+rYYz09RBvJRO+q9zw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.7.0/ec/scripts/ecl-ec.js"
    integrity="sha256-t06Aw2x1aXuWl8P4+VrfbbDgzXzG7DgYXNsC07eYKLg= sha384-eEV5mdTXAaDyXMMExBvtkbqvSJTo+H1lMhWpZPTwmJbWZam6rkKWDWSKb+OSl7uI sha512-+6xdwKTXk0w5cYkA7WZiDEw7kdRHqJUvIVQcswuA6h1ixMHY6irJ2KZCDqzaFMgVi0CvtX+njup9+LbNER8M7w=="
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
