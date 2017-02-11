// const variants = ['ctn', 'ctn--border', 'default', 'menu', 'primary', 'secondary'];
// const components = ['buttons', 'inputs', 'links'];

gemini.suite('buttons', () => {
  gemini.suite('buttons-default', (suite) => {
    const selector = '.btn-default';

    suite
      .setUrl('/atom-buttons-buttons--default.html')
      .setCaptureElements(selector)
      .before(function beforeTests(actions, find) {
        actions.waitForElementToShow(selector, 5000);
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
  /*
  components.forEach((component) => {
    variants.forEach((variant) => {
      const selector = `.btn-${variant}`;

      console.log(selector);

      gemini.suite(`${component}-${variant}`, (suite) => {
        console.log(selector, `${component}-${variant}`, `.btn-${variant}`);
        suite
          .setUrl(`/atom-buttons-${component}--${variant}.html`)
          .before((actions) => {
            console.log(selector, `${component}-${variant}`, `.btn-${variant}`);

            actions.waitForElementToShow(selector, 5000);
            // actions.focus('body');
            // actions.wait(3000);
          })
          .setCaptureElements(selector)
          .capture('plain');
      });
    });
  });
  */
});
