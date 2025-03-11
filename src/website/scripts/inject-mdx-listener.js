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
    <script>
      window.addEventListener("load", function () {
        iframeResize({
          license: 'GPLv3',
          checkOrigin: false,
        }, 'iframe');
      });
    </script>
    <script id="mdx-message-listener">
      const prismScript = document.createElement('script');
      prismScript.src = 'https://unpkg.com/prismjs@1.30.0/prism.js';
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
            if (code.scrollHeight > 250) {
              code.style.maxHeight = "250px";
              code.style.overflow = "hidden";
              code.style.position = "relative";

              let button = document.createElement("button");
              button.id = "eclShowcaseShowMore";

              if (code.nextSibling.id === 'eclShowcaseShowMore') {
                return;
              }

              button.textContent = "Show More";
              button.style.display = "block";
              button.style.marginTop = "5px";
              button.style.padding = "5px 10px";
              button.style.border = "none";
              button.style.color = "#3860ed";
              button.style.cursor = "pointer";
              button.style.fontFamily = 'Inter, Arial, "sans-serif"';

              button.onclick = function () {
                code.style.maxHeight = "none";
                button.remove();
              };

              code.after(button);
            }
          }
        }
      });
    </script>
  `;

  content = content.replace('</body>', `${listenerScript}</body>`);
  await writeFile(filePath, content);

  const apiFiles = glob.sync('**/api/*.html', { cwd: mdxPagesDir });
  for (const api of apiFiles) {
    const apiFilePath = join(mdxPagesDir, api);
    let apiContent = await readFile(apiFilePath, 'utf8');
    // Skip if already injected
    if (content.includes('api-iframe-resize')) continue;

    const resizeScript = `
          <script id="api-iframe-resize">
            window.addEventListener("load", function () {
              iframeResize({
                license: 'GPLv3',
                checkOrigin: false,
              }, 'iframe');
            });
          </script>`;

    apiContent = apiContent.replace('</body>', `${resizeScript}</body>`);
    await writeFile(apiFilePath, apiContent);
  }
}
