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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-ua98nbxLWoGv7hhXsbFRXgmWzv+yf76Q4v2lrUoR3Fc= sha384-OoPrhKa3ua+/dzUG/FIfASDJ7apIz2PH5oKSc0cnXfKFcYixDaN1sc/o5CNlPVFh sha512-qcqdScn7AvljkzIHpQrVhUmdRMV65jbmN2BmdGasd+ux1mdULA9zv7mZNDwj1tSzAjRkz2y6Wp/ZnwIJzhcjBw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-bXgCAykLATR548ShwuRXw126B91vVZ0DT+Saxs89RwQ= sha384-hrZT3icGaa1r80mNV4TMbBzkMyLNdstvVMhMw+hBIHFUgzonqhoxL7NaefdiD0ev sha512-bmj+v8UIUVwxCvAxPMwpwExV9P8shKn6nYNn11vMwd4szoWYD0geXokpQJkfcAXiJpzBkvoodasDB5flVX9KLg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/ecl-ec.css"
    integrity="sha256-o09wcHeQn+0t4+Esiee4Em5wdcVrh/iq7NwKT4s+dgA= sha384-PoUemzDSr5qpxOMoX45vPpu4K9klcdpT4u9BiZS4Rlidz/kcm3SxJ6NIr44aiEcP sha512-CyVOMKu4GADwBPh+bYMdcABrB0uYGGaRQLYVdXmNwcR5u/Y+79JIIGN4sUH56gMe4spiWzOat+1OWzKMkmSo2Q=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-WcHVni5Ei5EaORCwBS/Zqghx5b7DSYrGRpOQRTqmJks= sha384-5cH5IW8jx3sbyp7+dyvMh8Hp1Dz3B5Xq1uDXU122P03PVjcflWwKk9RCARep9Uyl sha512-o9l4cA8si3IFB6AwS7KYCuF/JC6Pk6gM6cMRkTzuIpcUidGcDQ5UuR3Smhi93rRVGdA17BbXIZthlipsoZ/6xg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-zJJMcfZvdhhpWeNapecww3AddI5CqueXy4qIoC6lBPs= sha384-fX/CDxq96yjrfPJ5RPALfPT2A0ovgrWome+T06PXvCi04+MHYOijRBYns6Cfj/m9 sha512-/O446nf5ydknM6RrNaiA4L+M7ZLtkDp3TM+jZpRRrgsH8IbS1yHEq0KBVPk/r2mdcuTLOELCc9iMb5wBe2ZZCA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-xITknTnl9ixa9cd594GwTXiORX+c5zG0qiEjEuPfRFA= sha384-oQZ/G4PVl83KSJhMtY9d7HyALV497iJD2iSF4FZpVO2OX9URPCmdwn+pAbiFv0p3
    sha512-y5WszSHQV8bAc2j8Tz9IVg4u5lnvYz4dTCGuwcnOn8bcNENyRZHKNv7PTLlC/2ZEbT1tpaUIxAjF3xugExWtTA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v4.2.1/ec/scripts/ecl-ec.js"
    integrity="sha256-y5rVncHHyyX7qBPRlPU/ZnOXT3BsVH8Xa8OjUwUKy7o= sha384-EPTdp0yQcD+8jxjIqkpNIfrUnAQ38ILnW8H7JhUL9z79ee7ILXJu9oNaWzyOCpTq sha512-aAO2/PE52JUtAkkciWHFf6o0/TewF7a0d7r86eoEHW0AVQSJ+12dnKaxFLRgxJt7tQvaDEOpndjDDQ78tb5FZA=="
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
