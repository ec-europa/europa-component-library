# Linting

ECL uses [ESLint](https://eslint.org/) to ensure standardization within JavaScript and JSX code within this repository.

Please refer to the [getting started](https://eslint.org/docs/user-guide/getting-started) page to familiarize yourself with the fundamentals of this static analysis tool.

## Introduction

ECL uses the [ESLint flat config format](https://eslint.org/docs/latest/use/configure/configuration-files) (introduced in ESLint v9):

- Root configuration file: `eslint.config.cjs`
- This file contains global rules and overrides for different parts of the project
- Overrides are defined within the same config file for different file patterns

The flat config format provides better performance and more intuitive configuration compared to the legacy `.eslintrc.js` format.

## Specifics

Here are a few useful details to keep in mind when maintaining the set of linting rules:

- `import/no-extraneous-dependencies` is disabled globally because of the lerna workspace feature
- `no-param-reassign` is disabled as irrelevant for ECL project needs (ECL.js module specifically)
- `import/prefer-default-export` is disabled for storybook stories because stories' naming depends on named exports and not default exports

## Stylelint

ECL also uses [Stylelint](https://stylelint.io/) for SCSS/CSS linting:

- Configuration file: `.stylelintrc.cjs`
- See [SCSS conventions](./scss.md) for detailed styling rules

## Running Linters

```bash
# Lint everything
pnpm lint

# Lint only JavaScript
pnpm lint:js

# Lint only SCSS
pnpm lint:css

# Auto-fix issues
pnpm lint:js --fix
pnpm lint:css --fix
```

## Recommendations

As a general rule of thumb, if there are more than a few inline eslint ignore rules, consider making the rule more global by updating `eslint.config.cjs`.
