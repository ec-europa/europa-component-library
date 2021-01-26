const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const absPath = path.resolve(
  __dirname,
  '../../../implementations/twig/components'
);
const loader = new TwingLoaderFilesystem(absPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace.
  loader.addPath(absPath, 'ecl');
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
