import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import Page from '../Page';

async function onRenderClient() {
  hydrateRoot(document.getElementById('page-root'), <Page />);
}

export { onRenderClient };
