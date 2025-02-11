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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-H+9D+VwDRhojoRKgg8RUmtqQvn+REYy5ifQCDX2KeDE= sha384-IrSkXrfxskEcMEzriegqcsoSikGgKkwb7ftPk9fKRj/hHW90Lck8cqVI4Aqb5hhQ sha512-ys7oamH0Vw3tSm3/I/x6WpcAk1+lOdqOIlax1ITPMkuUuNGJ4K5Slwz4/5KXaCoPGNhNFUiOAiyLWbTmbTSspw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/optional/ecl-reset.css"
    integrity="sha256-EDAEu4OxgJIR9b3yrsZo+gaOg1ySHOvuckOTnyIfZ1U= sha384-WNnYgs+GGNYupfnFOuCBLaHAnNBah3TxN6Yvg9Gxg9VLHN8gb1QOEmnpiqzQBT1p sha512-GvVsDiNCsUC7tM31K0lbD8HoPUSC5Sf9+GmCxlvWDH3QEfU4px8YRCvXYteJekou7dkb8O1iVz47xsaZ7zWe0A=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/ecl-ec.css"
    integrity="sha256-rE9TRdJplSpqlzGUzcvOWC6f4borTa5tXYhLf8oSFk0= sha384-Ng1A04M6oA+zZlWlqHUtMUx22E9KVfefOGDcyhJlD9ibWlZsoabj0R/sp4ErKR4A sha384-pht7Ak0/atyGGU+sNdoGMoYPtcq5gJ9eOEiD8jhbqowXOp04VjhqALtBzjQO+xVasha512-5Pk7lpsInLel7iEaFthgDP7bIrp0HJFpzOTQt9QqiBWqdqs5Id6fW+tSWNYPGlUSnT9joJGQ4a2X2t7zwn1TkA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-/lwMZLzbFEdUz9Pl/CAmkid5k1qfG7Zmisy68rLORs8= sha384-C2wS+MsQj061WaelesY0+v20YnQ6frCvsFUVPz+Lni9UoMPfXU03JnhSztGphYfM sha512-ZnmE+ttwHdExemvPUtf18Y8gIDHjN8hJ9KtSU0564TCkZiegDdoHI9MaJnvVFTYdNsgX+m2tQx2BclsscAgP1w=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/ecl-ec-print.css"
    integrity="sha256-ckf3D1Z3PSWZaeDt19X72MY/0GrtBWlV9hsqRwVUVsc= sha384-Tt1l5rse8xdgQNBnqloptSTWbtvjn4mPzvydNAmKhBR4isD9BEo9uFSIOMF5ybDW sha512-kRZnG2S+IDwkDEP/F47bP/fouYFE9S6JYTB6gs4A/v/BH+zZFi32PhpgOP7EyOXH3Ga2n0xDziiZS9IPGGN9hw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-VlctZE8IvHldqR4THdLI3TjvBkuYwhoQsEum2r0jmko= sha384-tkNUEqJYFWkpHpvovYvV8wMRBJ8lfgePtWCtwUIxh8GA2pZQ6LSt+bfF8Uz/5gon
    sha512-BHfFzlYndeReW/+8mPKjMix+vmaLbb0y+J9eLjejtfM9WHqbDeOBDV1f0O7W6zS+ji4Gf2IEYZli3FkrYTO95g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.0.0-alpha.4/ec/scripts/ecl-ec.js"
    integrity="sha256-MdL4/iCmnFXabryaDMoZgZarrNAenxyFIFARw22OfE8= sha384-fjnDNgAVZMUO85ihN1Fu/S96aTtJSDpCjH88cbNszfFgGrZJnLqrcaWDxcctWzHb sha512-S8CmC/cLWnzzpyqdOTXIFW8IOoJ3dfnKeJmUMHZJnv/518XbbPEq1nWVO4yGPnN/jnBThUFlecuYShBR/Zfdlw=="
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
