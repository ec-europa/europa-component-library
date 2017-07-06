const variants = [
  'external',
  'arrow-up',
  'arrow-down',
  'feedback',
  'spinner',
  'search',
  'language',
  'facebook',
  'twitter',
  'googleplus',
  'linkedin',
  'rss',
  'up',
  'right',
  'down',
  'left',
  'file',
  'audio',
  'brochure',
  'edit',
  'image',
  'download',
  'infographic',
  'multiple-files',
  'organigram',
  'package',
  'slides',
  'video',
  'error',
  'success',
  'warning',
  'check',
  'generic-lang',
  'budget',
  'digital',
  'energy',
  'euro',
  'global',
  'growth',
  'regulation',
  'tag-close',
  'tag-close-hover',
  'calendar',
  'location',
  'livestreaming',
  'book',
  'data',
  'copy',
  'spreadsheet',
  'presentation',
  'info',
  'share',
  'faq',
  'camera',
  'user',
  'logout',
];

variants.forEach(variant => {
  describe(`icons--${variant}`, () => {
    before(() => {
      // Set viewport size
      browser.setViewportSize({
        width: 800,
        height: 200,
      });
      // Go to url
      browser.url(`ecl-icons--${variant}.html`);

      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    it('should match the reference screenshot', () => {
      const screenshots = browser.checkDocument({
        name: `styles/icons/${variant}`,
      });
      expect(screenshots).to.matchReference();
    });

    it('should be accessible', () => {
      const a11yReport = browser.runAxeCore('ecl-icon').value;
      expect(a11yReport).to.be.accessible;
    });
  });
});
