const variants = ['default', 'header'];

variants.forEach(variant => {
  describe(`ecl-metas--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });
      // Go to url
      browser.url(`ecl-metas--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `metas/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-meta').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
