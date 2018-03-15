describe('inpage navigation', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
    browser.goToComponent('ec-component-navigation-inpage');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `ecl-navigation-inpages`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-navigation-inpage').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
