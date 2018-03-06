describe('accordions', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });
    browser.pause(500);
    browser.url('ecl-accordions-ec.html');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'accordions',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-accordion').value;
    expect(a11yReport).to.be.accessible;
  });
});
