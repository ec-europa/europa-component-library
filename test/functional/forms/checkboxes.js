describe('forms-checkbox', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 300,
      height: 100,
    });

    browser.pause(1000);

    // Go to url
    browser.url(`ecl-forms-checkboxes.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/checkboxes`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-checkbox').value;
    expect(a11yReport).to.be.accessible;
  });
});
