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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-DBPCYX6u79mQwuwbWvWNOHtzbgXZyF3SMEPcZqQ+PIM= sha384-EKoYLbEi6THU1BnZBLmFhBVEwWkhLqR9z6nCtuMeNjZc5DOCshp81DvCZ/ahCWah sha512-eLsgPWw0PYPe0I+t5NM3eHC6cS0QUCs5d/dFWadVhg8QtEVV/EPDO0ZeocqOcgugfH8EKxjzdbi4HB0eX39uDg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/optional/ecl-reset.css"
    integrity="sha256-KaQREm2P57OPjN3mXrKZcSbEmqrtwBeFJOeO01rDUII= sha384-e9SByQxIydghXg2g2jdNh+bc24j/Yh80xW6yG2XG1OAHuf1BEQY9VeCMLqQSSoAy sha512-oZqbZEcbZaj2NN3Sj3vH7zvG9f8p8EdMrmeZCxeLC1nES1YkZ6DbugRNqliqocJ7XbYo2BQ6TL9MDumKhE1faw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/ecl-ec.css"
    integrity="sha256-RAN4Tr+oGb/ORfbnODGOwAc/jNNdKy7dLIFLZDVUArw= sha384-S60XMlQYksAkjX5VFjb8AK0EMbLFc4zWzd+iaoYbrRH6sQzmtM76dihphmu9lyCb sha512-XyrSG0QE/PN5o/bsRH6PPgO1Q/51vpY0nlFhA1qEQycTgCWNNnQANyCBb4r1F0RImn+6VLMqXRnBhmDH/rZtMA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-w/meEvj0d+FkNHX3ozBg1JmZgVuo16170qmjgCQecT4= sha384-6z9M+0GozY+XMuquk6hbSAB/N237ELkfpYQ5h6R4KCpYxshRUNViAT1RvNVOJkVm sha512-8TuonoI9SZZh1zElsjaCyJQIx3anxt8gVOgW/g94o21S0K9qAM1yZwit1d8RSG8FEXdrg5F26s2j5gnzCOx3zA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/ecl-ec-print.css"
    integrity="sha256-2oOvT1Xk6tNJY6bc0m/OzycCGGVh8APQRYnI5ABF6QY= sha384-ITNBQBy3sOqmnVLOIMzysn0DGC0as6W1CRS0g9Y+3Wv/3N7O8qei0eqsCzcJe/pc sha512-T0TnFgLjVamCfnW5ilgQRRQn02ZV1bf63wSBLYtkB3GjEDWrafCq3khv3z70tOX5lr3D24mzT9syHaoWul55Wg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-1OGMUkjlM+oXka/E3vjgd36QrEFjY8HmvR4qCF0pHV8= sha384-jD+gdlVV1kMU1uivzp+UNd+/UY/JFfLaWmjh3VSbg5uWIW1kfC0uzuppDIuxGN6p sha512-pFfkhoyf5rG49wBOOxz4xpEe4van4gsGsqDSp74UWmgJtbUyC8hp9BZH+7rq5bl/fA8HNNx+4bqgDpy6xlW+8g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.17/ec/scripts/ecl-ec.js"
    integrity="sha256-y4n6zJJiq4DtTZjriiBYuSxK8+sy7tItsm8qFvxxQhE= sha384-L37UMoYvHiM/yNqp3OHNSlUAF8sQ3Nd//5pDwgzXRFOU4OjSyd3XoJCezOBGA+pM sha512-Th3HrVtfIaU/9RWifB2v7xJn2J6lvqNhexMZWYFsrW9uw+8wUNnV+OkPu/onOf3gF3MgCPGgoAPWCIcO9U4GJg=="
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
