const variants = ['default', 'header', 'footer'];

describe('site-switchers', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 150,
    });

    browser.pause(500);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        browser.goToComponent('ecl-site-switchers-ec', variant);
        browser.pause(500);
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `site-switchers/${variant}`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-site-switcher').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
