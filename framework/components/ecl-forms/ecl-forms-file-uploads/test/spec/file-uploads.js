const variants = ['default', 'is-disabled', 'is-multiple', 'has-error'];

describe('ecl-forms-file-uploads', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 300,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-forms-file-uploads--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();

        // Make sure the browser has finished painting
        browser.pause(1000);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `forms/file-uploads/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-file-upload').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
