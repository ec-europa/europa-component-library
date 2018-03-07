describe('forms-select', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(500);

    browser.goToComponent('ecl-forms-selects-eu');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'forms/selects',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-select').value;
    expect(a11yReport).to.be.accessible;
  });
});
