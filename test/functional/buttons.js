const variants = ['default', 'primary', 'secondary', 'ctn', 'ctn--border', 'menu'];

describe('buttons', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 400,
      height: 200,
    });

    browser.pause(1000);
  });

  variants.forEach((variant) => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`/atom-buttons-buttons--${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({ name: `buttons/${variant}/plain` });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('btn').value;
          expect(a11yReport).to.be.accessible;
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
          browser.moveToObject('.btn');
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({ name: `buttons/${variant}/hover` });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('btn').value;
          expect(a11yReport).to.be.accessible;
        });
      });

      // Press the button
      context('with pressed state', () => {
        before(() => {
          browser.buttonDown();
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({ name: `buttons/${variant}/pressed` });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('btn').value;
          expect(a11yReport).to.be.accessible;
        });
      });

      // Release
      context('with released state', () => {
        before(() => {
          browser.buttonUp();
        });

        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({ name: `buttons/${variant}/released` });
          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('btn').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
