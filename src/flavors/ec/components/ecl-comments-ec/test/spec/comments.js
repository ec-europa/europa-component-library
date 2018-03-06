describe('comments', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });
    browser.url('ecl-comments-ec.html');
    browser.injectAxeCore();
    browser.pause(2000);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'comments',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-comment').value;
    expect(a11yReport).to.be.accessible;
  });
});
