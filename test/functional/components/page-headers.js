const variants = ['basic', 'default', 'highlight'];

variants.forEach(variant => {
  describe(`ecl-page-headers--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });
      // Go to url
      browser.url(`ecl-page-headers--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `page-headers/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-page-header').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
