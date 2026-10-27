import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

function onRenderHtml(pageContext) {
  const { Page, urlPathname } = pageContext;
  const url = urlPathname.endsWith('/') ? urlPathname : `${urlPathname}/`;
  let pageHtml;
  let head;
  try {
    pageHtml = renderToString(<Page url={url} />);
  } finally {
    // Reset Helmet's server state between prerendered pages, including failures.
    head = Helmet.renderStatic();
  }

  // Vike inserts the client entry, serialized page context, and stylesheet URLs.
  return {
    documentHtml: escapeInject`<!doctype html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    ${dangerouslySkipEscape(head.title.toString())}
    ${dangerouslySkipEscape(head.meta.toString())}
    ${dangerouslySkipEscape(head.link.toString())}
    <script
      defer="defer"
      src="https://webtools.europa.eu/load.js"
      type="text/javascript"
    ></script>
    <script>
      if (navigator.userAgent !== 'ReactSnap') {
        var cl = document.querySelector('html').classList;
        cl.remove('no-js');
        cl.add('has-js');
      }
    </script>
    <script>
      if (window.location.hash.match('access_token')) {
        document.location.pathname += '/admin';
      }
      if (window.location.hash.match('invite_token')) {
        document.location.pathname += '/admin';
      }
      if (window.location.hash.match('confirmation_token')) {
        document.location.pathname += '/admin';
      }
      if (window.location.hash.match('email_change_token')) {
        document.location.pathname += '/admin';
      }
      if (window.location.hash.match('recovery_token')) {
        document.location.pathname += '/admin';
      }
    </script>
  </head>
  <body>
    <div id="page-root">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`,
  };
}

export { onRenderHtml };
