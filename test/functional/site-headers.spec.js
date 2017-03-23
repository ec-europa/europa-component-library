const Nightmare = require('nightmare');

const variants = ['default', 'homepage'];

// Error handler
const errorHandler = done => (error) => {
  if (error instanceof Error) {
    return done(error);
  }

  return done(new Error(error));
};

describe('site-headers', () => {
  variants.forEach((variant) => {
    describe(`--${variant}`, () => {
      const url = `http://localhost:3000/components/preview/site-headers-${variant}.html`;

      before(() => {
        browser
          .goto(url)
          .inject('js', require.resolve('axe-core/axe.min.js'))
          .inject('js', require.resolve('html-inspector/html-inspector'));
      });

      it('should be accessible', (done) => {
        browser
          .evaluate(() => axe.run(document.getElementsByClassName('ecl-button')[0]))
          .then((result) => {
            expect(result).to.be.accessible;
            done();
          })
          .catch(errorHandler(done));
      });

      it('should be well formatted', (done) => {
        browser
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
          .then((result) => {
            expect(result).to.be.wellFormatted;
            done();
          })
          .catch(errorHandler(done));
      });
    });
  });
});
