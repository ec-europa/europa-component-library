describe('footers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);
  });

  describe('footer', () => {
    before(() => {
      // Go to url
      browser.url('ecl-footers.html');
      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    context('with plain state', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `footers`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-footer').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
