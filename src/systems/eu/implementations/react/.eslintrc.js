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
    'react/forbid-prop-types': 'off',
    'jsx-a11y/role-supports-aria-props': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'unicorn/no-for-loop': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'react/no-array-index-key': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        // deprecated: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/2a490286937fa8eba3ed213a4637edec932748de/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': 'off',
      },
    },
  ],
};
