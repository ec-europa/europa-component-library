module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  plugins: ['jest', 'import'],
  extends: ['airbnb-base', 'prettier'],
  globals: {
    ECL: 'writable',
  },
  env: {
    node: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.svg'],
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.story.js', 'src/**/*.test.js'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
    {
      files: '**/scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['src/**/*.test.js'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
