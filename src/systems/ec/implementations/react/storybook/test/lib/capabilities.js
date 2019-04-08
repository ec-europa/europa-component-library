// Available screen resolutions:
// https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-SpecifyingtheScreenResolution

const capabilities = {
  chrome: {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '60.0',
    screenResolution: '1920x1080',
  },
  ie: {
    browserName: 'internet explorer',
    version: '11.0',
    platform: 'Windows 7',
    screenResolution: '1920x1080',
  },
  safari: {
    browserName: 'safari',
    version: '11.0',
    platform: 'macOS 10.12',
    seleniumVersion: '3.4.0',
    screenResolution: '1920x1440',
  },
  firefox: {
    browserName: 'firefox',
    version: '54.0',
    platform: 'Windows 7',
    screenResolution: '1920x1080',
  },
};

const getCapabilities = () => capabilities;

export default getCapabilities;
