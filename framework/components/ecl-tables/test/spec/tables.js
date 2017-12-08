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

const variants = ['default', 'empty', 'colspan', 'colspan-empty'];

describe('tables with JavaScript corrections for mobile', () => {
  Object.entries(devices).forEach(testSpec => {
    // Prepare test
    const device = testSpec[0];
    const deviceSize = testSpec[1];

    context(device, () => {
      before(() => {
        // Set viewport size
        browser.setViewportSize(deviceSize);
        browser.pause(500);
      });

      variants.forEach(variant => {
        describe(`--${variant}`, () => {
          before(() => {
            // Go to url
            browser.url(`ecl-tables--${variant}.html`);
            // Make sure the browser has finished painting
            browser.pause(500);
            // Inject axe-core (for accessibility tests)
            browser.injectAxeCore();
          });

          // Normal state
          context('with plain state', () => {
            it('should match the reference screenshot', () => {
              const screenshots = browser.checkDocument({
                name: `tables/${device}/${variant}`,
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
