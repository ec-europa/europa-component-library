# EC Component Library [![Build Status](https://travis-ci.org/ec-europa/europa-component-library.svg?branch=master)](https://travis-ci.org/ec-europa/europa-component-library) [![Greenkeeper badge](https://badges.greenkeeper.io/ec-europa/europa-component-library.svg)](https://greenkeeper.io/)

Component library based on [Fractal](http://fractal.build/).

Requirements:
-   Node.js >= 6.9.5
-   yarn >= 0.20.3

Tested on:

[![Build Status](https://saucelabs.com/browser-matrix/europa-component-library.svg)](https://saucelabs.com/u/europa-component-library)

## Packages

### Base

| Package | Version |
|-------- |-------- |
| [@ec-europa/ecl-base](framework/base) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-base.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-base) |

### Content

| Package | Version |
|-------- |-------- |
| [@ec-europa/ecl-icons](framework/content/ecl-icons) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-icons.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-icons) |
| [@ec-europa/ecl-images](framework/content/ecl-images) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-images.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-images) |
| [@ec-europa/ecl-logos](framework/content/ecl-logos) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-logos.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-logos) |
| [@ec-europa/ecl-tables](framework/content/ecl-tables) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-tables.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-tables) |
| [@ec-europa/ecl-typography-blockquotes](framework/content/ecl-typography/ecl-typography-blockquotes) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-blockquotes.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-blockquotes) |
| [@ec-europa/ecl-typography-headings](framework/content/ecl-typography/ecl-typography-headings) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-headings.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-headings) |
| [@ec-europa/ecl-typography-links](framework/content/ecl-typography/ecl-typography-links) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-links.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-links) |
| [@ec-europa/ecl-typography-lists](framework/content/ecl-typography/ecl-typography-lists) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-lists.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-lists) |
| [@ec-europa/ecl-typography-paragraphs](framework/content/ecl-ypography/paragraphs) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-paragraphs.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-typography-paragraphs) |

### Layout

| Package | Version |
|-------- |-------- |
| [@ec-europa/ecl-grid](framework/layout/grid/ecl-grid) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-grid.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-grid) |

### Utilities

| Package | Version |
|-------- |-------- |
| [@ec-europa/ecl-clearfix](framework/utilities/ecl-clearfix) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-clearfix.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-clearfix) |
| [@ec-europa/ecl-flex](framework/utilities/ecl-flex) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-flex.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-flex) |
| [@ec-europa/ecl-font-size](framework/utilities/ecl-font-size) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-font-size.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-font-size) |
| [@ec-europa/ecl-margin](framework/utilities/ecl-margin) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-margin.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-margin) |
| [@ec-europa/ecl-padding](framework/utilities/ecl-padding) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-padding.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-padding) |
| [@ec-europa/ecl-screen-reader](framework/utilities/ecl-screen-reader) | [![npm version](https://badge.fury.io/js/%40ec-europa%2Fecl-screen-reader.svg)](https://badge.fury.io/js/%40ec-europa%2Fecl-screen-reader) |

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
