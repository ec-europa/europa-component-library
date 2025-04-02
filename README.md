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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-AUvZm/zfPhd5OSX3DjXaGMqA+iqYNqjD3hKOpIy6Kq8= sha384-gPVybZObzWhPulk2u7+br7XB6YBnLr32mM0DM6nKgXLSDEMFkuJsGKv5vPGXRmwM sha512-fSHvbrAyY6abnz7GWwY2uQO35+g783J1wQtAEHfOI85HvuPIsOIYKSqz9jEsJzDhH85/aEvqP3eegBrLPqadFQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/optional/ecl-reset.css"
    integrity="sha256-eyhrm9E7JX3mfFLWf7S04FcrAaL87SGN4RLAo+2E0j0= sha384-RsdpYUHyQCF7S9nvSD2IecTl8QRIhxRmff5uhRWJMHOA1jyFz03L8MS+YVS/A/yG sha512-PA5S5IsYihLaebFoeZRl4oBVbV/fkM6ja/v6nl5m4nZ/vOEuOrGlEBMCJteXhf5bqsVjLAmA2JJUj2Y85PdyNQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/ecl-ec.css"
    integrity="sha256-ZBhbdA0fgnF9MhYdhw7LWvL2/A8jrTpvVzC2fOzdqVE= sha384-BGsAxtvkc5XLpLgjIiOdYpZMorCZCwZ0zfhtewCz/BuCYxyx/9EWj8EDaGpFGq/i sha512-dGzc4u4/8aUhywa2gSQWKJB5L0XhYYJpXMQ2WblFS4BYmu4x3g7yvhl46xKUOMOQjOh7JB4tVoTL5gs3iecdZg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-pxQTEO/+nCYafR4qSxqBb80vDEei5M9YLPz097IRs/E= sha384-vYgqOlYyHCErdpEnDdKN91NSgpocP0+OKuvAyiMGPIe7lgo5Y/xA9UvFr7+ygct5 sha512-5ga6t5M60aWcnds7Mra4DbCXhgClgKc83VuFeN8AlU/RPkCA1po8kNYoYc7LaXdB3GMFAHAHsAEgTZWPyZXPAg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/ecl-ec-print.css"
    integrity="sha256-t9Yrro1ejUIyFuKN/JIJp6N9BYACHOCjvJnaUpyVHY0= sha384-477PuYOUlu7XKQA4+UYFbgmXXf0YG86HJpci+dzCkj1/N/UnQ9IxnjgEMUGnYTzI sha512-izMYlFfB9WJDy7fnmhtex2HKPSa9mA8d160364WQXWoK/BLS6YPZrhridueveHM1IzkfM/1/hmTT4TptojDv4Q=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-fcK6RPiyehwex1/1e2LKtOiTwioyoiWYKZp/7rR4sWc= sha384-Apf8MlKXDqoBqSWvbfp8TGK0Wbe6t+HkwLcHI93tlv8g+pnnGllhY1cKta03pwJy
    sha512-DtYrrunpp+Ksm1NWaKPcONOSx+r/BxZkcBJeWf7QDE3Qov1sOnSm68Qze0M7j7QqhqskBQyjT2mkVwVkj84vQQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.7/ec/scripts/ecl-ec.js"
    integrity="sha256-PMFab3/CJ4PMJ3ofYVtyx+bJv3sWVV9sL+S+VAiCnDU= sha384-0pIo2LiVsinwCinUMtXZoflUP5cDKp7pUCx5itRAXMJ0VsCdSE/ZY4IV5nCGit0e sha512-5cb/Cg1sBAL+xpOh+CInXYvgWgUWtB1mpBcUm4YmZ+Yf+5RJJeZikBPz7CUF7xg9xjDDFvTKdzHo4QzDZfd4uw=="
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
