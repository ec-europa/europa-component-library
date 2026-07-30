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

// Fixed stock image set (docs/agentic/ecl-static-page.md, Step 2's "Themed
// generation" subsection) — kept as a fallback/alternative. These 10 images
// are deliberately mixed aspect ratios (they're Storybook demo assets, meant
// to show different crop scenarios), which looks inconsistent when several
// land in the same row/grid — prefer `picsumImage()` below for that case.
const STOCK_IMAGES = Array.from(
  { length: 10 },
  (_, i) =>
    `https://inno-ecl.s3.amazonaws.com/media/examples/example-image${i === 0 ? '' : i + 1}.jpg`,
);

// Free, no-API-key stock photo, sized to order — `<img>` isn't subject to
// the CORS restrictions that make self-hosting mandatory for CSS/JS/fonts,
// so hotlinking is fine here (same as STOCK_IMAGES always was). Pass the
// SAME width/height to every image within one row/grid (consistent aspect
// ratio — the actual fix for the "odd looking row" problem) and a distinct
// `seed` per image (different photo content, but reproducible: same seed +
// size always returns the same photo).
function picsumImage(seed, width, height) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

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

// Standard site-header: logo wired to self-hosted assets, and the rarely-
// used blocks (login, custom action) stripped by default — not every real
// site needs them, so don't include them unless a page specifically wants
// to demonstrate one. Nav (menu vs mega_menu) is deliberately NOT set here
// — pick per page (docs/agentic/ecl-static-page.md, Step 1) and assign
// `.menu` or `.mega_menu` on the returned object.
function standardSiteHeader(req, clone, suffix, system) {
  const siteHeader = clone(req(`site-header/demo/data--${suffix}.js`));
  delete siteHeader.cta_link;
  delete siteHeader.notification;
  delete siteHeader.site_name;
  delete siteHeader.login_toggle;
  delete siteHeader.login_box;
  delete siteHeader.custom_action;
  siteHeader.logo.src_desktop = `assets/${system}/images/logo/positive/logo-${suffix}--en.svg`;
  siteHeader.logo.src_mobile =
    suffix === 'ec'
      ? `assets/${system}/images/logo/logo-ec--mute.svg`
      : `assets/${system}/images/logo/condensed-version/positive/logo-eu--en.svg`;
  return siteHeader;
}

// Standard site-footer: logo wired to self-hosted assets (path differs by
// system — EC nests it under section_common, EU under a specific footer row).
function standardSiteFooter(req, clone, suffix, system) {
  const siteFooter = clone(
    req(`site-footer/demo/data-harmonised--${suffix}.js`),
  );
  if (suffix === 'ec') {
    siteFooter.section_common.logo.picture.img.src = `assets/${system}/images/logo/negative/logo-ec--en.svg`;
  } else {
    siteFooter.rows[2][0][0].logo.src_desktop = `assets/${system}/images/logo/positive/logo-eu--en.svg`;
  }
  return siteFooter;
}

module.exports = {
  copyPresetAssets,
  clone,
  makeReq,
  homepagePageHeader,
  standardSiteHeader,
  standardSiteFooter,
  STOCK_IMAGES,
  picsumImage,
};
