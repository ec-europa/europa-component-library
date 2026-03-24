import path from 'node:path';
import { promises as fs } from 'node:fs';

const pkg = JSON.parse(
  await fs.readFile(new URL('./package.json', import.meta.url), 'utf8'),
);
const rootPkg = JSON.parse(
  await fs.readFile(new URL('../../../package.json', import.meta.url), 'utf8'),
);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, './node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

const { apps } = rootPkg;
const app = apps['storybook-ec'];

export default {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/ec.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-ec.js'),
      options: {
        format: 'iife',
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-esm.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-esm-ec.js'),
      options: {
        format: 'es',
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/ec.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-color-modes.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-color-modes.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-utilities.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-ec-utilities.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-print.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-ec-print.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-default.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-ec-default.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-easy-to-read.scss'),
      dest: path.resolve(
        outputFolder,
        'styles/optional/ecl-ec-easy-to-read.css',
      ),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ec-default-print.scss'),
      dest: path.resolve(
        outputFolder,
        'styles/optional/ecl-ec-default-print.css',
      ),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
    {
      entry: path.resolve('../reset', 'src/reset.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-reset.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(nodeModules, '@ecl/resources-ec-logo/dist'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
    {
      from: path.resolve(__dirname, 'fonts/'),
      to: path.resolve(outputFolder, 'fonts'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|ec|reset)/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'dev/ec presets scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '..')}/(dev|ec)/src/*.js`,
        events: [
          {
            on: 'change',
            name: 'dev/ec presets javascript changes',
            command: 'npm run build:scripts',
            message: 'New scripts ready',
            reload: true,
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '../..')}/(components|compositions|layout|utilities)/*/*.scss`,
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
        pattern: `${path.resolve(__dirname, '../..')}/components/*/!(*.story|*.test).js`,
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
        pattern: `${path.resolve(__dirname, '../..')}/themes/(dev|ec)/**/*.scss`,
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
