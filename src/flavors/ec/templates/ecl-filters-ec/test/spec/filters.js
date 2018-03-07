describe('filters', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 800,
    });

    browser.goToComponent('ecl-filters-ec');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'filters',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-row').value;
    expect(a11yReport).to.be.accessible;
  });
});
