const path = require('path');
const { TwingEnvironment, TwingLoaderFilesystem } = require('twing');

// Keep Jest's existing Twing 5 rendering independent of Storybook's Vite setup.
const componentPath = path.resolve(__dirname, '../../components');
const loader = new TwingLoaderFilesystem(componentPath);

loader.addPath(componentPath, 'ecl');
loader.addPath(path.resolve(__dirname, '../../compositions'), 'ecl');
loader.addPath(path.resolve(__dirname, '../../page-example'), 'ecl');

module.exports = new TwingEnvironment(loader, { autoescape: false });
