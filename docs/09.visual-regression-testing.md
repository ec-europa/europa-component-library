## Visual regression testing

Visual regression tests for Storybook's stories are ran in [Sauce Labs](https://saucelabs.com) in order to have consistent display throughout.

### Requirements

When local testing, you will need:

- [Sauce Labs account](https://app.saucelabs.com/signup)
- [Sauce Connect](https://wiki.saucelabs.com/display/DOCS/Sauce+Connect+Proxy)

Sauce Connect is a tool which enables Sauce Labs cloud to "see" your local server while running tests. You could use the Sauce Connect tool directly to open a tunnel from your local machine to the cloud or use npm package such as [Sauce Connect runner](https://www.npmjs.com/package/sauceconnect-runner).

It's up to you to choose which tool is more convenient for you.

### Environment variables

Please set the following:

```sh
export SAUCE_USERNAME=
export SAUCE_ACCESS_KEY=
export TEST_BROWSER=
export ECL_SYSTEM=
```

### Build storybooks

```sh
$ yarn dist:storybook
```

This will build all systems' storybooks and store them in a `dist` folder.

When running tests locally, this `dist` folder will need to be served and exposed to Sauce Labs's cloud in order for its driver to be able to see components.

### Running tests

As mentioned in a previous section, you will need to use Sauce Connect in order to establish a secure tunnel connection between your local environment and the Sauce Labs cloud.

If you are using native Sauce connect, open 2 terminal sessions: one for the tunnel listening to your local ports and another one for the tests.

If the npm package Sauce Connect runner is a more convenient tool for you, you can wrap the test process with it in the following way:

```sh
$ sc-run yarn test:visual
```

When you run tests in CI, CD or CT environments, make sure to deploy the static assets of the `dist` folder to a public hosting and run tests towards it. This approach will be way easier compared to using Sauce Connect and tweaking your infrastructure security settings. Basically, you do not need Sauce Connect in continuous and containerized environments.

### Updating references

```sh
$ yarn test:visual-update
```

### Target browsers

The following browsers are supported in `TEST_BROWSER` variable:

- `chrome`
- `ie`
- `safari`
- `firefox`

### ECL Systems

Possible values for `ECL_SYSTEM`:

- `ec`
- `eu`
