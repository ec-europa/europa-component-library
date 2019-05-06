import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

svg4everybody();

window.onload = function() {
  // Replace buttons' labels
  var gridButton = document.querySelector('[title="Toggle background grid"]');
  if (gridButton) {
    gridButton.innerText = 'Grid';
  }

  var viewportButton = document.querySelector(
    '[title="Change the size of the preview"]'
  );
  if (viewportButton) {
    viewportButton.innerText = 'Viewport';
  }

  var colorButton = document.querySelector(
    '[title="Color Blindness Emulation"]'
  );
  if (colorButton) {
    colorButton.innerText = 'Color Filter';
  }
};
