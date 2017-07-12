describe('z-index', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-z-index.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'z-index',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
