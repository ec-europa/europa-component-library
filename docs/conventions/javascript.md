# JavaScript coding conventions

JavaScript source code conventions within ECL repository are enforced through [ESlint](https://eslint.org/) linter.

## Rules

Code within the ECL module composed by components' APIs should not violate the linter rules and should not mutate globals outside the module.

For details regarding the ECL JavaScript API, please refer to [the main JavaScript documentation page](../javascript.md).

### Presets

ECL ESlint rules are based on the most widely-adopted [Airbnb Style Guide](https://github.com/airbnb/javascript).

## Automatic formatting

ECL repository uses [prettier](https://prettier.io) formatter for JavaScript. An integration with ESlint is achieved through `eslint-config-prettier` and `eslint-plugin-prettier`.

On each commit, a hook attempts to fix all issues violating the ESlint conventions and format modified JavaScript code.

### Configuration

Please refer to our guide for project-specific [linting rules](./linting.md)
