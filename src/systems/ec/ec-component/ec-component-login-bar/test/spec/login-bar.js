const variants = ['logged-in', 'logged-out'];

describe('login-bars', () => {
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
        browser.goToComponent('ec-component-login-bar', variant);
        browser.pause(500);
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `login-bars/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-login-bar').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
