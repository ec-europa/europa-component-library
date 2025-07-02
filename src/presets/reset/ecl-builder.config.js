import path from 'node:path';
import { promises as fs } from 'node:fs';

const pkg = JSON.parse(
  await fs.readFile(new URL('./package.json', import.meta.url), 'utf8'),
);

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, './node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${pkg.version} Built on ${new Date().toISOString()}`;

export default {
  scripts: [],
  styles: [
    {
      entry: path.resolve(__dirname, 'src/reset.scss'),
      dest: path.resolve(outputFolder, 'styles/optional/ecl-reset.css'),
      options: {
        banner,
        includePaths,
        sourceMap: false,
      },
    },
  ],
  copy: [],
};
