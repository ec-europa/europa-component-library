const variants = ['default', 'is-disabled', 'has-error'];

describe('ecl-forms-textareas', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 300,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ecl-forms-textareas-eu', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `forms/textareas/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-textarea').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
