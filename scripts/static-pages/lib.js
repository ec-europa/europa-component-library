/* eslint-disable */
// Shared, page-type-agnostic helpers for build.js and every {page}.data.js.
// Page-type-specific helpers (e.g. the page-header shape for a given page
// type) live in their own lib-{type}.js instead — see
// docs/agentic/ecl-static-page.md's intro for why: a data.js only pulls in
// the helper file(s) for the page type it's actually building, not every
// type's worth of helpers at once.

const path = require('path');
const fs = require('fs');

function copyDir(src, dest, { skip = [] } = {}) {
  // Not every system ships every asset subfolder — EU has no self-hosted
  // font (@font-face), unlike EC's Inter — so a missing source dir here is
  // expected, not an error.
  if (!fs.existsSync(src)) return;
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
  // EC's positive logo sits flat under images/logo/; EU nests it one level
  // deeper under standard-version/ (condensed-version/ is the EU mobile
  // variant, already handled below).
  siteHeader.logo.src_desktop =
    suffix === 'ec'
      ? `assets/${system}/images/logo/positive/logo-${suffix}--en.svg`
      : `assets/${system}/images/logo/standard-version/positive/logo-${suffix}--en.svg`;
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
    siteFooter.rows[2][0][0].logo.src_desktop = `assets/${system}/images/logo/standard-version/positive/logo-eu--en.svg`;
    siteFooter.rows[2][0][0].logo.src_mobile = `assets/${system}/images/logo/condensed-version/positive/logo-eu--en.svg`;
  }
  return siteFooter;
}

module.exports = {
  copyPresetAssets,
  clone,
  makeReq,
  standardSiteHeader,
  standardSiteFooter,
  STOCK_IMAGES,
  picsumImage,
};
