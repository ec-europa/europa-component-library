describe('context-navs', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 100,
    });

    browser.pause(500);
    browser.goToComponent('ecl-context-navs-eu');
    browser.pause(500);
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
