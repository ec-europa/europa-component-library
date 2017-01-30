const path = require('path');
const fractal = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');

const paths = {
  build: `${__dirname}/www`,
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

// Docs config
fractal.docs.set('path', path.resolve(__dirname, 'docs'));

// Web UI config
fractal.web.theme(theme);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
