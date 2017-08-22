const componentUrl = 'ecl-carousels.html';
const timeout = 3000;

describe('carousels', () => {
  context('mobile', () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 800,
        height: 480,
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
        width: 1280,
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

  context('behaviors', () => {
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

    it('should support slideshow of images', () => {
      browser.click('.ecl-carousel__button--next');
      const screenshots = browser.checkDocument({
        name: 'slide-change',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
