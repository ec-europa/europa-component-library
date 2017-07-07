const variants = ['info', 'warning', 'success', 'error', 'livestream'];

variants.forEach(variant => {
  describe(`ecl-messages--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1200,
        height: 400,
      });
      // Go to url
      browser.url(`ecl-messages--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `messages/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-message').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
