const merge = require('deepmerge');
const twing = require('@ecl/twig-ec-storybook/.storybook/environment');

const renderTwigFileAsNode = (file, options) =>
  new Promise((resolve, reject) => {
    try {
      const html = twing.render(file, options);
      const jest = document.createElement('jest');
      jest.innerHTML = html.trim();
      resolve(jest);
    } catch (error) {
      reject(error);
    }
  });

const renderTwigFileAsHtml = (file, options, main) => {
  let html = twing.render(file, options);
  if (main) {
    const landmark = document.createElement('main');
    landmark.innerHTML = html.trim();
    html = landmark;
  }

  return html;
};

module.exports = {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
};
