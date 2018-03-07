const variants = ['default', 'primary'];

describe('lang-select-pages', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.pause(500);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ecl-lang-select-pages-eu', variant);
        // Make sure the browser has finished painting
        browser.pause(500);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
      });

      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `lang-select-pages/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-lang-select-page').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
