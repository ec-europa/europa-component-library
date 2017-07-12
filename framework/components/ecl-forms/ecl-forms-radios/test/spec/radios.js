const variants = ['default', 'disabled', 'error'];

variants.forEach(variant => {
  describe(`ecl-forms-radios--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 600,
        height: 300,
      });
      // Go to url
      browser.url(`ecl-forms-radios--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `forms/radios/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-radio').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
