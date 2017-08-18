const variants = ['simple', 'with-menu'];

describe('pages', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Set viewport size
        browser.url(`ecl-pages--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();

        // Make sure the browser has finished painting
        browser.pause(1000);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `pages/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-container').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
