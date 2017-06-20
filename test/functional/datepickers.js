describe('datepickers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 550,
      height: 360,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-datepickers.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'datepickers/default',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-datepickers').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
