# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.11.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v4

Read the technical documentation [on GitHub](docs/Migrating-v5.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-mFEu2TsZ/El8qHksbbjcjmksbucCRBdynrR2KpyAFXU= sha384-8y/fgknn6ZBgxpImbEmhVMrBs2+aEWbd4VkIzzze8oIqOOcX063pg1g54hqqlMSM
    sha512-5v0Xyh6ut4tv26FR9rtbpKghy3Ew0/9+47v98e+z43ecOc+7ExM1pQeWiBfUEhqyJIdmLwjXc5cZdYTrlxgikg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/optional/ecl-reset.css"
    integrity="sha256-TyScEeclUJnNekIG+BIT7Hd/ixRubur+tXdgRoHWcZo= sha384-68sl/IFbAVpVIqtFc4p6jz+x/foV/soqGyVwYQE4g7U2WNr2za9DhZ/NiSUTBH6Y sha512-ECSpIKhWPLog16kXIxZGWQtyrnosvuyDKryz+gImtUjQAiEZcTdIr0JZorwc+n1vc+S5h9yuOSY10PBcV94gDQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/ecl-ec.css"
    integrity="sha256-q+r+WiN945JXIWxJkuDH7HzazEm+opKTW0ylWM+wmUw= sha384-Icabokx8EhHhE5bZnJOdPkRF+3oiDiY47mK387Jt8MAQqlqjFew2Tvfm4ZQhP/0n sha512-B1rfREKsqk+OXq09h9AYKJ7nCvbt0UzAA8zD7u4VaaLVZeZIJ1Us+1oMA9oZhiYSWdV/0f0yl6JDu0FTp7cHnw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-nsFhfgUYF/1JRaT0GgWLO46vLGRJwILDJ64sj3bCoT0= sha384-V1AaVWSrQ5BfY5QYnOgZ6GzorDgT8Kuv2HMCnkw5PnRdMeZKiUptic3Q9S2lTd4F sha512-TuqVamE98a4ipwVV29TgWtk1ClzNJ8c7Z5jsOQzKMKDKTeev2iDiARyADN7CnfVSGgmcoZWK8YXqKNX9HttcHg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/ecl-ec-print.css"
    integrity="sha256-zCmr9pDyrj2wzvJr4ZvzWsuWEuvkVcKlK+6YCVbIwgs= sha384-LJX/xXT0iuiS/Vcw2DRChqc7+nYL+1am6OichT8AfWwDorDeJbNOUL5wpuQuTHp1 sha512-0Gl6N3NcfsG0R8LJ7WzEFwKkC351CU4rRb4BvavOUlq3QT+VyM+Nz8GFnTbPdOYfVKztMUUf60mW+0sIHAotpw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-M+XIH7LcSAXhHBCQtJjA1uy3YQuIERHcQ7WeXLtzvsg= sha384-y4fz2k82hBifC7UrG3SNKb5DCIRubcC5KgRYkk56veecZGYQPWn26kuBX9m910Pj sha512-YpWazvM7LfQGaWli648T5Fr0fLqqgB4t1xnwluniQOEM7Bb8p64gp4hrTz3jUX3rGv8vEmK+MZPukHV5xkGRZQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.13/ec/scripts/ecl-ec.js"
    integrity="sha256-M0fqWgik0WicqYbsgx3chkSBOsRCRk+whzS86FIadiM= sha384-cxwGDfD97vlYcAwT+iC12XNk7cTBmeXkoh/g/XH/me2SYD309fZXWycUo4A/Xwi4 sha512-7CPGrhlzaKvlOaGHb3UVpRiwrMQlExIj60RJMmf+HsGfXjFg7L3UygbZYKA/thyD3hkuLtVsm09YtQGDRwQwJw=="
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

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
