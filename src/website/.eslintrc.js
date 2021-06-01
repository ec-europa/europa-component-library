module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['jsx-a11y', 'prettier'],
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
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: 'scripts/*.js',
      rules: {
        'no-console': 'off',
      },
    },
    // @ecl/website-utils alias is not handled properly by eslint-loader
    {
      files: '**/demo/*.js',
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
};
