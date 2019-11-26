/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fs = require('fs');
const fractal = require('@frctl/fractal').create();
const eclTheme = require('@ecl/fractal-theme');
const twigAdapter = require('@ecl/fractal-twig')({ handlePrefix: '@ecl/' });

const projectRoot = path.resolve(__dirname, '../..');
const presetPath = path.resolve(
  projectRoot,
  'node_modules/@ecl/ec-preset-website'
);
const staticPath = path.resolve(__dirname, 'static');

// Symlink dev assets
if (process.env.NODE_ENV !== 'production') {
  fs.symlinkSync(
    path.resolve(presetPath, 'build'),
    path.resolve(staticPath, 'ec-preset-website')
  );
}

const paths = {
  build: path.resolve(__dirname, './dist'),
  static: staticPath,
};

// Create a new theme instance with custom config options
const theme = eclTheme();

// Add overrides
theme.addLoadPath(path.resolve(__dirname, './theme-overrides'));

// Project config
fractal.set('project.title', 'EC System');

if (process.env.ECL_VERSION) {
  fractal.set('project.version', process.env.ECL_VERSION);
}

fractal.set('project.url', 'https://ec.europa.eu/component-library/');
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
fractal.components.set('path', path.resolve(projectRoot, 'src/systems/ec'));
fractal.components.engine(twigAdapter); // use Twig for components
fractal.components.set('ext', '.twig');

// 'Assets' tab
fractal.components.set('resources.assets', {
  label: 'Code',
  match: '**/*.{js,scss}',
});

// Docs config
fractal.docs.set('path', path.resolve(projectRoot, 'docs'));

// Web UI config
fractal.web.theme(theme);
fractal.web.set('static.path', paths.static);
fractal.web.set('builder.dest', paths.build);
fractal.web.set('builder.urls.ext', null);

// Export config
module.exports = fractal;
