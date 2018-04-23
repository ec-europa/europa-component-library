describe('rss links', () => {
  before(() => {
    browser.setViewportSize({
      width: 400,
      height: 200,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('eu-component-rss-link');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'rss-links',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-rss-link').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
