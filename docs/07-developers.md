# Developers - Getting started

Requirements:

- Node.js >= 8.x
- yarn >= 1.10.1

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` followed by `nvm use` to get the right Node.js version.

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

For more details, [see the testing documentation](testing/visual.md)
