const errorHandler = done => (error) => {
  if (error instanceof Error) {
    return done(error);
  }

  return done(new Error(error));
};


function generateTest(variants = [], componentUrl = 'buttons', name = '') {
  describe(`${name}`, () => {
    variants.forEach((variant) => {
      describe(`--${variant}`, () => {
        const url = `http://localhost:3000/components/preview${componentUrl}--${variant}.html`;

        before(() => {
          browser.goto(url);
        });

        // Normal state
        context('with plain state', () => {
          it('should be accessible', (done) => {
            browser
              .inject('js', require.resolve('axe-core/axe.min.js'))
              .evaluate(() => axe.run(document.getElementsByClassName('ecl-button')[0]))
              .then((result) => {
                expect(result).to.be.accessible;
                done();
              })
              .catch(errorHandler(done));
          });

          it('should be well formatted', (done) => {
            browser
              .inject('js', require.resolve('html-inspector/html-inspector'))
              .evaluate((cb) => {
                HTMLInspector.inspect({
                  domRoot: 'body',
                  useRules: [
                    'validate-elements',
                    'validate-element-location',
                    'validate-attributes',
                    'duplicate-ids',
                    'unique-elements',
                  ],
                  onComplete: err => cb(null, err),
                });
              })
              // .end()
              .then((result) => {
                expect(result).to.be.wellFormatted;
                done();
              })
              .catch(errorHandler(done));
          });
        });

        /*
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
        */
      });
    });
  });
}

module.exports = generateTest;
