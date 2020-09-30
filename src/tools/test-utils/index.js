const merge = require('deepmerge');
const twing = require('@ecl/ec-twig-storybook/.storybook/environment');

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    try {
      const html = twing.render(file, options);
      resolve(html);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
};
