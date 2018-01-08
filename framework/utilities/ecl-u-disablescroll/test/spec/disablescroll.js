describe('disablescroll', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.url(`ecl-u-disablescroll.html`);

    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();

    // Make sure the browser has finished painting
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'disablescroll',
    });
    expect(screenshots).to.matchReference();
  });
});
