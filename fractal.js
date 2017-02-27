const path = require('path');
const fractal = require('@frctl/fractal').create(); // eslint-disable-line import/no-extraneous-dependencies
const mandelbrot = require('@frctl/mandelbrot'); // eslint-disable-line import/no-extraneous-dependencies

const paths = {
  build: `${__dirname}/dist`,
  static: `${__dirname}/static`,
};

// Create a new theme instance with custom config options
const theme = mandelbrot({
  skin: 'blue',
  nav: ['docs', 'components'],
  panels: ['view', 'context', 'html', 'resources', 'info', 'notes'],
  styles: [
    'default',
    '/assets/custom-styles.css',
  ],
  "scripts": [
    "default",
    "/assets/custom-js.js"
  ]
});

// Add overrides
theme.addLoadPath(path.resolve(__dirname, './static/theme-overrides'));

// Project config
fractal.set('project.title', 'Europa Component Library');

// Components config
fractal.components.set('default.preview', '@preview');
fractal.components.set('statuses', {
  planned: {
    label: 'Planned',
    description: 'Do not implement.',
    color: '#FF3333',
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#FF9233',
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29',
  },
});
fractal.components.set('default.status', 'planned');
fractal.components.set('path', path.resolve(__dirname, './framework'));
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.components.set('ext', '.html');

// 'Assets' tab
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
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
