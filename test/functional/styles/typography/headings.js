const variants = ['h1', 'h2', 'h3', 'h4', 'h5', 'headline'];

variants.forEach(variant => {
  describe(`typography-headings--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1024,
        height: 100,
      });
      // Go to url
      browser.url(`ecl-typography-headings--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `styles/typography/headings/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-heading').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
