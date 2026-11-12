import path from 'node:path';
import { promises as fs } from 'node:fs';

const pkg = JSON.parse(
  await fs.readFile(new URL('./package.json', import.meta.url), 'utf8'),
);
const rootPkg = JSON.parse(
  await fs.readFile(
    new URL('../../../../package.json', import.meta.url),
    'utf8',
  ),
);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

// EC sources are compiled from @ecl/preset-ec, so resolve from its dependencies.
const ecPreset = path.resolve(__dirname, 'node_modules/@ecl/preset-ec');
const ecNodeModules = path.resolve(ecPreset, 'node_modules');
const includePaths = [ecNodeModules, path.resolve(__dirname, 'node_modules')];

// The watcher only rebuilds the main stylesheet (`npm run styles:main`).
const mainOnly = process.env.ECL_EP_MAIN_ONLY === 'true';
const src = path.resolve(__dirname, '../../..');
const app = rootPkg.apps['storybook-ec'];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

const styles = [
  {
    entry: path.resolve(__dirname, 'src/ep.scss'),
    dest: path.resolve(outputFolder, 'styles/ecl-ep.css'),
    options: {
      banner,
      includePaths,
      sourceMap: isProd ? 'file' : true,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-color-modes.scss'),
    dest: path.resolve(outputFolder, 'styles/ecl-ep-color-modes.css'),
    options: {
      banner,
      includePaths,
      sourceMap: isProd ? 'file' : true,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-utilities.scss'),
    dest: path.resolve(outputFolder, 'styles/optional/ecl-ep-utilities.css'),
    options: {
      banner,
      includePaths,
      sourceMap: isProd ? 'file' : true,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-print.scss'),
    dest: path.resolve(outputFolder, 'styles/ecl-ep-print.css'),
    options: {
      banner,
      includePaths,
      sourceMap: isProd ? 'file' : true,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-default.scss'),
    dest: path.resolve(outputFolder, 'styles/optional/ecl-ep-default.css'),
    options: {
      banner,
      includePaths,
      sourceMap: false,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-easy-to-read.scss'),
    dest: path.resolve(outputFolder, 'styles/optional/ecl-ep-easy-to-read.css'),
    options: {
      banner,
      includePaths,
      sourceMap: false,
    },
  },
  {
    entry: path.resolve(__dirname, 'src/ep-default-print.scss'),
    dest: path.resolve(
      outputFolder,
      'styles/optional/ecl-ep-default-print.css',
    ),
    options: {
      banner,
      includePaths,
      sourceMap: false,
    },
  },
];

export default {
  scripts: [
    {
      entry: path.resolve(__dirname, 'src/ep.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-ep.js'),
      options: {
        format: 'iife',
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
    {
      entry: path.resolve(__dirname, 'src/ep-esm.js'),
      dest: path.resolve(outputFolder, 'scripts/ecl-esm-ep.js'),
      options: {
        format: 'es',
        banner,
        moduleName: 'ECL',
        sourceMap: isProd ? false : 'inline',
      },
    },
  ],
  // Mirrors the EC preset outputs, so EP can replace it file for file.
  styles: mainOnly ? styles.slice(0, 1) : styles,
  copy: [
    {
      from: path.resolve(ecNodeModules, '@ecl/resources-ec-logo/dist'),
      to: path.resolve(outputFolder, 'images/logo'),
    },
    {
      from: path.resolve(ecPreset, 'fonts/'),
      to: path.resolve(outputFolder, 'fonts'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: [
          `${src}/specific/presets/ep/src/*.scss`,
          `${src}/specific/components/*/*.scss`,
          `${src}/presets/ec/src/*.scss`,
          `${src}/themes/ec/**/*.scss`,
          `${src}/(components|compositions|layout|utilities)/*/*.scss`,
        ],
        events: [
          {
            on: 'change',
            name: 'EP styles changes',
            command: 'npm run styles:main',
            message: 'New EP styles ready',
            reload: '*.css',
          },
        ],
      },
    ],
  },
};
