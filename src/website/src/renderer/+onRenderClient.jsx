import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../App';

async function onRenderClient() {
  hydrateRoot(document.getElementById('page-root'), <App />);
}

export { onRenderClient };
