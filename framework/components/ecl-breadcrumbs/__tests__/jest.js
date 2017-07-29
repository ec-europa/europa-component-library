const chromeLauncher = require('chrome-launcher');
const { Chromeless } = require('chromeless');

let browser = null;

beforeAll(done =>
  chromeLauncher
    .launch({
      port: 9222,
      // chromeFlags: ['--headless', '--disable-gpu'],
    })
    .then(chrome => {
      browser = chrome;
      done();
    })
);

test('breadcrumbs', done => {
  const chromeless = new Chromeless({
    cdp: {
      port: browser.port,
    },
  });

  chromeless
    .goto(
      'https://ec-europa.github.io/europa-component-library/components/preview/ecl-breadcrumbs'
    )
    .evaluate(() => {
      const el = document.getElementsByClassName('ecl-breadcrumbs')[0];
      const css = window.getComputedStyle(el);
      return JSON.stringify({
        html: el.outerHTML,
        css: Object.keys(css)
          .filter(key => isNaN(parseFloat(key)))
          .reduce((obj, key) => {
            obj[key] = css[key];
            return obj;
          }, {}),
      });
    })
    .then(doc => {
      expect(JSON.parse(doc)).toMatchSnapshot();
      chromeless.end().then(done);
    });
});

afterAll(() => browser.kill());
