const fs = require('fs');

const HTMLInspector = fs.readFileSync(require.resolve('html-inspector/html-inspector'), {
  encoding: 'utf8',
});

module.exports = {
  injectHTMLInspector() {
    return this.execute(`
  (function () {
    if (typeof HTMLInspector === "object") { return; }
    var s = document.createElement("script");
    // stringify so that quotes are properly escaped
    s.innerHTML = ${JSON.stringify(HTMLInspector)};
    document.body.appendChild(s);
  }());
    `);
  },

  runHTMLInspector: function runAxeCore(classname) {
    /* eslint-disable */
    const script = function check(cls, done) {
      HTMLInspector.inspect({
        domRoot: "body",
        // excludeRules: ["some-rule-name", "some-other-rule-name"],
        // excludeElements: ["svg", "iframe"],
        onComplete: done,
      });
    };
    /* eslint-enable */

    return this.executeAsync(script, classname);
  },
};
