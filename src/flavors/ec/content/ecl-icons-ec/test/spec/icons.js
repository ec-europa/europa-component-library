describe(`icons`, () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 800,
    });

    browser.url('ec-icons-ec.html');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `icons`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-icon').value;
    expect(a11yReport).to.be.accessible;
  });
});
