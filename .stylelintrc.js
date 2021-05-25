// Check selectors against BEM syntax
function bemSelector(block) {
  const ns = '(%|\\.)ecl-';
  const WORD = '[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*';
  const element = `(?:__${WORD})?`;
  const modifier = `(?:--${WORD}){0,2}`;
  const attribute = '(?:\\[.+\\])?';

  return new RegExp(`^${ns}${block}${element}${modifier}${attribute}$`);
}

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'plugin/selector-bem-pattern': {
      componentName: /^[a-z][-a-zA-Z0-9]+$/,
      componentSelectors: bemSelector,
      ignoreSelectors: /^\.no-js$/,
    },
    // Allow underscores in class names (BEM)
    'selector-class-pattern': null,
    // Allow underscores in placeholders (BEM)
    'scss/percent-placeholder-pattern': null,
    // Allow use of variables for font family
    'font-family-no-missing-generic-family-keyword': null,
  },
};
