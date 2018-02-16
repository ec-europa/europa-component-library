/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fractal = require('@frctl/fractal').create();
const eclTheme = require('@ec-europa/ecl-fractal-theme');
const twigAdapter = require('@frctl/twig')({ handlePrefix: '@ec-europa/' });
const fractalEc = require('./scripts/styleguides/ec/fractal');

// Create a new theme instance with custom config options
const theme = eclTheme();

// Add overrides
theme.addLoadPath(path.resolve(__dirname, './static/theme-overrides'));

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

// Components config
fractal.components.set('default.preview', '@preview');
fractal.components.set('statuses', {
  ready: {
    label: 'Ready',
    description: 'Can be used in production.',
    color: '#467a39',
  },
  planned: {
    label: 'Planned',
    description: 'Still under discussion.',
    color: '#006fb4',
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#fbc11d',
  },
  legacy: {
    label: 'Legacy',
    description: 'Not to be used on new applications. Kept temporarily.',
    color: '#f29527',
  },
  broken: {
    label: 'Broken',
    description: 'Cannot be used.',
    color: '#da2130',
  },
});
fractal.components.set('default.status', 'planned');
fractal.components.set('path', path.resolve(__dirname, './src/flavors/ec'));
fractal.components.engine(twigAdapter); // use Twig for components
fractal.components.set('ext', '.twig');

// 'Assets' tab
fractal.components.set('resources.assets', {
  label: 'Code',
  match: '**/*.{js,scss}',
});

// Docs config
fractal.docs.set('path', path.resolve(__dirname, 'docs'));

// Web UI config
fractal.web.theme(theme);
fractal.web.set('builder.urls.ext', null);

// Add EC flavor
fractalEc(fractal);

// Export config
module.exports = fractal;
