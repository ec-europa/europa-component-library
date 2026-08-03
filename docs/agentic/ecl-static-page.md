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

- **System**: EC or EU. Never mixed. No default — present both neutrally,
  don't label either "recommended", both are equally valid.
- **Page type**: which preset. Homepage is the only one built out so far
  (see the matrix below). Anything else: no existing composition to lean
  on, do full component research per Step 1.
- **Content source**: three options —
  1. **Placeholder/demo** (default) — each component's own `demo/data*.js`,
     unmodified.
  2. **Themed generation** — the user gives a topic (e.g. "electric cars in
     Europe"); content is invented on-topic but explicitly illustrative, not
     real. See Step 2's "Themed generation" subsection.
  3. **Real content** — supplied by the user. Not built out beyond "don't
     invent copy" (Step 2) — treat a first real run of it as exploratory.
     A prompt that names a topic directly (as in the example above) already
     answers this question — don't ask it again, just confirm the topic if it's
     ambiguous.

---

## Step 1 — derive structure from rules, not from copying an example

**Don't copy a `src/page-example/*` composition wholesale — and don't copy
your own most recent build of the same page type either.** The second one is
the easier trap: once one page of a given type exists, it's tempting to
reuse it as an implicit template for "efficiency," which is the exact same
mistake with a different source. Two same-type pages landing on an
identical component skeleton (same hero component, same set of content
sections, same layout) with only the text swapped means structure wasn't
actually re-derived — go back through Step 1's rules and the matrix's
alternatives (Banner vs Carousel vs a visible page-header for the hero;
Card vs Content-item vs Featured-item vs Story-card vs Spotlight for content
highlights) and make an independent choice. Some repetition across pages is
fine and expected where there's no real alternative for a role (Navigation-
list for site wayfinding, Fact-figures for stats) — that's not the same
failure as reusing a whole skeleton. Rules that hold for every page:

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
  team, ahead of that doc being tightened on their side. When the hero is a
  Banner or Carousel, set `full_width: true` on it — both default to `false`
  (constrained to the grid), which reads as an undersized hero; a hero should
  span the full container.
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

---

## Step 3 — write and build the page

**Check first: does `dist/{page}.html.twig` or `dist/{page}.data.js` already
exist?** `dist/` is gitignored (Step 4) — there is no tracked copy to recover
from, so overwriting either file destroys the previous composition for good.
If they exist and this isn't explicitly a throwaway/test iteration on the
same page, confirm with the user before overwriting (or write under a
different `{page}` name instead).

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
  `curl` the HTML page, the module script, the main CSS, and (EC only — EU
  ships no self-hosted fonts, see `scripts/static-pages/README.md`) a font
  file; check for `200`/sane `Content-Type`, then stop it.

- Don't reach for `claude-in-chrome` unless the user asks for it — they can
  check the visual result themselves once `serve.js` is running.

---

## Reference: recommended components per page type

Non-binding — a lookup to speed up Step 1, not a checklist. Still
sanity-check a pick against its own `usage.md` when it matters. Columns are
page types (add one as each gets built out via Step 0).

| Component           | Homepage           | Notes                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site-header         | Always             | `lib.js`'s `standardSiteHeader()`; nav = `menu` or `mega_menu`, no login/custom action by default                                                                                                                                                                                                                                                    |
| page-header         | Always             | title hidden; holds the page's one h1                                                                                                                                                                                                                                                                                                                |
| site-footer         | Always             | `lib.js`'s `standardSiteFooter()`; `-ec`/`-eu` Twig entry point per system                                                                                                                                                                                                                                                                           |
| Banner              | Hero               | general-purpose default                                                                                                                                                                                                                                                                                                                              |
| Carousel            | Hero / ticker      | multiple rotating messages; own usage.md names homepage use                                                                                                                                                                                                                                                                                          |
| Highlighted-search  | Hero (situational) | only if the page is search-driven; no usage.md yet                                                                                                                                                                                                                                                                                                   |
| Navigation-list     | Recommended        | **the** site-wayfinding component — not List-illustration. Default (no `variant`/`picture`) is the safe default — `image-as-illustration` is valid but needs images actually sized for the slot, which generic stock images usually aren't; `illustration` is for small vector-style graphics (its own demo uses an inline base64 image), not photos |
| Card                | Recommended        | teaser grid, news/events/shallow content                                                                                                                                                                                                                                                                                                             |
| Content-item        | Recommended        | teaser; picture **or** `date` block, never both (both render independently if both are set) — pick one, stay consistent within a grid                                                                                                                                                                                                                |
| Featured-item       | Recommended        | single denser highlight                                                                                                                                                                                                                                                                                                                              |
| Story-card          | Recommended        | self-contained editorial mini-carousel                                                                                                                                                                                                                                                                                                               |
| Spotlight           | Content only       | **not** a hero, despite looking like one — "In focus"-style callout                                                                                                                                                                                                                                                                                  |
| Fact-figures        | Recommended        | stats/credibility, quick orientation; use icons; 3 items/columns reads better than 4; suffix (thousand/million/%) only where the number actually warrants one, not on every item                                                                                                                                                                     |
| Slogan-ticker       | Recommended        | short rotating taglines                                                                                                                                                                                                                                                                                                                              |
| Social-media-follow | Recommended        | own usage.md: place at the bottom                                                                                                                                                                                                                                                                                                                    |
| Highlight-box       | Recommended        | compact single title+description+link callout (e.g. feedback prompt)                                                                                                                                                                                                                                                                                 |
| Add-to-calendar     | Situational        | events-heavy homepages only                                                                                                                                                                                                                                                                                                                          |
| List-illustration   | Not recommended    | editorial/informational — own usage.md explicitly rules out navigational use                                                                                                                                                                                                                                                                         |
| Category-filter     | Not recommended    | list/search/filtered-results pages, not homepage                                                                                                                                                                                                                                                                                                     |
| Mega-menu / Menu    | N/A                | header navigation only, never a standalone section (already inside site-header)                                                                                                                                                                                                                                                                      |

Every homepage built so far omits `Mega-menu`/`Menu`/`Category-filter`/
`List-illustration` as standalone sections for the reasons above — if one of
those looks tempting for a new page, that's the signal to check its
`usage.md` before including it.
