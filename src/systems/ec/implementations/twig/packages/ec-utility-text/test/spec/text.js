describe('texts', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('ec-utility-text');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'texts',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
