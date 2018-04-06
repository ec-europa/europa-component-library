# EC Component Library

[![Build Status](https://drone.fpfis.eu/api/badges/ec-europa/europa-component-library/status.svg)](https://drone.fpfis.eu/ec-europa/europa-component-library)
[![Greenkeeper badge](https://badges.greenkeeper.io/ec-europa/europa-component-library.svg)](https://greenkeeper.io/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

Component library based on [Fractal](http://fractal.build/).

Requirements:

* Node.js current (8.x)
* yarn >= 1.0.2

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` followed by `nvm use` to get the right Node.js version.

Tested on:

[![Build Status](https://saucelabs.com/browser-matrix/europa-component-library.svg)](https://saucelabs.com/u/europa-component-library)

## Setup

```bash
yarn
```

## Develop

EC system:

```bash
yarn start:ec
```

EU system:

```bash
yarn start:eu
```

## Lint

```bash
yarn lint
```

## Functional testing

In order to run the functional tests, you need a Sauce Labs account. If you
don't have a Sauce Labs account yet,
[you can sign up here](https://saucelabs.com/beta/signup/OSS/None).

Then, configure the 2 environment variables `SAUCE_USERNAME` and
`SAUCE_ACCESS_KEY`. You can either create a local `.env` file from
`.env.example` template or set the variables manually.

Be sure that you have built the framework before running the tests:

```bash
yarn dist
```

Then you can run:

```bash
yarn test:functional
```

For more details, [see the testing documentation](docs/testing/visual.md)
