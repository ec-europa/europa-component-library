# EC Component Library

[![Build Status](https://travis-ci.org/ec-europa/europa-component-library.svg?branch=master)](https://travis-ci.org/ec-europa/europa-component-library)

Component library based on [Fractal](http://fractal.build/).

Requirements:
-   Node.js >= 6
-   yarn

## Setup

```
yarn
yarn bootstrap
```

## Develop

```
yarn start
```

## Lint

With npm:

```
npm run lint --silent
```

Or with yarn:

```bash
yarn lint
```

## Functional testing

In order to run the function tests, you need to setup 2 environment variables.
Either create a local `.env` file from `.env.example` template or set the
variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` manually.

Be sure that you have built the framework before running the tests!

```
yarn dist
```

Then you can run:

```
yarn test:functional
```

## Deploy to GitHub Pages

_To be executed from the master branch only._

First, make sure to have built the style guide with the framework with:

```
yarn dist
```

Then, you can type:

```
yarn gh-pages
```
