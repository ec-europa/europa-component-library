describe('skip-links', () => {
  before(() => {
    browser.goToComponent('ec-component-skip-link');
    browser.injectAxeCore();
    browser.pause(500);
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-skip-link').value;
    expect(a11yReport).to.be.accessible;
  });
});
