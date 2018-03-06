const buttonVariants = require('../../variants.json');

const variants = buttonVariants.map(variant => variant.name);

describe('buttons', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 400,
      height: 200,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-buttons-ec--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
        // Inject HTMLInspector (for markup tests)
        browser.injectHTMLInspector();
        // Make sure the browser has finished painting
        browser.pause(500);
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
      });

      // Only continue with Chrome
      // see https://github.com/webdriverio/webdriverio/issues/2212
      if (browser.desiredCapabilities.browserName !== 'chrome') {
        return;
      }

      // Hover button
      context('with hover state', () => {
        before(() => {
          // Reload
          browser.url(`ecl-buttons-ec--${variant}.html`);
          browser.injectAxeCore();
          browser.pause(500);

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
