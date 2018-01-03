describe('language-lists', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(500);
  });

  describe(`language-list`, () => {
    before(() => {
      // Go to url
      browser.url(`ecl-language-list.html`);
      // Make sure the browser has finished painting
      browser.pause(500);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    context('with plain state', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: `language-list`,
        });
        expect(screenshots).to.matchReference();
      });

      it('should be accessible', () => {
        const a11yReport = browser.runAxeCore('ecl-language-list').value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
