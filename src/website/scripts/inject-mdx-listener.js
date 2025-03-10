/* eslint-disable */
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __dirname = dirname(fileURLToPath(import.meta.url));
const mdxPagesDir = join(__dirname, '../build/client');
const mdxFiles = glob.sync('**/code/*.html', { cwd: mdxPagesDir });

for (const file of mdxFiles) {
  const filePath = join(mdxPagesDir, file);
  let content = await readFile(filePath, 'utf8');

  // Skip if already injected
  if (content.includes('mdx-message-listener')) continue;

  const listenerScript = `
    <script id="mdx-message-listener">
      const prismScript = document.createElement('script');
      prismScript.src = 'https://unpkg.com/prismjs@1.29.0/prism.js';
      document.head.appendChild(prismScript);

      window.addEventListener('message', (event) => {
        if (event.data.key === 'ecl-demo') {
          const storyName = event.data.args.id;
          const iframe = document.querySelector('iframe[src$="' + storyName + '"]');
          if (iframe) {
            const code = iframe.parentNode.nextSibling;
            code.innerHTML = '<code class="language-html" style="white-space: pre;"></code>';
            const codeElement = code.querySelector('code');
            codeElement.textContent = event.data.args.source;
            if (window.Prism) {
              Prism.highlightElement(codeElement);
            } else {
              prismScript.onload = () => {
                Prism.highlightElement(codeElement);
              };
            }
          }
        }
      });
    </script>
  `;

  content = content.replace('</body>', `${listenerScript}</body>`);
  await writeFile(filePath, content);
}
