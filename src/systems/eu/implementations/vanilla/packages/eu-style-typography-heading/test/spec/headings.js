describe('typography-headings', () => {
  before(() => {
    browser.setViewportSize({
      width: 1024,
      height: 600,
    });

    browser.goToComponent('eu-style-typography-heading');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'headings',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-heading').value;
    expect(a11yReport).to.be.accessible;
  });
});
