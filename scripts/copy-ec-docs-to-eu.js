const fs = require('fs').promises;
const path = require('path');

const repoRoot = path.resolve(__dirname, '..');
const ecRoot = path.join(repoRoot, 'src/website/src/pages/ec/components');
const euRoot = path.join(repoRoot, 'src/website/src/pages/eu/components');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyDocs() {
  const results = { copied: 0, skipped: 0, errors: [] };
  async function walk(dir) {
    let entries;
    try {
      entries = await fs.readdir(dir, { withFileTypes: true });
    } catch (err) {
      results.errors.push({ dir, err: err.message });
      return;
    }
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'docs') {
          // copy all files under this docs directory to corresponding eu path
          const relFromEc = path.relative(ecRoot, full);
          const destDocs = path.join(euRoot, relFromEc);
          await ensureDir(destDocs);
          const items = await fs.readdir(full, { withFileTypes: true });
          for (const item of items) {
            if (item.isFile()) {
              const srcFile = path.join(full, item.name);
              const destFile = path.join(destDocs, item.name);
              try {
                let txt = await fs.readFile(srcFile, 'utf8');
                // replace ec/components with eu/components in links/content
                txt = txt.replace(/ec\/components/g, 'eu/components');
                txt = txt.replace(/\/ec\/components/g, '/eu/components');
                await fs.writeFile(destFile, txt, 'utf8');
                results.copied++;
              } catch (err) {
                results.errors.push({ srcFile, err: err.message });
              }
            }
            // if there are nested directories inside docs, copy recursively
            if (item.isDirectory()) {
              await copyRecursive(
                path.join(full, item.name),
                path.join(destDocs, item.name),
                results,
              );
            }
          }
          // do not descend into the docs directory further via walk
        } else {
          await walk(full);
        }
      }
    }
  }

  async function copyRecursive(src, dest, results) {
    await ensureDir(dest);
    const entries = await fs.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      const s = path.join(src, entry.name);
      const d = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyRecursive(s, d, results);
      } else if (entry.isFile()) {
        try {
          let txt = await fs.readFile(s, 'utf8');
          txt = txt.replace(/ec\/components/g, 'eu/components');
          txt = txt.replace(/\/ec\/components/g, '/eu/components');
          await fs.writeFile(d, txt, 'utf8');
          results.copied++;
        } catch (err) {
          results.errors.push({ src: s, err: err.message });
        }
      }
    }
  }

  await walk(ecRoot);
  return results;
}

if (require.main === module) {
  copyDocs()
    .then((res) => {
      console.log('Copy results:', res);
      if (res.errors.length) process.exitCode = 2;
    })
    .catch((err) => {
      console.error('Fatal error:', err);
      process.exitCode = 1;
    });
}

module.exports = { copyDocs };
