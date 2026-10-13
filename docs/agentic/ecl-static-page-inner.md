# ecl-static-page — Inner page

Page-type-specific half of the `ecl-static-page` skill. Read this only once
[`ecl-static-page.md`](./ecl-static-page.md)'s Step 0 has settled on
**Inner page** as the page type — it owns Step 1 fully for this type,
starting with its own follow-up question below, and gives this type's
component matrix. Return to the main doc for Step 2 onward (including this
doc's own short Step 2 addendum, at the bottom).

---

## Step 1 — layout shape (ask first)

Before any structural rule below can be applied, ask which shape this page
is — its own `AskUserQuestion` call, since the answer decides the grid and
several component picks that follow:

- **Sidebar + anchor navigation** — a long, sectioned document:
  `inpage-navigation` down the side jumping to `id`-anchored `<h2>`s in a
  narrower content column. Modelled on `src/page-example/page-inner`
  (derive rules from it, don't copy it wholesale — `ecl-static-page.md`'s
  Step 1).
- **Single-column article** — shorter, flatter content: no sidebar, a
  content-area `Banner` under the page-header, full-width prose
  interspersed with data/illustration components. Modelled on
  `src/page-example/page-fact-sheet` (same caveat).

This decides the skeleton shape only — which components fill it is still a
judgment call from the matrix below, not implied by the choice.

---

## Step 1 — structure

- `page-header` is **always present** — same structural rule as any page
  type (`ecl-static-page.md`'s Step 1) — but its stance here is the
  opposite of a homepage's: title **shown** and breadcrumb populated, since
  an inner page isn't the site root and both are meaningful. `lib-inner.js`'s
  `innerPageHeader(req, clone)` gives the right starting shape (keeps
  title/breadcrumb/description/meta, strips only the rarely-used
  picture/expandable blocks); the page's own data still has to set real
  `title`/`breadcrumb.links` text.
- Main content grid depends on the layout shape chosen above:
  - **Sidebar shape**: `.ecl-col-12 .ecl-col-l-3` (`inpage-navigation`) +
    `.ecl-col-12 .ecl-col-l-9` (content), inside `.ecl-container` →
    `.ecl-row`.
  - **Single-column shape**: `.ecl-container` with no row/col split — full
    container width throughout.
- **There is no hero.** The (now-visible) page-header is the top of the
  page. The single-column shape may still open with a `Banner`, but it's a
  content-area banner sitting _below_ the page-header — unconstrained by
  the hero `full_width` convention (see `src/page-example/page-fact-sheet`)
  — not a hero standing in for one.
- When re-deriving structure instead of reusing a prior build (the anti-
  copy-paste rule in `ecl-static-page.md`'s Step 1), the real alternatives
  to weigh are: Featured-item vs Story-card vs Blockquote vs List-
  illustration for a content highlight; Tabs vs a plain sectioned layout for
  parallel content. Some repetition is fine where there's no real
  alternative for a role (Breadcrumb/Inpage-navigation for in-page
  wayfinding, Fact-figures for stats).

---

## Reference: recommended components

Non-binding — a lookup to speed this step up, not a checklist. Still
sanity-check a pick against its own `usage.md` when it matters.

| Component              | Inner page                                    | Notes                                                                                                                                                                                                                                                                                                                                |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| site-header            | Always                                        | `lib.js`'s `standardSiteHeader()`; nav = `menu` or `mega_menu`, no login/custom action by default                                                                                                                                                                                                                                    |
| page-header            | Always (title **shown**)                      | `lib-inner.js`'s `innerPageHeader()` — title and breadcrumb are meaningful here, the opposite of a homepage                                                                                                                                                                                                                          |
| Breadcrumb             | Always                                        | never standalone — set via `page_header.breadcrumb`, populated because it's visible here (unlike the homepage)                                                                                                                                                                                                                       |
| Inpage-navigation      | Recommended (sidebar layout shape only)       | anchor nav to `id`-anchored `<h2>`s in the content column; only exists in the sidebar layout shape, not the single-column one — see `src/page-example/page-inner`                                                                                                                                                                    |
| site-footer            | Always                                        | `lib.js`'s `standardSiteFooter()`; `-ec`/`-eu` Twig entry point per system                                                                                                                                                                                                                                                           |
| Banner                 | Situational (single-column layout shape only) | a content-area banner sitting below the (visible) page-header, not a hero — see `src/page-example/page-fact-sheet`                                                                                                                                                                                                                   |
| Carousel               | Not typical                                   | no rotating hero on an inner page                                                                                                                                                                                                                                                                                                    |
| Highlighted-search     | Not applicable                                | only if the page is search-driven; no usage.md yet                                                                                                                                                                                                                                                                                   |
| Navigation-list        | Situational                                   | a content-area link list, not the page's primary nav — that's Breadcrumb + Inpage-navigation                                                                                                                                                                                                                                         |
| Card                   | Situational                                   | a related/further-reading teaser grid, not this page type's primary content                                                                                                                                                                                                                                                          |
| Content-item           | Situational                                   | teaser; picture **or** `date` block, never both (both render independently if both are set) — pick one, stay consistent within a grid                                                                                                                                                                                                |
| Featured-item          | Recommended                                   | single denser highlight — `page-fact-sheet`'s primary content-highlight pattern, repeated with alternating `left`/`right` variants                                                                                                                                                                                                   |
| Story-card             | Recommended                                   | self-contained editorial mini-carousel; description per item is optional but include one anyway — title+link-only items look visually thin. `page-inner` uses it as an in-content aside. Renders its own `title`/`description` internally — no external `<h2>` above it, that duplicates the heading (`ecl-static-page.md`'s Step 2) |
| Spotlight              | Content only                                  | **not** a hero, despite looking like one — "In focus"-style callout                                                                                                                                                                                                                                                                  |
| Fact-figures           | Recommended                                   | stats/credibility, quick orientation; use icons; 3 items/columns reads better than 4; suffix (thousand/million/%) only where the number actually warrants one, not on every item                                                                                                                                                     |
| List-illustration      | Recommended                                   | own usage.md explicitly rules out navigational use, so this is content illustration mid-article (`page-fact-sheet`), never in-page navigation — that's Inpage-navigation's role. `zebra` is vertical/`column: 1` only — turn it off if `column` is anything else (`ecl-static-page.md`'s Step 2)                                     |
| Blockquote             | Recommended                                   | pull-quote break in long-form prose (`page-fact-sheet`)                                                                                                                                                                                                                                                                              |
| Table                  | Situational                                   | tabular data mid-article                                                                                                                                                                                                                                                                                                             |
| Timeline               | Situational                                   | chronological content (`page-fact-sheet`)                                                                                                                                                                                                                                                                                            |
| Tabs                   | Situational                                   | grouping parallel content within one section (`page-inner`); needs each panel's own matching `id="ecl-tabs-N"` markup alongside the include — check its own README before reusing                                                                                                                                                    |
| Gallery                | Situational                                   | image set, typically closing out a content section (`page-inner`)                                                                                                                                                                                                                                                                    |
| File                   | Situational                                   | downloadable document link                                                                                                                                                                                                                                                                                                           |
| Modal                  | Situational                                   | needs a manual trigger button + matching `id` wired to it, not just the include on its own — see `page-inner`'s `id="modal-toggle"` pattern                                                                                                                                                                                          |
| Ordered/Unordered-list | Recommended                                   | plain content lists; used in both `page-inner` and `page-fact-sheet`                                                                                                                                                                                                                                                                 |
| Animated-numbers       | Situational                                   | `page-inner` closes with a full-width stat band above the footer (`with_background: true`), not a mid-content section                                                                                                                                                                                                                |
| Slogan-ticker          | Not typical                                   | short rotating taglines                                                                                                                                                                                                                                                                                                              |
| Social-media-follow    | Situational                                   | own usage.md: place at the bottom                                                                                                                                                                                                                                                                                                    |
| Highlight-box          | Situational                                   | compact single title+description+link callout (e.g. feedback prompt)                                                                                                                                                                                                                                                                 |
| Add-to-calendar        | Situational                                   | **a single spotlighted event, not a grid** — it's meant to highlight one important upcoming event, not to be repeated side by side for several                                                                                                                                                                                       |
| Category-filter        | Not recommended                               | list/search/filtered-results pages — a third page type not yet built                                                                                                                                                                                                                                                                 |
| Mega-menu / Menu       | N/A                                           | header navigation only, never a standalone section (already inside site-header)                                                                                                                                                                                                                                                      |

---

## Step 2 addendum

**Inner pages need body-length prose, not teaser fields.** Homepage
content sections are all short — a headline, a one-line description, a
meta string. An inner page's main column is the opposite: multi-paragraph
body text between components (see `page-inner`/`page-fact-sheet`'s
`<p class="ecl-u-type-paragraph">` blocks). A placeholder pass can reuse a
component's own long-form demo copy where one exists (e.g. Blockquote,
Featured-item's `description`); a themed/real pass needs to actually
write/extract paragraph-length text for the gaps, not truncate it down to
teaser length out of habit.
