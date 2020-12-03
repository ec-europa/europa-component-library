const merge = require('deepmerge');
const twing = require('@ecl/twig-ec-storybook/.storybook/environment');

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    try {
      const html = twing.render(file, options);
      const div = document.createElement('div');
      div.innerHTML = html.trim();
      resolve(div.firstChild);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
};
