import path from 'node:path';
import { promises as fs } from 'node:fs';
import * as sass from 'sass';
import postcss from 'postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import bannerPlugin from 'postcss-banner';
import rangePlugin from 'postcss-input-range';
import getSystem from '../utils/getSystem.js';

const getPlugins = (options = {}) => {
  const plugins = [];

  plugins.push(
    autoprefixer({
      grid: 'no-autoplace',
      overrideBrowserslist: [
        '> 1%',
        'not dead',
        'not ie <= 11',
        'not safari < 14',
      ],
    }),
  );
  plugins.push(rangePlugin());

  if (process.env.NODE_ENV === 'production') {
    if (options.banner) {
      plugins.push(
        bannerPlugin({
          banner: options.banner,
          important: true,
          inline: true,
        }),
      );
    }
  }

  if (process.env.NODE_ENV === 'production' || options.minify) {
    plugins.push(cssnano({ preset: 'default' }));
  }

  return plugins;
};

const buildStyles = async (entry, dest, options) => {
  const plugins = getPlugins(options);

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === 'file') {
    postcssSourceMap = 'file'; // as a file
  }

  const sassResult = sass.compile(entry, {
    outFile: dest,
    functions: {
      'getsystem()': () => new sass.types.String(getSystem() || ''),
    },
    sourceMap: options.sourceMap !== false,
    sourceMapIncludeSources: options.sourceMap === true,
    loadPaths: [
      path.resolve(process.cwd(), 'node_modules'),
      ...(options.includePaths || []),
    ],
  });

  const postcssResult = await postcss(plugins).process(sassResult.css, {
    map:
      postcssSourceMap === 'file'
        ? { inline: false, prev: sassResult.sourceMap }
        : postcssSourceMap,
    from: entry,
    to: dest,
  });

  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, postcssResult.css);

  if (postcssResult.map) {
    await fs.writeFile(`${dest}.map`, postcssResult.map.toString());
  }
};

export { getPlugins, buildStyles };
