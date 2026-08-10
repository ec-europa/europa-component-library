const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

// Mirrors src/playground/ec/.storybook/environment.js.
const componentAbsPath = path.resolve(__dirname, '../../../components');

const loader = new TwingLoaderFilesystem(componentAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace.
  loader.addPath(componentAbsPath, 'ecl');
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
