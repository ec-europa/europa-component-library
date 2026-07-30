/* eslint-disable */
// Zero-dependency static server for previewing generated pages.
// Run: node scripts/static-pages/serve.js [port]
//
// Why this exists: opening the generated .html directly via file:// breaks
// two things that work fine once actually hosted over http(s):
//   - `<script type="module">` fetches are always CORS-mode requests, and
//     file:// pages get a unique/opaque origin per load, so the browser
//     refuses the fetch entirely ("Access to script ... blocked by CORS
//     policy ... origin 'null'"). ECL never loads -> `ECL is not defined`.
//   - the Webtools icon script (https://webtools.europa.eu/load.js) also
//     fails to do its job from a file:// page for the same class of reason.
// Serving over http://localhost sidesteps both — see docs/agentic/
// ecl-static-page.md, Step 8.

const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'dist');
const PORT = Number(process.argv[2]) || 8080;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

http
  .createServer((req, res) => {
    const reqPath = decodeURIComponent(req.url.split('?')[0]);
    const filePath = path.join(
      ROOT,
      reqPath === '/' ? '/homepage.html' : reqPath,
    );

    // Don't serve anything outside ROOT.
    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found: ' + reqPath);
        return;
      }
      const type = TYPES[path.extname(filePath)] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      res.end(content);
    });
  })
  .listen(PORT, () => {
    console.log(`Serving ${ROOT} at http://localhost:${PORT}/homepage.html`);
    console.log('Ctrl+C to stop.');
  });
