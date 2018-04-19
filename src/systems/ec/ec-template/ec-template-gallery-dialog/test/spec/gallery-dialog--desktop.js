describe('gallery dialog - desktop', () => {
  before(() => {
    browser.setViewportSize({
      width: 1280,
      height: 800,
    });
    browser.goToComponent('ec-template-gallery-dialog');
    browser.injectAxeCore();
    browser.pause(500);
  });

  it('should match the reference screenshot', () => {
    // Open the dialog to show the contents.
    browser.click('#open-dialog-demo');
    const screenshots = browser.checkDocument({ name: 'desktop' });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-carousel').value;
    expect(a11yReport).to.be.accessible;
  });
});
