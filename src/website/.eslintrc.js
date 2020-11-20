module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
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
      files: '**/components/**/demo/*.js',
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
};
