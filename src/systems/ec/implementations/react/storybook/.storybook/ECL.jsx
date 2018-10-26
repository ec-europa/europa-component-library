import React, { Fragment } from 'react';
import '@ecl/ec-preset-website/dist/styles/ecl-ec-preset-website.css';
import 'iframe-resizer/js/iframeResizer.contentWindow.min.js';
import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

svg4everybody();

const ECLDecorator = storyFn => {
  return <Fragment>{storyFn()}</Fragment>;
};

export default ECLDecorator;
