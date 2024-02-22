# ECL v4 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 18.18.2 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-39JT6YCLmnx9KBwY+7YEjF4gaaFZF6pT5a8hbOq88ys= sha384-KUbZeUQsiqScBUUwfSFnznmk5QAOl1uHA/lgmOkyqFLXMmyVIDbwzWx0j8xhX586 sha512-syEyRTARGqRe+0JXjNkUSUhsSLIuoIy2T2cuVHhjEkQVhpUs+zN4cZE5JHhmh6lDy+PMKx1oGA47BNyz6syNHg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-37FVoqWPXC5Jto9cQRiXY+ZU31Xm+/UXkhhQXhxdCvY= sha384-HZnszOT6xsQlc7aF71H1z8mGfSzQyJbz1t8jQnh37yaZ7xIuOAGoMT9LxcY/8tPk sha512-FNwN7WBhw6eH8OjmRqKNplrrDHk9zcRvzRARNISDLxr8xrfDOmogR6QcL73hJgysIiRSX7PxtR74MGM7f0Jh3Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/ecl-ec.css"
    integrity="sha256-EqiTb2edL5t94pTkHAPaTvNgfrMwLGX7djmt+Wp28Ig= sha384-mckZSruL6jUXcE2RuyWzv3D4sTJN/c+QAdKLWBBoSixYOTv9ADy8lMrA7XSybXCM sha512-IhvGWIBkFE714momC+B4uug5fFgZLsiGoE1MM5Vj9ted7l1t7WXEW/7u+5CoPQ/SmLfGFuStIdYSd1yTmAkSPw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-TG+up10Y6b5mrgOdQpUB91JqPj4Yff6tA+Isy+VU15E= sha384-y3lUv61tbZX3StajcrLWZFPfWgmj3HtLy8LO6Slq8GYlT4D44KkFbyFvrGwyaxtX sha512-ZVZ4TtyKdvKIsaNmXpnGKvg4EJxMoiZ0w/e7+z6iGrWZqi8jm9AuGK2c1kCXKHQLkz++WHw+MN9Acsk+NhfIXw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/ecl-ec-print.css"
    integrity="sha256-FrgUZYFi2GEd1w3j1EBuZac0y7uAgP3kmkdWkrmh0ps= sha384-UauFxc6IXSYdNeBUHiEFecWpb5H1hsX6PQDIo2WYPejkQoNEmP+mk7Vjb51O1d/o sha512-de6inPn/+0RN2JXEnf1J8KrSWO5b7XY3aMBZVQ5NSEa29mgRAMh8pXcIZeXQP3wwWdW7WJnzEIxVhgMcLFOC6Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-dD3PU2EfvraetTKkSf9KPReTBbqwNen8nksyErgsc2w= sha384-o+zyVR7I0eyX/LIPj34P51yG9MULNvXmk+HvPJgVEl9pP6lPmXA2DzE2ORL6Vb2T
    sha512-fdtfmECjqb5Rm7oOQFpptB93hMQCzZ28mwdMQlSgIo3URGx0hP1rGXUGVnNvnN1V5ZUMxhlYI1hJaMfWuLAuQA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0-beta-2/ec/scripts/ecl-ec.js"
    integrity="sha256-FXLVYKWMG4aR1wyIk4ZR0nFosjMKD6CBjcMPsbQsSEY= sha384-+5G+XDDGCU3XVP/wvjg2LIWGhkNnTEZhJsz7zxojPCG3PNF+P4+XwquhOdsOpNz2 sha512-czwE+EAJfB2lX7Ur+lJD6L3VCocD1bpYdfkd8DY7Q/yCPZH3klQvPTgybvD8eSq6YJvcuKlDUtuFOcIwB/1BUw=="
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

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
