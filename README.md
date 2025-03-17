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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-dJI1gsUzTZQep1PQ/L6NGVUQSUOrrQbTS35edkeZ3d4= sha384-YTVbIgZQ8eh1Pfq3MlrI3O9ojJ1j5mXi2Txy06R1/MS6nvzkraWqZB4NDR+pE0FS sha512-CJUc4sh1bLZWWcHQs66LCt3Rq4PYzVmyM4phhiKQTMm/DNA/kkWqqsnS4jhGrIuZCs66L8P7798mOElJrfukMQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/optional/ecl-reset.css"
    integrity="sha256-wHRX4mw0UFBf1Bterv7gREYlJUIShznAPMI36k8T7Vw= ssha384-SXz+DhBPr6GSmT9AyHJZ7RKtnQEd3CHPvyUSdyRXw/bITI9R+gGhlhELMdNryF0C sha512-US7CCGvw1NVYfgumgKTHZlJoMPE97yFQejp9z1I+S3FnPllwUUpKk4cK/6ZrMHJyvia/GTYOgBponpt6oepAmg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/ecl-ec.css"
    integrity="sha256-7onm7+LU4ySBFDjzyryVJGTiyXZWIoUVSC6OsOrDF3Y= sha384-alSh0VK6ZCWODVIFoBvaB9zurXm6MF/+QhKwvcyQYAeRsQ3q9PQtpcYt1Z7G6p1u sha512-PKSheWF53gUSBAZTvgt+OYvHUmNJ1PPan5vJBNZq9C6Xrq46mg2u0Isjz+hR/s1ZNu1/Fopp+zxJqD316G4zLw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-Zx7XhLm1RmwenByUyzY8iWCcV7kSktcAhWE0MbvcEoM= sha384-lF7YTHOhH5Xpvc9OUDVI2aOvMQlyZN3NbG6TT9lH/aKr6BV51dAkMOGNT0M22i8v sha512-ngfezgquIHjbBZumY/JQbBmtF1r5NfMbPSPINqX6rE08S7fPa9cUg8p9zpv350BndRoCFis6q+/65nWLp4IS9w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/ecl-ec-print.css"
    integrity="sha256-bVJ4XvIromZzMOUMHVjoHVbC51+7j4yTWcoV2B0eNhE= sha384-Z1ciprSUeNCiQfQELEbh0/hwb7wkNSwdJNkaJvC6yF0cwhjOnnFHfwCPkQtvFhSN sha512-jg1CEqA08t5JP0Hhv0YBmoVkwXYYKyhWzblKHe7SzS5KOoHr1gFn1QWBbRUXBu51+DcegOKLtxXe/T+YFi9u2g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-HUvyzqyLvNexgl6uQMAZ6b1gX2xcVu9x6R3fktCbPDE= sha384-XxjxAVK2tjLYlHptNTzv2qnHIEv2Tnl+IVxOhUShDfpvnQQn1tfVsk4LsOKBEGIF
    sha512-FQmr2B5N/1aY3MqtAix+zFauNeuze2Q/xSZywshh/NRcoAWCbrn/BxtOJSJcXaa0NP8m56fat3sUe364+Gbuiw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.6/ec/scripts/ecl-ec.js"
    integrity="sha256-0lYh5SSO+ojEIBHX6SLTxNz9bZg2INpJuMWyPa7UXbI= sha384-S7+uMa/epKzs2Dx+doh8JAg7k4A4KmS/3pW1wSGBXVsv1wVr9/XeGYV40Ce7EIG8 sha512-OFj18zqjXHCwHYMcg5P+WOnAjCaGsVGQcRDaUxLv3GBKGhuQ38bbRVt7AL6lO9VdArB5WaNjk9c8oC39CAp+iA=="
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
