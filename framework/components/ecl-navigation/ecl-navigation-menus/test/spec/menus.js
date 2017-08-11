describe('navigation-menus', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.url(`ecl-navigation-menus.html`);

    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();

    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `navigation/menus`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-navigation-menu').value;
    expect(a11yReport).to.be.accessible;
  });
});
