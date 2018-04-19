describe('gallery dialog - tablet', () => {
  before(() => {
    browser.setViewportSize({
      width: 1024,
      height: 768,
    });
    browser.goToComponent('eu-template-gallery-dialog');
    browser.injectAxeCore();
    browser.pause(500);
  });

  it('should match the reference screenshot', () => {
    // Open the dialog to show the contents.
    browser.click('#open-dialog-demo');
    const screenshots = browser.checkDocument({ name: 'tablet' });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-carousel').value;
    expect(a11yReport).to.be.accessible;
  });
});
