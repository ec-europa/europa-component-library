const variants = ['unordered', 'ordered'];

variants.forEach(variant => {
  describe(`typography-lists--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 800,
        height: 600,
      });
      // Go to url
      browser.url(`ecl-typography-lists--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `styles/typography/lists/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-list').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
