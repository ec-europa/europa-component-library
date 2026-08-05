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
// source order within each group. Semantic tokens only ever nest 1-3 levels
// deep under a fixed set of top categories, so a fixed grouping depth works.
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

// Same idea for primitive color tokens, but primitives nest to varying
// depths ('color/european-blue/600' vs 'color/functional/red/600' vs
// 'color/alpha/silver-fog/0/8') - group by everything except the final
// step, which groups each palette (or palette/base, for the two-level
// 'functional'/'domain'/'alpha' containers) together regardless of depth.
function groupPrimitiveColorTokens(colorDict) {
  const groups = {};
  Object.keys(colorDict)
    .filter((key) => key.startsWith('color/'))
    .forEach((key) => {
      const segments = key.split('/');
      const groupName = segments.slice(1, -1).join('/');
      groups[groupName] = groups[groupName] || [];
      groups[groupName].push(segments);
    });
  return groups;
}

// Shortens a #RRGGBB[AA] hex string to #RGB[A] when every channel pair
// repeats its digit (stylelint's color-hex-length rule requires this).
function shortenHex(hex) {
  const pairs = hex.slice(1).match(/.{2}/g);
  const canShorten = pairs.every((pair) => pair[0] === pair[1]);
  if (!canShorten) return hex;
  return `#${pairs.map((pair) => pair[0]).join('')}`;
}

// Renders a token's color `$value` (the Figma { colorSpace, components,
// alpha, hex } object) as a hex string, folding alpha in as a trailing
// channel and shortening where possible.
function colorToHex(value) {
  const alphaHex =
    value.alpha === 1
      ? ''
      : Math.round(value.alpha * 255)
          .toString(16)
          .padStart(2, '0')
          .toUpperCase();
  return shortenHex(`${value.hex}${alphaHex}`);
}

module.exports = {
  flatten,
  CATEGORY_ABBREVIATIONS,
  cssVarName,
  groupColorTokens,
  groupPrimitiveColorTokens,
  colorToHex,
};
