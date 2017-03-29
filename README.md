# EC Component Library

[![Build Status](https://travis-ci.org/ec-europa/europa-component-library.svg?branch=master)](https://travis-ci.org/ec-europa/europa-component-library)

Component library based on [Fractal](http://fractal.build/).

Requirements:
-   Node.js >= 6.9.5
-   yarn >= 0.20.3

Tested on:

[![Build Status](https://saucelabs.com/browser-matrix/europa-component-library.svg)](https://saucelabs.com/u/europa-component-library)

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

In order to run the functional tests, you need a Sauce Labs account. If you
don't have a Sauce Labs account yet, [you can sign up here](https://saucelabs.com/beta/signup/OSS/None).

Then, configure the 2 environment variables `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY`.
You can either create a local `.env` file from `.env.example` template or set
the variables manually.

Be sure that you have built the framework before running the tests:

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

## Docker
- Install docker
- `cd` to `europa-component-library` project folder
- Build: `docker build -v $PWD:/usr/src/app -t {username}/europa-component-library .`
Debug mode:
  - Run: `docker run -p 8080:3000 --rm -v $PWD:/usr/src/app -it {username}/europa-component-library /bin/bash`
  - Run: `yarn && yarn bootstrap && npm start`
Deamon mode:
  - Run: `docker run -p 8080:3000 -v $PWD:/usr/src/app -d {username}/europa-component-library /bin/bash -c "yarn; yarn bootstrap; npm start"`
- Open `http://localhost:8080` in the browser
- Now you can to work on the folder, outside of the container.


