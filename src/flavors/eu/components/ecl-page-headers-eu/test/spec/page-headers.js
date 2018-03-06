const variants = ['basic', 'default'];

describe('ecl-page-headers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        browser.url(`ecl-page-headers-eu--${variant}.html`);
        browser.injectAxeCore();
        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `page-headers/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-page-header').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
