const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const mkdirp = require('mkdirp');
const bannerPlugin = require('postcss-banner');

const handleError = err => {
  if (err) throw err;
};

module.exports = (entry, dest, options) => {
  const plugins = [autoprefixer({ grid: 'no-autoplace' })];

  let postcssSourceMap = false;
  if (options.sourceMap === true) {
    postcssSourceMap = true; // inline
  } else if (options.sourceMap === 'file') {
    postcssSourceMap = { inline: false }; // as a file
  }

  if (process.env.NODE_ENV === 'production') {
    if (options.banner) {
      plugins.push(
        bannerPlugin({
          banner: options.banner,
          important: true,
          inline: true,
        })
      );
    }

    plugins.push(cssnano({ safe: true }));
  }

  sass.render(
    {
      file: entry,
      outFile: dest,
      sourceMap: options.sourceMap === true,
      sourceMapContents: options.sourceMap === true,
      sourceMapEmbed: options.sourceMap === true,
      includePaths: [
        path.resolve(process.cwd(), 'node_modules'),
        ...(options.includePaths || []),
      ],
    },
    (sassErr, sassResult) => {
      if (sassErr) throw sassErr;

      postcss(plugins)
        .process(sassResult.css, {
          map: postcssSourceMap,
          from: entry,
          to: dest,
        })
        .then(postcssResult => {
          mkdirp(path.dirname(dest), err => {
            if (err) throw err;

            fs.writeFile(dest, postcssResult.css, handleError);

            if (postcssResult.map) {
              fs.writeFile(`${dest}.map`, postcssResult.map, handleError);
            }
          });
        });
    }
  );
};
