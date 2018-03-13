describe('lang-select-sites', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1500);

    // Go to url
    browser.goToComponent('ecl-lang-select-sites-ec');

    browser.pause(1500);
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
