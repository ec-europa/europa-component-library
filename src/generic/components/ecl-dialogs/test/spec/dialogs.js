describe(`dialogs`, () => {
  context('open dialog', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1200,
        height: 600,
      });
      browser.url(`ecl-dialogs.html`);
      browser.pause(500);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      // Open the dialog to show the contents.
      browser.click('.ecl-link');
      const screenshots = browser.checkDocument({ name: `open-state` });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-dialog').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
