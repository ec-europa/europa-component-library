describe('skip-links', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.goToComponent('ec-component-skip-link');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'skip-links',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-skip-link').value;
    expect(a11yReport).to.be.accessible;
  });
});
