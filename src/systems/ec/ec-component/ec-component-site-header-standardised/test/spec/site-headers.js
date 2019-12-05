describe('site-headers-standardised', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
    browser.pause(500);
    browser.goToComponent('ec-component-site-header-standardised');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'site-headers-standardised',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-site-header-standardised')
        .value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
