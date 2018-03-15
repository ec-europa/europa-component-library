describe('communities', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('eu-template-community');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'community',
    });
    expect(screenshots).to.matchReference();
  });
});
