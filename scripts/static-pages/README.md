# ECL Static Page Builder

This directory contains the tooling behind the `ecl-static-page` agent skill
([`docs/agentic/ecl-static-page.md`](../../docs/agentic/ecl-static-page.md)):
composing standalone, ready-to-use `.html` pages out of real ECL component
markup — for building a full page (e.g. a homepage) outside the Twig /
Storybook ecosystem, self-hosting its own CSS/JS/fonts/icons so it genuinely
works when opened outside this repo's tooling.

## Scripts

### `build.js`

Renders a page composition into a self-contained static HTML file: takes
`{page}.html.twig` + `{page}.data.js` (both in `dist/{page}/` — see "Current
state" below), renders the Twig composition against the data through the
repo's own Twing/Storybook environment, self-hosts the matching preset's
CSS/JS/fonts/images alongside it, and wraps the result in a standalone HTML
skeleton (Webtools icon script, module-safe `ECL.autoInit()` wiring, correct
optional stylesheet order).

**Usage:**

```bash
node scripts/static-pages/build.js [page] [ec|eu]
```

`page` defaults to `homepage`, system defaults to `ec`.

**Output:** `scripts/static-pages/dist/{page}/{page}.html` plus
`scripts/static-pages/dist/{page}/assets/{ec|eu}/{styles,scripts,fonts,images}/`
— each page's own copy, not shared across pages (see "Current state").

### `serve.js`

Zero-dependency static server (plain Node `http`/`fs`, no new dependencies)
for previewing generated pages over `http://localhost`. Opening the
generated `.html` directly via `file://` breaks two things that work fine
once actually hosted: `<script type="module">` fetches are CORS-mode
requests and get refused outright from a `file://` page's opaque origin, and
the Webtools icon script fails the same way — so icons and all component JS
silently don't work. Serving locally sidesteps both.

**Usage:**

```bash
node scripts/static-pages/serve.js [port]   # defaults to 8080
# then open http://localhost:8080/{page}/{page}.html
```

### `verify.js`

Automated Step 5 checks for one already-built page — run this after every
`build.js`, instead of re-deriving the same `grep`/`curl` commands by hand.
Zero-dependency (plain Node `fs`/`http`/`child_process`), same as
`build.js`/`serve.js`.

**Usage:**

```bash
node scripts/static-pages/verify.js [page] [ec|eu]
```

Hard-fails (non-zero exit) on: literal `[object Object]` anywhere in the
rendered HTML, a local `assets/...` reference that doesn't resolve on disk,
or a non-200/wrong-`Content-Type` response for the page/module-script/main
CSS (and, EC only, a font file) once served over `http://localhost` on a
scratch port. Also dumps (informational only, never fails the run) every
`<h1>`/`<h2>` text on the page and every distinct rendered icon class —
see [`docs/agentic/ecl-static-page.md`](../../docs/agentic/ecl-static-page.md),
Step 5, for what each check is actually catching.

### `lib.js`

Shared, page-type-**agnostic** helpers used by `build.js` and by every
`{page}.data.js` regardless of page type:

- `copyPresetAssets(REPO, ASSETS_DIR, SYSTEM)` — copies the built preset's
  `styles/scripts/fonts/images` into the output folder.
- `clone(obj)` — deep clone via `JSON.parse(JSON.stringify(...))`.
- `makeReq(REPO)` — returns a `require()`-style helper for a component's
  `demo/data*.js`, unwrapping the `{ __esModule, default }` interop shape
  some of those files get transpiled into.
- `standardSiteHeader(req, clone, suffix, system)` /
  `standardSiteFooter(req, clone, suffix, system)` — logo wiring + stripped
  rarely-used blocks, shared across every page type.
- `STOCK_IMAGES` — the 10-image fixed stock set on the ECL S3 bucket
  (`example-image.jpg` through `example-image10.jpg`), for themed-generation
  passes to rotate through instead of repeating one image everywhere — see
  the homepage/inner-page skill docs' Step 2, "Themed generation".
- `picsumImage(seed, width, height)` — the preferred alternative to
  `STOCK_IMAGES` for a themed pass.

### `lib-{type}.js` (`lib-homepage.js`, `lib-inner.js`)

**Page-type-specific** helpers — a `{page}.data.js` only requires the one
matching the page it's building, not every type's helpers at once (that's
the whole point of the split: reading/requiring only what's relevant to the
page type in hand). Each currently exports one function, the page-header
shape for that type:

- `lib-homepage.js`'s `homepagePageHeader(req, clone)` — title hidden,
  breadcrumb/description/meta/pictures stripped. `page-header` itself is
  structurally mandatory (it's where the page's one `<h1>` lives) even
  though nothing in it is visually shown on a homepage — see
  [`docs/agentic/ecl-static-page-homepage.md`](../../docs/agentic/ecl-static-page-homepage.md)'s
  Step 1 for why it's never omitted outright.
- `lib-inner.js`'s `innerPageHeader(req, clone)` — the opposite stance:
  title shown, breadcrumb kept, only the rarely-used picture/expandable
  blocks stripped. An inner page isn't the site root, so both are
  meaningful there — see
  [`docs/agentic/ecl-static-page-inner.md`](../../docs/agentic/ecl-static-page-inner.md)'s
  Step 1.

Adding a third page type means adding its own `lib-{type}.js` here (plus
its own `docs/agentic/ecl-static-page-{type}.md`) rather than growing
`lib.js`/the main skill doc further — see that doc's intro for the
reasoning.

## Current state: PoC — only the pipeline is tracked

**Only `build.js`, `serve.js`, `verify.js`, `lib.js`, `lib-homepage.js`,
`lib-inner.js` are committed to the repo.**
Every page gets its own subfolder, `dist/{page}/`, holding its composition
(`{page}.html.twig`), its data assembly (`{page}.data.js`), any derived data
file that `.data.js` reads, the generated `{page}.html`, and its own copy of
the self-hosted preset assets. That per-page assets copy (rather than one
shared `dist/assets/`) is deliberate: it's what makes `dist/{page}/`
deployable standalone by itself — you can zip up just that folder and it's
complete. The whole `dist/` tree is gitignored (`dist` is a blanket-ignored
dirname repo-wide, so this needed no `.gitignore` changes). This is a
deliberate, current-stage choice: no per-page content is meant to sit in the
repo yet, until there's a clearer answer for where real pages should live
long-term.

**Practical consequence:** wiping `dist/` (or one `dist/{page}/`) deletes
that page's composition and data along with its generated output — there is
currently no tracked copy of either. Don't clean `dist/` wholesale without
checking whether what's in there is worth keeping (or worth walking through
Steps 1–3 of the skill again to rebuild). The same applies to a single page:
rebuilding an existing `{page}` silently overwrites its `.html.twig`/
`.data.js` with no way back — fine while iterating/testing, but check what's
already there before overwriting once a page is meant to be kept.

