describe("social-icons", () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 1400,
      height: 5700
    });

    browser.pause(1000);
  });

  describe("social-icons", () => {
    before(() => {
      // Go to url
      browser.url("ecl-social-icons.html");
      // Make sure the browser has finished painting
      browser.pause(1000);
      // Inject axe-core (for accessibility tests)
      browser.injectAxeCore();
    });

    // Normal state
    context("in overall demonstration", () => {
      it("should match the reference screenshot", () => {
        const screenshots = browser.checkDocument({
          name: "social-icons"
        });
        expect(screenshots).to.matchReference();
      });

      it("should be accessible", () => {
        const a11yReport = browser.runAxeCore("ecl-container").value;
        expect(a11yReport).to.be.accessible;
      });
    });
  });
});
