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
`{page}.html.twig` + `{page}.data.js` (both in `dist/` — see "Current state"
below), renders the Twig composition against the data through the repo's own
Twing/Storybook environment, self-hosts the matching preset's CSS/JS/fonts/
images alongside it, and wraps the result in a standalone HTML skeleton
(Webtools icon script, module-safe `ECL.autoInit()` wiring, correct optional
stylesheet order).

**Usage:**

```bash
node scripts/static-pages/build.js [page] [ec|eu]
```

`page` defaults to `homepage`, system defaults to `ec`.

**Output:** `scripts/static-pages/dist/{page}.html` plus
`scripts/static-pages/dist/assets/{ec|eu}/{styles,scripts,fonts,images}/`.

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
# then open http://localhost:8080/{page}.html
```

### `lib.js`

Shared helpers used by `build.js` and by every `{page}.data.js`:

- `copyPresetAssets(REPO, ASSETS_DIR, SYSTEM)` — copies the built preset's
  `styles/scripts/fonts/images` into the output folder.
- `clone(obj)` — deep clone via `JSON.parse(JSON.stringify(...))`.
- `makeReq(REPO)` — returns a `require()`-style helper for a component's
  `demo/data*.js`, unwrapping the `{ __esModule, default }` interop shape
  some of those files get transpiled into.
- `homepagePageHeader(req, clone)` — the page-header block shared by every
  homepage-type page: title hidden, breadcrumb/description/meta/pictures
  stripped. `page-header` itself is structurally mandatory (it's where the
  page's one `<h1>` lives) even though nothing in it is visually shown on a
  homepage — see the skill doc's Step 1 for why it's never omitted outright.
- `STOCK_IMAGES` — the 10-image fixed stock set on the ECL S3 bucket
  (`example-image.jpg` through `example-image10.jpg`), for themed-generation
  passes to rotate through instead of repeating one image everywhere — see
  the skill doc's Step 2, "Themed generation".

## Current state: PoC — only the pipeline is tracked

**Only `build.js`, `serve.js`, and `lib.js` are committed to the repo.**
Every page-specific file — `{page}.html.twig` (the composition) and
`{page}.data.js` (its placeholder-content assembly) — lives in `dist/`,
which is gitignored (`dist` is a blanket-ignored dirname repo-wide, so this
needed no `.gitignore` changes). This is a deliberate, current-stage choice:
no per-page content is meant to sit in the repo yet, until there's a clearer
answer for where real pages should live long-term.

**Practical consequence:** wiping `dist/` deletes a page's composition and
data along with its generated output — there is currently no tracked copy
of either. Don't clean `dist/` wholesale without checking whether what's in
there is worth keeping (or worth walking through Steps 1–3 of the skill
again to rebuild).

Two pages have been built this way so far, both EC: `homepage` and
`homepage-alt` — two structurally different takes on the same page type
(different hero component, different navigation/content component choices),
built to exercise the skill's "derive structure from rules, not from a copied
example" principle.

## Directory structure

```
scripts/static-pages/
├── build.js              # shared render pipeline — TRACKED
├── serve.js               # local preview server — TRACKED
├── lib.js                  # shared helpers — TRACKED
├── README.md                # this file — TRACKED
└── dist/                      # generated — gitignored, nothing here is committed
    ├── homepage.html.twig         # composition
    ├── homepage.data.js            # placeholder data
    ├── homepage.html                 # generated output
    ├── homepage-alt.html.twig
    ├── homepage-alt.data.js
    ├── homepage-alt.html
    └── assets/
        └── ec/{styles,scripts,fonts,images}/   (or eu/)
```

## Requirements

- `pnpm install` run at the repo root (needed for `src/playground/{ec|eu}/
.storybook/environment.js`'s `twing` dependency, and for the preset's own
  `dist/` to exist under `src/presets/{ec|eu}/dist/`).
- No extra dependencies beyond that — plain Node `fs`/`path`/`http`.

## Related docs

- [`docs/agentic/ecl-static-page.md`](../../docs/agentic/ecl-static-page.md)
  — the full skill: how a page gets composed step by step, why each
  technical decision here was made (icons, fonts, JS init ordering, asset
  self-hosting), and a non-binding reference list of recommended components
  per page type.

## Troubleshooting

**`Missing {page}.html.twig or {page}.data.js in .../dist`**

That page hasn't been composed yet — follow the skill doc's Steps 1–3 to
create both in `dist/` first.

**Icons not rendering, or component JS not initializing (e.g. mega-menu
doesn't open)**

You're almost certainly opening the file via `file://`. Use `serve.js`
instead — see this file's `serve.js` section, or Step 8 of the skill doc.

**A rebuilt page looks unchanged after editing its `.twig`/`.data.js`**

`build.js` doesn't cache anything, but make sure you re-ran it — `dist/*.html`
is not a live/watched output, each edit needs `node scripts/static-pages/
build.js [page] [ec|eu]` run again.
