const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const componentAbsPath = path.resolve(__dirname, '../../../eds/components');

const loader = new TwingLoaderFilesystem(componentAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace.
  loader.addPath(componentAbsPath, 'ecl');
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
