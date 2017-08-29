describe('datepickers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    // Go to url
    browser.url('ecl-datepickers.html');

    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();

    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  // Normal state
  context('with plain state', () => {
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'datepickers/default',
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-datepickers').value;
      expect(a11yReport).to.be.accessible;
    });
  });

  // Only continue with Chrome
  // see https://github.com/webdriverio/webdriverio/issues/2212
  if (browser.desiredCapabilities.browserName !== 'chrome') {
    return;
  }

  context('click open state', () => {
    before(() => {
      // Reload
      browser.url('ecl-datepickers.html');
      browser.injectAxeCore();
      browser.pause(1000);

      // Click the input
      browser.moveToObject('.ecl-text-input');
      browser.buttonDown();
    });

    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: 'datepickers/open',
      });
      expect(screenshots).to.matchReference();
    });
  });
});
