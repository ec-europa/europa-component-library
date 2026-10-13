/* eslint-disable */
// Inner-page-only helper. Pulled in only by an inner page's data.js — see
// docs/agentic/ecl-static-page.md's intro and lib.js's header comment for
// why this isn't just folded into the shared lib.js.

// Inner-page page-header: the opposite stance from homepage's
// (lib-homepage.js) — title shown and breadcrumb kept, since an inner page
// isn't the site root and both are meaningful there (docs/agentic/ecl-
// static-page-inner.md, Step 1). Only the rarely-used picture/expandable
// blocks are stripped by default. The page's own data.js still has to set
// real title/breadcrumb.links text — this just gives the right starting
// shape.
function innerPageHeader(req, clone) {
  const pageHeader = clone(req('page-header/demo/data.js'));
  delete pageHeader.picture_background;
  delete pageHeader.picture_thumbnail;
  delete pageHeader.expandable;
  return pageHeader;
}

module.exports = {
  innerPageHeader,
};
