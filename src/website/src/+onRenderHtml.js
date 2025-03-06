import { dangerouslySkipEscape } from "vike/server";
import { renderToString } from "react-dom/server";
import React from "react";
import fs from "fs";
import path from "path";

export { onRenderHtml };

// Load `index.html` as a string at build time
const indexHtmlPath = path.resolve(process.cwd(), "index.html");
let templateHtml = fs.readFileSync(indexHtmlPath, "utf-8");

async function onRenderHtml(pageContext) {
  const { Page, pageProps } = pageContext;
  const pageHtml = Page ? renderToString(React.createElement(Page, pageProps)) : "";

  // Inject the rendered content into `<div id="root"></div>`
  const documentHtml = templateHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${pageHtml}</div>`
  );

  return {
    documentHtml: dangerouslySkipEscape(documentHtml),
  };
}
