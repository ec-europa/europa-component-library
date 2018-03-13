describe('footers', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(500);
  });

  describe('footer', () => {
    before(() => {
      // Go to url
      browser.goToComponent('ecl-footers-eu');

      browser.pause(500);

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
