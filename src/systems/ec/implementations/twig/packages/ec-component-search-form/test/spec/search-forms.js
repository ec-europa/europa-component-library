const variants = ['default', 'internal'];

describe('search-forms', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        browser.goToComponent('ec-component-search-form', variant);
        browser.pause(500);
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `search-forms/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-search-form').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
