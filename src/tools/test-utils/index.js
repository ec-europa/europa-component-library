const merge = require('deepmerge');
const twing = require('@ecl/twig-ec-storybook/.storybook/environment');

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    twing
      .render(file, options)
      .then((output) => {
        const jestContainer = document.createElement('jest');
        jestContainer.innerHTML = output.trim();
        resolve(jestContainer);
      })
      .catch((error) => {
        reject(error);
      });
  });

const renderTwigFileAsHtml = (file, options, main) =>
  twing.render(file, options).then((html) => {
    if (main) {
      const landmark = document.createElement('main');
      landmark.innerHTML = html.trim();
      return landmark.outerHTML;
    }

    return html.trim();
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
};
