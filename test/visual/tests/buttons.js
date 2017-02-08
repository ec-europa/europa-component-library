const states = ['ctn', 'ctn--border', 'default', 'menu', 'primary', 'secondary'];
const components = ['buttons', 'inputs', 'links'];

gemini.suite('buttons', () => {
  components.forEach((component) => {
    gemini.suite(component, (suite) => {
      suite.setUrl(`/atom-buttons-${component}.html`);
      states.forEach((state) => {
        gemini.suite(state, (stateSuite) => {
          const selector = `.btn-${state}`;
          stateSuite
            .setCaptureElements(selector)
            .before(function beforeTests(actions, find) {
              this.button = find(selector);
            })
            .capture('plain')
            .capture('hovered', function beforeCapture(actions) {
              actions.mouseMove(this.button);
            })
            .capture('pressed', function beforeCapture(actions) {
              actions.mouseDown(this.button);
            })
            .capture('clicked', function beforeCapture(actions) {
              actions.mouseUp(this.button);
            });
        });
      });
    });
  });
});
