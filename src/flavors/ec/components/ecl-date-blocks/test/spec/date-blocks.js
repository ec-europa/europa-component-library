const variants = ['default', 'ongoing', 'cancelled', 'past'];

describe('ecl-date-blocks', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 600,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-date-blocks--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();

        // Make sure the browser has finished painting
        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `date-blocks/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-date-block').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
