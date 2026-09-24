// Turns tokens.json's color maps into swatch/pair data for the "Primitive
// colors", "Domain colors" and "Semantic colors" stories.
import tokens from '../tokens.json';
import { renderGroup, renderSwatchGrid, renderPairGrid } from './render';

function cssColorVar(key) {
  return `--eds-c-${key}`;
}

// --- Primitive colors ----------------------------------------------------
// Groups by "family": everything before the trailing numeric step, e.g.
// 'domain-blue-navy-700' -> family 'domain-blue-navy', step '700'.
function groupPrimitiveColors(colorMap) {
  const groups = {};
  Object.entries(colorMap).forEach(([key, hex]) => {
    const match = key.match(/^(.*)-(\d+)$/);
    if (!match) return;
    const [, family, step] = match;
    groups[family] = groups[family] || [];
    groups[family].push({ step, hex });
  });
  return groups;
}

const primitiveColorGroups = groupPrimitiveColors(tokens.primitives.color);

function buildPrimitiveColorGroup(label, family) {
  const items = (primitiveColorGroups[family] || []).map(({ step, hex }) => ({
    background: hex,
    label: step,
    code: hex,
  }));
  if (!items.length) {
    console.warn(`[eds-foundations] no primitive color tokens for: ${family}`);
    return '';
  }
  return renderGroup(label, renderSwatchGrid(items, { compact: true }));
}

// Alpha families share one r/g/b - show it as hex once in the title, each
// swatch just shows its alpha.
function parseRgba(value) {
  const match = value.match(
    /^rgba?\(([^,]+),\s*([^,]+),\s*([^,]+)(?:,\s*([^)]+))?\)$/,
  );
  if (!match) return null;
  const [, r, g, b, a] = match;
  return {
    r: Number(r),
    g: Number(g),
    b: Number(b),
    a: a === undefined ? 1 : Number(a),
  };
}

function channelToHex(value) {
  return Math.round(value).toString(16).padStart(2, '0');
}

function rgbToHex({ r, g, b }) {
  return `#${channelToHex(r)}${channelToHex(g)}${channelToHex(b)}`;
}

export function buildAlphaColorGroup(label, family) {
  const entries = primitiveColorGroups[family] || [];
  if (!entries.length) {
    console.warn(`[eds-foundations] no primitive color tokens for: ${family}`);
    return '';
  }
  const base = parseRgba(entries[0].hex);
  const title = base ? `${label} - ${rgbToHex(base)}` : label;
  const items = entries.map(({ step, hex }) => {
    const parsed = parseRgba(hex);
    return {
      background: hex,
      label: step,
      code: parsed ? String(parsed.a) : hex,
    };
  });
  return renderGroup(title, renderSwatchGrid(items, { compact: true }));
}

export function buildPrimitiveColorSections(
  order,
  buildFn = buildPrimitiveColorGroup,
) {
  return order.map(([family, label]) => buildFn(label, family)).join('\n');
}

export const UI_COLOR_ORDER = [
  ['european-blue', 'European Blue'],
  ['silver-fog', 'Silver Fog'],
  ['graphite', 'Graphite'],
  ['sunrise-orange', 'Sunrise Orange'],
];
export const FUNCTIONAL_COLOR_ORDER = [
  ['red', 'Red'],
  ['orange', 'Orange'],
  ['blue', 'Blue'],
  ['green', 'Green'],
];
export const ALPHA_COLOR_ORDER = [
  ['alpha-silver-fog-0', 'Silver Fog / 0'],
  ['alpha-silver-fog-950', 'Silver Fog / 950'],
  ['alpha-graphite-0', 'Graphite / 0'],
  ['alpha-graphite-950', 'Graphite / 950'],
];
export const DOMAIN_COLOR_ORDER = [
  ['domain-purple-violet', 'Purple violet'],
  ['domain-purple', 'Purple'],
  ['domain-blue-navy', 'Blue navy'],
  ['domain-blue-electric', 'Blue electric'],
  ['domain-green-dark', 'Green dark'],
  ['domain-green-pine', 'Green pine'],
  ['domain-blue-ocean', 'Blue ocean'],
  ['domain-green', 'Green'],
  ['domain-green-lemon', 'Green lemon'],
  ['domain-yellow-gold', 'Yellow gold'],
  ['domain-orange', 'Orange'],
  ['domain-orange-abricot', 'Orange abricot'],
  ['domain-red-tomato', 'Red tomato'],
  ['domain-red-crayola', 'Red crayola'],
  ['domain-warm-grey', 'Warm grey'],
];

// --- Semantic colors -------------------------------------------------------
// Strips the category prefix off a key for its display label, e.g.
// 'link--hover' -> 'hover', bare 'link' -> 'base'.
function labelFrom(key, category) {
  const rest = key.slice(category.length).replace(/^-+/, '');
  return (rest || 'base').replace(/--/g, ' / ');
}

