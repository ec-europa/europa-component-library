const path = require('path');
const pkg = require('./package.json');
const rootPkg = require('../../../package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, '../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

const { apps } = rootPkg;
const app = apps['storybook-eu'];

module.exports = {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/eu.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-eu.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/eu.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-eu.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-utilities.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-eu-utilities.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-print.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-eu-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-default.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-eu-default.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-easy-to-read.scss'),
      dest: path.resolve(
        outputFolder,
        'styles/optional/ecl-eu-easy-to-read.css',
      ),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-default-print.scss'),
      dest: path.resolve(
        outputFolder,
        'styles/optional/ecl-eu-default-print.css',
      ),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(nodeModules, '@ecl/preset-reset/src/reset.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-reset.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(nodeModules, '@ecl/preset-rtl/src/rtl.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-rtl.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/resources-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-social-media-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons-social-media'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-flag-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons-flag'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-eu-social-icons/dist'),
      to: path.resolve(outputFolder, 'images/social-icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-eu-logo/dist'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(
          __dirname,
          '..',
        )}/(dev|eu|reset|rtl)/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'dev/eu presets scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|eu)/src/*.js`,
        events: [
          {
            on: 'change',
            name: 'dev/eu presets javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..',
        )}/implementations/vanilla/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'vanilla scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..',
        )}/implementations/vanilla/**/*.js`,
        events: [
          {
            on: 'change',
            name: 'vanilla javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..',
        )}/themes/(dev|eu)/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'theme scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
    ],
  },
};
