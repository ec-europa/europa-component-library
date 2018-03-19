describe('forms-radio-groups', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('eu-component-form-radio-group');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'forms/radio-groups',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-radio-group').value;
    expect(a11yReport).to.be.accessible;
  });
});
