describe('link blocks', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-link-blocks.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  context('normal display', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'link-blocks',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
