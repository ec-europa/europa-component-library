const path = require('path');
const getSystem = require('@ecl/builder/utils/getSystem');

const system = getSystem();

module.exports = {
  storybookDir: path.join(__dirname, `src/playground/${system}/.storybook`),
  screenDir: path.join(__dirname, `visual-regressions-snapshots/${system}`),
  reportDir: path.join(__dirname, `visual-regressions-report/${system}`),
  browsers: {
    chrome: true,
  },
};
