module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
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
