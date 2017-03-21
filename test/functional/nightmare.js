const Nightmare = require('nightmare');
const chai = require('chai');

const expect = chai.expect;

// Custom assertions
const isAccessible = require('../utils/assertions/isAccessible');
const isWellFormatted = require('../utils/assertions/isWellFormatted');

chai.Assertion.addProperty('accessible', isAccessible);
chai.Assertion.addProperty('wellFormatted', isWellFormatted);

// Error handler
const errorHandler = done => (error) => {
  if (error instanceof Error) {
    return done(error);
  }

  return done(new Error(error));
};

describe('Buttons blocks', function test() {
  // Set timeout to 15 seconds, instead of the original 2 seconds
  this.timeout(15000);
  const browser = new Nightmare();
  const url = 'http://localhost:3000/components/preview/buttons-button-blocks--default';

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
      .end()
      .then((result) => {
        expect(result).to.be.wellFormatted;
        done();
      })
      .catch(errorHandler(done));
  });
});
