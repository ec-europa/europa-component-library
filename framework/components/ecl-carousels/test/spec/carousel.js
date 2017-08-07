const componentUrl = 'ecl-carousels.html';
const timeout = 4000; // images are to be loaded

describe('carousels', () => {
  context('mobile', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 500,
        height: 1000,
      });

      // Reload
      browser.url(componentUrl);
      browser.pause(timeout);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'mobile',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-carousel').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  context('desktop', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 1400,
        height: 800,
      });

      // Reload
      browser.url(componentUrl);
      browser.pause(timeout);
      browser.injectAxeCore();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'desktop',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-carousel').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
