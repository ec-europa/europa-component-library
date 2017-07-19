describe('links', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 700,
      height: 450,
    });

    // Go to url
    browser.url(`ecl-links.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `links`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-link').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
