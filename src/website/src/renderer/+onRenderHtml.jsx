// src/website/src/+onRenderHtml.jsx
import { renderToString } from 'react-dom/server';
import { dangerouslySkipEscape } from 'vike/server';
import React from 'react';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import App from '../App';

const publicUrl = import.meta.env.PUBLIC_URL || '';
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

function injectScriptsIntoTemplate($templateHtml, clientScriptPath) {
  // Define the script tags to be inserted
  const clientScript = `<script type="module" src="${clientScriptPath}"></script>`;

  // Find the closing </head> tag and insert the scripts just before it
  const headCloseTagIndex = $templateHtml.indexOf('</head>');
  if (headCloseTagIndex !== -1) {
    // Insert the scripts before the closing </head> tag
    $templateHtml =
      $templateHtml.slice(0, headCloseTagIndex) +
      clientScript +
      $templateHtml.slice(headCloseTagIndex);
  }

  return $templateHtml;
}

async function onRenderHtml(pageContext) {
  const { urlPathname } = pageContext;
  let url = urlPathname || '/';
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

  const templateHtmlWithContent = templateHtml.replace(
    '<div id="page-root"></div>',
    `<div id="page-root">${pageHtml}</div>`,
  );

  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const assetsDir = path.resolve(dirname, '../../client/assets/entries');

  let clientScriptPath;
  try {
    const files = fs.readdirSync(assetsDir);
    const scriptFile = files.find(
      (file) =>
        file.startsWith('entry-server-routing.') && file.endsWith('.js'),
    );

    if (!scriptFile) {
      throw new Error('No matching entry-server-routing.*.js file found!');
    }

    clientScriptPath = `${publicUrl}/assets/entries/${scriptFile}`;
  } catch (error) {
    clientScriptPath = '';
  }

  const documentHtml = injectScriptsIntoTemplate(
    templateHtmlWithContent,
    clientScriptPath,
  );

  return {
    documentHtml: dangerouslySkipEscape(documentHtml),
    pageContext: {
      // Without this the #vike_pageContext script would not be injected.
      _isHtmlOnly: false,
    },
  };
}

export { onRenderHtml };