// Pulls the role (e.g. 'primary') out of a key so same-role tokens group
// together. '--' separates a state from the role; '-' separates the role
// name itself - e.g. 'primary-subtle--hover' is role 'primary'.
function roleOf(key, category) {
  const rest = key.slice(category.length);
  if (rest === '' || rest.startsWith('--')) return 'base';
  return rest.slice(1).split(/--|-/)[0];
}

function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Groups same-role entries, preserving first-appearance (source) order.
function groupByRole(entries) {
  const groups = new Map();
  entries.forEach((entry) => {
    if (!groups.has(entry.role)) groups.set(entry.role, []);
    groups.get(entry.role).push(entry);
  });
  return groups;
}

export function buildGroupedSwatchSections(items) {
  return Array.from(groupByRole(items))
    .map(([role, roleItems]) =>
      renderGroup(titleCase(role), renderSwatchGrid(roleItems)),
    )
    .join('\n');
}

export function buildGroupedPairSections(pairs) {
  return Array.from(groupByRole(pairs))
    .map(([role, rolePairs]) =>
      renderGroup(titleCase(role), renderPairGrid(rolePairs)),
    )
    .join('\n');
}

function colorItem(key, category) {
  return {
    background: `var(${cssColorVar(key)})`,
    label: labelFrom(key, category),
    code: cssColorVar(key),
    role: roleOf(key, category),
  };
}

// Every `on-surface-X` token has a matching `surface-X` counterpart.
function pairSurfaceTokens(colorMap) {
  const pairs = [];
  const pairedSurfaceKeys = new Set();
  Object.keys(colorMap).forEach((key) => {
    if (!key.startsWith('on-surface-')) return;
    const suffix = key.slice('on-surface-'.length);
    const surfaceKey = `surface-${suffix}`;
    if (colorMap[surfaceKey] === undefined) {
      console.warn(`[eds-foundations] ${key} has no matching ${surfaceKey}`);
      return;
    }
    pairs.push({
      suffix,
      surfaceVar: cssColorVar(surfaceKey),
      onSurfaceVar: cssColorVar(key),
      role: roleOf(surfaceKey, 'surface'),
    });
    pairedSurfaceKeys.add(surfaceKey);
  });
  const unpairedSurfaceKeys = Object.keys(colorMap).filter(
    (key) => key.startsWith('surface-') && !pairedSurfaceKeys.has(key),
  );
  return { pairs, unpairedSurfaceKeys };
}

const semanticColor = tokens.semantic.color;
const { pairs: surfacePairs, unpairedSurfaceKeys } =
  pairSurfaceTokens(semanticColor);

export const domainPairs = surfacePairs.filter((p) =>
  p.suffix.startsWith('domain-'),
);
export const rolePairs = surfacePairs.filter(
  (p) => !p.suffix.startsWith('domain-'),
);
export const unpairedSurfaceItems = unpairedSurfaceKeys.map((key) =>
  colorItem(key, 'surface'),
);

export const foregroundItems = Object.keys(semanticColor)
  .filter((key) => key === 'foreground' || key.startsWith('foreground-'))
  .map((key) => colorItem(key, 'foreground'));

export const linkItems = Object.keys(semanticColor)
  .filter((key) => key === 'link' || key.startsWith('link-'))
  .map((key) => colorItem(key, 'link'));

// `border-focus` is a focus-ring color, so shown here not under "Border".
const focusOnlyKeys = Object.keys(semanticColor).filter(
  (key) => key === 'focus' || key.startsWith('focus-'),
);
export const focusItems = [...focusOnlyKeys, 'border-focus'].map((key) =>
  key === 'border-focus'
    ? {
        background: `var(${cssColorVar(key)})`,
        label: 'border',
        code: cssColorVar(key),
        role: 'border',
      }
    : colorItem(key, 'focus'),
);

export const borderItems = Object.keys(semanticColor)
  .filter((key) => key.startsWith('border-') && key !== 'border-focus')
  .map((key) => colorItem(key, 'border'));

export const alphaItems = Object.keys(semanticColor)
  .filter((key) => key.startsWith('alpha-'))
  .map((key) => colorItem(key, 'alpha'));

// Catches a future token that no section above would pick up.
(function warnOnUncoveredSemanticColors() {
  const covered = new Set([
    ...surfacePairs.flatMap((p) => [
      p.surfaceVar.replace('--eds-c-', ''),
      p.onSurfaceVar.replace('--eds-c-', ''),
    ]),
    ...unpairedSurfaceKeys,
    ...foregroundItems.map((i) => i.code.replace('--eds-c-', '')),
    ...linkItems.map((i) => i.code.replace('--eds-c-', '')),
    ...focusItems.map((i) => i.code.replace('--eds-c-', '')),
    ...borderItems.map((i) => i.code.replace('--eds-c-', '')),
    ...alphaItems.map((i) => i.code.replace('--eds-c-', '')),
  ]);
  const uncovered = Object.keys(semanticColor).filter(
    (key) => !covered.has(key),
  );
  if (uncovered.length) {
    console.warn(
      `[eds-foundations] semantic color tokens present but not shown: ${uncovered.join(', ')}`,
    );
  }
})();
