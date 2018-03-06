describe('pagers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
    browser.pause(500);
    browser.url('ecl-pagers-ec.html');
    browser.pause(500);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'pagers',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
