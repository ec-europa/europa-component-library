describe('dropdowns', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 420,
      height: 420,
    });

    browser.pause(1000);

    // Go to url
    browser.url('ecl-dropdowns.html');

    // Make sure the browser has finished painting
    browser.pause(1000);
    // Inject axe-core (for accessibility tests)
    browser.injectAxeCore();
  });

  // Stop here if browser is Safari
  // See: https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/4136
  if (browser.desiredCapabilities.browserName === 'safari') {
    return;
  }

  context('collapsed dropdowns', () => {
    before(() => {
      // Reload
      browser.url(`ecl-dropdowns.html`);
      browser.pause(1000);
      browser.injectAxeCore();

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
