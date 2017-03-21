const variants = ['default', 'homepage'];

describe('Site headers - Visual regression', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 600,
    });

    browser.pause(1000);
  });

  variants.forEach((variant) => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`/site-headers-${variant}.html`);
        // Make sure the browser has finished painting
        browser.pause(1000);
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({ name: `site-headers/${variant}` });
          expect(screenshots).to.matchReference();
        });
      });
    });
  });
});
