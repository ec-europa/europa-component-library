describe('comments-with-form', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('ecl-comments-with-form-eu');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'comments-with-form',
    });
    expect(screenshots).to.matchReference();
  });
});
