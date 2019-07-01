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
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-for-loop': 'off',
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      rules: {
        // JSX files' name should be in PascalCase
        'unicorn/filename-case': ['error', { case: 'pascalCase' }],
        // deprecated: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/2a490286937fa8eba3ed213a4637edec932748de/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': 'off',
      },
    },
  ],
};
