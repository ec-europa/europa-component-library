# Linting

ECL uses [ESLint](https://eslint.org/) to ensure standartization within JavaScript and JSX files within this repository.

Please refer to the [getting started](https://eslint.org/docs/user-guide/getting-started) page to familiarize yourself with the fundamentals of this static analysis tool.

## Introduction

There are few main configuration files within the repository:

- root config file at `.eslintrc.js`
- local override for EC React implementation at `src/systems/ec/implementations/react/.eslintrc.js`
- local override for EU React implementation at `src/systems/eu/implementations/react/.eslintrc.js`
- local override for the website at `src/website/.eslintrc.js`

There are few more overrides which are less frequently necessary for the overall coding flow of the project. Keep in mind that the closer a configuration file is to a given file, an overriding takes place. Thus, when updating rules, pay attention to scope of rules.

## Specifics

Here are a few useful details to keep in mind when maintaining the set of linting rules for the ECL project:

- `import/no-extraneous-dependencies` is set throughout because of the lerna workspace features
- `no-param-reassign` is
- React-specific rules are to be contained within React-specific implementations
- If there more than a few inline eslint ignore rules, consider making the rule more global
