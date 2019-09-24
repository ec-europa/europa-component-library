module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],
  env: {
    node: true,
  },
  rules: {
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'unicorn/prevent-abbreviations': 'off',
    // Disable "unicorn/prefer-dataset", since setAttribute and getAttribute are faster
    // https://jsperf.com/html5-dataset-vs-native-setattribute
    'unicorn/prefer-dataset': 'off',
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
