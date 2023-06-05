# ECL v3 - Europa Component Library

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is currently using node 16.14.0, we recommend using this version (nvm use) to ensure the compatibility with all the ECL dependencies or the ones defined by the ECL Builder.

## Documentation

Read the technical documentation [on GitHub](docs/README.md).

## Migrate from v2

Read the technical documentation [on GitHub](docs/Migrating-v3.md).

## Quick start

The ECL is bundled in various [presets](docs/presets.md) in order to accomodate the different needs of everyone. Once you know which preset you want to use, you can:

- download [the latest release](https://github.com/ec-europa/europa-component-library/releases/latest) of the preset of your choice
- install the preset with npm or yarn, e.g. `npm install @ecl/preset-ec` or `yarn add @ecl/preset-ec`
- use the CDN, https://cdn{1,2,3 or 4}.fpfis.tech.ec.europa.eu/ecl/{tag}/{system}/{path/to/the/asset}. Here's an example:

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-Kyta5WKpuFfnYPL1tr0152jclMGEt5dGt3jVm1pcgmM= sha384-vTjmRBWO8/ZXD2wLt4J8hyUcDoXZrpkmzuZ8mN6MqrYN83nRb5QJDJi/c86Y8mPR sha512-79l+1f7KGQ1+XF8iZ7sU4w9NQIru0mvoxY+EE2wok3cgh5PtfDmUCJqWtCmtP/c5+YHalYtypQ6VMP6AuKr1og=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/styles/optional/ecl-reset.css"
    integrity="sha256-zBibh4oK6TT0MJM1QZNDZ+DqtywCeJXBQeDFqThis68= sha384-yLbVkpGYL17puWJ/EziT4k4lA+RF9T2FqE0hM7SsuglILYq7RL7uPz89y2si61uZ
    sha512-Jno9RUVuF3yr/F2f+LqwDFgbXWsYOO+i0JTyHlN1wIL3bGugAGix26HbzHKPfePpRhV1Twyi0yW35czuy2cQog=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/styles/ecl-ec.css"
    integrity="sha256-OQtA/4Cg0988QNCM5LI3D9wOP4/UeDZ64P8/nJRCXHY= sha384-z9axP6cGDg5Kkv/uzhZaaWzojIma5dRICox83dL2Aq6r+bM124Q286/V8UNkSFD3
    sha512-YUaUfGbnomKneyWWdInk43zu24yq6g5zoohwTMCDlWByk/3EATdu7yAi92j0+Xyw49uyQgRCHvJxDQS1nxaDbQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/styles/ecl-ec-print.css"
    integrity="sha256-KcZ8B2uML6UF2EbbVSJe2IFjGIp0sVcT36Mv3E2ef+s= sha384-45SvDIZtNMapCRvt0z0n3Ouq9QhcL8wOzfCA6Fl7YlEavehhH0husXEbVITol40F
    sha512-AqyLqqj3yawb2pzQX2MkGM/e7EFFwf+Yi6vfo99E8HUIYYgg0MIDpzTdlOfwehPIXL8xoVyAhfAcplDVv2WBGw=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-hKUhhA43Z5KEWYreldFNkaixPwnO4BxgvUrzpeZuDmc= sha384-wBn464OmVsi5QQCUPQktNna2dKe+98caOxeuRZ47o8wbwM8SFdJec9vh1q3f3Xu3
    sha512-gFGKqO1Q1LJurR4zrAQeap7E1qSVg6lDwmBUvXGx1W8+CRQzKPBOoITuqj6TeiHOjtOlJsyztqx3yjq7AiMmyQ=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.2/ec/scripts/ecl-ec.js"
    integrity="sha256-tl8YRsccK0d3tLMSMRobG+eikvxSAdtSuETQwM9vr+s= sha384-p7UeFZqcftUHPi7YXoznjxnY4Zbc7vSoA7uHVmiN1eKdDxoNMZQWq2Q7VKL8Lc4J
    sha512-Hd8hXSU1JKOWUGN9nqrjjt0oYu+p9XSZiqQKyYUWmkFAuAOStHO1vbasMmXlhOnMIhRtolzErG9n1OXNBgK4+g=="
    crossorigin="anonymous"
  ></script>
  ```

### :warning: moment.js

ECL uses [Pikaday](https://github.com/Pikaday/Pikaday) which requires [moment.js](https://momentjs.com/) and this library is not bundled by ECL.
Therefore **moment.js needs to be loaded or bundled by the application or website using ECL**, depending on the needs.

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
