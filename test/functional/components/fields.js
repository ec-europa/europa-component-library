describe('fields', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(1000);
  });

  describe(`field`, () => {
    before(() => {
      // Go to url
      browser.url(`ecl-fields.html`);
      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    context('with plain state', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `fields`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-field').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
