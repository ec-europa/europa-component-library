describe('social-media-links', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 800,
    });

    browser.pause(500);
  });

  describe('social-media-links', () => {
    before(() => {
      browser.goToComponent('ecl-social-media-links-eu');
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
