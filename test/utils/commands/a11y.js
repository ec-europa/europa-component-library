const axeSource = require('axe-core').source;

module.exports = {
  injectAxeCore() {
    return this.execute(`
  (function () {
    if (typeof axe === "object" && axe.version) { return; }
    var s = document.createElement("script");
    // stringify so that quotes are properly escaped
    s.innerHTML = ${JSON.stringify(`${axeSource};axe.configure({branding:{application:"webdriverjs"}});`)};
    document.body.appendChild(s);
  }());
    `);
  },

  runAxeCore: function runAxeCore(classname) {
    /* eslint-disable */
    const script = function check(cls, done) {
      var n = document.getElementsByClassName(cls);
      axe.run(n, function (err, result) {
        return done({
          err: err,
          result: result
        });
      });
    };
    /* eslint-enable */

    return this.executeAsync(script, classname);
  },
};
