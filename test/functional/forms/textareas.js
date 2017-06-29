describe('forms-textarea', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 600,
    });

    browser.pause(1000);

    // Go to url
    browser.url(`ecl-forms-textareas.html`);
    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/textareas`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-textarea').value;
    expect(a11yReport).to.be.accessible;
  });
});
