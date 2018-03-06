describe('texts', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(500);
    browser.url('ecl-u-text-eu.html');
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
