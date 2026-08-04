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

**This skill is split by page type — only read what the current page
needs.** This file covers the steps that are the same regardless of page
type (input gathering, data-gathering gotchas, build/output/verify).
Step 1 — the actual structural rules and component matrix, which differ a
lot per type — lives in its own file per type:

- [`ecl-static-page-homepage.md`](./ecl-static-page-homepage.md)
- [`ecl-static-page-inner.md`](./ecl-static-page-inner.md)

Don't `Read` a type doc you're not currently building — that's the entire
point of the split. Once Step 0 below has settled on a page type, open only
that one type's doc.

---

## Step 0 — collect inputs, as a decision tree

**Don't front-load every question into one `AskUserQuestion` call.** Later
questions in this list depend on an earlier answer — which options even
exist, what a sane default looks like — so this is a decision tree, not a
form: ask, get the answer, then decide what to ask next. Only questions
that are genuinely independent of every prior (and pending) answer belong
in the same call. Skip anything already answered by the request itself
(a prompt naming a topic already answers "content source"; "inner page
about batteries" answers two questions at once) — the tree only visits
what's still unknown.

**1. System + page type** — independent of each other, so batch these two:

- **System**: EC or EU. Never mixed. No default — present both neutrally,
  don't label either "recommended", both are equally valid.
- **Page type**: which skeleton to build. Two are built out so far:
  **Homepage** or **Inner page** — each has its own doc (this file's intro)
  with a component matrix. Anything else: no existing composition to lean
  on, do full component research per that doc's Step 1 principles rather
  than picking from a matrix.

**2. Content source** — doesn't depend on page type, so batch this on its
own once step 1 has an answer:

1. **Placeholder/demo** (default) — each component's own `demo/data*.js`,
   unmodified.
2. **Themed generation** — the user gives a topic (e.g. "electric cars in
   Europe"); content is invented on-topic but explicitly illustrative, not
   real. See Step 2's "Themed generation" subsection.
3. **Real content** — supplied by the user, e.g. as a sitemap/content
   export. See Step 2's "Real content" subsection. A prompt that names a
   topic directly (as in the example above) already answers this
   question — don't ask it again, just confirm the topic if it's
   ambiguous.

**3. Project name — always last.** A sane default depends on every answer
above (system, page type, topic), so this is never asked before them.
Always propose one rather than picking it silently — the `{page}` slug used
for `dist/{page}/` and its filenames (Step 3/4), e.g. `homepage-batteries`
for an EC homepage about batteries, `inner-batteries` for an EU inner page
on the same topic, plain `homepage`/`inner` for a generic placeholder pass.
If `dist/{page}/` already exists under the proposed name, surface that now
rather than waiting for Step 3's overwrite check to catch it.

**Once these are answered, open the doc matching the chosen page type**
(this file's intro) and follow its Step 1 — it may ask its own further
follow-up question first (e.g. the inner-page doc asks a layout-shape
question before it can state its structural rules), then covers structure
and gives that type's component matrix. Come back to this file for Step 2
onward once Step 1 is done.

---

## Step 1 — derive structure (page-type-specific)

Two rules hold regardless of page type — kept here rather than repeated in
every type doc:

- `site-header` first, `site-footer` last, always. Use `lib.js`'s
  `standardSiteHeader()`/`standardSiteFooter()` — they already wire logos and
  strip the rarely-used blocks (login, custom action) that shouldn't be on
  by default. Give it a nav: `menu` (simple, ≤2 levels) or `mega_menu`
  (matches real EC/EU sites' depth) — pick per page. Keep it small (≤6
  top-level items — trim the demo data's 8 if reusing it) and strip
  promotional content, which is rare in practice: mega-menu has **three
  distinct** rarely-used fields — `info`, `featured`, `promotional` — and
  they show up at nested `children` levels too, not just top-level, so strip
  recursively, not just on the items you touch. Re-theme at least the
  top-level/topic-flexible item labels for a themed pass (deep nested items
  can stay generic — see Step 2).
- For each content section: read the component's `README.md` (params) and
  its `usage.md` (when to use it). A type doc's matrix is a shortcut for
  this, not a replacement — check the actual doc when a pick matters.

**Don't copy a `src/page-example/*` composition wholesale — and don't copy
your own most recent build of the same page type either.** The second one is
the easier trap: once one page of a given type exists, it's tempting to
reuse it as an implicit template for "efficiency," which is the exact same
mistake with a different source. Two same-type pages landing on an
identical component skeleton (same hero/top-of-page choice, same set of
content sections, same layout) with only the text swapped means structure
wasn't actually re-derived — go back through the type doc's rules and
matrix alternatives and make an independent choice. Some repetition across
pages is fine and expected where there's no real alternative for a role —
that's not the same failure as reusing a whole skeleton.

**Everything else — the page-header's visible/hidden stance, whether
there's a hero, the content grid shape, and the full component matrix — is
page-type-specific.** Read the doc for the page type chosen in Step 0
before writing any markup:
[`ecl-static-page-homepage.md`](./ecl-static-page-homepage.md) or
[`ecl-static-page-inner.md`](./ecl-static-page-inner.md).

---

## Step 2 — gather data

A type doc may add its own short Step 2 addendum (check it if you haven't
already, e.g. inner pages need body-length prose — see its own doc). The
rest below is page-type-agnostic:

- Placeholder pass: reuse each component's own `demo/data*.js` as content.
  Require it via `lib.js`'s `makeReq(REPO)` — already handles the ESM/CJS
  export-shape quirk some of those files have, don't reimplement it.
- Trim/merge fields the way existing `{page}.data.js` files do when a
  component's default demo carries more than this page needs — reusing that
  _pattern_ is fine, reusing another page's actual _layout_ isn't (Step 1).
- Don't invent copy on a placeholder pass — that's specifically what
  "themed generation" (below) or real content (Step 0) are for.
- Drop any `icon_path`/`/icons.svg` field in older demo data — v4 leftover,
  `@ecl/icon`'s current template doesn't read a path at all.
- Drop any `placeholder` field on form inputs (e.g. Highlighted-search's
  `search_input.placeholder`) — the ECL team is removing placeholder text
  from form elements by default across the board.
- When a page controls its own item count (Fact-figures, a Card/Content-item
  grid, Navigation-list — anything not just cloning a fixed-length demo
  array), pick a count that divides evenly into its column count. Nothing
  forces a mismatch here, so don't leave one — e.g. 4 items in 3 columns
  strands a lonely 4th; use 4 columns (or 2×2) instead.
- Don't carry a parameter from one component onto a similar-looking one
  without checking that component's own README — e.g. Banner has a
  documented `full_width` variant, Spotlight doesn't, despite both acting as
  page-top visuals.
- Any `date` block (Content-item, Card, etc.) needs its `variant` set
  explicitly (`'ongoing'`, `'past'`, or `'canceled'`) — the README lists it
  as optional/default `''`, but a date block with no variant renders with no
  visual state at all, and nothing errors to flag the omission. For a
  real-content date, derive it from whether the item's date is before/after
  the source's own fetch/snapshot date (e.g. a news article dated before
  the source docx's stated "fetched" date is `'past'`).
- Before wrapping a content section in an external `<h2>` for its heading,
  check the component's own `.html.twig` for whether it already renders its
  own internal title — Story-card does (its `title`/`description` params
  render as `.ecl-story-card__title`/`__description` inside the component),
  so an external `<h2>{{ story_card.title }}</h2>` above it duplicates the
  heading. Card, Content-item, Navigation-list, Featured-item, etc. don't
  render their own heading and do need the external `<h2>`. This is easy to
  miss even after reading this rule once — actually check the rendered
  output (Step 5), don't just trust the plan.
- List-illustration's `zebra` (alternating-background) treatment is a
  vertical, single-column layout only — its CSS makes the list break out to
  full viewport width and stripe alternating rows, which conflicts with the
  `--col-2`/`--col-3`/`--col-4` grid `column` sets. If `column` is anything
  other than `1` (e.g. reusing `demo/data--icon.js`, which ships `zebra:
true` at column 1), explicitly set `zebra: false` — don't leave a source
  demo's `zebra` value in place after changing `column` away from `1`.
- Any body-copy `<p>` needs an explicit `ecl-u-type-paragraph` (or
  `-paragraph-lead`) class — that's what sets its font size/color/max-width.
  A bare `<p>` picks this up for free only when it sits inside a wrapper
  literally classed `.ecl` (a global `.ecl p:not([class*='ecl-'])` rule
  extends the same styling) — `src/page-example/page-fact-sheet`'s intro
  paragraphs rely on exactly that. Don't copy that specific detail: it's an
  implicit, easy-to-lose dependency (breaks the moment the wrapper class or
  the `<p>`'s own class changes) and it's inconsistent with how every other
  paragraph on the same page is written (with the explicit class, no `.ecl`
  wrapper). Add the class directly instead, on every `<p>`, regardless of
  what wraps it.
- EC and EU ship different spacing-utility scales — don't assume an
  `ecl-u-*-{n}xl` class exists on both. EU's compiled
  `src/presets/eu/dist/styles/optional/ecl-eu-utilities.css` only defines
  spacing up to `4xl` (`xl`/`2xl`/`3xl`/`4xl`); EC's goes up to `13xl`. An
  unmatched class (e.g. `ecl-u-mt-6xl` on EU) silently no-ops — nothing
  errors, the spacing just doesn't apply, easy to miss without checking.
  `src/page-example/page-home/page-home.html.twig` is a template _shared_
  across both systems, and works around this by pairing
  `ecl-u-mt-4xl ecl-u-mt-6xl` together (4xl is the real fallback, 6xl
  silently overrides it only where it exists, i.e. EC) — that pairing trick
  only makes sense for a shared template. A single-system static page
  should grep the actual compiled
  `src/presets/{system}/dist/styles/optional/ecl-{system}-utilities.css`
  for the token it wants and use only what that system actually ships,
  rather than copying the paired-class fallback in from a shared example.

### Themed generation

When Step 0's content source is a topic (e.g. "electric cars in Europe"),
start from the same placeholder `demo/data*.js` as any other pass — same
component choice, same data shape — and only rewrite the text leaves:

- **Shape stays fixed — clone a real item, don't hand-author one.** When a
  grid needs distinct content per item (a themed news/highlights/nav-list
  section usually does — unlike a placeholder pass, don't just clone one
  item N times), clone an existing array item from the source demo data and
  overwrite its leaf values, rather than writing a new object of the
  "same shape" from memory. Nested wrapper fields are easy to flatten by
  mistake this way — e.g. `navigation-list`'s `title` is `{ link: { type,
label, path } }`, not a flat `{ type, label, path }`; get it wrong and it
  silently renders `[object Object]` instead of the text, only caught by
  actually reading the output (Step 5).
- **Icons**: pick real names from the current set — ECL moved to Phosphor,
  ~1,434 icons, listable at
  `https://webtools.europa.eu/rest/wshape?family=phosphor` (fetch this once
  per page while authoring content, via `WebFetch` — not from `build.js`,
  which stays offline/deterministic). **Set `family: 'phosphor'` on the icon
  object, always** — `{ icon: { name: 'boat', family: 'phosphor' } }`, not
  just `{ name: 'boat' }`. Without it the icon looks up an older, smaller
  default set instead, and a Phosphor-only name silently renders nothing —
  same failure mode as an invented name, easy to miss since the markup looks
  fine and only fails at runtime in a real browser. Real demo data already
  does this (`highlight-box`, `quiz`) — match that pattern. If nothing
  on-topic exists at all, fall back to a neutral icon already used elsewhere
  on the page rather than inventing a name.
- **Images**: use `lib.js`'s `picsumImage(seed, width, height)` (free,
  no API key, hotlink-safe — `<img>` isn't subject to the CORS rules that
  make self-hosting mandatory for CSS/JS/fonts). **Same width/height for
  every image within one row/grid, a distinct `seed` per image** — that's
  the actual fix for a section looking visually inconsistent, not just
  "use different images". `lib.js`'s older `STOCK_IMAGES` (10 fixed ECL S3
  photos) is a fallback only — those are deliberately mixed aspect ratios
  (Storybook demo assets, meant to show different crop scenarios), which
  looks odd once several land in the same row.
- **Invented facts/stats are expected and fine here** — this mode is
  explicitly illustrative, not the real-content path (Step 0). Keep numbers
  clearly illustrative rather than presenting invented figures with false
  precision (the demo data's own convention — e.g. Fact-figures' `"00.0
million"` placeholder — is a reasonable model to follow), and drop fields
  like Fact-figures' `sources`/`sources_label` rather than attributing a
  fabricated number to a real-sounding institution (e.g. "Eurostat") — that
  reads as a real citation, which it isn't. Noting on the page that content
  is illustrative (e.g. an HTML comment near the top of the body) is
  optional, at your judgment — not required.

### Real content

When Step 0's content source is real material the user supplies (a
sitemap, a content export, a spreadsheet/doc of real pages) rather than a
topic to generate from:

