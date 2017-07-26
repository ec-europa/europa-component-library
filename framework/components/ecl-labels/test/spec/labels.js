const variants = ['upcoming', 'open', 'close'];

variants.forEach(variant => {
  describe(`ecl-labels--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 600,
        height: 100,
      });
      // Go to url
      browser.url(`ecl-labels--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
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
