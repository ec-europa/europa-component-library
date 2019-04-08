# EC React Storybook

## Tests

Visual regression tests for stories are ran via Sauce Labs in order to have consistent display throughout browsers in various operating systems.

To run tests, you will need to have an account in [Sauce Labs](https://saucelabs.com).

Next, export the following environment variables with your Sauce Labs credentials:

```sh
export SAUCE_USERNAME=
export SAUCE_ACCESS_KEY=
```

Then you will be ready to run tests:

```sh
$ yarn test
```

If you run the test suite several times in a raw and you start getting hard-to-debug differences in snapshots/screenshots, ensure to clear `jest`'s cache:

```sh
$ jest --clearCache
```

### Running tests from project root

The `visual.test.js` could take an input for path to storybook's build folder.

For instance, if you'd like to run tests from the project's root folder:

```sh
$ yarn dist:storybook
```

Will build all systems' storybooks and store them in a `dist` folder.

Then, in order to instruct `visual.test.js` to use the EC-related build folder of storybook, run:

```sh
$ export STORYBOOK_PATH=../../../../../../dist/storybook/ec/
$ yarn test:ec-visual
```