- **Raw source files live outside `dist/`, in `scripts/static-pages/demo/`**
  (unlike `dist/`, not gitignored) — they're meant to be kept, not
  regenerated. A _derived_ intermediate you extract from them (e.g. a JSON
  dump of an `.xlsx`/`.docx`) is not itself a source, though — it belongs
  next to the page that consumes it, under `dist/{page}/` (Step 4), since
  it's just as regenerable as the composition itself.
- **Don't hand-retype tabular/document source into JS.** Transcribing an
  `.xlsx`/`.docx` by eye risks silent drift from the source (wrong date, a
  paraphrased title). Extract it programmatically instead — e.g. a short
  Python script (`openpyxl`/`python-docx`, installed into a throwaway venv
  if not already available — no need to add them as repo dependencies) or
  equivalent, writing a JSON file under `dist/{page}/` for `.data.js` to
  `require()` as data, not retyped as literals.
- **No hotlinking the source site's own images.** Themed generation has
  `picsumImage()` for a reason — real content has real photos, but their
  licensing/hotlinking terms aren't yours to assume, and external hosts
  routinely block hotlinked `<img>` requests anyway. Fall back to the same
  placeholder strategy as themed generation (component demo images or
  `picsumImage()`) even though the text is real.
- **A recommended component with no real data behind it gets dropped, not
  invented.** E.g. Fact-figures wants numeric stats — if the real content
  pulled doesn't include any, leave Fact-figures out rather than filling it
  with a plausible-looking number. "Don't invent copy" (Step 0) applies
  harder here than in themed generation, which is explicitly allowed to
  invent illustrative figures.
