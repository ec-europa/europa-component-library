# Developers - Getting started

**Recommended versions of required software:**

- Node.js >= 8.15.1
- yarn >= 1.10.1

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` in the root followed by `nvm use` to get the right Node.js version, the `.mvrc` file in the root of your project is selecting for you the latest available node lts release.

## Setup

```bash
yarn
```

This will install all the external dependencies and then links the local dependencies together after running the prepublish script if available.

## Develop

**EC system:**

```bash
yarn start:ec
```

**EU system:**

```bash
yarn start:eu
```

**Website:**

```bash
yarn start:website
```

## Lint

```bash
yarn lint
```

## Functional testing

Functional testing is not yet available in this version of the library.
