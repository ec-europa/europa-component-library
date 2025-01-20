const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const componentAbsPath = path.resolve(__dirname, '../../../components');
const compositionsAbsPath = path.resolve(
  __dirname,
  '../../../implementations/twig/compositions',
);
const pageAbsPath = path.resolve(
  __dirname,
  '../../../implementations/twig/pages',
);
const compositionsNewAbsPath = path.resolve(__dirname, '../../../compositions');
const pageNewAbsPath = path.resolve(__dirname, '../../../page-example');

const loader = new TwingLoaderFilesystem(componentAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace.
  loader.addPath(componentAbsPath, 'ecl');
  loader.addPath(compositionsAbsPath, 'ecl');
  loader.addPath(pageAbsPath, 'ecl');
  loader.addPath(compositionsNewAbsPath, 'ecl');
  loader.addPath(pageNewAbsPath, 'ecl');
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
