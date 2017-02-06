const path = require('path');
const fractal = require('@frctl/fractal').create(); // eslint-disable-line import/no-extraneous-dependencies
const mandelbrot = require('@frctl/mandelbrot'); // eslint-disable-line import/no-extraneous-dependencies

const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line import/no-extraneous-dependencies
const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line import/no-extraneous-dependencies
const webpackConfig = require('./webpack.config');

const bundler = webpack(webpackConfig);

const paths = {
  build: `${__dirname}/dist`,
  static: `${__dirname}/static`,
};

// Create a new theme instance with custom config options
const theme = mandelbrot({
  skin: 'blue',
  nav: ['docs', 'components'],
  panels: ['html', 'view', 'context', 'resources', 'info', 'notes'],
  styles: [
    'default',
    '/assets/custom-styles.css',
  ],
});

// Add overrides
theme.addLoadPath(path.resolve(__dirname, './static/theme-overrides'));

// Project config
fractal.set('project.title', 'Europa Component Library');

// Components config
fractal.components.set('default.preview', '@preview');
fractal.components.set('default.status', null);
fractal.components.set('path', path.resolve(__dirname, './framework'));
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.components.set('ext', '.html');

// "Assets" tab
fractal.components.set('resources.assets', {
  label: 'Code',
  match: '**/*.{js,scss}',
});

// Docs config
fractal.docs.set('path', path.resolve(__dirname, 'docs'));

// Web UI config
fractal.web.theme(theme);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', '.html');

// Dev server
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
  middleware: [
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    }),
    webpackHotMiddleware(bundler),
  ],
  // logLevel: 'debug',
  // files: false,
  watchOptions: {
    ignoreInitial: true,
    ignored: ['**/*.scss'],
  },
});

// Export config
module.exports = fractal;
