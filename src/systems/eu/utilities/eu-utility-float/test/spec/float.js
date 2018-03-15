describe('floats', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(500);
    browser.goToComponent('eu-utility-float');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'floats',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
