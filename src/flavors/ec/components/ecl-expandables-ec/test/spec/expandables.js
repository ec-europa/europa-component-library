describe('expandables', () => {
  before(() => {
    browser.setViewportSize({
      width: 800,
      height: 200,
    });

    browser.url('ecl-expandables-ec.html');
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
