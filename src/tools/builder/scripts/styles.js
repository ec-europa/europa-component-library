const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const mkdirp = require('mkdirp');
const bannerPlugin = require('postcss-banner');
// const postcssEnvFunction = require('postcss-env-function');

const render = (entry, dest, options, plugins, postcssSourceMap) => {
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

      const postcssOperation = async () => {
        const postcssResult = await postcss(plugins).process(sassResult.css, {
          map: postcssSourceMap,
          from: entry,
          to: dest,
        });

        await mkdirp(path.dirname(dest));
        fs.writeFileSync(dest, postcssResult.css);

        if (postcssResult.map) {
          fs.writeFileSync(`${dest}.map`, postcssResult.map);
        }
      };

      postcssOperation();
    }
  );
};

module.exports = (entry, dest, options, themes) => {
  console.log('entry', entry);
  console.log('dest', dest);
  console.log('themes', themes);

  const plugins = [
    autoprefixer({ grid: 'no-autoplace' }),
    // postcssEnvFunction({
    //   importFrom: [
    //     {
    //       environmentVariables: {
    //         '--ecl-theme': process.env.ECL_THEME || 'ec',
    //       },
    //     },
    //   ],
    // }),
  ];

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

  if (themes && themes.list && Array.isArray(themes.list) && themes.module) {
    let themeDest = dest;
    themes.list.forEach((theme) => {
      themeDest = dest.split('/');
      themeDest.splice(themeDest.length - 1, 0, theme);
      themeDest = themeDest.join('/');
      render(entry, themeDest, options, plugins, postcssSourceMap);
      themeDest = dest; // reset splice mutation
    });
  } else {
    render(entry, dest, options, plugins, postcssSourceMap);
  }
};
