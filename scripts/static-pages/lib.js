/* eslint-disable */
// Shared helpers for build.js, used by every {page}.data.js.

const path = require('path');
const fs = require('fs');

function copyDir(src, dest, { skip = [] } = {}) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    if (skip.includes(entry.name)) continue;
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(s, d, { skip });
    else if (!entry.name.endsWith('.map')) fs.copyFileSync(s, d);
  }
}

function copyPresetAssets(REPO, ASSETS_DIR, SYSTEM) {
  const presetDist = path.join(REPO, `src/presets/${SYSTEM}/dist`);
  for (const sub of ['styles', 'scripts', 'fonts', 'images']) {
    copyDir(path.join(presetDist, sub), path.join(ASSETS_DIR, sub), {
      skip: sub === 'scripts' ? ['stats'] : [],
    });
  }
}

const clone = (o) => JSON.parse(JSON.stringify(o));

function makeReq(REPO) {
  // Some demo/data.js files are `export default {...}` (ESM), transpiled on
  // the fly to a CJS interop wrapper; others are plain `module.exports = {}`.
  return (p) => {
    const m = require(path.join(REPO, 'src/components', p));
    return m && m.__esModule && m.default !== undefined ? m.default : m;
  };
}

// page-header is structurally mandatory (docs/agentic/ecl-static-page.md,
// Step 1) — it's where the page's one-and-only h1 lives, whether or not the
// title is visually shown. On a homepage there's usually nothing meaningful
// for the title/breadcrumb/meta to say, so hide/strip them rather than
// dropping the component itself.
function homepagePageHeader(req, clone) {
  const pageHeader = clone(req('page-header/demo/data.js'));
  pageHeader.hide_title = true;
  delete pageHeader.breadcrumb;
  delete pageHeader.description;
  delete pageHeader.meta;
  delete pageHeader.picture_background;
  delete pageHeader.picture_thumbnail;
  delete pageHeader.expandable;
  return pageHeader;
}

module.exports = { copyPresetAssets, clone, makeReq, homepagePageHeader };
