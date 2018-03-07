describe('communities', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('ecl-communities-ec');

    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();

    // Make sure the browser has finished painting
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'communities',
    });
    expect(screenshots).to.matchReference();
  });
});
