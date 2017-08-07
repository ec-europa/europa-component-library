describe('forms-fieldset', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    // Go to url
    browser.url(`ecl-forms-fieldsets.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/fieldsets`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-fieldset').value;
    expect(a11yReport).to.be.accessible;
  });
});
