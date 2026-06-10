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

Follow the pattern in any existing `{name}.test.js`:

- One `describe` block per component, one per variant/state.
- Each variant needs its own snapshot test. Extra classes, extra attributes, and the axe
  test only need to appear once per file — put them in the default/first describe block.
- Use `renderTwigFileAsNode` for snapshot tests, `renderTwigFileAsHtml` for axe.
- Pass `true` as the third argument to `renderTwigFileAsHtml` only when testing a
  full-page component that needs a page wrapper for valid landmark structure.
