---
title: Visual regression testing
label: Visual regression
---

We test our components in order to catch visual regressions before they hit the production. We use [WebdriverIO](http://webdriver.io/) to drive those tests on [Sauce Labs](https://saucelabs.com/)'s Selenium cloud-based solution:

Here are the results of the latest build:

[![Build Status](https://saucelabs.com/browser-matrix/europa-component-library.svg)](https://saucelabs.com/u/europa-component-library)

## How to test a new component

Testing a new component is quite simple. Follow the guide!

### Write a test

Tests are located under `test/spec`. Create a new `my-component.js` file here and paste:

```js
describe('my-component', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);

    // Go to the URL of the component
    browser.goToComponent('my-component-system');

    // Make sure the browser has finished painting
    browser.pause(1000);

    // Adds necessary scripts for accessibility testing
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'my-component',
      });
      expect(screenshots).to.matchReference();
    });

    // This assertion is mostly the same for each test
    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-component-class').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
```

Of course, replace `my-component` by the name of the actual component and make sure the URL you provide exists.

**Under the hood, the URL will be prefixed by `http://localhost:3000/{system}/components/preview/`**.

### Get the reference screenshots

In order to get the reference screenshots, you have to run the tests locally. On the first run, if the reference screenshots don't exist, they will be created. You need to create a Sauce Labs account and then create a new token.

#### Configure Sauce Labs

In your `.env` file, provide the information about your own Sauce Labs account.

```shell
SAUCE_USERNAME=username
SAUCE_ACCESS_KEY=my-sauce-labs-access-key
```

Then, build the style guide with `yarn dist`.

#### Run all the tests

You can run all the tests with the following command:

```shell
yarn test:functional
```

It can take a while to run all the tests, so here come some shortcuts.

#### Run the tests for the updated packages only

Test your changes against the branch you want to merge in with:

```shell
yarn test:functional --since target-branch
```

The list of the updated packages is cached by default the first time it is generated, so if you encounter some strange behaviors, you can force the list to be rebuilt with: `--ignoreCache`.

Example:

```shell
yarn test:functional --since v1 --ignoreCache
```

#### Run 1 specific test

You can also decide to run only one specific test file:

```shell
yarn test:functional --spec ./src/systems/{system}/components/my-component/test/spec/my-component.js
```

#### Target 1 specific browser

Prepend your command with `TEST_BROWSER=[browser you want to target]` to target 1 specific browser.

Example:

```shell
TEST_BROWSER=firefox yarn test:functional
```

##### Finally

If everything went well, you should now have a new folder `./src/systems/{system}/components/my-component/test/screenshots/reference/my-component` containing the reference screenshots. Add them to your Pull Request.

That's it!
