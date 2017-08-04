describe('blockquotes', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.pause(1000);

    browser.url(`ecl-blockquotes.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'blockquotes',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-blockquote').value;
    expect(a11yReport).to.be.accessible;
  });
});
