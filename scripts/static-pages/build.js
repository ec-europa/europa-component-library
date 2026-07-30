/* eslint-disable */
// Regenerable build script for scripts/static-pages/dist/*.html.
// Run: node scripts/static-pages/build.js [page] [ec|eu]
//   page defaults to "homepage"; looks for {page}.html.twig and
//   {page}.data.js, both in dist/ (not tracked — see below). system
//   defaults to "ec".
//
// Renders {page}.html.twig (a rule-derived composition — see
// docs/agentic/ecl-static-page.md) with data assembled by {page}.data.js,
// self-hosts the built preset assets alongside it, and wraps the result in
// a standalone HTML skeleton.
//
// Everything page-specific — the .twig composition, the .data.js, and the
// generated output — lives in dist/, which is gitignored ("dist" is a
// blanket-ignored dirname repo-wide). Only build.js/lib.js/serve.js (the
// reusable pipeline itself) are tracked for now; this is still a PoC, so no
// per-page content is kept in the repo yet — see docs/agentic/
// ecl-static-page.md, Step 7, before wiping dist/ wholesale.

const path = require('path');
const fs = require('fs');
const { copyPresetAssets, clone, makeReq } = require('./lib');

const PAGE = process.argv[2] || 'homepage';
const SYSTEM = process.argv[3] || 'ec';
if (!['ec', 'eu'].includes(SYSTEM)) {
  console.error(`Unknown system "${SYSTEM}" — expected "ec" or "eu"`);
  process.exit(1);
}

const REPO = path.resolve(__dirname, '../..');
const OUT_DIR = path.join(__dirname, 'dist');
const ASSETS_DIR = path.join(OUT_DIR, 'assets', SYSTEM);

const twigPath = path.join(OUT_DIR, `${PAGE}.html.twig`);
const dataPath = path.join(OUT_DIR, `${PAGE}.data.js`);
if (!fs.existsSync(twigPath) || !fs.existsSync(dataPath)) {
  console.error(`Missing ${PAGE}.html.twig or ${PAGE}.data.js in ${OUT_DIR}`);
  process.exit(1);
}

const environment = require(
  path.join(REPO, `src/playground/${SYSTEM}/.storybook/environment.js`),
);

// --- 1. copy self-hosted assets (styles/scripts/fonts/images) ---
copyPresetAssets(REPO, ASSETS_DIR, SYSTEM);

// --- 2. assemble placeholder data (page-specific) ---
const buildData = require(dataPath);
const data = buildData({ REPO, ASSETS_DIR, SYSTEM, req: makeReq(REPO), clone });

// --- 3. render the rule-derived composition ---
const twigSource = fs.readFileSync(twigPath, 'utf8');
const suffix = SYSTEM === 'eu' ? 'eu' : 'ec';

environment
  .createTemplate(twigSource)
  .then((template) => template.render(data))
  .then((bodyHtml) => {
    const colorModesLink =
      suffix === 'ec'
        ? `\n    <link rel="stylesheet" href="assets/${SYSTEM}/styles/ecl-${SYSTEM}-color-modes.css" media="screen" />`
        : '';

    const page = `<!doctype html>
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8" />
    <title>ECL ${PAGE} prototype (${SYSTEM.toUpperCase()}) — structure pass</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <script>
      document.documentElement.classList.remove('no-js');
      document.documentElement.classList.add('has-js');
    </script>

    <!-- Icons: ECL v5 no longer ships icon markup as an SVG sprite — icon
         spans (class="wt-icon--*") are populated at runtime by the Webtools
         script below. This is a required external dependency, not optional. -->
    <script
      defer
      src="https://webtools.europa.eu/load.js"
      type="text/javascript"
    ></script>

    <!-- All CSS/JS/fonts/images below are self-hosted (copied from
         src/presets/${SYSTEM}/dist) rather than CDN-linked — see
         docs/agentic/ecl-static-page.md, Step 5, for why. Optional styles
         (reset, utilities, color-modes) must load before the main
         stylesheet. -->
    <link rel="stylesheet" href="assets/${SYSTEM}/styles/optional/ecl-reset.css" media="screen" />
    <link rel="stylesheet" href="assets/${SYSTEM}/styles/optional/ecl-${SYSTEM}-utilities.css" media="screen" />${colorModesLink}
    <link rel="stylesheet" href="assets/${SYSTEM}/styles/ecl-${SYSTEM}.css" media="screen" />
    <link rel="stylesheet" href="assets/${SYSTEM}/styles/ecl-${SYSTEM}-print.css" media="print" />
  </head>

  <body>
${bodyHtml
  .split('\n')
  .map((l) => (l ? '    ' + l : l))
  .join('\n')}

    <!-- Both script tags below are type="module" so they share the same
         deferred execution queue and run in document order — see Step 6. -->
    <script type="module" src="assets/${SYSTEM}/scripts/ecl-esm-${SYSTEM}.js"></script>
    <script type="module">
      ECL.autoInit();
    </script>
  </body>
</html>
`;

    fs.mkdirSync(OUT_DIR, { recursive: true });
    fs.writeFileSync(path.join(OUT_DIR, `${PAGE}.html`), page);
    console.log('Wrote', path.join(OUT_DIR, `${PAGE}.html`));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
