module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
  ],
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
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
};
