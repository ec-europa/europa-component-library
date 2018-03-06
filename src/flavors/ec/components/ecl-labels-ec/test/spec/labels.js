const variants = ['upcoming', 'open', 'close'];

describe('ecl-labels', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 100,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-labels-ec--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();

        // Make sure the browser has finished painting
        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `labels/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-label').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
