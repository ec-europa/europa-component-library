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

Both `start:(ec|eu)` commands will spawn instances of Storybook development environments. These environments watch for changes in components of preview pane, thus it will be enough when developing components' structures.

When changes are to be applied also in SCSS/CSS and/or JavaScript assets part of "vanilla" packages, the following command will be more useful:

```bash
yarn start:(ec|eu):dev
```

Please note that Storybook's HMR or browser page reload cannot be promised. Please keep in mind to reload browser manually or from command line when watch task changes have finished.

**Website:**

```bash
yarn start:website
```

## Lint

```bash
yarn lint
```
