describe('link blocks', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-link-blocks.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  context('normal display', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'link-blocks',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-link-blocks').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
