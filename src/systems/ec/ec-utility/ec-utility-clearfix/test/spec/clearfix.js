describe('clearfix', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.goToComponent('ec-utility-clearfix');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'clearfix',
    });
    expect(screenshots).to.matchReference();
  });
});
