const defaultSassRules = require('stylelint-config-sass-guidelines').rules;

module.exports = {
  extends: ['@ec-europa/stylelint-config-ecl', 'stylelint-config-prettier'],
  rules: {
    'at-rule-empty-line-before': null,
    'declaration-bang-space-before': null,
    'declaration-empty-line-before': null,
    'selector-combinator-space-before': null,
    'selector-descendant-combinator-no-non-space': null,
    'order/order': [
      defaultSassRules['order/order'][0].concat([
        {
          type: 'at-rule',
          name: 'include',
          parameter: 'ecl-media-breakpoint-up',
          hasBlock: true,
        },
      ]),
    ],
  },
};
