const theo = require('theo');
const path = require('path');

const buildTokens = require('./util');

// Formats
const scss = require('./formats/scss');
const scssMap = require('./formats/scss-map');

// Every SCSS variables
theo.registerFormat('ecl.scss', scss);
buildTokens({
  input: path.join(__dirname, '../index.yml'),
  output: path.join(__dirname, '../exports/all.scss'),
  type: 'web',
  format: 'ecl.scss',
});

// Spacings SCSS map
const spacingPrefix = 'SPACING_';
theo.registerFormat(
  'spacing.scss.map',
  scssMap({
    mapName: '$ecl-spacing',
    keyName: prop =>
      prop
        .get('name')
        .substr(spacingPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: prop => prop.get('name').indexOf(spacingPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/spacing.yml'),
  output: path.join(__dirname, '../exports/spacing.scss'),
  type: 'web',
  format: 'spacing.scss.map',
});

// Colors SCSS map
const colorPrefix = 'COLOR_';
theo.registerFormat(
  'colors.scss.map',
  scssMap({
    mapName: '$ecl-colors',
    keyName: prop =>
      prop
        .get('name')
        .substr(colorPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: prop => prop.get('name').indexOf(colorPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/colors.yml'),
  output: path.join(__dirname, '../exports/colors.scss'),
  type: 'web',
  format: 'colors.scss.map',
});

// Background colors SCSS map
const bgColorPrefix = 'BG_COLOR_';
theo.registerFormat(
  'background-colors.scss.map',
  scssMap({
    mapName: '$ecl-colors-bg',
    keyName: prop =>
      prop
        .get('name')
        .substr(bgColorPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: prop => prop.get('name').indexOf(bgColorPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/colors-bg.yml'),
  output: path.join(__dirname, '../exports/colors-bg.scss'),
  type: 'web',
  format: 'background-colors.scss.map',
});

// JSON Tokens
buildTokens({
  input: path.join(__dirname, '../index.yml'),
  output: path.join(__dirname, '../exports/tokens.json'),
  type: 'raw',
  format: 'raw.json',
});
