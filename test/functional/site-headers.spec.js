const variants = ['default', 'homepage'];

describe('site-headers', () => {
  variants.forEach((variant) => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`/site-headers-${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('site-header').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
