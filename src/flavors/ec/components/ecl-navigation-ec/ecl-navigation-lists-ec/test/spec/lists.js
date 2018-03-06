describe('navigation-lists', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
    browser.url('ecl-navigation-lists-ec.html');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `navigation/lists`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-navigation-list-wrapper').value;
    expect(a11yReport).to.be.accessible;
  });
});