**`scripts/static-pages/demo/` is the one exception** — real-content source
material (e.g. a sitemap/content export) the user wants to keep across
rebuilds lives there instead, in its own `demo/{source}/` subfolder (e.g.
`demo/eu-core/`, `demo/ec-core/`), and unlike `dist/` it is _not_ gitignored.
**Keep the extraction script that reads that source in the same
`demo/{source}/` subfolder** (e.g. `demo/eu-core/extract.py`) rather than
somewhere throwaway — it's the one thing here that's genuinely worth
preserving across sessions if the source is non-trivial to parse (bullet-
list/table structure, category headings, etc.), and `demo/` is the only
un-gitignored place to put it. A JSON file _derived_ from that source (e.g.
what the extraction script writes for a `.data.js` to `require()`) isn't
itself source-of-truth, though — that belongs in `dist/{page}/` alongside
the page that consumes it, not in `demo/`, and re-running the extraction
script is how it gets regenerated (after the source changes, or after
deleting it to test that `.data.js` fails clearly without it).

### EC vs EU: the pipeline isn't equally battle-tested

The EC path tends to get exercised first and more often, so the EU path can
lag behind. In practice this has meant `build.js`/`lib.js` running against EU
surfacing bugs baked in by EC-only assumptions — e.g. `copyPresetAssets`
crashing on a `fonts/` dir EU doesn't have (EU ships no self-hosted
`@font-face`, unlike EC's Inter), or a logo path hardcoded to EC's flatter
layout (`images/logo/positive/...`) when EU nests one level deeper, under
`standard-version/`/`condensed-version/`. Before trusting a `lib.js` helper
for a system (or a future third system) it hasn't actually been run against,
check the real asset layout under `src/presets/{system}/dist/` rather than
assuming it mirrors EC's.

