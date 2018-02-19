/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fractal = require('@frctl/fractal').create();
const eclTheme = require('@ec-europa/ecl-fractal-theme');

const paths = {
  build: `${__dirname}/../../../dist`,
  static: `${__dirname}/static`,
};

// Create a new theme instance with custom config options
const theme = eclTheme();

// Add overrides
theme.addLoadPath(path.resolve(__dirname, './theme-overrides'));

// Project config
fractal.set('project.title', 'Europa Component Library');
fractal.set(
  'project.url',
  'https://ec-europa.github.io/europa-component-library/'
);
fractal.set(
  'project.repo',
  'https://github.com/ec-europa/europa-component-library'
);

// Docs config
fractal.docs.set('path', path.resolve(__dirname, './src'));

// Web UI config
fractal.web.theme(theme);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
