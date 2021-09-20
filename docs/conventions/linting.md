# Linting

ECL uses [ESLint](https://eslint.org/) to ensure standartization within JavaScript and JSX files within this repository.

Please refer to the [getting started](https://eslint.org/docs/user-guide/getting-started) page to familiarize yourself with the fundamentals of this static analysis tool.

## Introduction

There are 2 main types of configurations within ECL project:

1. root configuration file at `.eslintrc.js` containing global rules
2. overrides related to modules and sub-projects containing specific rules for a sub-system

Few important overrides are:

- ECL public website: `src/website/.eslintrc.js`
- Twig implementation: `src/implementations/twig/.eslintrc.js`
- Specs: `src/specs/.eslintrc.js`

## Specifics

Here are a few useful details to keep in mind when maintaining the set of linting rules:

- `import/no-extraneous-dependencies` is disabled globally because of the lerna workspace feature
- `no-param-reassign` is disabled as irrelevant for ECL project needs (ECL.js module specifically)
- `import/prefer-default-export` is disabled for storybook stories because stories' naming depends on named exports and not default exports

## Recommendations

As a general rule of thumb, if there are more than a few inline eslint ignore rules, consider making the rule more global
