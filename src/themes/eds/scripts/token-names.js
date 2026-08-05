/**
 * Token naming helpers shared between `scripts/generate-tokens.js` (Node,
 * generates the Sass maps / CSS custom properties) and the Storybook
 * `eds-tokens.story.js` (browser, just needs to reference the same CSS
 * custom property names against the real compiled `ecl-eds.css`). Keeping
 * this in one place guarantees both stay in sync — plain CommonJS/ES5, no
 * Node-specific APIs, so it runs unmodified in either environment.
 */

/**
 * Walks a W3C Design Tokens tree and returns a flat map of
 * 'path/joined/with/slashes' -> the token node ({ $type, $value, $extensions }).
 */
function flatten(node, prefix = '', out = {}) {
  if (node && typeof node === 'object') {
    if (Object.prototype.hasOwnProperty.call(node, '$value')) {
      out[prefix] = node;
      return out;
    }
    Object.keys(node).forEach((key) => {
      if (key.startsWith('$')) return;
      flatten(node[key], prefix ? `${prefix}/${key}` : key, out);
    });
  }
  return out;
}

// 1-2 char abbreviations for the top-level token category, applied only to
// generated CSS custom property names (kept full-length in Sass map
// variable names) - shrinks the compiled CSS meaningfully given how many
// custom properties this theme emits. Mirrors ec's own shorthand aliases
// (--c-p, --fs-m, --s-m, --sh-1, ...).
const CATEGORY_ABBREVIATIONS = {
  color: 'c',
  spacing: 'sp',
  sizing: 'sz',
  font: 'f',
  'border-radius': 'br',
  'border-width': 'bw',
  opacity: 'op',
  shadow: 'sh',
};

function cssVarName(prefix, pathSegments) {
  const [category, ...rest] = pathSegments;
  const abbreviatedCategory = CATEGORY_ABBREVIATIONS[category] || category;
  const abbreviatedSegments = [abbreviatedCategory, ...rest];
  // Source segments like 'default--hover' use a double dash as an internal
  // state separator; collapse to single dashes so the result is valid
  // kebab-case (stylelint's custom-property-pattern rejects '--' mid-name).
  return `--${prefix}-${abbreviatedSegments.join('-')}`.replace(
    /-{2,}/g,
    (m, offset) => (offset === 0 ? m : '-'),
  );
}

// Groups a flat { 'color/surface/primary/default': node } dict by its
// second path segment ('surface', 'on-surface', 'border', ...), preserving
// source order within each group.
function groupColorTokens(colorDict) {
  const groups = {};
  Object.keys(colorDict)
    .filter((key) => key.startsWith('color/'))
    .forEach((key) => {
      const segments = key.split('/');
      const groupName = segments[1];
      groups[groupName] = groups[groupName] || [];
      groups[groupName].push(segments);
    });
  return groups;
}

module.exports = {
  flatten,
  CATEGORY_ABBREVIATIONS,
  cssVarName,
  groupColorTokens,
};
