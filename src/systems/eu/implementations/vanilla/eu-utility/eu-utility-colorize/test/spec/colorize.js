describe('colorize', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 800,
    });

    browser.goToComponent('eu-utility-colorize');
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
