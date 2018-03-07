const variants = ['default', 'header'];

describe('ecl-meta', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ecl-meta-eu', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `meta/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-meta').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
