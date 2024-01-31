let visit;

// Use dynamic import
import('unist-util-visit').then((visitModule) => {
  visit = visitModule.visit;
});

module.exports = (
  options = {
    search: /^/,
    replace: '/uploads',
  },
) =>
  function image() {
    return function transformer(tree) {
      // Ensure visit is available before using it
      if (visit) {
        // eslint-disable-next-line no-use-before-define
        visit(tree, 'image', onImage);
      } else {
        // eslint-disable-next-line no-console
        console.error('Error: unist-util-visit not imported yet.');
      }

      function onImage(node) {
        node.url = node.url.replace(options.search, options.replace);
      }
    };
  };
