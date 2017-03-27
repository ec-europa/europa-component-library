describe('Buttons - Visual regression', () => {
  before(() => {
    // Go to url
    browser.url('/buttons-buttons-test.html');
    // Make sure the browser has finished painting
    browser.pause(1000);
  });

  it('should match the reference screenshot', () => {
    const screenshots = browser.checkDocument({ name: 'buttons' });
    expect(screenshots)
      .to
      .matchReference();
  });
});
