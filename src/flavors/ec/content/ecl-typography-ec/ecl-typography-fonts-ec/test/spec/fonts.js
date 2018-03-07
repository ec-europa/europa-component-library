describe('typography-fonts', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 400,
    });

    browser.pause(500);
    browser.goToComponent('ecl-typography-fonts-ec');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'fonts',
    });
    expect(screenshots).to.matchReference();
  });
});
