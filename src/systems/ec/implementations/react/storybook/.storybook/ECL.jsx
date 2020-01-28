import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

svg4everybody({
  nosvg: true, // shiv <svg> and <use> elements and use image fallbacks
  polyfill: true, // polyfill <use> elements for External Content
});
