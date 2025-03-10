/* eslint-disable no-underscore-dangle */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iframePaths = [
  path.resolve(__dirname, '../build/client/playground/ec/iframe.html'),
  path.resolve(__dirname, '../build/client/playground/eu/iframe.html'),
];

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
      const params = new URLSearchParams(window.location.search);
      const id = params.get('id') || '';

      window.top.postMessage({
        key: 'ecl-demo',
        args: { id: window.location.search.slice(4).replace('&viewMode=story', ''), source: formattedHtml }
      });
    }
    window.addEventListener('load', sendMessage);
  </script>
`;

iframePaths.forEach((iframe) => {
  let iframeContent = fs.readFileSync(iframe, 'utf8');
  iframeContent = iframeContent.replace('</body>', `${injectScript}</body>`);

  fs.writeFileSync(iframe, iframeContent);
});
