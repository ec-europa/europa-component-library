const buttonVariants = require('../../variants.json');

const variants = buttonVariants.map(variant => variant.name);

describe('buttons', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 400,
      height: 200,
    });

    browser.pause(1000);
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-buttons--${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
        // Inject HTMLInspector (for markup tests)
        browser.injectHTMLInspector();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `buttons/${variant}/plain`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-button').value;
          expect(a11yReport).to.be.accessible;
        });

        it('should be well formatted', () => {
          const markup = browser.runHTMLInspector();
          expect(markup).to.be.wellFormatted;
        });
      });

      // Stop here if browser is Safari
      // See: https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/4136
      if (browser.desiredCapabilities.browserName === 'safari') {
        return;
      }

      // Hover button
      context('with hover state', () => {
        before(() => {
          // Reload
          browser.url(`ecl-buttons--${variant}.html`);
          browser.pause(1000);
          browser.injectAxeCore();

          // Hover the button
          browser.moveToObject('.ecl-button');
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `buttons/${variant}/hover`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-button').value;
          expect(a11yReport).to.be.accessible;
        });
      });

      // Press the button
      context('with pressed state', () => {
        before(() => {
          browser.buttonDown();
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `buttons/${variant}/pressed`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-button').value;
          expect(a11yReport).to.be.accessible;
        });
      });

      // Release
      context('with released state', () => {
        before(() => {
          browser.buttonUp();
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `buttons/${variant}/released`,
          });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-button').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
