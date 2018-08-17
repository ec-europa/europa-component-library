const variants = ['default', 'disabled', 'error'];

describe('ecl-forms-radios', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 300,
    });
  });

  variants.forEach(variant => {
    describe(`ecl-forms-radios--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ec-component-form-radio', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `forms/radios/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-radio').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
