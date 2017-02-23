module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard'
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      componentName: /^[a-z][-a-zA-Z0-9]+$/,
      componentSelectors: bemSelector
    },
    'selector-class-pattern': null,
  }
};

// Check selectors against BEM syntax
function bemSelector(block, presetOptions) {
  var ns = (presetOptions && presetOptions.namespace) ? presetOptions.namespace + '-': '';
  var WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  var element = '(?:__' + WORD + ')?';
  var modifier = '(?:--' + WORD + '){0,2}';
  var attribute = '(?:\\[.+\\])?';
  return new RegExp('^\\.' + ns + block + element + modifier + attribute + '$');
}
