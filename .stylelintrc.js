module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  rules: {
    // Prevent percentages, they break in cssnano
    'alpha-value-notation': 'number',
    // Allow underscores in class names (BEM)
    'selector-class-pattern': null,
    // Allow underscores in placeholders (BEM)
    'scss/percent-placeholder-pattern': null,
    // Allow use of variables for font family
    'font-family-no-missing-generic-family-keyword': null,
  },
};
