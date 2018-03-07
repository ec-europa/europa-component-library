describe('links', () => {
  before(() => {
    browser.setViewportSize({
      width: 700,
      height: 450,
    });

    browser.goToComponent('ecl-links-eu');
    browser.pause(500);
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
