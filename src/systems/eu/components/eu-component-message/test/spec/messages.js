const variants = ['info', 'warning', 'success', 'error', 'livestream'];

describe('ecl-messages', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 400,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.goToComponent('eu-component-message', variant);

        browser.injectAxeCore();

        browser.pause(500);
      });

      // Normal state
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `messages/${variant}`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-message').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
