describe('forms-checkbox', () => {
  before(() => {
    browser.setViewportSize({
      width: 300,
      height: 100,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('ec-component-form-checkbox');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/checkbox`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-checkbox').value;
    expect(a11yReport).to.be.accessible;
  });
});
