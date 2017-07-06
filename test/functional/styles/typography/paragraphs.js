const variants = ['l', 'm', 's', 'xs', 'xxs'];

variants.forEach(variant => {
  describe(`typography-paragraphs--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 800,
        height: 200,
      });
      // Go to url
      browser.url(`ecl-typography-paragraphs--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `styles/typography/paragraphs/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-paragraph').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