## Directory structure

```
scripts/static-pages/
├── build.js              # shared render pipeline — TRACKED
├── serve.js               # local preview server — TRACKED
├── verify.js               # automated Step 5 checks — TRACKED
├── lib.js                   # page-type-agnostic shared helpers — TRACKED
├── lib-homepage.js           # homepage-only helper (page-header shape) — TRACKED
├── lib-inner.js                # inner-page-only helper (page-header shape) — TRACKED
├── README.md                     # this file — TRACKED
├── demo/                         # real-content SOURCE material — NOT gitignored
│   ├── eu-core/                      # one real-content source, own subfolder
│   │   ├── eu-portal-sitemap.xlsx
│   │   ├── eu-portal-teasers.docx
│   │   └── extract.py                  # parses the two files above into JSON —
│   │                                    # kept here so the next page built from
│   │                                    # this source doesn't re-derive it
│   └── ec-core/                      # a different real-content source
│       ├── ec-commission-sitemap.xlsx
│       └── ec-commission-teasers.docx
└── dist/                         # generated — gitignored, nothing here is committed
    ├── homepage-eu-core/              # everything for this one page, self-contained
    │   ├── homepage-eu-core.html.twig     # composition
    │   ├── homepage-eu-core.data.js        # data assembly
    │   ├── eu-portal-content.json            # extract.py's output — derived, not
    │   │                                      # source itself (that's in demo/)
    │   ├── homepage-eu-core.html               # generated output
    │   └── assets/
    │       └── eu/{styles,scripts,fonts,images}/
    └── homepage-batteries/            # a different page — its own folder, own assets copy
        ├── homepage-batteries.html.twig
        ├── homepage-batteries.data.js
        ├── homepage-batteries.html
        └── assets/
            └── ec/{styles,scripts,fonts,images}/
```

## Requirements

- `pnpm install` run at the repo root (needed for
  `src/playground/{ec|eu}/.storybook/environment.js`'s `twing` dependency,
  and for the preset's own `dist/` to exist under `src/presets/{ec|eu}/dist/`).
- No extra dependencies beyond that — plain Node `fs`/`path`/`http`.

## Related docs

The skill is split by concern, so start with the main doc and follow its
pointers rather than reading all three up front:

- [`docs/agentic/ecl-static-page.md`](../../docs/agentic/ecl-static-page.md)
  — the entry point: page-type-agnostic steps (input gathering, data-
  gathering gotchas, build/output/verify), and why each technical decision
  in this directory's scripts was made (icons, fonts, JS init ordering,
  asset self-hosting).
- [`docs/agentic/ecl-static-page-homepage.md`](../../docs/agentic/ecl-static-page-homepage.md)
  — homepage-only structural rules and its component matrix.
- [`docs/agentic/ecl-static-page-inner.md`](../../docs/agentic/ecl-static-page-inner.md)
  — inner-page-only structural rules (including the sidebar vs
  single-column layout-shape choice) and its component matrix.

## Troubleshooting

**Not sure why a page looks wrong, or whether it's actually ready to hand off?**

Run `node scripts/static-pages/verify.js [page] [ec|eu]` first — most of the
failure modes below (missing assets, a misshapen data field, icons quietly
falling back to the wrong set) build successfully and only show up in the
rendered output, which is exactly what it checks.

**`Missing {page}.html.twig or {page}.data.js in .../dist/{page}`**

That page hasn't been composed yet — follow the main skill doc's Step 0 to
pick a page type, then that type's own doc
(`ecl-static-page-{homepage,inner}.md`) for Step 1, then the main doc's
Step 3 to create both in `dist/{page}/`.

**Icons not rendering, or component JS not initializing (e.g. mega-menu
doesn't open)**

You're almost certainly opening the file via `file://`. Use `serve.js`
instead — see this file's `serve.js` section, or Step 5 of the skill doc.

**A rebuilt page looks unchanged after editing its `.twig`/`.data.js`**

`build.js` doesn't cache anything, but make sure you re-ran it —
`dist/{page}/{page}.html` is not a live/watched output, each edit needs
`node scripts/static-pages/build.js [page] [ec|eu]` run again.
