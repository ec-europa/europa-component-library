describe('colorize', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 800,
    });

    browser.url('ecl-u-colorize-eu.html');
    browser.pause(500);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({ name: 'colorize' });
      expect(screenshots).to.matchReference();
    });
  });
});
