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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-N0//85BmsnHvxuOMM71VbrGUKf5Lba3qL+OOSsTUQOI= sha384-cpSC9iUGnaYQKKQFFnsqFK4SuLtpgfRvxnoJPLDkY+0KeWVlPlsYDxOG+OJi3G/B sha512-UCdhaag1z/1JbAuVfGY2mQEBtiNbt//nmyvfJjIR1KIt6fUYLjRpGNDKGU4JyVK6dPLOjr+GZsnlI4POcwaQuA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-a/pNGaBZ4zSooFjwCTrcw4E2G2/L4z3UYgOjRIcZO+c= sha384-L6EGRuJLjD+/BQwxOhsO59wMAvEY1b+SKgg4WTofqWOXcCjW35vU/ekTR+WA1wL2
    sha512-hcS8WjZkJh0pcIMv8Yh+0/ZBuO6u5dBwNq7jWYTzwsNqoJL5Qy7pDHGH9UiUqFUuakHpRqNKdyNTcMMhd3Pqiw=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/ecl-ec.css"
    integrity="sha256-k9kR7M7QoyZI+osoK71eeTR3eDfQ54Y1J5I1KzMMgmw= sha384-GkIfexdiNaijfbKOan7HdWiOobJNLzHSeLsn0H+FLeWdFO7IIR7YvWNTjim3wIcp sha512-j6pDSPEL1mtwqQLiBZEw0rIAV5MNrE8L5tGGP48Ov/WtWrelEySGSGwBxDjtNVCuhFPUlnRE01m+/0sh0obn6A==="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/ecl-ec-utilities.css"
    integrity="sha256-gfBLhiPwl60fRsVHcz78gTWbzLIWM0luZArnYewiFOQ= sha384-nyvwl5DOCSVyevjoyf8kY27mAYrQ+f5V3MYtJePFc6n3emazKTPFvpxZwW5YYocB sha512-h15MiuM+/bqOYJDmch6KDHPrQ+ql62Xw+Ah5JYGQr38+7iQ5j0i5lyCvaM6l7hTgahHYpl2uZZ1rGJWmJWcJgA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-MVm3dL4L8yXse1wRns2Zn8hu6oUXT+47+VKb920jIfg= sha384-2mBpXyVP9BQLJgfsBffzZT8ThSMc9Bfr/+wxBI1SFX+MxdcVE9vBIXZrE7lXwg8a sha512-uXq4WIf5qi6293XPbZi+4GgtS7axIuiOkiXBw2iPM0VQC+L6SCjya/HJFo5BUIqueaukXiV7EHn+7BEgneX0vw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-Gi+EGQkjVnoobtbRNXMClpFjbnegiV4FIlcXraKQ/pw= sha384-EqiIUNpvwAUleQ+blYkEJA7KmRmjH7fiBRSfvIo7S8AmgbiceMu4FAWs9cdpyUMU sha512-HPEY68Ix++WPh+Myl3LBVwq9vIuHmZqAxRboJespluEGmip4ImOTLGd6P32LQKCwr52Agy3b0sdk4v+76/5PGA=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v5.3.0/ec/scripts/ecl-ec.js"
    integrity="sha256-4L7+uT0X5u33PxGflPGxl+/vzBqtszdHRLO4d02mRi8= sha384-bi2zdJIWWFsxCutr7RE8N/YDehGDnXINt2js16gs5gHtC0bo8ARvnXLZds8JcbHw sha512-utmG7DOwxYJDO3xpZevzKqivm8++uUSjD1Lei4nI+qhrQFjgV1tK0JG5AGSIpaCZcWskHFMa8Xd6bOuF7X6L4w=="
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
