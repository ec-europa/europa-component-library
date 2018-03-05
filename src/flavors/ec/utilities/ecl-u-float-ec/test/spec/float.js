describe('floats', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.pause(500);

    // Go to url
    browser.url('ecl-u-float.html');

    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
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
