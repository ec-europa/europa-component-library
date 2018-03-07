describe('forms-radio-groups', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 400,
    });

    browser.pause(500);

    // Go to url
    browser.goToComponent('ecl-forms-radio-groups-ec');
    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/radio-groups`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-radio-group').value;
    expect(a11yReport).to.be.accessible;
  });
});
