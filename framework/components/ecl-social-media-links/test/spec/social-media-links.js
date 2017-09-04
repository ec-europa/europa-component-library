describe('social-media-links', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1200,
      height: 800,
    });

    browser.pause(500);
  });

  describe('social-media-links', () => {
    before(() => {
      // Go to url
      browser.url('ecl-social-media-links.html');
      // Make sure the browser has finished painting
      browser.pause(500);
    });

    // Normal state
    context('in overall demonstration', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: 'social-media-links',
        });
        expect(screenshots).to.matchReference();
      });
    });
  });
});
