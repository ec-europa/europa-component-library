const visit = require('unist-util-visit');

module.exports = (
  options = {
    search: /^/,
    replace: '/uploads',
  }
) =>
  function image() {
    return function transformer(tree) {
      // eslint-disable-next-line no-use-before-define
      visit(tree, 'image', onImage);

      function onImage(node) {
        node.url = node.url.replace(options.search, options.replace);
      }
    };
  };
