describe('comments-with-form', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('ec-template-comments-with-form');
    browser.injectAxeCore();
    browser.pause(1000);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'comments-with-form',
    });
    expect(screenshots).to.matchReference();
  });
});
