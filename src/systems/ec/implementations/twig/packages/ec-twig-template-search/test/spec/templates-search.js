describe('templates-search in desktop', () => {
  before(() => {
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.goToComponent('ec-template-search');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'templates-search/desktop',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-row').value;
    expect(a11yReport).to.be.accessible;
  });
});

describe('templates-search in mobile', () => {
  before(() => {
    browser.setViewportSize({
      width: 920,
      height: 920,
    });

    browser.goToComponent('ec-template-search');

    browser.injectAxeCore();

    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'templates-search/mobile',
    });
    expect(screenshots).to.matchReference();
  });

  it('should be accessible', () => {
    const a11yReport = browser.runAxeCore('ecl-row').value;
    expect(a11yReport).to.be.accessible;
  });
});
