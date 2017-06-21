const variants = ['default', 'disabled'];

describe('forms-labels', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(1000);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-forms-labels--${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
      });

      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `forms/labels/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-form-label').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
