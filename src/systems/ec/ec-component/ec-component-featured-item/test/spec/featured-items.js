const variants = ['default', 'extended'];

describe('ecl-featured-items', () => {
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
        browser.goToComponent('ec-component-featured-item', variant);
        browser.injectAxeCore();
        browser.pause(1000);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `featured-items/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-featured-item').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
