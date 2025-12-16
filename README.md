# ECL v5 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using **node 22.12.0 (LTS)**, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-oK4J1qWuNPDDFpzSn8bTtLkDOo98b5yPRN8vCSQ2rpA= sha384-bxX3MzZj8kiGJI9iSM3P8jM7R7CZuTh43eMPTc8dAJ8USlhuSUqCT8tB6XlctGBM sha512-yaNqWLuadTCqbTi2WMnBQfraUGQaJKcjbaXxMWuC3njFwjlVdEC3zbahEpHCx0S1gmjm/Oc2sLoRSDSyj5wCqg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/optional/ecl-reset.css"
    integrity="sha256-MC8NaDyeEIHJXRMhnvZW213vwgLcyXAHHYVHNRw388c= sha384-FmS12yaGF+gsr2igi4lSgiKccryIe+8ubfIf8wXnUsC0Gv9jMicJ81p/OfdV0sV7 sha512-X9XfiDVA1Mulvzlf7RkZKM3NbcXLBOXSkz8ksO7eVcuvLdr096kzFkqpDa5Kq5hErUlBijEFWNyxcCCvdTS3/w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/ecl-ec.css"
    integrity="sha256-IfNQNi+iYfirfHRZAioJ8iAWyQnL543z1fx6WfLVf2o= sha384-ufUASfDDqNcwJwxwntiwFTiAHym/RYA+HHQfouf3UuW00NwNP8UN1k+yxlnI+WEi sha512-7YdHR0HxMLbheAeQoWywwxwX1BeikNcRnOryNlw+90KEGXoq6BiK4q7XOdnohFSBjhnDjcDtVQGoZe8auf0RGQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-h2gL8CMAFC9m85FusHii0J+Pb1GYw26jpO91LKSmkhE= sha384-Z74xeclXM60TNGUWBJTj0P/F0RnaXHZsHaCaDkoRHYQg4eRppGh8iNWEdXSTVGYC sha512-Up/+y4mn2XqVH3bR9kQhm0KHzmFdKmNVaZX5LRq+Y6+vb4L0jj8MqiVWGyc36r+SBVAtBG4d8YGZABjVCToZRw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/ecl-ec-print.css"
    integrity="sha256-71MivTfYZ1EcwSWhry/S8aRbsytKd86lJMRFGOM8KQs= sha384-vd4KJMoiIeSxVHZ9P1WbLNA5Shnzm2udO/rOOmvgWsjyF9TbJV59NLTpch/AL7nW sha512-fw5r7ACKkWYbvdzU2xfaNZXBiRelxL69JyHJfYsJqzo5vWNWbyY3A0Wr0UFt7lSO5bRr1CXpu0qbYdQKfnyn3A=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-d02RXPnGXBTHRZH+czF3fGoOBlmyw32vAyiazwiUj9Y= sha384-/AWAoQeoA7PEYGFGBv+B9fSb9bagXcqaH0einxmQWafM3mk38BSH2WUaBoC36+nP sha512-dcyJqLbwCRNEcWjX3sIjSJS9ATq+wjjkMb6sGhY7qpjkgsaaAaxpBi67YH99HaRIxg+o8iC0/+72zRvHQkQI3Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.22/ec/scripts/ecl-ec.js"
    integrity="sha256-0PygCSF5lO+Iaw5CNmufw8wmQXu+VHoZmUYUPxtwgLg= sha384-i+z7cmhCW4BBu85kNJUL14MQRP3BPxxQjLSzh30qi+ADfjWSEFbc41LrXn0dpID8 sha512-Gzv8dS+8S1VNdamuVc6mkN0ornctudMPgpniaMZ2OIFyPizhJaUKGdoNyHodLRvcMIFJTZyRLm+vQBqBxB8aBA=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This script can be loaded from a CDN or fetched from the respective npm packages or websites for then hosting them locally.
The order of the scripts should be:

- duet (https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/duet.js)
- ecl.js

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