- **Link teasers to their real destination URL when known.** That's more
  honest than a `#example` placeholder for content that has a genuine
  source page, even when this build only covers one page and not the
  destination page itself.

---

## Step 3 — write and build the page

**Check first: does `dist/{page}/{page}.html.twig` or
`dist/{page}/{page}.data.js` already exist?** `dist/` is gitignored (Step 4)
— there is no tracked copy to recover from, so overwriting either file
destroys the previous composition for good. If they exist and this isn't
explicitly a throwaway/test iteration on the same page, confirm with the
user before overwriting (or write under a different `{page}` name instead).

Write two files into `scripts/static-pages/dist/{page}/` (not tracked —
Step 4):

- `{page}.html.twig` — your Step 1 composition.
- `{page}.data.js` — `module.exports = function buildData({ REPO,
ASSETS_DIR, SYSTEM, req, clone }) { ... return data; }`. Require `lib.js`
  for page-type-agnostic helpers and the matching `lib-{type}.js` (e.g.
  `lib-homepage.js`, `lib-inner.js`) for that type's page-header helper —
  don't require a `lib-{type}.js` for a type other than the one you're
  building. Any derived data file it needs (Step 2's "Real content") sits
  in this same folder — `require('./whatever.json')` rather than an
  absolute/`REPO`-relative path.

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
`lib-homepage.js`, `lib-inner.js`, `README.md` are committed.

Each page gets its own subfolder, `dist/{page}/`, holding **everything**
specific to it — `{page}.html.twig`, `{page}.data.js`, any derived data file
`.data.js` reads, the generated `{page}.html`, and its own copy of the
self-hosted preset assets (`assets/{system}/{styles,scripts,fonts,images}/`,
copied fresh per page rather than shared from one top-level `dist/assets/`).
That duplication is deliberate: it's what makes `dist/{page}/` deployable
standalone by itself — zip it up and it's complete, matching the whole
pipeline's actual goal (see this doc's intro). The whole `dist/` tree is
gitignored ("dist" is a blanket-ignored dirname repo-wide, no `.gitignore`
edits needed) — a deliberate PoC-stage choice (see `build.js`'s header
comment for the reasoning); no per-page content is meant to sit in the repo
yet.

