// src/website/src/+onRenderHtml.jsx
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import React from 'react';
import App from './App';
import fs from 'fs';
import path from 'path';

const isBuild = process.argv.some(arg => arg.includes('build'));
let templateHtml = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');

if (isBuild) {
  templateHtml = templateHtml.replace(
    '<script type="module" src="/src/Index.jsx"></script>',
    ''
  );
}

export async function onRenderHtml(pageContext) {
  let url = pageContext.urlPathname || '/';
  url = url.endsWith('/') ? url : `${url}/`;
  console.log('Processing URL:', url);

  if (!isBuild) {
    console.log('Dev mode - skipping prerender');
    return {
      documentHtml: dangerouslySkipEscape(templateHtml),
      pageContext: {},
    };
  }

  console.log('Prerendering URL:', url);
  const app = <App url={url} />;

  let pageHtml;
  try {
    pageHtml = renderToString(app);
    console.log('Rendered HTML length:', pageHtml.length);
  } catch (e) {
    console.error('Prerender Error for URL:', url, e);
    pageHtml = '<p>Rendering Failed</p>';
  }

  const documentHtml = templateHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${pageHtml}</div>`
  );

  return {
    documentHtml: dangerouslySkipEscape(documentHtml),
    pageContext: {},
  };
}