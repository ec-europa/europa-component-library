module.exports = {
  extends: ['stylelint-config-css-modules'],
  rules: {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['use'] }],
  },
};
