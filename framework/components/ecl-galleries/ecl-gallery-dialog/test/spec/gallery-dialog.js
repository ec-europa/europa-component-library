describe('gallery dialog', () => {
  context('mobile', () => {
    before(() => {
      browser.setViewportSize({
        width: 600,
        height: 600,
      });
      browser.url('ecl-gallery-dialog.html');
      browser.pause(1000);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      // Open the dialog to show the contents.
      browser.click('#open-dialog-demo');
      const screenshots = browser.checkDocument({ name: 'mobile' });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-dialog').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  context('tablet', () => {
    before(() => {
      browser.setViewportSize({
        width: 800,
        height: 600,
      });
      browser.url('ecl-gallery-dialog.html');
      browser.pause(1000);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      // Open the dialog to show the contents.
      browser.click('#open-dialog-demo');
      const screenshots = browser.checkDocument({ name: 'tablet' });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-dialog').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  context('desktop', () => {
    before(() => {
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });
      browser.url('ecl-gallery-dialog.html');
      browser.pause(1000);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      // Open the dialog to show the contents.
      browser.click('#open-dialog-demo');
      const screenshots = browser.checkDocument({ name: 'desktop' });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-dialog').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
