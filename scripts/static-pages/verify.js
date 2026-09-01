/* eslint-disable */
// Automated Step 5 checks for one already-built static page — sibling to
// build.js/serve.js. Run after build.js, before handing a page off.
// Run: node scripts/static-pages/verify.js [page] [ec|eu] [port]
//   page defaults to "homepage", system defaults to "ec", port defaults to
//   a scratch port derived from this process's pid so it doesn't collide
//   with a serve.js a human might already have running on 8080.
//
// What it checks (docs/agentic/ecl-static-page.md, Step 5) and why each one
// is worth automating rather than re-derived by hand every time:
//   1. No literal "[object Object]" in the rendered HTML — the signature of
//      a flattened/misshapen nested field (that doc's Step 2). Silent at
//      build time, only visible in the rendered output.
//   2. Every local href/src/srcset="assets/..." resolves on disk.
//   3. Dumps <h1>/<h2> text for a human skim — including a homepage's
//      visually-hidden <h1>, which is exactly where the page-header
//      title-shape bug (Step 2) shows up: build succeeds, <h1> silently
//      keeps its placeholder text.
//   4. Dumps the distinct wt-icon-* classes rendered, flagging any without
//      a family segment (wt-icon--name vs wt-icon-{family}--name) — some
//      are legitimately default-set icons (close, hamburger, search, ...),
//      but it's also what a missing `family: 'phosphor'` silently degrades
//      to, so it's worth a glance rather than an assumption.
//   5. Starts serve.js on a scratch port, requests the page, its module
//      script, and its main CSS (and, EC only, a font file — EU ships
//      none), checks each for 200 + a sane Content-Type, then stops the
//      server.
//
// Checks 1/2/5 are hard failures (non-zero exit). Checks 3/4 are
// informational only and never fail the run — read them, don't just check
// the exit code.

const path = require('path');
const fs = require('fs');
const http = require('http');
const { spawn } = require('child_process');

const PAGE = process.argv[2] || 'homepage';
const SYSTEM = process.argv[3] || 'ec';
if (!['ec', 'eu'].includes(SYSTEM)) {
  console.error(`Unknown system "${SYSTEM}" — expected "ec" or "eu"`);
  process.exit(1);
}
const PORT = Number(process.argv[4]) || 20000 + (process.pid % 10000);

const OUT_DIR = path.join(__dirname, 'dist', PAGE);
const htmlPath = path.join(OUT_DIR, `${PAGE}.html`);

if (!fs.existsSync(htmlPath)) {
  console.error(`Missing ${htmlPath} — run build.js first:`);
  console.error(`  node scripts/static-pages/build.js ${PAGE} ${SYSTEM}`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
let failed = false;
const fail = (msg) => {
  failed = true;
  console.log(`FAIL  ${msg}`);
};
const ok = (msg) => console.log(`OK    ${msg}`);
const info = (msg) => console.log(`INFO  ${msg}`);

// --- 1. [object Object] leaks ---
const objectLeaks = (html.match(/\[object Object\]/g) || []).length;
if (objectLeaks > 0) {
  fail(
    `${objectLeaks} occurrence(s) of "[object Object]" — a misshapen nested field somewhere (see the skill doc's Step 2 shape gotchas)`,
  );
} else {
  ok('no "[object Object]" leaks');
}

// --- 2. local asset paths resolve ---
const assetRefs = [
  ...html.matchAll(/(?:href|src|srcset)="(assets\/[^"]*)"/g),
].map((m) => m[1]);
const uniqueAssets = [...new Set(assetRefs)];
const missingAssets = uniqueAssets.filter(
  (rel) => !fs.existsSync(path.join(OUT_DIR, rel)),
);
if (missingAssets.length > 0) {
  missingAssets.forEach((rel) =>
    fail(`asset does not resolve on disk: ${rel}`),
  );
} else {
  ok(`all ${uniqueAssets.length} local asset reference(s) resolve on disk`);
}

// --- 3. heading dump (informational) ---
const headings = [...html.matchAll(/<h([1-2])[^>]*>([^<]*)/g)].map(
  (m) => `h${m[1]}: ${m[2].trim()}`,
);
info(
  `${headings.length} heading(s) found — skim for the real page title/section labels`,
);
headings.forEach((h) => console.log(`      ${h}`));

// --- 4. icon class dump (informational) ---
// Matches wt-icon--name or wt-icon-{family}--name specifically (rather than
// a loose wt-icon[a-z-]* sweep) so the literal "wt-icon--*" wildcard in this
// file's own head comment (see build.js) doesn't get picked up as if it
// were a rendered class.
const iconClasses = [
  ...new Set(
    [...html.matchAll(/wt-icon(?:-[a-z]+)?--[a-z0-9-]+/g)].map((m) => m[0]),
  ),
].sort();
const noFamily = iconClasses.filter((c) => /^wt-icon--/.test(c));
info(`${iconClasses.length} distinct icon class(es) rendered`);
if (noFamily.length > 0) {
  info(
    `  ${noFamily.length} without a family segment — fine for default-set icons (close, hamburger, search, ...), but also what a missing family: 'phosphor' silently degrades to: ${noFamily.join(', ')}`,
  );
}

// --- 5. serve + request ---
function get(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        res.resume();
        resolve({
          status: res.statusCode,
          type: res.headers['content-type'] || '',
        });
      })
      .on('error', reject);
  });
}

async function waitForServer(url, tries = 30) {
  for (let i = 0; i < tries; i++) {
    try {
      await get(url);
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 150));
    }
  }
  return false;
}

async function checkServed() {
  const server = spawn(
    'node',
    [path.join(__dirname, 'serve.js'), String(PORT)],
    {
      stdio: 'ignore',
    },
  );
  const base = `http://localhost:${PORT}/${PAGE}`;
  try {
    const up = await waitForServer(`${base}/${PAGE}.html`);
    if (!up) {
      fail('serve.js did not come up in time');
      return;
    }
    const targets = [
      [`${base}/${PAGE}.html`, 'text/html'],
      [`${base}/assets/${SYSTEM}/scripts/ecl-esm-${SYSTEM}.js`, 'javascript'],
      [`${base}/assets/${SYSTEM}/styles/ecl-${SYSTEM}.css`, 'css'],
    ];
    if (SYSTEM === 'ec') {
      targets.push([`${base}/assets/ec/fonts/InterVariable.woff2`, 'font']);
    }
    for (const [url, expectType] of targets) {
      try {
        const { status, type } = await get(url);
        if (status === 200 && type.includes(expectType)) {
          ok(`${url} -> ${status} ${type}`);
        } else {
          fail(
            `${url} -> ${status} ${type} (expected 200 / Content-Type containing "${expectType}")`,
          );
        }
      } catch (e) {
        fail(`${url} -> request failed: ${e.message}`);
      }
    }
  } finally {
    server.kill();
  }
}

checkServed().then(() => {
  console.log('');
  console.log(failed ? 'RESULT: FAIL — see FAIL lines above' : 'RESULT: PASS');
  process.exit(failed ? 1 : 0);
});
