describe('ecl-side-navigation', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);

    // Go to the URL of the component
    browser.goToComponent('ec-component-side-navigation');

    // Make sure the browser has finished painting
    browser.pause(1000);

    // Adds necessary scripts for accessibility testing
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'ecl-side-navigation',
      });
      expect(screenshots).to.matchReference();
    });

    // This assertion is mostly the same for each test
    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-side-navigation').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
