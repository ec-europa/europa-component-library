const fs = require('fs');
const path = require('path');
const { createEnvironment, createFilesystemLoader } = require('twing');

// Use the same Twing version as Storybook with an asynchronous Node filesystem
// loader so the existing Promise-based test helpers retain their API.
const componentPath = path.resolve(__dirname, '../../components');
const loader = createFilesystemLoader(fs);

loader.addPath(componentPath);
// Twing 7 matches the namespace literally, including the leading @.
loader.addPath(componentPath, '@ecl');
loader.addPath(path.resolve(__dirname, '../../compositions'), '@ecl');
loader.addPath(path.resolve(__dirname, '../../page-example'), '@ecl');

// Twing 7 leaves autoescaping disabled when autoEscapingStrategy is omitted,
// matching the previous environment's autoescape: false setting.
module.exports = createEnvironment(loader);
