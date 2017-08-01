describe('profile-topbars', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);
    browser.url('ecl-profile-topbars.html');
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'profile-toolbars',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-profile-topbar').value;
    expect(a11yReport).to.be.accessible;
  });
});
