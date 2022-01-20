module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier', 'eslint-config-prettier'],
  plugins: ['react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
