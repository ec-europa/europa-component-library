const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const bannerPlugin = require('postcss-banner');

const render = async (entry, dest, options, plugins, postcssSourceMap) => {
  const sassResult = sass.renderSync({
    file: entry,
    outFile: dest,
    sourceMap: options.sourceMap === true,
    sourceMapContents: options.sourceMap === true,
    sourceMapEmbed: options.sourceMap === true,
    includePaths: [
      path.resolve(process.cwd(), 'node_modules'),
      ...(options.includePaths || []),
    ],
  });

  const postcssResult = await postcss(plugins).process(sassResult.css, {
    map: postcssSourceMap,
    from: entry,
    to: dest,
  });

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, postcssResult.css);

  if (postcssResult.map) {
    fs.writeFileSync(`${dest}.map`, postcssResult.map);
  }
};

module.exports = (entry, dest, options, themes) => {
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

  if (themes && themes.list && Array.isArray(themes.list) && themes.module) {
    let themeDest = dest;
    return themes.list.map(async (theme) => {
      /**
       * sass does not support dynamic imports and dynamic theming at the moment.
       * @see https://github.com/nex3/sass/issues/451
       * @see https://github.com/sass/sass/issues/1194
       * @see https://github.com/sass/sass/issues/779
       * @see https://github.com/sass/sass/issues/739
       * For this, we create a physical file to mark a theme during build time.
       */
      const marker = `${themes.module}/index.scss`;

      // Ensure clean start
      if (fs.existsSync(marker)) {
        fs.unlinkSync(marker);
      }

      fs.writeFileSync(marker, `@import './${theme}/index';`);

      themeDest = dest.split('/');
      themeDest.splice(themeDest.length - 1, 0, theme);
      themeDest = themeDest.join('/');

      await render(entry, themeDest, options, plugins, postcssSourceMap);

      // Cleanup
      if (fs.existsSync(marker)) {
        fs.unlinkSync(marker);
      }
      themeDest = dest; // reset splice mutation
      return themeDest;
    });
  }

  // Needs to be changed after https://citnet.tech.ec.europa.eu/CITnet/jira/browse/FRONT-1658
  const marker = `${path.resolve(
    __dirname,
    '../../../../node_modules'
  )}/@ecl/ec-themes/index.scss`;
  let system = entry.match(/\b(ec|eu)\b/g);
  // If there are multiple matches, the one closest to the extension .scss overrule (most specific)
  if (system.length > 1) {
    system = system[system.length - 1];
  }
  if (system === undefined) {
    return console.error(
      'You are using ecl-builder for ECL v3. It was not possible to deduct theme from previous system-based architecture.'
    );
  }
  console.log('You are using ecl-builder for ECL v3\n');
  console.log('Please refer to ECL documentation for configuring themes.\n');
  console.log(`${system} is assumed as a theme based on your entry`);
  fs.writeFileSync(marker, `@import './${system}/index';`);
  console.log(
    `${marker} has been created with the assumed theme from previous system-based architecture.`
  );
  return render(entry, dest, options, plugins, postcssSourceMap);
};
