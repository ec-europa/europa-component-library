describe('padding', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 800,
    });

    browser.pause(500);
    browser.goToComponent('eu-utility-padding');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'padding',
    });
    expect(screenshots).to.matchReference();
  });
});
