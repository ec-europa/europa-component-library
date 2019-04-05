// Available screen resolutions:
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SpecifyingtheScreenResolution

const isDrone = 'DRONE' in process.env && 'CI' in process.env;
const build = isDrone ? process.env.DRONE_BUILD_NUMBER : 'local-build';

const browsers = {
  chrome: {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '60.0',
    build,
    screenResolution: '1920x1080',
  },
  // ie: {
  //   browserName: 'internet explorer',
  //   version: '11.0',
  //   platform: 'Windows 7',
  //   build,
  //   screenResolution: '1920x1080',
  // },
  // safari: {
  //   browserName: 'safari',
  //   version: '11.0',
  //   platform: 'macOS 10.12',
  //   seleniumVersion: '3.4.0',
  //   build,
  //   screenResolution: '1920x1440',
  // },
  // firefox: {
  //   browserName: 'firefox',
  //   version: '54.0',
  //   platform: 'Windows 7',
  //   build,
  //   screenResolution: '1920x1080',
  // },
};

const getCapabilities = () => {
  if (process.env.TEST_BROWSER) {
    return [browsers[process.env.TEST_BROWSER]];
  }

  return Object.values(browsers);
};

export default getCapabilities;
