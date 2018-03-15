describe('timelines', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.goToComponent('eu-component-timeline');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'timelines',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-timeline').value;
    expect(a11yReport).to.be.accessible;
  });
});
