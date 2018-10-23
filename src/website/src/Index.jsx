import React from 'react';
import { hydrate, render } from 'react-dom';
import Loadable from 'react-loadable';

import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  Loadable.preloadReady().then(() => {
    hydrate(<App />, rootElement);
  });
} else {
  render(<App />, rootElement);
}
