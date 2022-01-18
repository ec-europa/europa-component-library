module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier',
  ],
  rules: {
    // Allow underscores in class names (BEM)
    'selector-class-pattern': null,
    // Disable checks because automated fixes would be breaking
    'color-function-notation': null,
    // Not a real issue.
    'scss/comment-no-empty': null,
    // Problematic rule.
    'scss/operator-no-newline-after': null,
    'selector-pseudo-class-no-unknown': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'scss/no-global-function-names': null,
  },
};
