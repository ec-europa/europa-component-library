describe('dialogs', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 100,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-dialogs.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'dialogs',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-dialog').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
