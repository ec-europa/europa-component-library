describe('inpage navigation', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('eu-component-inpage-navigation');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'ecl-inpage-navigation',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-inpage-navigation').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
