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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-UbKRuBY7BWTNFSdB5svdSbhid4CCchvy4s3CX10wR3Q= sha384-g3dfhBAu5GoD/UW+h81O6PzmdNHR12pVgV7KWWZismD7khhF3+sppimjpbH3dA90 sha512-MqVHbJuUg/N54U9q1UROVXGzaiUwuUSOACtVahEFjDecjb2UOasEOJIjYd9cya2Mh7o/tR76jHh/AZw5AhR5aQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-YOn9B318UUn4ziRVcgf9ZS8Qq24pmePeiqMzOKf4g0Y= sha384-VZXx6km2dUe6NSs9R5QLUgD9hqU7y8L4izIj6CmWjPFRkggbVXJLnhfW+6FlA7Ee sha512-6HC/PE/TqophngqcGoCKrcVzm4jR4NSrCa+xwnGM8yQJ9cD3SPX3E7qvg4XIH/lxA9XcNln8Bi80dMZ5YBvxKw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/ecl-ec.css"
    integrity="sha256-E9vIuQzxVaCoMD3gK6CFfxcSOP0uiXSH0+/5g8eFvno= sha384-Ecfd+hMiAgOyyWmAFxMIPUCPUKMDi2o4nBhFxStC097s+WfM2Bkq0WrhtI+sPdl9 sha512-DC30OT6MF5e22casbWmbgJEQo+eK9173Sx1odwF/440fegKdSHvDtiARO+oHRy2b44GARNM0BZnrdarBSqRE2Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-RVLXut7NjY4x45SbErKvD1ZcUUXNteFLyvdBGKx5qko= sha384-oJ0lH5pQahXS8SZXuTO27fLNKnDqrFyIGyiIn0fMqze2B1fyoO9YxB+Vr9rExKPf sha512-7nsjYBjyVIAu2WvDOk/mBq2QQxqVWecpGYI+QtuPj9W8fVZkxix/jpiukGsf7DP8daJUiPcqroDLm4H/IgPNIw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-PJwpS1pv+dDLnEt5z10ThrEluiLa6IW4xdqmlZOwdgw= sha384-YcIEuTvjKaZRCb1RZwaUSo3hYwuIDRhugAMgmP4hdOMlGtJkiy0rEyMl0apl9zZj sha512-DTve4gcbmrsgRlwjn31UEOrPy1IdtdvRjx3o3qa8rLt5PeSS6buDo2qClqfga/6AftF1NagcdxAbp0f0zrltog=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-NbZGr4qV5ZrUbiIVcpxDqKGqddw43isCnufCzt/AFAE= sha384-QhCtJ6QzXcjz6PD7CT4nh24qMDioQw6vzzC7QbVqOKKjbZKPLmco40KdOb1CdopA
    sha512-XfdCT2HCYLVyEeKB8kUadsaNNbZwHY0IqapESIXOTy87HEvIO89hIZZDlssWpJzyGy11hzE7obP2fjoryXTorg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.0.0/ec/scripts/ecl-ec.js"
    integrity="sha256-/oFJKDKEKOH8TVrgguOAKmr2rmYksBhddpxzWfH2lAI= sha384-cP/51kPNKSG0eA/MZTf6IgIf/en7x4wI7RYsNOYG1GXZk1QeqdyFIDOx3fRyHoW4 sha512-xmfFrFP2BSAyzCj5GjFabW0cKuRijYDHWwM7bk9bn4XiHGH0UnHMzIS91iDc3tG2l8hVMuvojf5IFCG+yQ1h8A=="
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
