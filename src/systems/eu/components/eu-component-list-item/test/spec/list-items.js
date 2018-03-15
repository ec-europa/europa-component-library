describe('list-items', () => {
  before(() => {
    browser.setViewportSize({
      width: 1200,
      height: 600,
    });

    browser.goToComponent('eu-component-list-item');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'list-items',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-list-item').value;
    expect(a11yReport).to.be.accessible;
  });
});
