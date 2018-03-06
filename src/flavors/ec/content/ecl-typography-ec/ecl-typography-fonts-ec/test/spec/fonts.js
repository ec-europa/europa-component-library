describe('typography-fonts', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 400,
    });

    browser.pause(500);
    browser.url('ecl-typography-fonts-ec.html');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'fonts',
    });
    expect(screenshots).to.matchReference();
  });
});
