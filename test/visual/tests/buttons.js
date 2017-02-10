const variants = ['ctn', 'ctn--border', 'default', 'menu', 'primary', 'secondary'];
const components = ['buttons', 'inputs', 'links'];

gemini.suite('buttons', () => {
  components.forEach((component) => {
    gemini.suite(component, () => {
      variants.forEach((variant) => {
        gemini.suite(variant, (suite) => {
          const selector = `.btn-${variant}`;
          suite
            .setUrl(`/atom-buttons-${component}--${variant}.html`)
            .before((actions) => {
              actions.waitForElementToShow(selector, 5000);
              actions.focus('body');
              actions.wait(1000);
            })
            .setCaptureElements(selector)
            .capture('plain')
            .capture('hovered', (actions, find) => {
              actions.wait(500);
              actions.mouseMove(find(selector));
            })
            .capture('focused', (actions, find) => {
              actions.wait(500);
              actions.focus(find(selector));
            })
            .capture('pressed', (actions, find) => {
              actions.wait(500);
              actions.mouseDown(find(selector));
            })
            .capture('clicked', (actions, find) => {
              actions.wait(500);
              actions.mouseUp(find(selector));
            });
        });
      });
    });
  });
});
