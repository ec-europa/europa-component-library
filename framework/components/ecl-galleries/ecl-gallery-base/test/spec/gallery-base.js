describe('gallery base', () => {
  context('mobile', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 400,
        height: 600,
      });

      // Reload
      browser.url('ecl-gallery-base.html');
      browser.pause(500);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'mobile',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-gallery').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  context('tablet', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 600,
        height: 600,
      });

      // Reload
      browser.url('ecl-gallery-base.html');
      browser.pause(500);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'tablet',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-gallery').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  context('desktop', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });

      // Reload
      browser.url('ecl-gallery-base.html');
      browser.pause(500);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'desktop',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-gallery').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
