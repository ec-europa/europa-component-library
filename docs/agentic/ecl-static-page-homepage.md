# ecl-static-page — Homepage

Page-type-specific half of the `ecl-static-page` skill. Read this only once
[`ecl-static-page.md`](./ecl-static-page.md)'s Step 0 has settled on
**Homepage** as the page type — it owns Step 1 fully for this type (no
follow-up question needed, unlike the inner-page doc) and gives this type's
component matrix. Return to the main doc for Step 2 onward.

---

## Step 1 — structure

- `page-header` is **always present**, even though nothing in it is
  visually shown here — it's where the page's one `<h1>` lives, and it
  stays structurally mandatory regardless (`ecl-static-page.md`'s Step 1).
  Title hidden (`hide_title: true`), breadcrumb/description/meta/pictures
  stripped — already implemented as `lib-homepage.js`'s
  `homepagePageHeader(req, clone)`, reuse it rather than re-deriving.
- Main content: `<main>` → `.ecl-container` → `.ecl-row`/`.ecl-col-*` grid.
- **The hero is Banner, Carousel, or the (hidden-title) page-header itself**
  — never Spotlight, despite it sitting next to Banner/Carousel in the
  source tree and reading hero-ish in its own `usage.md`. Spotlight is a
  content-area callout (see the matrix). This is current guidance direct
  from the ECL team, ahead of that doc being tightened on their side. When
  the hero is a Banner or Carousel, set `full_width: true` on it — both
  default to `false` (constrained to the grid), which reads as an
  undersized hero; a hero should span the full container.
- When re-deriving structure instead of reusing a prior build (the anti-
  copy-paste rule in `ecl-static-page.md`'s Step 1), the real alternatives
  to weigh are: Banner vs Carousel vs a visible page-header for the hero;
  Card vs Content-item vs Featured-item vs Story-card vs Spotlight for
  content highlights. Some repetition is fine where there's no real
  alternative for a role (Navigation-list for site wayfinding, Fact-figures
  for stats).

---

## Reference: recommended components

Non-binding — a lookup to speed this step up, not a checklist. Still
sanity-check a pick against its own `usage.md` when it matters.

| Component                     | Homepage              | Notes                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site-header                   | Always                | `lib.js`'s `standardSiteHeader()`; nav = `menu` or `mega_menu`, no login/custom action by default                                                                                                                                                                                                                                                    |
| page-header                   | Always (title hidden) | `lib-homepage.js`'s `homepagePageHeader()`                                                                                                                                                                                                                                                                                                           |
| site-footer                   | Always                | `lib.js`'s `standardSiteFooter()`; `-ec`/`-eu` Twig entry point per system                                                                                                                                                                                                                                                                           |
| Banner                        | Hero                  | general-purpose default; `full_width: true`                                                                                                                                                                                                                                                                                                          |
| Carousel                      | Hero / ticker         | multiple rotating messages; own usage.md names homepage use; `full_width: true`                                                                                                                                                                                                                                                                      |
| Highlighted-search            | Hero (situational)    | only if the page is search-driven; no usage.md yet                                                                                                                                                                                                                                                                                                   |
| Navigation-list               | Recommended           | **the** site-wayfinding component — not List-illustration. Default (no `variant`/`picture`) is the safe default — `image-as-illustration` is valid but needs images actually sized for the slot, which generic stock images usually aren't; `illustration` is for small vector-style graphics (its own demo uses an inline base64 image), not photos |
| Card                          | Recommended           | teaser grid, news/events/shallow content                                                                                                                                                                                                                                                                                                             |
| Content-item                  | Recommended           | teaser; picture **or** `date` block, never both (both render independently if both are set) — pick one, stay consistent within a grid                                                                                                                                                                                                                |
| Featured-item                 | Recommended           | single denser highlight                                                                                                                                                                                                                                                                                                                              |
| Story-card                    | Recommended           | self-contained editorial mini-carousel; description per item is optional but include one anyway — title+link-only items look visually thin. Renders its own `title`/`description` internally — no external `<h2>` above it, that duplicates the heading (`ecl-static-page.md`'s Step 2)                                                              |
| Spotlight                     | Content only          | **not** a hero, despite looking like one — "In focus"-style callout                                                                                                                                                                                                                                                                                  |
| Fact-figures                  | Recommended           | stats/credibility, quick orientation; use icons; 3 items/columns reads better than 4; suffix (thousand/million/%) only where the number actually warrants one, not on every item                                                                                                                                                                     |
| Slogan-ticker                 | Recommended           | short rotating taglines                                                                                                                                                                                                                                                                                                                              |
| Social-media-follow           | Recommended           | own usage.md: place at the bottom                                                                                                                                                                                                                                                                                                                    |
| Highlight-box                 | Recommended           | compact single title+description+link callout (e.g. feedback prompt)                                                                                                                                                                                                                                                                                 |
| Add-to-calendar               | Situational           | **a single spotlighted event, not a grid** — it's meant to highlight one important upcoming event, not to be repeated side by side for several; `full_width: true` only when it's paired with a full-width element like the hero banner, otherwise let it take the full container width (not a column)                                               |
| List-illustration             | Not recommended       | own usage.md explicitly rules out navigational use — Navigation-list owns the wayfinding role on a homepage instead                                                                                                                                                                                                                                  |
| Category-filter               | Not recommended       | list/search/filtered-results pages, not homepage                                                                                                                                                                                                                                                                                                     |
| Mega-menu / Menu              | N/A                   | header navigation only, never a standalone section (already inside site-header)                                                                                                                                                                                                                                                                      |
| Breadcrumb, Inpage-navigation | N/A                   | inner-page-only components — see `ecl-static-page-inner.md`                                                                                                                                                                                                                                                                                          |

Every homepage built so far omits `Mega-menu`/`Menu`/`Category-filter`/
`List-illustration` as standalone sections for the reasons above — if one of
those looks tempting for a new homepage, that's the signal to check its
`usage.md` before including it.
