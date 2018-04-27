describe('templates-search', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('eu-template-search');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'templates-search',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-row').value;
    expect(a11yReport).to.be.accessible;
  });
});
