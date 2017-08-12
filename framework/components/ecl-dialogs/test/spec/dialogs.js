const variants = ['default', 'dark'];

variants.forEach(variant => {
  describe(`dialogs--${variant}`, () => {
    context('open dialog', () => {
      before(() => {
        // Set viewport size
        browser.setViewportSize({
          width: 1200,
          height: 600,
        });
        browser.url(`ecl-dialogs--${variant}.html`);
        browser.pause(1000);
      });

      it('should match the reference screenshot', () => {
        // Open the dialog to show the contents.
        browser.click('.ecl-link');
        const screenshots = browser.checkDocument({
          name: `open-state--${variant}`,
        });
        expect(screenshots).to.matchReference();
      });
    });
  });
});
