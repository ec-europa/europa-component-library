# Skill: ECL component testing

ECL tests are Jest-based. Each component has two kinds of assertions:
**snapshot tests** (HTML output) and **accessibility tests** (axe-core).

## Running tests

```bash
pnpm test:components               # all components — slow, avoid unless needed
pnpm test:components -- button     # single component by folder name
npm run test:components -- button -u  # update snapshots for one component only
npm run test:components -- -u         # update all snapshots (use sparingly)
```

## Snapshot failures

A snapshot failure means the rendered HTML changed. This can be:

- **Expected** — you changed the template or data intentionally. Review the diff in
  `__snapshots__/{name}.test.js.snap`, confirm it reflects your change, then run with `-u`.
- **Unexpected** — a side-effect from another change. Investigate before updating.

Read the snapshot diff before running `-u`. Updating without reading is an error.

## Accessibility (axe) failures

Axe failures are HTML/ARIA structural problems, not CSS issues. Common causes:

| axe rule            | Likely cause                          | Fix                                                              |
| ------------------- | ------------------------------------- | ---------------------------------------------------------------- |
| `color-contrast`    | Inline style or hardcoded colour      | Use theme token, check contrast ratio                            |
| `label`             | Form input without associated label   | Add `<label for="">` or `aria-label`                             |
| `button-name`       | Icon-only button with no text         | Add `aria-label` or visually hidden span                         |
| `landmark-one-main` | Full-page snapshot missing `<main>`   | Use `renderTwigFileAsHtml(..., true)` (wraps in a page scaffold) |
| `duplicate-id`      | Same `id` used in multiple test cases | Make IDs unique per test case in `data.js`                       |

Axe runs on the HTML string. Fix the Twig template or demo data — not the test file.

**Snapshot warnings about dynamic content**: demo data must be static and deterministic.
Dynamic values (lorem ipsum generators, random IDs, timestamps) cause snapshot warnings
on every run even when nothing changed.

## Writing new tests

### Before writing anything

1. **Read `{name}.test.js`** — understand the existing `describe` structure, what data
   variables are already defined at the top, and what's already covered.
2. **Check the template if needed** — if the test data shape is unclear, grep the Twig
   file for the parameter name to confirm it's a direct top-level param:
   ```bash
   grep -n "param_name" src/components/{name}/{name}.html.twig
   ```

### Placement rules

- Add inside an **existing** `describe` block when testing a variation of that variant
  (e.g. a `link_display: 'button'` test belongs inside `describe('Default', ...)`).
- Add a **new** `describe` block only for a genuinely distinct variant with its own
  identity (e.g. a whole new data file or a structurally different state).
- Extra classes, extra attributes, and the axe test only need to appear once per file —
  keep them in the default/first describe block.

### Test structure

- Use `renderTwigFileAsNode` for snapshot tests, `renderTwigFileAsHtml` for axe.
- Pass `true` as the third argument to `renderTwigFileAsHtml` only when testing a
  full-page component that needs a page wrapper for valid landmark structure.
- Build test data from the existing top-level variables (spread or `merge`) — do not
  re-import data files that are already imported.

After adding tests, run without `-u` first to confirm new snapshots are written (not
failing). Any failed snapshots = data or template mismatch to investigate.
