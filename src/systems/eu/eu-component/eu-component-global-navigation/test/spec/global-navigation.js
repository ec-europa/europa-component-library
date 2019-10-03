const variants = ['light', 'dark'];

describe('global-navigation', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 150,
    });

    browser.pause(500);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        browser.goToComponent('eu-component-global-navigation', variant);
        browser.pause(500);
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `global-navigation/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-global-navigation').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
