module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  plugins: ['jest'],
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
  },
  overrides: [
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
    {
      files: ['src/**/web-components/*/*.js'],
      rules: {
        'no-underscore-dangle': 'off',
      },
    },
    {
      files: ['src/**/web-components/*/*.story.js'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
