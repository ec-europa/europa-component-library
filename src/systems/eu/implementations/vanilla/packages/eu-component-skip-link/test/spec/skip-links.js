describe('skip-links', () => {
  before(() => {
    browser.goToComponent('eu-component-skip-link');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-skip-link').value;
    expect(a11yReport).to.be.accessible;
  });
});
