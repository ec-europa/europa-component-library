module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
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
  },
};
