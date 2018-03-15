describe('ecl-forms-file-uploads', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 300,
    });

    // Go to url
    browser.goToComponent('ec-component-forms-file-upload');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/file-uploads`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-file-upload').value;
    expect(a11yReport).to.be.accessible;
  });
});
