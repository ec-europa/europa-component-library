const fs = require('fs');
const { PurgeCSS } = require('purgecss');

module.exports = (html, css, output) => {
  const executor = async () => {
    const purgeCSSResult = await new PurgeCSS().purge({
      content: html,
      css: [css],
    });

    if (purgeCSSResult[0] && purgeCSSResult[0].css) {
      fs.writeFile(output, purgeCSSResult[0].css, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  };

  executor();
};
