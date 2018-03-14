const variants = require('../../variants');

const devices = {
  mobile: {
    width: 400,
    height: 600,
  },
  tablet: {
    width: 600,
    height: 600,
  },
  desktop: {
    width: 1400,
    height: 600,
  },
};

describe('tables with JavaScript corrections for mobile', () => {
  Object.entries(devices).forEach(testSpec => {
    // Prepare test
    const device = testSpec[0];
    const deviceSize = testSpec[1];

    context(device, () => {
      before(() => {
        browser.setViewportSize(deviceSize);
        browser.pause(500);
      });

      variants.forEach(variant => {
        describe(`--${variant.name}`, () => {
          before(() => {
            browser.goToComponent('ecl-tables-ec', variant.name);
            browser.pause(500);
            browser.injectAxeCore();
          });

          // Normal state
          context('with plain state', () => {
            it('should match the reference screenshot', () => {
              const screenshots = browser.checkDocument({
                name: `tables/${device}/${variant.name}`,
              });
              expect(screenshots).to.matchReference();
            });

            it('should be accessible', () => {
              const a11yReport = browser.runAxeCore('ecl-table').value;
              expect(a11yReport).to.be.accessible;
            });
          });
        });
      });
    });
  });
});
