describe('context-navs', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 100,
    });

    browser.pause(500);

    // Go to url
    browser.url('ecl-context-navs-ec.html');

    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'context-navs',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-context-nav').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
