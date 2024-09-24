const path = require('path');
const fs = require('fs');
const sass = require('sass');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const bannerPlugin = require('postcss-banner');
const rangePlugin = require('postcss-input-range');
const getSystem = require('../utils/getSystem');

const getPlugins = (options = {}) => {
  const plugins = [];

  plugins.push(autoprefixer({ grid: 'no-autoplace' }));
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
    plugins.push(cssnano({ safe: true }));
  }

  return plugins;
};

const buildStyles = (entry, dest, options) => {
  const plugins = getPlugins(options);

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === 'file') {
    postcssSourceMap = options.sourceMap; // as a file
  }

  const sassResult = sass.renderSync({
    file: entry,
    outFile: dest,
    silenceDeprecations: ['legacy-js-api'],
    functions: {
      'getsystem()': () => new sass.types.String(getSystem() || ''),
    },
    sourceMap: options.sourceMap !== false,
    sourceMapContents: options.sourceMap === true,
    sourceMapEmbed: options.sourceMap === true,
    includePaths: [
      path.resolve(process.cwd(), 'node_modules'),
      ...(options.includePaths || []),
    ],
  });

  postcss(plugins)
    .process(sassResult.css, {
      map:
        postcssSourceMap === 'file'
          ? { inline: false, prev: sassResult.map.toString() }
          : postcssSourceMap,
      from: entry,
      to: dest,
    })
    .then((postcssResult) => {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, postcssResult.css);

      if (postcssResult.map) {
        fs.writeFileSync(`${dest}.map`, postcssResult.map.toString());
      }
    });
};

module.exports = {
  getPlugins,
  buildStyles,
};
