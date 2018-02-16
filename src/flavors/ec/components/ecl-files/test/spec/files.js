const variants = [
  'default',
  'translations',
  'links',
  'images',
  // The following variants are not tested yet (flash player causes troubles)
  // 'videos-iframe',
  // 'videos-tag',
];

describe('files', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 600,
      height: 400,
    });
  });

  variants.forEach(variant => {
    describe(`--${variant}`, () => {
      before(() => {
        // Go to url
        browser.url(`ecl-files--${variant}.html`);

        // Inject axe-core (for accessibility tests)
        browser.injectAxeCore();

        // Make sure the browser has finished painting
        browser.pause(500);
      });

      // Normal state
      context('with plain state', () => {
        it('should match the reference screenshot', () => {
          const screenshots = browser.checkDocument({
            name: `files/${variant}`,
          });

          expect(screenshots).to.matchReference();
        });

        it('should be accessible', () => {
          const a11yReport = browser.runAxeCore('ecl-file').value;
          expect(a11yReport).to.be.accessible;
        });
      });
    });
  });
});
