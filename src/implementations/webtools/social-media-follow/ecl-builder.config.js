const path = require('path');

const nodeModules = path.resolve(__dirname, '../../../../node_modules');
const outputFolder = __dirname;

module.exports = {
  purge: [
    {
      html: [
        path.resolve(
          nodeModules,
          '@ecl/wt-social-media-follow',
          'src/ecl-social-media-follow.html'
        ),
        path.resolve(
          nodeModules,
          '@ecl/wt-social-media-follow',
          'src/ecl-social-media-follow--vertical.html'
        ),
      ],
      css: path.resolve(nodeModules, '@ecl/preset-ec/dist/styles/ecl-ec.css'),
      output: path.resolve(outputFolder, 'dist/ecl-ec-social-media-follow.css'),
    },
    {
      html: [
        path.resolve(
          nodeModules,
          '@ecl/wt-social-media-follow',
          'src/ecl-social-media-follow.html'
        ),
        path.resolve(
          nodeModules,
          '@ecl/wt-social-media-follow',
          'src/ecl-social-media-follow--vertical.html'
        ),
      ],
      css: path.resolve(nodeModules, '@ecl/preset-eu/dist/styles/ecl-eu.css'),
      output: path.resolve(outputFolder, 'dist/ecl-eu-social-media-follow.css'),
    },
  ],
};
