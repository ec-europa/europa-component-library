const variants = ['upcoming', 'open', 'close'];

describe('ecl-labels', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 100,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('eu-component-label', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `labels/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-label').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
