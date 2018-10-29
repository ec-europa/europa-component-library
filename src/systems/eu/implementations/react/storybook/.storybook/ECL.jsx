import React, { Fragment } from 'react';
import '@ecl/eu-preset-website/dist/styles/ecl-eu-preset-website.css';
import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

svg4everybody();

const ECLDecorator = storyFn => {
  if (navigator.userAgent === 'ReactSnap') {
    return <Fragment />;
  }
  return <Fragment>{storyFn()}</Fragment>;
};

export default ECLDecorator;
