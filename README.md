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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-fNnPQ/Ao/aru3mzJGASkKRv42Gd2A5lQN3W+2zBBEps= sha384-KxYs/vkiqoTLQMMCJ/XlfNe9RsWeOTwTP7vS4EpeGrNyjv3ouKqEQG5T1Fq40hoW sha512-bA3b+O77w9ckWn8fnqKF/IpSerj8td+nkjKF1CX7Ob6csOMNjeDWM6VzYtQzMl6W9hUO5ec7Tv5XzY6tz40AUA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-pJ2RHnDmM6M7qTfHaJwyKGX8GTR0OcTqvFh2AhUSaFI= sha384-zKUFQUrrC/toYunQZ8CEEuAizNzZwJgssfDB+aOmndhv2OE9g0v0abww16CvsyLv sha512-ZpMFFNNWy69YMsM1nZC+whmYPZi2b4iLYcPweGFUUYihAcQSiTSVkb4CR1Qs0NT61xG8UAwOD0Zio9kbpHLh+w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/ecl-ec.css"
    integrity="sha256-RkislF0VvEhRIdq5tzU5AT0EvtTexlDg1cRWgEmpPHA= sha384-VLfX14g6qR78lISidPObZagHzNExEIHLD+nOxaP9aa9A0Zh9um0Qeeb6hOAOA1/4 sha512-Yq7rRcSPpDyivWtdtt/F/LZZbKZab+LVGMSP7rwn6nBsGAP+gl1ShCaXotVtcVrRaPKOXeeqcv+aZsl0aRl1aw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-N9X0ZfwsfJtZzwFoHvwQpMDtIUFxU0wvOE+F74uyVTc= sha384-TsxBpOQO4eLsK9DkSlHhAVzEsHffCckr7zhAjsIy7NuvkUcY/H7jkixYzeyH8HFy sha512-5zWvKVrFHKkYqg5cru0YiYYELWRiE7dwep7HDs2y24SDCYSCsVnUdPusQwOwsqKQNMa3rqsBcOomE9mwlJ2ptQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-JmxyUOn/+0OfJi6ybiIaJJRXwywHDcseLr4YIKU1ByU= sha384-haiWVDiMhTHUTLyXEIMBYfxmVm3eC5rrlKpe6GGRri4g1EWdtULf0iat4sKaFYWH sha512-QCYj30/dq2/MQusNoIbL7K6E6966am1o6jAa2dCsufVfZwIdGHLQE+7VvCR+aHEDku6VyNNLA9rbNE2Z+r6r0w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-5wEqknvb0XPjvZstlutfTyI4+MVpuLzVNdP3y4+5aSE= sha384-h0gLG809KbkoqVb7KamLcYR/L6ld3STcVhwwfjtpfftm2USLDGkbMZvwGfdufS97
    sha512-MyGAgVNnf07JN+chvqwwdz1qIw6VuuV9Fv5Iir1zFzXiwAB8bb/wEUSzRdByEmfi/jWRv7+9DseIRCa1FJFyuw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.6.0/ec/scripts/ecl-ec.js"
    integrity="sha256-8f7VqZRKuTm4z+RcAcnC00V+mDOW/9CnyUI3j9R4Gz0= sha384-ShSQ2Hoyyx15UEUyC1sDs7xkmDwPGJg5u0wjAHZl6QNNokrwIOMtcwCnSJBkF2y5 sha512-DwUtFMcmalb8CBw1X6/86QWbFOLAjjlxNLnt9uZ96AyOXlbD68LDcmuKMGM7k3iyDTDiCmHk0negD4ug8gtiNA=="
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
