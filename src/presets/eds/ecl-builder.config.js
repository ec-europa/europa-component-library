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
const app = apps['storybook-eds'];

export default {
  scripts: [],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/eds.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-eds.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(__dirname, 'fonts/'),
      to: path.resolve(outputFolder, 'fonts'),
    },
  ],
  // Mirrors src/presets/ec/ecl-builder.config.js's watch block: browser-sync
  // proxies the Storybook dev server and injects the rebuilt CSS in place
  // (no full reload) whenever a watched .scss file changes.
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(__dirname, '..')}/eds/src/*.scss`,
        events: [
          {
            on: 'change',
            name: 'eds preset scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
      {
        pattern: `${path.resolve(__dirname, '../..')}/themes/eds/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'eds theme scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
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
    ],
  },
};
