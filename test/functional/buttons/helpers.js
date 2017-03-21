function generateTest(variants = [], componentUrl = '/buttons', name = '') {
  describe(`${name}`, () => {
    variants.forEach((variant) => {
      describe(`--${variant}`, () => {
        before(() => {
          // Go to url
          browser.url(`${componentUrl}--${variant}.html`);
          // Make sure the browser has finished painting
          browser.pause(1000);
          // Inject axe-core (for accessibility tests)
          browser.injectAxeCore();
          // Inject HTMLInspector (for markup tests)
          browser.injectHTMLInspector();
        });

        // Normal state
        context('with plain state', () => {
          it('should be accessible', () => {
            const a11yReport = browser
              .runAxeCore('ecl-button')
              .value;
            expect(a11yReport).to.be.accessible;
          });

          it('should be well formatted', () => {
            const markup = browser.runHTMLInspector();
            expect(markup).to.be.wellFormatted;
          });
        });

        // Stop here if browser is Safari See:
        // https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/4136
        if (browser.desiredCapabilities.browserName === 'safari') {
          return;
        }

        // Hover button
        context('with hover state', () => {
          before(() => {
            // Reload
            browser.url(`${componentUrl}--${variant}.html`);
            browser.pause(1000);
            browser.injectAxeCore();

            // Hover the button
            browser.moveToObject('.ecl-button');
          });

          it('should be accessible', () => {
            const a11yReport = browser
              .runAxeCore('ecl-button')
              .value;
            expect(a11yReport).to.be.accessible;
          });
        });

        // Press the button
        context('with pressed state', () => {
          before(() => {
            browser.buttonDown();
          });

          it('should be accessible', () => {
            const a11yReport = browser
              .runAxeCore('ecl-button')
              .value;
            expect(a11yReport).to.be.accessible;
          });
        });
      });
    });
  });
}

module.exports = generateTest;
