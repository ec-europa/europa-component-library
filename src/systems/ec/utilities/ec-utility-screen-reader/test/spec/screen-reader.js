describe('screen-reader', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.pause(500);

    browser.goToComponent('ec-utility-screen-reader');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'screen-reader',
    });
    expect(screenshots).to.matchReference();
  });
});
