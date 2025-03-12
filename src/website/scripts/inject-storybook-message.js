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
    function waitForContent(retries = 50) {
      const root = document.querySelector('#storybook-root');
      if (!root || !root.innerHTML.trim()) {
        if (retries > 0) {
          console.log('No #storybook-root content yet, retrying...');
          setTimeout(() => waitForContent(retries - 1), 100);
        } else {
          console.warn('Max retries reached, no content found in #storybook-root.');
        }
        return;
      }

      sendMessage();
    }

    function sendMessage() {
      const root = document.querySelector('#storybook-root');
      if (!root) return;

      const html = root.innerHTML;
      const formattedHtml = html_beautify(html, { indent_size: 2, wrap_line_length: 120 });
      const params = new URLSearchParams(window.location.search);
      const storyId = params.get('id') || '';
      const args = params.get('args') ? decodeURIComponent(params.get('args')) : '';
      const id = storyId + (args ? \`&args=\${args}\` : '');

      window.top.postMessage({
        key: 'ecl-demo',
        args: { id, source: formattedHtml }
      });
    }

    window.addEventListener('load', () => waitForContent());
  </script>
`;

iframePaths.forEach((iframe) => {
  let iframeContent = fs.readFileSync(iframe, 'utf8');
  iframeContent = iframeContent.replace('</body>', `${injectScript}</body>`);

  fs.writeFileSync(iframe, iframeContent);
});
