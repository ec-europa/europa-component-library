describe('ecl-navigation-side', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);

    // Go to the URL of the component
    browser.goToComponent('eu-component-navigation-side');

    // Make sure the browser has finished painting
    browser.pause(1000);

    // Adds necessary scripts for accessibility testing
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'ecl-navigation-side',
      });
      expect(screenshots).to.matchReference();
    });

    // This assertion is mostly the same for each test
    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-navigation-side').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
