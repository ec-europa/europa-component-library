describe('listings', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 600,
    });

    browser.goToComponent('eu-component-listing');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'listings',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-listing').value;
    expect(a11yReport).to.be.accessible;
  });
});
