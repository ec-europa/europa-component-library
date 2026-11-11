import React from 'react';
import { hydrateRoot } from 'react-dom/client';

async function onRenderClient({ Page }) {
  hydrateRoot(document.getElementById('page-root'), <Page />);
}

export { onRenderClient };
