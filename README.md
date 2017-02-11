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

```
yarn lint
```

## Test (visual regression)

You will need to install selenium in order to run visual regression tests.

```
npm install -g selenium-standalone
selenium-standalone install
```

Then, you need a fresh build of the framework:

```
yarn dist
```

Finally, in 2 separate consoles:

-   Start selenium:

```
selenium-standalone start
```

-   Run the tests:

```
yarn gemini:test
```

If you want to update the reference screeshots:

```
yarn gemini:update
```

## Test (accessibility)

Build the project and run the accessibility tests:

```
yarn dist
yarn test:a11y
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
