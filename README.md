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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-eYe/oOF0E6lUox+xPwOFvTaJU6mExX/mF681zlJrf40= sha384-ztvnlK1ljWZDT6+6PbugUXY70xL6wANkmootPDCv0YabV1UDUhmXwi2AQvy0LRYS sha512-sysiLnUuKw3XhN29u+VsvIKAl5t5YZeKzlERuWzxusTeUujXR74yq9/ls3C/iGZnnlryq2a7+AsurNgUmw2MEw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-zOWLsbDmv/r+0qRDSUImHL5/VuzVevsVPPcxfsKyNgE= sha384-LOKdeb9yF4VYqYWwEXIwt+ovlvJ9pbLy5AMwRs6JrUDAR2h6jOgBTdZEbwT55i+g sha512-RjGsZg92msgCq0epMcBGA5L49dX76ObQR+dFRHuTv2iPigjeWmVnK1uFHr8EA6DjbhUjSnLp882YDfm9pwxwFg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/ecl-ec.css"
    integrity="sha256-IOUujRA/9MWrsRma7FZUZImP8bml0XI/y7Y89uW6reg= sha384-0ROxtVoR6xxDE4ftTbcA40KA2Y8Q9P1O/Mv9cjZBMUTLHI6Szlt65TU9bnupc4dk sha512-ws7koh10xj+Bd+9yS2XJ3LvDb9+hT0l5oePX5iIDe3jEaYkQoAjdN3OXAdup2MF0kVI7bncc9Kb12UCwD9pnZw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-tIdLwIyIh9hgJZld03iHWPwYgCrPBSWL7wpTtojkce0= sha384-qyWXPM3tG7doC+99DzZs+BSD6+JkVe6ibqyhTEqOMA5DWs29+HuRVfyyFhIbanAW sha512-CiRsDHH9j/6uxEMf+UbJpucrWbS8Asd136eoYq0vIk8IAiyTCy7KrMclYYYN/ijd44fDGResnpkUwjzItLfxdg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-Q0egMu0lf1n6kGkv0g4fGVzKHdr/1932TOLEeHqtb7E= sha384-j5zScE8LEgVGXVl0f19iMnwQAiJkrmDRNIZlEaeK5WPizVNzXxhZRHOTfREp74kH sha512-Xhue/eb1UXKMaMnCChYO+DB06663mM1KvZWaSbrqaedCX3mQETYICm+nEDPUbGDNCrmJUDygGjBIxAUX7U0LkQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-0371pqsXdHEv8dStwvMBzvQAxJ2rY/DyzVJouttPkoo= sha384-JuhUn0wiks/udoNfDOjDJ/ji94tvH6qdRB6d8bafE2+7xf3XrEU1lfKdZlNlcBVE
    sha512-ms8Cfl7cYtAJ8GwLrfV4KNDvaTXt+pq8NDCGCQHv50bQSSpIfx9Zb9UAM3jYjWnlucp4JuDKKJEeQGVvE1sVfg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.1.2/ec/scripts/ecl-ec.js"
    integrity="sha256-qlLzqRyzAuZvE80R8QVz6Jkw1CRok1KQiaLTztBOnvI= sha384-R+jnfTEvaegWepKrBQk/JQEiipFpvQ2KlhTVZxH+Y75SRFXeb7dsEwd6XyQl4Hbp sha512-Edgz1/Zu70eay1pQmNC0ktmYL27yN9pnSiNKEmmx9rsMJW3g3C78tOsC6jvB2eozhsTUh940mSZq9iyIo3cZyw=="
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
