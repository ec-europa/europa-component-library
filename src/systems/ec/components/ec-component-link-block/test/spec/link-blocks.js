const variants = ['standalone', 'wrapper'];

describe('link-blocks', () => {
  before(() => {
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.pause(500);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ec-component-link-block', variant);

        browser.pause(500);

        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `link-blocks/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-link-block').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
