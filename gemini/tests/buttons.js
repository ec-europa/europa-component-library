gemini.suite('button', (suite) => {
  suite
    .setUrl('/atom-buttons--default')
    .setCaptureElements('.btn')
    .before(function beforeTests(actions, find) {
      this.button = find('.btn');
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
