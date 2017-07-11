const variants = ['default', 'header', 'footer'];

describe('site-switchers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1200,
      height: 150,
    });

    browser.pause(1000);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-site-switchers--${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `site-switchers/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-site-switcher').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