**Consequence**: wiping `dist/` (or one `dist/{page}/`) deletes that page's
composition and data along with its output — there's no tracked copy of
either. Don't clean it wholesale without checking what's in there first.

For a new page, add `dist/{page}/{page}.twig`/`.data.js` and reuse the
existing `build.js`/`lib.js`/`lib-{type}.js` — don't start a new layout per
page. **Working on one page shouldn't touch another** — don't edit a
sibling page's folder, and don't reference one page's file from another's
comments (point at this doc, a type doc, or a component's own docs
instead); rebuilding a page you didn't change is unnecessary unless
`build.js`/`lib.js`/`lib-{type}.js` themselves changed.

**Real-content source material is the exception to "nothing persists" — and
lives outside any `dist/{page}/` folder entirely.** A sitemap/content
export the user wants to keep across rebuilds belongs in
`scripts/static-pages/demo/`, which is not gitignored (see Step 2's "Real
content" subsection). Anything _derived_ from that source (e.g. a JSON
extraction meant for one `.data.js` to `require()`) is page-specific output,
not source-of-truth — that goes in `dist/{page}/` alongside the rest of
that page's files, not in `demo/`.

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
  `curl` the HTML page, the module script, the main CSS, and (EC only — EU
  ships no self-hosted fonts, see `scripts/static-pages/README.md`) a font
  file; check for `200`/sane `Content-Type`, then stop it.

- Don't reach for `claude-in-chrome` unless the user asks for it — they can
  check the visual result themselves once `serve.js` is running.
