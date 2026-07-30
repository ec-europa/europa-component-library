# Skill: compose a static HTML page from ECL components

Produces a **ready-to-use** standalone `.html` page composed of real ECL
component markup — meant to actually be deployed/hosted outside the Twig
ecosystem, not just a Storybook-adjacent demo. Every technical dependency
(CSS, JS, fonts, icons) must genuinely work when the file is opened outside
this repo's tooling.

The pipeline that handles the technical parts (asset self-hosting, icons,
JS init, local preview) already exists and is tracked at
`scripts/static-pages/{build,serve,lib}.js` — see
[`scripts/static-pages/README.md`](../../scripts/static-pages/README.md) for
what each does. This doc is mostly about the parts that stay
judgment-driven per page: what structure a page should have, and which
components fit it.

---

## Step 0 — collect inputs, interactively

For anything below not already given in the request, ask — batch into one
`AskUserQuestion` call:

- **System**: EC or EU. Never mixed. No default.
- **Page type**: which preset. Homepage is the only one built out so far
  (see the matrix below). Anything else: no existing composition to lean
  on, do full component research per Step 1.
- **Content source**: placeholder/demo (default) or real content supplied by
  the user. The real-content path isn't built out beyond "don't invent copy"
  (Step 2) — ask anyway so the choice is explicit, and treat a first real run
  of it as exploratory.

---

## Step 1 — derive structure from rules, not from copying an example

**Don't copy a `src/page-example/*` composition wholesale** — they're fixed
Storybook demos, fine for inspiration, not for reuse as-is. Rules that hold
for every page:

- `site-header` first, `site-footer` last, always.
- `page-header` is **always present**, even when nothing in it is visible —
  it's where the page's one `<h1>` lives. What varies per page is which of
  its _elements_ are used (check its own `usage.md` for standardised/
  harmonised rules). On a homepage: title hidden (`hide_title: true`),
  breadcrumb/description/meta/pictures stripped — already implemented as
  `lib.js`'s `homepagePageHeader()`, reuse it rather than re-deriving.
- Main content: `<main>` → `.ecl-container` → `.ecl-row`/`.ecl-col-*` grid.
- **The hero is Banner, Carousel, or a visible page-header** — never
  Spotlight, despite it sitting next to Banner/Carousel in the source tree
  and reading hero-ish in its own `usage.md`. Spotlight is a content-area
  callout (see the matrix). This is current guidance direct from the ECL
  team, ahead of that doc being tightened on their side.
- For each content section: read the component's `README.md` (params) and
  its `usage.md` (when to use it). The matrix below is a shortcut for this,
  not a replacement — check the actual doc when a pick matters.

---

## Step 2 — gather data

- Placeholder pass: reuse each component's own `demo/data*.js` as content.
  Require it via `lib.js`'s `makeReq(REPO)` — already handles the ESM/CJS
  export-shape quirk some of those files have, don't reimplement it.
- Trim/merge fields the way existing `{page}.data.js` files do when a
  component's default demo carries more than this page needs — reusing that
  _pattern_ is fine, reusing another page's actual _layout_ isn't (Step 1).
- Don't invent copy on a placeholder pass — only write real text when the
  user explicitly asked for real content (Step 0).
- Drop any `icon_path`/`/icons.svg` field in older demo data — v4 leftover,
  `@ecl/icon`'s current template doesn't read a path at all.
- Don't carry a parameter from one component onto a similar-looking one
  without checking that component's own README — e.g. Banner has a
  documented `full_width` variant, Spotlight doesn't, despite both acting as
  page-top visuals.

---

## Step 3 — write and build the page

Write two files into `scripts/static-pages/dist/` (not tracked — Step 4):

- `{page}.html.twig` — your Step 1 composition.
- `{page}.data.js` — `module.exports = function buildData({ REPO,
ASSETS_DIR, SYSTEM, req, clone }) { ... return data; }`.

Then run:

```bash
node scripts/static-pages/build.js [page] [ec|eu]
```

`build.js` already handles rendering the Twig composition (via the repo's
Twing environment), self-hosting CSS/JS/fonts/images from the matching
preset build, the required Webtools icon script, and module-safe
`ECL.autoInit()` wiring — all per-page-agnostic, nothing here needs
reimplementing. If you need to know _why_ any of that is built the way it
is, read `build.js`'s own comments before re-deriving it.

