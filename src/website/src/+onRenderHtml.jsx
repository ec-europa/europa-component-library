// src/website/src/+onRenderHtml.jsx
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape } from 'vike/server';
import React from 'react';
import fs from 'fs';
import path from 'path';
import App from './App';

const isBuild = process.argv.some((arg) => arg.includes('build'));
let templateHtml = fs.readFileSync(
  path.resolve(process.cwd(), 'index.html'),
  'utf-8',
);

if (isBuild) {
  templateHtml = templateHtml.replace(
    '<script type="module" src="/src/Index.jsx"></script>',
    '',
  );
}

export async function onRenderHtml(pageContext) {
  let url = pageContext.urlPathname || '/';
  url = url.endsWith('/') ? url : `${url}/`;

  if (!isBuild) {
    return {
      documentHtml: dangerouslySkipEscape(templateHtml),
      pageContext: {},
    };
  }

  const app = <App url={url} />;

  let pageHtml;
  try {
    pageHtml = renderToString(app);
  } catch (e) {
    pageHtml = '<p>Rendering Failed</p>';
  }

  const documentHtml = templateHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${pageHtml}</div>`,
  );

  return {
    documentHtml: dangerouslySkipEscape(documentHtml),
    pageContext: {},
  };
}
