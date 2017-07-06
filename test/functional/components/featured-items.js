const variants = ['default', 'extended'];

variants.forEach(variant => {
  describe(`ecl-featured-items--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });
      // Go to url
      browser.url(`ecl-featured-items--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `featured-items/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-featured-item').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
