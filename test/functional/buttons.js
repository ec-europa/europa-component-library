import assert from 'assert';
import assertDiff from '../utils/visual-regression';

const variants = ['default', 'primary', 'secondary', 'ctn', 'ctn--border', 'menu'];

describe('buttons', () => {
  before(() => {
    // Set viewport size
    browser.setViewportSize({
      width: 250,
      height: 100,
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
      describe('with plain state', () => {
        it('should match the reference screenshot', () => {
          const report = browser.checkViewport({ name: `buttons/${variant}/plain` });
          assertDiff(report);
        });

        it('should be accessible', () => {
          const { result, err } = browser.runAxeCore('btn').value;
          assert.equal(err, null, 'axe-core returned an error');
          assert.deepEqual(result.violations.length, 0, 'axe-core reported violations');
        });
      });

      // Hover button
      describe('with hover state', () => {
        before(() => {
          browser.moveToObject('.btn');
        });

        it('should match the reference screenshot', () => {
          const report = browser.checkViewport({ name: `buttons/${variant}/hover` });
          assertDiff(report);
        });

        it('should be accessible', () => {
          const { result, err } = browser.runAxeCore('btn').value;
          assert.equal(err, null, 'axe-core returned an error');
          assert.deepEqual(result.violations.length, 0, 'axe-core reported violations');
        });
      });

      // Press the button
      describe('with pressed state', () => {
        before(() => {
          browser.buttonDown();
        });

        it('should match the reference screenshot', () => {
          const report = browser.checkViewport({ name: `buttons/${variant}/pressed` });
          assertDiff(report);
        });

        it('should be accessible', () => {
          const { result, err } = browser.runAxeCore('btn').value;
          assert.equal(err, null, 'axe-core returned an error');
          assert.deepEqual(result.violations.length, 0, 'axe-core reported violations');
        });
      });

      // Release
      describe('with released state', () => {
        before(() => {
          browser.buttonUp();
        });

        it('should match the reference screenshot', () => {
          const report = browser.checkViewport({ name: `buttons/${variant}/released` });
          assertDiff(report);
        });

        it('should be accessible', () => {
          const { result, err } = browser.runAxeCore('btn').value;
          assert.equal(err, null, 'axe-core returned an error');
          assert.deepEqual(result.violations.length, 0, 'axe-core reported violations');
        });
      });
    });
  });
});
