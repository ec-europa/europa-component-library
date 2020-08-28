const merge = require('deepmerge');
const twing = require('@ecl-twig/ec-storybook/.storybook/environment');

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    try {
      const html = twing.render(file, options);
      const test = document.createElement('test');
      test.innerHTML = html.trim();
      resolve(test);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
};
