describe('lang-select-sites', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 300,
      height: 90,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-lang-select-sites.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'lang-select-sites',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
