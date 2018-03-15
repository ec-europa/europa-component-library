const variants = ['default', 'error'];

describe('ecl-forms-feedback-messages', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 300,
    });
  });

  variants.forEach(variant => {
    describe(`ecl-forms-feedback-messages--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('ec-component-forms-feedback-message', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `forms/feedback-messages/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-feedback-message').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
