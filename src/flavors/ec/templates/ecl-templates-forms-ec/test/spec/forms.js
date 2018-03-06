describe('ecl-templates-forms', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.url('ecl-templates-forms-ec.html');
    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'templates-forms',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-form').value;
    expect(a11yReport).to.be.accessible;
  });
});
