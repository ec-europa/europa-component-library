describe('footers', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(500);
  });

  describe('footer-standardised', () => {
    before(() => {
      // Go to url
      browser.goToComponent('ec-component-footer-standardised');

      browser.pause(500);

      browser.injectAxeCore();
    });

    // Normal state
    context('with plain state', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `footer-standardised`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-footer-standardised').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
