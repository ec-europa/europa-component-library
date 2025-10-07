const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

const componentAbsPath = path.resolve(__dirname, '../../../components');
const pageAbsPath = path.resolve(__dirname, '../../../page-example');
const compositionsAbsPath = path.resolve(__dirname, '../../../compositions');
const layoutAbsPath = path.resolve(__dirname, '../../../layout');

const loader = new TwingLoaderFilesystem(componentAbsPath);

// In storybook we get this returned as an instance of
// TWigLoaderNull, we need to avoid processing this.
if (typeof loader.addPath === 'function') {
  // Add namespace.
  loader.addPath(componentAbsPath, 'ecl');
  loader.addPath(compositionsAbsPath, 'ecl');
  loader.addPath(pageAbsPath, 'ecl');
  loader.addPath(layoutAbsPath, 'ecl');
}

module.exports = new TwingEnvironment(loader, { autoescape: false });
