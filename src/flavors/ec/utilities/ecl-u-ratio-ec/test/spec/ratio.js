describe('ratio', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 800,
    });

    browser.pause(500);

    browser.url('ecl-u-ratio-ec.html');
    // Make sure the browser has finished painting
    browser.pause(500);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'ratio',
    });
    expect(screenshots).to.matchReference();
  });
});
