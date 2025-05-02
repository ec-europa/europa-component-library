import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import standard from 'eslint-config-standard';

import reactPlugin from 'eslint-plugin-react';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import jestPlugin from 'eslint-plugin-jest';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ECL: 'writable',
      },
    },
    plugins: {
      jest: jestPlugin,
      import: importPlugin,
      react: reactPlugin,
      'jsx-a11y': jsxA11yPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },
    rules: {
      ...standard.rules,
      'import/no-extraneous-dependencies': 'off',
      'no-param-reassign': 'off',
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.json', '.svg'],
        },
      },
      react: {
        version: '19.1.0',
      },
    },
  },
  // Website-level React overrides
  {
    files: ['src/website/**/*.{js,jsx}'],
    rules: {
      'react/forbid-prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-danger': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/display-name': 'off',
    },
  },
  // Component-specific overrides
  {
    files: ['src/website/src/website-components/**/*.{js,jsx}'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unused-class-component-methods': 'off',
    },
  },
  // Test files
  {
    files: ['src/**/*.test.js'],
    rules: {
      'no-undef': 'off',
    },
  },
  // Stories and tests
  {
    files: ['src/**/*.story.js', 'src/**/*.test.js'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  // Scripts: allow console
  {
    files: ['**/scripts/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
  // Website index legacy override
  {
    files: ['src/website/src/Index.jsx'],
    rules: {
      'react/no-deprecated': 'off',
    },
  },
  // Demo files: ignore module resolution
  {
    files: ['**/demo/*.js'],
    rules: {
      'import/no-unresolved': 'off',
    },
  },
  // Playground
  {
    files: ['src/playground/addons/**/*.{js,jsx}'],
    rules: {
      'react/jsx-props-no-spreading': 'off',
    },
  },
  {
    ignores: [
      '.changelog',
      '.tmp',
      '**/_imports',
      '**/build',
      'dist',
      '**/dist',
      '**/exports',
      '**/node_modules',
      '**/static',
      'src/website/src/Index.jsx',
      'src/website/public/playground',
      'src/website/public/apis',
    ],
  },
];
