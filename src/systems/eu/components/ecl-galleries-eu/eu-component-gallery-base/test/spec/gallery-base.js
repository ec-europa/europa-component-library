describe('gallery base', () => {
  context('mobile', () => {
    before(() => {
      browser.setViewportSize({
        width: 400,
        height: 600,
      });

      // Reload
      browser.goToComponent('eu-component-gallery-base');
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
      browser.setViewportSize({
        width: 600,
        height: 600,
      });

      // Reload
      browser.goToComponent('eu-component-gallery-base');
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
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });

      // Reload
      browser.goToComponent('eu-component-gallery-base');
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
