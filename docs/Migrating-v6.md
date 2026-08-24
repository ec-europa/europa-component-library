# ECL v6 migration notes

The following guidelines aim to facilitate the migration from ECL v5 to v6.

## Code previously deprecated in v5

Following elements have been deprecated, and are removed in ECL v6

### Tokens

- token `border-high` (css: `--cm-border-high`)

### Components

- featured item:
  - parameter `link_highlighted` (replaced by `link_display`)
- file:
  - parameter `variant` (not used anymore)
  - parameter `detail_meta` (replaced by `primary_meta`)
  - parameter `translation.toggle` (now set in the template directly)
- site header:
  - parameter `banner_top` (previously used for class name)
