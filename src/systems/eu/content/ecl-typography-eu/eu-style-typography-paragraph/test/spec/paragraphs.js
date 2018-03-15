describe('typography-paragraphs', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 600,
    });

    browser.goToComponent('eu-style-typography-paragraph');
    browser.pause(500);
    browser.injectAxeCore();
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'paragraphs',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-paragraph').value;
    expect(a11yReport).to.be.accessible;
  });
});
