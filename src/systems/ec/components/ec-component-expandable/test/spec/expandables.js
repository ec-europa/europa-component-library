describe('expandables', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.goToComponent('ec-component-expandable');
    browser.pause(500);
  });

  // Normal state
  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({
      name: 'expandables',
    });
    expect(screenshots).to.matchReference();
  });
});
