describe('ecl-templates-listings', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1200,
      height: 600,
    });

    // Go to url
    browser.url('ecl-templates-listings-ec.html');
    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'templates-listings',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-listing').value;
    expect(a11yReport).to.be.accessible;
  });
});
