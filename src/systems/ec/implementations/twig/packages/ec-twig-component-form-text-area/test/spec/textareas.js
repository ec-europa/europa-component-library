describe('ecl-forms-textareas', () => {
  before(() => {
    browser.setViewportSize({
      width: 600,
      height: 300,
    });

    browser.goToComponent('ec-component-form-text-area');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: `forms/textarea`,
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-text-area').value;
    expect(a11yReport).to.be.accessible;
  });
});
