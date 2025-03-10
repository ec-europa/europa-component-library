/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iframePath = path.resolve(
  __dirname,
  '../build/client/playground/ec/iframe.html',
);
let iframeContent = fs.readFileSync(iframePath, 'utf8');

const injectScript = `
  <script src="https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.15.1/beautify-html.min.js"></script>
  <script>
    function sendMessage() {
      const html = document.querySelector('#storybook-root')?.innerHTML;
      if (!html) {
        console.log('No #root yet, retrying');
        setTimeout(sendMessage, 100);
        return;
      }

      const formattedHtml = html_beautify(html, { indent_size: 2, wrap_line_length: 120 });
      window.top.postMessage({
        key: 'ecl-demo',
        args: { id: window.location.search.slice(4).replace('&viewMode=story', ''), source: formattedHtml }
      });
    }
    window.addEventListener('load', sendMessage);
  </script>
`;

iframeContent = iframeContent.replace('</body>', `${injectScript}</body>`);
fs.writeFileSync(iframePath, iframeContent);
