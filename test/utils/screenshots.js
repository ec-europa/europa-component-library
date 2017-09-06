const path = require('path');

module.exports.getScreenshotName = relativePath => context => {
  const testFile = context.test.file;
  const basePath = testFile.substr(
    0,
    testFile.lastIndexOf(`test${path.sep}spec`)
  );
  const testName = context.options.name;
  const browserVersion = parseInt(/\d+/.exec(context.browser.version)[0], 10);
  const browserName = context.browser.name;
  const { platform } = context.desiredCapabilities;

  return path.join(
    basePath,
    relativePath,
    `${testName}/${platform}_${browserName}_v${browserVersion}.png`
  );
};
