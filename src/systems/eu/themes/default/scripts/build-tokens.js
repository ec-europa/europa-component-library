const theo = require('theo');
const path = require('path');

const buildTokens = require('./util');

// Formats
const scss = require('./formats/scss');
const scssMap = require('./formats/scss-map');

// Every SCSS variables
const printPrefix = 'PRINT_';
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
    keyName: (prop) =>
      prop
        .get('name')
        .slice(spacingPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) =>
      prop.get('name').indexOf(spacingPrefix) === 0 &&
      !prop.get('name').startsWith(`${spacingPrefix}${printPrefix}`),
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/spacing.yml'),
  output: path.join(__dirname, '../exports/spacing.scss'),
  type: 'web',
  format: 'spacing.scss.map',
});

theo.registerFormat(
  'spacing.scss.map',
  scssMap({
    mapName: '$ecl-spacing-print',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(spacingPrefix.length)
        .slice(printPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) =>
      prop.get('name').indexOf(spacingPrefix) === 0 &&
      prop.get('name').startsWith(`${spacingPrefix}${printPrefix}`),
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/spacing.yml'),
  output: path.join(__dirname, '../exports/spacing-print.scss'),
  type: 'web',
  format: 'spacing.scss.map',
});

// Font size SCSS map
const fontSizePrefix = 'FONT_SIZE_';
theo.registerFormat(
  'font-size.scss.map',
  scssMap({
    mapName: '$ecl-font-size',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(fontSizePrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) =>
      prop.get('name').indexOf(fontSizePrefix) === 0 &&
      !prop.get('name').startsWith(`${fontSizePrefix}${printPrefix}`),
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/typography.yml'),
  output: path.join(__dirname, '../exports/font-size.scss'),
  type: 'web',
  format: 'font-size.scss.map',
});

theo.registerFormat(
  'font-size.scss.map',
  scssMap({
    mapName: '$ecl-font-size-print',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(fontSizePrefix.length)
        .slice(printPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) =>
      prop.get('name').indexOf(fontSizePrefix) === 0 &&
      prop.get('name').startsWith(`${fontSizePrefix}${printPrefix}`),
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/typography.yml'),
  output: path.join(__dirname, '../exports/font-size-print.scss'),
  type: 'web',
  format: 'font-size.scss.map',
});

// Media SCSS map
const mediaPrefix = 'MEDIA_';
theo.registerFormat(
  'media.scss.map',
  scssMap({
    mapName: '$ecl-media',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(mediaPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) => prop.get('name').indexOf(mediaPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/media.yml'),
  output: path.join(__dirname, '../exports/media.scss'),
  type: 'web',
  format: 'media.scss.map',
});

// Colors SCSS map
const colorPrefix = 'COLOR_';
theo.registerFormat(
  'colors.scss.map',
  scssMap({
    mapName: '$ecl-colors',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(colorPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) => prop.get('name').indexOf(colorPrefix) === 0,
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
    keyName: (prop) =>
      prop
        .get('name')
        .slice(bgColorPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) => prop.get('name').indexOf(bgColorPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/colors-bg.yml'),
  output: path.join(__dirname, '../exports/colors-bg.scss'),
  type: 'web',
  format: 'background-colors.scss.map',
});

// Width SCSS map
const widthPrefix = 'WIDTH_';
theo.registerFormat(
  'widths.scss.map',
  scssMap({
    mapName: '$ecl-width',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(widthPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) => prop.get('name').indexOf(widthPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/widths.yml'),
  output: path.join(__dirname, '../exports/widths.scss'),
  type: 'web',
  format: 'widths.scss.map',
});

// Z-index SCSS map
const zIndexPrefix = 'Z_INDEX_';
theo.registerFormat(
  'z-index.scss.map',
  scssMap({
    mapName: '$ecl-z-index',
    keyName: (prop) =>
      prop
        .get('name')
        .slice(zIndexPrefix.length)
        .toLowerCase()
        .replace(/_/g, '-'),
    filter: (prop) => prop.get('name').indexOf(zIndexPrefix) === 0,
  })
);

buildTokens({
  input: path.join(__dirname, '../aliases/z-index.yml'),
  output: path.join(__dirname, '../exports/z-index.scss'),
  type: 'web',
  format: 'z-index.scss.map',
});

// JSON Tokens
buildTokens({
  input: path.join(__dirname, '../index.yml'),
  output: path.join(__dirname, '../exports/tokens.json'),
  type: 'raw',
  format: 'raw.json',
});
