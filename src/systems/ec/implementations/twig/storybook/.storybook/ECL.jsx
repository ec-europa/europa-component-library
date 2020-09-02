import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();
  if (window.ECL) {
    window.ECL.autoInit();
  }
});
