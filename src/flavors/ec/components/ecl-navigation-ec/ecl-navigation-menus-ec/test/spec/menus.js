describe('navigation-menus', () => {
  before(() => {
    browser.goToComponent('ecl-navigation-menus-ec');
    browser.injectAxeCore();
    browser.pause(500);
  });

  describe('on desktop', () => {
    before(() => {
      browser.setViewportSize({
        width: 1400,
        height: 600,
      });
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'navigation/menus/desktop',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-navigation-menu').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  describe('on mobile closed', () => {
    before(() => {
      browser.setViewportSize({
        width: 460,
        height: 600,
      });
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'navigation/menus/mobile-closed',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-navigation-menu').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  describe('on mobile - open', () => {
    before(() => {
      browser.click('.ecl-navigation-menu');
      browser.pause(500);
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'navigation/menus/mobile-open',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-navigation-menu').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
