module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
