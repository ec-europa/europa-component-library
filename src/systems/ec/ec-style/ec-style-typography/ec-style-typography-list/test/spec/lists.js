describe('typography-lists', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });
    // Go to url
    browser.goToComponent('ec-style-typography-list');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `lists`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-list').value;
    expect(a11yReport).to.be.accessible;
  });
});
