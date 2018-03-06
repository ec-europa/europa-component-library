describe('dropdowns', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.url('ecl-dropdowns-eu.html');
    browser.injectAxeCore();
    browser.pause(500);
  });

  // Only continue with Chrome
  // see https://github.com/webdriverio/webdriverio/issues/2212
  if (browser.desiredCapabilities.browserName !== 'chrome') {
    return;
  }

  context('collapsed dropdowns', () => {
    before(() => {
      // Reload
      browser.url('ecl-dropdowns-eu.html');
      browser.injectAxeCore();
      browser.pause(500);

      // Click the input
      browser.moveToObject('#example-expandable-button');
      browser.buttonPress(0); // press left button
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'dropdowns',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
