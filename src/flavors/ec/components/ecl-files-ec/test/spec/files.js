const variants = ['default', 'translations', 'links', 'images'];

describe('files', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 400,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        browser.goToComponent('ecl-files-ec', variant);
        browser.injectAxeCore();
        browser.pause(500);
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `files/${variant}`,
          });

          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-file').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
