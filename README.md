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

**📚 [Complete Documentation](docs/README.md)** - Full technical documentation

**Quick links:**

- 🚀 [Getting Started](docs/developers-start-here.md) - Setup, commands, and development workflow
- 📦 [Using Presets](docs/presets.md) - NPM, CDN, and installation guide
- 💻 [JavaScript Guide](docs/javascript.md) - ESM, IIFE, events, and API
- 🎨 [ECL Structure](docs/ecl-structure.md) - Project architecture and organization
- ♿ [Accessibility](docs/accessibility.md) - WCAG compliance guidelines

**Migration:**

- 🔄 [Migrating from v4 to v5](docs/Migrating-v5.md)

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or pnpm, e.g. `npm install @ecl/preset-ec` or `pnpm install @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-2106qrXY4qxZXvAZZ8bgKlFZ+Tl4o2lqfghVuMDJqTs= sha384-hELMAdvTRI97BEBGv81Ol2YK2XpMMkMw8V0CGUu+zRpqT3Nu/sha512-VPTRTOGLCA9lXd5IrDY6+8K6ywGilrTjwkbuGRPpNNer9Cw/PJ9c3bOGYy203QVLqMQYBmibagbsHlVoVLFgqw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/optional/ecl-reset.css"
    integrity="sha256-REFrSP9vvCsJx/m+3HIGmOXQVfqAGs40tIiTCkzAw0w= sha384-3QmTvqTvGE/83zWs0uGjUdzxK3HXTIxOI4dpYfSWPMZwD6gqARP49fFRBZX+Ja1N
    sha512-jN5/nhgozaDQzq7hMsPGL0nX33UR1RkBhC5zMhhMTDqf+S44XvtKyq/j8pX0jn/GJ3BcBoqh87FHcNcJwjNelw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/ecl-ec.css"
    integrity="sha256-mpt9sHZZ9tvNrdd/e3WZUv6jgZIOp0wtidFcBhEoNZ4= sha384-NLa7aQYFms50Bose0gO4HEHfTGU79Lp/PbNsp8wMbeJ/5NPcibDitRZXj6KEkyUQ sha512-vSxamonzJjyiXOtrbeDIcsSNC90vl9Y4NpUB8BQzpmyYDu7wX5pidznR4YM8wiSKe3WbCcEjnGFRMhZHsPz5KA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-F1nUGHX21BlEG+X6eWC5V/ZNsYqHpZwNcaoH+EoR1cc= sha384-HPJPTCd5n2Z6ln6/8XIervas1NZ8Lz5J+5v6yo7JafmTczI36bMq9/JTWQCuYsR7 sha512-nk0CEW5HcF6eYBdvVhMd1nj891C1FknENRyjy0cKYluUWw5NTTLur14Cmm2pqKnYVYjWfEbzxvjE/bzNtXAN8g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/ecl-ec-print.css"
    integrity="sha256-CeBbNUIbeGtVES9QiHQyWvfLOhCPYI/Vgn5QoFItruE= sha384-Uc+HPNIIu8O6sKWDNuRyuLRi7ff1RpXYUbAPNWbv2VVvRqlFbbHX2WcjGfP4yqe3 sha512-PD7rIquFyUMkOX/prfG11tCLODixuvLXl6VRHfpK9kmuTETABbM3ZtA4V94RtgZWLipAdLYeejH1BcjKZAX8Lw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-WP85Z2WxRd5cn7WSRUrY7+tEvzfD/fu1RL9YvSQni4U= sha384-FGynGnz3J9Vtt1tteqGF7RXq5b87da3xFI3xPBx/lkM8yehY8n4mX/bS1+zDnn22 
    sha512-OwbT7lFI/12z9zkGy63hbp82FQesP9z3AqN2U+DEx3srO/n2XCVi91F1asqFZYKIuRC7KNZgmMj1tCKzx5wXmQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-RC3/ec/scripts/ecl-ec.js"
    integrity="sha256-cT0GIsp4NpRyIYn8X75Hsm9ImWguy0eMh3ZdjfKgJUs= sha384-Vh/oMenrfA7PpBWTk6MWdVtI9Hcd/l7MgWv8dhGGze6P+IP1EA2A3RNpo16d2eaR sha512-oeMRGCQlHnG7+80CIsLzsUyz2OUxPHXD5lF3ak/FHTX+B9mPDCp5qGIfMPElt7+Faij3adbQgvOKkMOFtX3oHg=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: duet js

ECL uses [Duet datepicker](https://duetds.github.io/date-picker/) and this library is not bundled by ECL.
Therefore **duet js needs to be loaded or bundled by the application or website using ECL**, depending on the needs, it is only required when a datepicker instance is present in a webpage.
This library can be loaded from a CDN or fetched from the respective npm package for then hosting it locally.
The order of the scripts should be:

- duet.esm.js
- ecl.esm.js

If hosted locally you will need the entire `dist` folder as found in the npm package `@duetds/date-picker` or in the tarball at https://registry.npmjs.org/@duetds/date-picker/-/date-picker-1.4.0.tgz to be accessible by your webserver.
More detailed info are available in the getting started page in the ECL website.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v4.10.0 [sources](https://github.com/ec-europa/europa-component-library/tree/v4) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v4.10.0) - [website](https://ec.europa.eu/component-library/v4.10.0/)
- v3.13.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v3) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v3.13.0) - [website](https://ec.europa.eu/component-library/v3.13.0/)
- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
