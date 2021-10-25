# ECL v3 - Europa Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The Europa Component Library (ECL) is a library of components applicable to all European Commission and European Union websites. The library contains all available components which you can use to build your website.

All library elements are accompanied with

- documentation: what the component is intended for and recommendations regarding its usage
- demo: visual representation of the component
- code: technologically agnostic HTML/CSS code and twig implementation

## Requirements

ECL is using Erbium, node v12.22.2. Please ensure a match before proceeding with the installation of ECL dependencies or ones in ECL Builder.

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
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.2/ec/styles/optional/ecl-ec-default.css"
  integrity="sha256-15gWPh+ATvuR84j1TsxmhjZiFZ0hJTTmxbIm4wbqYqY= sha384-Iq8JuKMC1rKUrAMcGJDRYyLLEXLLh97lbvt8i/0NH5TWNzDD3fn6qfRxYIuNVOmv sha512-ITzkkqIibfLAWadkLuuRHONAlAg0RKx+eKH9VpUSe95OyQEk5yVrMWPzFSFXQzSBjI4qX0dnRXdTu6rAsyGP0g=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.2/ec/styles/optional/ecl-reset.css"
  integrity="sha256-d425UdVp/SE5wXNmGpa6AySBFYOInKC+jCJJzbLcUTU= sha384-8pOBRIxdh9cRSEwIpZxdLiaf5RKRkza2KWGzuxUHO5XDlqXB1YBLhPXo1FfAttUp sha512-hNoiD55tk0QWQUAuU6/G6CxbalVbNnd5mex4XI9TK5tQYltWkKb5+KG3kOBma761kbZFiq86AJGzbHMBXIL0Sg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.2/ec/styles/ecl-ec.css"
  integrity="sha256-UdD3cTVcaH634SqohSIN9sFJpDegU0eoMbmOgbst0eY= sha384-zAfmWrWVFfK1Uy90Rs6vlVvf2is/9WHH0axNmz2vtncZhu21tj+ROXFMGa7lmFBL sha512-ZmyjGbp9Y4NddnGZls2eEmcJJWWD0mzVwsU5VN/SVAv9RU+oPOlFVJIAOVEoOq7qxskpxIB5KuDBOgyXRA9Srg=="
  crossorigin="anonymous" media="screen" />
  ```

  ```html
  <link rel="stylesheet"
  href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.2/ec/styles/ecl-ec-print.css"
  integrity="sha256-6x5ORH8lrKOggj1+nbklI5TMD0nlQTelPKpWDuzii/Q= sha384-LCjGLB1DHi9ZHABbYwfsnsT/E1Wu1wvkOHfuQ7TWUyKpmyq+uxWV19JB1QkiWoYR sha512-KyqmrnqQmNYKLvfIh29lG6/2U4Wtz3IpoEeocQz9jbj5ryKxy93TJVypFdV2K6/mW54LqOVIKhDzC4To7IAmtw=="
  crossorigin="anonymous" media="print" />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.1.2/ec/scripts/ecl-ec.js"
    integrity="sha256-uE9XuT5j5RO0cYOsBcOrqZgWmxO05uH4MPELOn+IOn0= sha384-fLZdRkPWE9ur+uzZIwj7e7kXZH5J2BXYL1mkq6AXi33Ei3ZNtvSoUN4xnlenUkEh sha512-Qn59OpGT0PqS7w7qHJP8FauIOST9YY6s1sejcg62LxDAYKpHhaxuMwVpQeDcQY5AsepbSq3ba6gFDHEe8XwQ7w=="
    crossorigin="anonymous"
  ></script>
  ```

## Need help?

Please contact [COMM Europa Management](mailto:Europamanagement@ec.europa.eu) for support on using this resource for a European Commission website.

## Previous major versions

- v2.39.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v2) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v2.39.0) - [website](https://ec.europa.eu/component-library/v2.39.0/)
- v1.15.0: [sources](https://github.com/ec-europa/europa-component-library/tree/v1) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v1.15.0) - [website](https://ec.europa.eu/component-library/v1.15.0/)
- v0.24.3: [sources](https://github.com/ec-europa/europa-component-library/tree/v0) - [release](https://github.com/ec-europa/europa-component-library/releases/tag/v0.24.3) - [website](https://ec.europa.eu/component-library/v0.24.3/)
