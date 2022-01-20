module.exports = {
  parser: '@babel/eslint-parser',
  root: true,
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
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
  ],
};
