describe('social-icons', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 5700,
    });

    browser.pause(500);
  });

  describe('social-icons', () => {
    before(() => {
      // Go to url
      browser.url('ecl-social-icons-eu.html');
      // Make sure the browser has finished painting
      browser.pause(500);
    });

    // Normal state
    context('in overall demonstration', () => {
      it('should match the reference screenshot', () => {
        const screenshots = browser.checkDocument({
          name: 'social-icons',
        });
        expect(screenshots).to.matchReference();
      });
    });
  });
});
