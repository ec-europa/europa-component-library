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
      entry: path.resolve(__dirname, 'src/eu-core.js'),
      dest: path.resolve(outputFolder, 'scripts/eu-core.js'),
      options: {
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/eu-core.scss'),
      dest: path.resolve(outputFolder, 'styles/eu-core.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/eu-core-print.scss'),
      dest: path.resolve(outputFolder, 'styles/eu-core-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/resources-eu-icons/dist'),
      to: path.resolve(outputFolder, 'images/icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-eu-social-icons/dist'),
      to: path.resolve(outputFolder, 'images/social-icons'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/resources-eu-logo'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|eu-core)/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'dev/eu-core presets scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|eu-core)/src/*.js`,
        events: [
          {
            on: 'change',
            name: 'dev/eu-core presets javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(
          __dirname,
          '../..'
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
          '../..'
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
          '../..'
        )}/themes/(dev|eu-core)/**/*.scss`,
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
