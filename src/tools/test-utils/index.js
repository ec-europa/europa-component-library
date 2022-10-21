const merge = require('deepmerge');
const twing = require('@ecl/twig-ec-storybook/.storybook/environment');
const jsdom = require('jsdom');
const fs = require('fs');

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

const renderWebComponent = (component, file, html) =>
  new Promise((resolve, reject) => {
    try {
      const { JSDOM } = jsdom;
      const scriptCode = fs.readFileSync(file);
      const dom = new JSDOM(html, { runScripts: 'dangerously' });
      const script = dom.window.document.createElement('script');
      script.textContent = scriptCode;
      dom.window.document.head.appendChild(script);
      const shadowContent =
        dom.window.document.querySelector(component).shadowRoot.innerHTML;
      resolve(shadowContent);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  merge,
  renderTwigFileAsNode,
  renderTwigFileAsHtml,
  renderWebComponent,
};
