import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.querySelector('#root');

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
