describe('gallery dialog - mobile', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 480,
    });
    browser.goToComponent('eu-component-gallery-dialog');
    browser.injectAxeCore();
    browser.pause(500);
  });

  it('should match the reference screenshot', () => {
    // Open the dialog to show the contents.
    browser.click('#open-dialog-demo');
    const screenshots = browser.checkDocument({ name: 'mobile' });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-carousel').value;
    expect(a11yReport).to.be.accessible;
  });
});
