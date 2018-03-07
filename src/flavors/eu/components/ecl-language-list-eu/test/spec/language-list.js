describe('ecl-language-list-eu', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('ecl-language-list-eu--overlay');
    browser.injectAxeCore();
    browser.pause(500);
  });

  it('should display a language switcher in normal state', () => {
    const screenshots = browser.checkDocument({
      name: 'ecl-language-list/normal',
    });
    expect(screenshots).to.matchReference();
  });

  it('should display an overlay in open state', () => {
    // Open the dialog to show the contents.
    browser.click('.ecl-lang-select-sites__link');
    const screenshots = browser.checkDocument({
      name: 'ecl-language-list/open',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-container').value;
    expect(a11yReport).to.be.accessible;
  });
});
