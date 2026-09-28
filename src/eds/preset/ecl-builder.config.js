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
  // No EDS component ships JS yet. When one does, add src/eds.js and
  // src/eds-esm.js entries here, mirroring the ec preset.
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
    // Same Inter files as the ec preset, kept in a single place
    // (see scripts/update-inter.sh).
    {
      from: path.resolve(__dirname, '../../presets/ec/fonts/'),
      to: path.resolve(outputFolder, 'fonts'),
    },
  ],
  watch: {
    init: {
      proxy: `${app.host}:${app.port}`,
    },
    handlers: [
      {
        pattern: `${path.resolve(__dirname, 'src')}/*.scss`,
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
        pattern: `${path.resolve(__dirname, '..')}/(foundations|components)/**/*.scss`,
        events: [
          {
            on: 'change',
            name: 'eds foundations/components scss changes',
            command: 'npm run build:styles',
            message: 'New styles ready',
            reload: '*.css',
          },
        ],
      },
    ],
  },
};
