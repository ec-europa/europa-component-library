const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = isProd ? 'dist' : 'build';

const stories = [
  '../../../themes/eds/*.story.js',
  // Real ECL components integration-tested against eds: each such demo
  // lives alongside its component, named `eds-<component>.story.js`
  // (mirrors the existing ec-*/eu-* per-system story convention).
  '../../../components/*/eds-*.story.js',
];

const addons = [
  '@storybook/addon-essentials',
  '@storybook/addon-links',
  '@storybook/addon-a11y',
  '@storybook/addon-themes',
];

// Unlike ec/eu (see their own main.js's FRONT-3789 comment), eds has no
// external deploy step that copies the preset's compiled CSS/fonts in
// after the fact - so, deliberately diverging from their pattern, always
// include the preset's build/dist output as a staticDir, prod build or
// not. Verified: without this, `npm run build`'s output has no `styles/`
// or `fonts/` folder at all and the deployed Storybook renders unstyled.
const staticDirs = [
  path.resolve(__dirname, '../../../presets/eds', outputFolder),
  path.resolve(__dirname, '../public'),
];

const webpackFinal = (config) => {
  // Trick "babel-loader", force it to transpile @ecl addons
  config.module.rules[0].exclude = /node_modules\/(?!@ecl\/).*/;

  config.module.rules.push({
    test: /\.twig$/,
    loader: 'twing-loader',
    options: {
      environmentModulePath: path.resolve(__dirname, 'environment.js'),
    },
  });

  config.plugins.forEach((plugin, i) => {
    if (plugin.constructor.name === 'ProgressPlugin') {
      config.plugins.splice(i, 1);
    }
  });

  return config;
};

module.exports = {
  framework: '@storybook/html-webpack5',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  stories,
  addons,
  staticDirs,
  webpackFinal,
  features: {
    postcss: false,
  },
  docs: {
    autodocs: false,
  },
};
