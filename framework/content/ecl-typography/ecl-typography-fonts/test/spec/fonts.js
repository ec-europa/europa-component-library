describe('typography-fonts', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 400,
    });

    browser.pause(1000);

    browser.url(`ecl-typography-fonts.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'fonts',
    });
    expect(screenshots).to.matchReference();
  });
});
