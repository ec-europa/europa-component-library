/* eslint-disable */
// Homepage-only helper. Pulled in only by a homepage's data.js — see
// docs/agentic/ecl-static-page.md's intro and lib.js's header comment for
// why this isn't just folded into the shared lib.js.

// page-header is structurally mandatory (docs/agentic/ecl-static-page-
// homepage.md, Step 1) — it's where the page's one-and-only h1 lives,
// whether or not the title is visually shown. On a homepage there's
// usually nothing meaningful for the title/breadcrumb/meta to say, so
// hide/strip them rather than dropping the component itself.
function homepagePageHeader(req, clone) {
  const pageHeader = clone(req('page-header/demo/data.js'));
  pageHeader.hide_title = true;
  delete pageHeader.breadcrumb;
  delete pageHeader.description;
  delete pageHeader.meta;
  delete pageHeader.picture_background;
  delete pageHeader.picture_thumbnail;
  delete pageHeader.expandable;
  return pageHeader;
}

module.exports = {
  homepagePageHeader,
};
