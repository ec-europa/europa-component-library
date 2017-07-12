describe('datepickers', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-datepickers.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
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

  // Stop here if browser is Safari
  // See: https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/4136
  if (browser.desiredCapabilities.browserName === 'safari') {
    return;
  }

  context('click open state', () => {
    before(() => {
      // Reload
      browser.url('ecl-datepickers.html');
      browser.pause(1000);
      browser.injectAxeCore();

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
