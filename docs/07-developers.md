# Developers - Getting started

### Recommended versions of required software:

- Node.js current (10.x)
- yarn >= 1.10.x

We recommend you to use [Node Version Manager](https://github.com/creationix/nvm) and to run `nvm install` in the root followed by `nvm use` to get the right Node.js version, the `.mvrc` file in the root of your project is selecting for you the latest available node lts release.

Pay attention to the way you're going to run the install script basing on the shell of your preference, so that the conf is exported in the right config file.
Mind also the fact that if you changed the folder for the globally installed node packages in order to get rid of permissions issues (something like [this](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md)) `nvm` will need you to override the prefix for node:

```
nvm is not compatible with the npm config "prefix" option
```

If this is the case you have to delete and recreate the prefix with the chosen version of node in order to use `nvm`:

```bash
npm config delete prefix
```

```bash
npm config set prefix $NVM_DIR/versions/node/{your version}
```

As a general remark _it is advised not to mix package managers in order to avoid resolution inconsistencies caused by unsynchronized lock files_ as taken from the notice yarn is going to show in case you have a package-lock.json in the root of your project.

## Setup

```bash
yarn
```

This launches the install procedure which will build the development environment, it should end by running the "prepublish" scripts for all the packages set

_lerna success run Ran npm script "prepublish" in 10 packages_  
_lerna success - @ecl/ec-preset-full_  
_lerna success - @ecl/ec-preset-website_  
_lerna success - @ecl/ec-resources-icons_  
_lerna success - @ecl/ec-resources-social-icons_  
_lerna success - @ecl/ec-theme-default_  
_lerna success - @ecl/eu-preset-full_  
_lerna success - @ecl/eu-preset-website_  
_lerna success - @ecl/eu-resources-icons_  
_lerna success - @ecl/eu-resources-social-icons_  
_lerna success - @ecl/eu-theme-default_

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
