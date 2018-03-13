describe('logos', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.pause(500);

    browser.goToComponent('ecl-logos-ec');

    browser.pause(500);

    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'logos',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-logo').value;
    expect(a11yReport).to.be.accessible;
  });
});
