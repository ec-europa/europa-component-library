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
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/styles/optional/ecl-ec-default.css"
    integrity="sha256-7QW0GMeeLEpY9CKJsjD9FiWlVZBwdC57EjfCo9bCAVE= sha384-PLOtRjbyAjmFgy07TIei9LDfmXsaeyenNBHmXXhK+xcGHHK6s+dt+e8Vq7nD/zm2 sha512-msb2h+nz8Fctd8m0OGC2jO8ksFX6vp3ELDW4VjZMOnWmsf6qZ1AaPKBHGoiGhQzrQOQBwOoUusGBF62pj9JqPA=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/styles/optional/ecl-reset.css"
    integrity="sha256-JVlpSKDNBoZLQewsiIqO6t2dWn/TvUhtcHjR/P+Yjhk= sha384-VeH9C6n3aj0wJd0q8TBVfauPE5/ZV2UWe1w5IETG0nLYbIikjpWrd4emEpguDs8h
    sha512-s9KrFcB8pidHItIeYMaUSe8yxOKKSDIgBV7h7IUJAdWxBF63Jy2goKKM30tp8qvvQST1KsDNBe4fGi+9YXUPkg=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/styles/ecl-ec.css"
    integrity="sha256-QszQzzwGiUbYJPnnXjlO6WGzpYVo84rDswVq/Q4CnYk= sha384-gqGNvVAeyZX1187jduzii/krtd4yltWZ0bdkBtyd66EHoZigG8dJjH/Xu38/n8FA
    sha512-2zXIom2fiuXzNgiOMxwemrz6JFzfmPPpXtmCgauuSXyNiSJv7x0ke0N1zHKrRBBEDlX0gTFaeYPUxBjqQvAS0g=="
    crossorigin="anonymous"
    media="screen"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/styles/ecl-ec-print.css"
    integrity="sha256-YfuuI0owCawUWpUG3rPRbY+f5+ahFll4hHMUeIAdEd4= sha384-UTnS99GiNnQwrfMm2EMgr1BMSKd2s1dzDbOazWNbo30bc72sszKP9VdrhqDyIIVp
    sha512-pvwO1SomMqsvz/5FilD2BsVP/7fGDEibU5liHbGVSw68lCNFP/yKMGdgwn9CzxzKdwEEspiyvm4tHEk5b9Joew=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <link
    rel="stylesheet"
    href="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/styles/optional/ecl-ec-default-print.css"
    integrity="sha256-TmX73BmPI/mkpyx29/cg5bhsUu/PWjv/NtPeLI0Ii60= sha384-0zdFYLXqm/RMl8PCtgSIzz1xqU6ob2YTWaQPeC2j4ou49waJAGY1iuqRNc5zpV9f
    sha512-JnuLIrkwHS3YQvGvFBkJ0p032ffa6rI1jYd/My9Y3W33IG7H18lMnhP1ye0yEPr3n6zknHMDRlt/ixUwmyRJZg=="
    crossorigin="anonymous"
    media="print"
  />
  ```

  ```html
  <script
    src="https://cdn1.fpfis.tech.ec.europa.eu/ecl/v3.8.1/ec/scripts/ecl-ec.js"
    integrity="sha256-GwunpNzPYoegaccbh+6guCHQKe5A206xROeD48/oN0Q= sha384-eg3XYuJ0O+7kqD5sB4mc1U+OaklD6RvR1SuP9Uqjngr4usXfsICdEY9EmN9pIwOo
    sha512-q4/L4LF6OoZFtiwPwz5NSl4CGbnsCA7a9hS5C3QnA94r3jAWNKjuvLPtFr8kKyefTIOqzeVVwNIeqO+Bt966QA=="
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
