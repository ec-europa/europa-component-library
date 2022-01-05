module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-css-modules',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use'] }],
    // Prevent percentages, they break in cssnano
    'alpha-value-notation': 'number',
    // We do use dollars for variables
    'scss/dollar-variable-pattern': null,
    // Allow underscores in class names (BEM)
    'selector-class-pattern': null,
    // Allow underscores in placeholders (BEM)
    'scss/percent-placeholder-pattern': null,
    // Allow use of variables for font family
    'font-family-no-missing-generic-family-keyword': null,
    // Avoid issues related to +
    'scss/operator-no-newline-after': null,
    // Might be re-enabled once the current issues are fixed
    'declaration-block-no-redundant-longhand-properties': null,
    // Disable checks because automated fixes would be breaking
    'color-function-notation': null,
  },
};
