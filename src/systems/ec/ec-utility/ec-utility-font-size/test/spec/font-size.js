describe('font-size', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.pause(500);
    browser.goToComponent('ec-utility-font-size');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'font-size',
    });
    expect(screenshots).to.matchReference();
  });
});