---

## Step 4 — output location and what's tracked

Everything lives under `scripts/static-pages/` — not a top-level `examples/`
folder (`scripts/` is this repo's existing convention, see
`scripts/token-analysis/`). Only `build.js`, `serve.js`, `lib.js`,
`README.md` are committed. Every page-specific file — `{page}.html.twig`,
`{page}.data.js`, and all generated output — lives in `dist/`, gitignored
("dist" is a blanket-ignored dirname repo-wide, no `.gitignore` edits
needed). This is a deliberate PoC-stage choice (see `build.js`'s header
comment for the reasoning) — no per-page content is meant to sit in the repo
yet.

**Consequence**: wiping `dist/` deletes a page's composition and data along
with its output — there's no tracked copy of either. Don't clean it wholesale
without checking what's in there first.

For a new page, add its `.twig`/`.data.js` into `dist/` and reuse the
existing `build.js`/`lib.js` — don't start a new layout per page. **Working
on one page shouldn't touch another** — don't edit a sibling page's files,
and don't reference one page's file from another's comments (point at this
doc or a component's own docs instead); rebuilding a page you didn't change
is unnecessary unless `build.js`/`lib.js` themselves changed.

---

## Step 5 — verify

- Every local `href`/`src`/`srcset="assets/..."` in the generated file
  resolves on disk.
- Don't tell the user to open the file via `file://` — breaks
  `<script type="module">` loading and the Webtools icon script (see
  `serve.js`'s header comment for the CORS mechanics). Use it instead:

  ```bash
  node scripts/static-pages/serve.js [port]   # defaults to 8080
  ```

  Verify it actually works before handing off — start it backgrounded,
  `curl` the HTML page, the module script, the main CSS, and a font file,
  check for `200`/sane `Content-Type`, then stop it.

- Don't reach for `claude-in-chrome` unless the user asks for it — they can
  check the visual result themselves once `serve.js` is running.

---

## Reference: recommended components per page type

Non-binding — a lookup to speed up Step 1, not a checklist. Still
sanity-check a pick against its own `usage.md` when it matters. Columns are
page types (add one as each gets built out via Step 0).

| Component           | Homepage           | Notes                                                                           |
| ------------------- | ------------------ | ------------------------------------------------------------------------------- |
| site-header         | Always             | mega-menu = primary site nav, already covered                                   |
| page-header         | Always             | title hidden; holds the page's one h1                                           |
| site-footer         | Always             | harmonised; `-ec`/`-eu` Twig entry point per system                             |
| Banner              | Hero               | general-purpose default                                                         |
| Carousel            | Hero / ticker      | multiple rotating messages; own usage.md names homepage use                     |
| Highlighted-search  | Hero (situational) | only if the page is search-driven; no usage.md yet                              |
| Navigation-list     | Recommended        | **the** site-wayfinding component — see below, not List-illustration            |
| Card                | Recommended        | teaser grid, news/events/shallow content                                        |
| Content-item        | Recommended        | teaser with date/meta, news/events                                              |
| Featured-item       | Recommended        | single denser highlight                                                         |
| Story-card          | Recommended        | self-contained editorial mini-carousel                                          |
| Spotlight           | Content only       | **not** a hero, despite looking like one — "In focus"-style callout             |
| Fact-figures        | Recommended        | stats/credibility, quick orientation                                            |
| Slogan-ticker       | Recommended        | short rotating taglines                                                         |
| Social-media-follow | Recommended        | own usage.md: place at the bottom                                               |
| Highlight-box       | Recommended        | compact single title+description+link callout (e.g. feedback prompt)            |
| Add-to-calendar     | Situational        | events-heavy homepages only                                                     |
| List-illustration   | Not recommended    | editorial/informational — own usage.md explicitly rules out navigational use    |
| Category-filter     | Not recommended    | list/search/filtered-results pages, not homepage                                |
| Mega-menu / Menu    | N/A                | header navigation only, never a standalone section (already inside site-header) |

Every homepage built so far omits `Mega-menu`/`Menu`/`Category-filter`/
`List-illustration` as standalone sections for the reasons above — if one of
those looks tempting for a new page, that's the signal to check its
`usage.md` before including it.
