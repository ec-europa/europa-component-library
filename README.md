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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-oPuVICSvYY5t7utBvaJsfhZYGQ5vmb3NjpMKwxGoMls= sha384-v/1mDMbCQJTS0cU9XiIK21TX/wPrUNbENFPSQUtCOhxntUQ7Fay8L+abuq45FOUL sha512-Qo1wsBj06HCW/atTeppGUnkYkBFaiwtqUEuY+bZFUfTlbxpz7oDzfmknLkReLAJdwO67xycbTMwTNqhAzNvRpg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/styles/optional/ecl-reset.css"
    integrity="sha256-U0tPkblN6s0IHjFAGJyoPtRU8VSRY2Uvfug2rYiWvr8= sha384-d9TkBxO7kR+u52W1oWT/b1uoilHXxZ2/+E/XhIfFrmivxmJxCbAymhX5U/n034wK
    sha512-G+GJh+ghz63C8jaDIldJTXN2POB7u2diX966yZnxxXNBBxG8siR7qcqqE5gZ7yt/wOxt10+H0hJGiMlrJm/LxQ=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/styles/ecl-ec.css"
    integrity="sha256-Uf/zHk09jMCIfgAaCqu81ptZ3JXK2/LQdQIChjYQdvg= sha384-JSlKBXjYuUvugnlBeV4ZlHMaNIxLSskhO5K4vW1yXLHkl7nfP8p0gKZrYPpCayVL
    sha512-clbN8exUlkp9FJ94+v4dUFHFDK60lNXnrrJH9eN58rWqv/YEsUMIVVSXcbrdZQ4WZHV7UkcyWmqea0vE5uFk8g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/styles/ecl-ec-print.css"
    integrity="sha256-hB1pkZyP1M4M4zixYJ7RfzKukY1gXWU9iKfyiiycBx4= sha384-YinAQJ3PclpTxqFsMkTZjviqmcgM7uYuyptOJrle1hxkS2+lr9bpE2sGK2t4f9df
    sha512-tNSbSH58aIvIZs/9IfeyaNBMI2R/YBtf1s0rQvz0s5z3p2BaS608/+a0cACOA1PqmUdMGfBXcuPcbio2Cg5j7g=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-/VgcfM2UlqwS73ki2vqutL4Z7Zy/8aKrtxy0AHHouPY= sha384-4h3Dj9knrrdhzv6rbU2/kP8mK14YgQdxuUH9NBBGgYIzqPR5RuHD605k3Zvdb5Gx
    sha512-CjbweOaquPaDQipj2STU7TnEYifD3pPOM+OUr5GpiWocGnOVVEN9YimLnTnFn0VC9JbJA6SGYfjuPU5it+Y2/w=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.0/ec/scripts/ecl-ec.js"
    integrity="sha256-a5F5he/DJnMvJrRZtIjkjBcEd5f2cXGPGNsnezefihE= sha384-GqDQNc8jlf72H0QEcUExpohsjNi7YDZ88svbsY5JvNNPwInBMeKGyDFJCRI6w/qN
    sha512-LAS6yoR2VX+6weE9QtshPvYvDeCjd+WA5atNJnHs0vbAFq2Y+WgEGJ0MNksD9d4Zo6QE2Qivk0fTHUvOFQ3yJw=="
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
