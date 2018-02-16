describe('list-items', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1200,
      height: 600,
    });

    // Go to url
    browser.url('ecl-list-items.html');
    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
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
