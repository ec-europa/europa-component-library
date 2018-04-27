describe('breadcrumb', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 200,
    });
    browser.pause(500);
    browser.goToComponent('ec-component-breadcrumb');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'breadcrumb',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-breadcrumb').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
