module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier/unicorn',
  ],
  env: {
    node: true,
  },
  rules: {
    'unicorn/prevent-abbreviations': 'off',
  },
  overrides: [
    {
      files: '**/demo/**/*.js',
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: '**/scripts/**/*.js',
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
