import {
  flatten,
  cssVarName,
  groupColorTokens,
  groupPrimitiveColorTokens,
  colorToHex,
} from './scripts/token-names';
import lightTokens from './tokens/source/Light.tokens.json';
import primitivesTokens from './tokens/source/Primitives.json';

// Only need the *names* of the semantic tokens here, not their resolved
// values - the real compiled `ecl-eds.css` (loaded globally via
// .storybook/preview-head.html, built from `@ecl/preset-eds`) resolves
// every `var(--eds-*)` reference below, light and dark alike.
// Light.tokens.json is enough: Light and Dark share an identical key set
// (verified when the theme package was built), so no need to import
// Dark.tokens.json just to enumerate names.
const light = flatten(lightTokens);

// Primitives are deliberately NOT exposed as CSS custom properties (they're
// Figma implementation detail - see src/themes/eds/README.md), so there's
// no `var(--eds-*)` to reference for these. Shown here for reference via
// resolved inline styles instead, using the actual hex value.
const primitiveColors = Object.fromEntries(
  Object.entries(flatten(primitivesTokens)).filter(
    ([key, node]) => node.$type === 'color' && !key.startsWith('system'),
  ),
);

// Semantic color tokens grouped by their top-level category (surface,
// on-surface, foreground, link, focus, alpha, border) - computed once and
// reused everywhere below rather than re-walking `light` per section.
const semanticGroups = groupColorTokens(light);

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function restKeysByPrefix(prefix, excludePrefix) {
  return Object.keys(light).filter(
    (key) =>
      key.startsWith(prefix) &&
      light[key].$type !== 'color' &&
      !(excludePrefix && key.startsWith(excludePrefix)),
  );
}

function renderGroup(title, innerHtml) {
  return `      <div class="group">
        <h3>${escapeHtml(title)}</h3>
${innerHtml}
      </div>`;
}

function renderSwatchGrid(items) {
  return `        <div class="swatch-grid">
${items
  .map(
    (item) => `          <div class="swatch">
            <div class="swatch-color" style="background: ${item.background}"></div>
            <div class="swatch-label">${escapeHtml(item.label)}</div>
            <code class="swatch-var">${escapeHtml(item.code)}</code>
          </div>`,
  )
  .join('\n')}
        </div>`;
}

// Semantic color group (`groupColorTokens`'s `segments[1]` groups, e.g.
// 'surface', 'on-surface', ...) - swatches reference the real
// `var(--eds-*)` custom property, resolved live by the compiled `ecl-eds.css`.
function buildSemanticColorGroup(title, segmentsList) {
  const items = segmentsList.map((segments) => {
    const varName = cssVarName('eds', segments);
    return {
      background: `var(${varName})`,
      label: segments.slice(2).join(' / ') || segments[1],
      code: varName,
    };
  });
  return renderGroup(title, renderSwatchGrid(items));
}

// Primitive color group (`groupPrimitiveColorTokens`'s groups). No
// `var(--eds-*)` to reference for these (see the `primitiveColors` comment
// above) - each swatch gets its background as a plain resolved hex, shown
// as its label too.
function buildPrimitiveColorGroup(title, segmentsList) {
  const items = segmentsList.map((segments) => {
    const key = segments.join('/');
    const hex = colorToHex(primitiveColors[key].$value);
    return {
      background: hex,
      label: segments[segments.length - 1],
      code: hex,
    };
  });
  return renderGroup(title, renderSwatchGrid(items));
}

// Renders an explicitly ordered subset of a groups dict (as opposed to the
// dict's own, alphabetical, key order) with curated display labels - used
// so each story can follow the design team's intended reading order (e.g.
// domain colors grouped by hue family, not alphabetically) instead of
// whatever order the source JSON happens to produce. A given groups dict is
// legitimately split across several stories (e.g. primitives span "UI
// color primitives" / "Functional colors" / "Alpha colors" / "Domain
// colors"), so this only flags order entries with no matching tokens - it
// does NOT flag "unlisted" tokens, since any single call only ever sees its
// own story's slice of the full dict. See `warnOnUncoveredGroups` for the
// full-coverage check.
function buildOrderedGroupSections(order, groups, buildFn) {
  const missing = order.filter(([key]) => !groups[key]);
  if (missing.length) {
    console.warn(
      `[eds-tokens] no tokens found for: ${missing.map(([key]) => key).join(', ')}`,
    );
  }
  return order
    .filter(([key]) => groups[key])
    .map(([key, label]) => buildFn(label, groups[key]))
    .join('\n');
}

// Full-coverage check: warns if the source tokens ever grow a new group
// (e.g. a new domain palette added in Figma) that none of the curated
// ORDER lists below account for - run once against the *union* of every
// order list that draws from the same `groups` dict, not per-story.
function warnOnUncoveredGroups(description, groups, coveredKeys) {
  const covered = new Set(coveredKeys);
  const uncovered = Object.keys(groups).filter((key) => !covered.has(key));
  if (uncovered.length) {
    console.warn(
      `[eds-tokens] ${description} present but not shown in any story: ${uncovered.join(', ')}`,
    );
  }
}

// Display order + curated labels, per the design team's requested reading
// order (UI primitives, then functional, alpha, domain palettes; semantic
// colors grouped by role, border color living under "Border" instead).
const UI_PRIMITIVE_COLOR_ORDER = [
  ['european-blue', 'European Blue'],
  ['silver-fog', 'Silver Fog'],
  ['graphite', 'Graphite'],
  ['sunrise-orange', 'Sunrise Orange'],
];

const FUNCTIONAL_COLOR_ORDER = [
  ['functional/red', 'Red'],
  ['functional/orange', 'Orange'],
  ['functional/green', 'Green'],
  ['functional/blue', 'Blue'],
];

const ALPHA_COLOR_ORDER = [
  ['alpha/silver-fog/0', 'Silver Fog / 0'],
  ['alpha/silver-fog/950', 'Silver Fog / 950'],
  ['alpha/graphite/0', 'Graphite / 0'],
  ['alpha/graphite/950', 'Graphite / 950'],
];

const DOMAIN_COLOR_ORDER = [
  ['domain/purple-violet', 'Purple violet'],
  ['domain/purple', 'Purple'],
  ['domain/blue-navy', 'Blue navy'],
  ['domain/blue-electric', 'Blue electric'],
  ['domain/green-dark', 'Green dark'],
  ['domain/green-pine', 'Green pine'],
  ['domain/blue-ocean', 'Blue ocean'],
  ['domain/green', 'Green'],
  ['domain/green-lemon', 'Green lemon'],
  ['domain/yellow-gold', 'Yellow gold'],
  ['domain/orange', 'Orange'],
  ['domain/orange-abricot', 'Orange abricot'],
  ['domain/red-tomato', 'Red tomato'],
  ['domain/red-crayola', 'Red crayola'],
  ['domain/warm-grey', 'Warm grey'],
];

warnOnUncoveredGroups(
  'primitive color groups',
  groupPrimitiveColorTokens(primitiveColors),
  [
    ...UI_PRIMITIVE_COLOR_ORDER,
    ...FUNCTIONAL_COLOR_ORDER,
    ...ALPHA_COLOR_ORDER,
    ...DOMAIN_COLOR_ORDER,
  ].map(([key]) => key),
);

// Border colors live in the "Semantic colors" story (grouped with the rest
// of the semantic palette) rather than a separate section, so all 7
// semantic color categories are expected here.
warnOnUncoveredGroups('semantic color groups', semanticGroups, [
  'surface',
  'on-surface',
  'foreground',
  'link',
  'focus',
  'alpha',
  'border',
]);

function buildPrimitiveColorSections(order) {
  const groups = groupPrimitiveColorTokens(primitiveColors);
  return buildOrderedGroupSections(order, groups, buildPrimitiveColorGroup);
}

// Role taxonomy used to sub-group semantic color tokens within each
// category (Surface, On-surface, Foreground, Focus, Alpha, Border) - e.g.
// "Primary", "Highlight", "Neutral", "Inverted", "Info", "Success",
// "Warning", "Critical", plus a few roles that exist in the source tokens
// but weren't singled out by name: Brand, Disabled, Base (the tokens with
// no role prefix at all, e.g. `border/default`), and a handful of
// surface-only roles with no on-surface equivalent (Elevation, Accent,
// Selected, Skeleton, Invisible).
const ROLE_ORDER = [
  'primary',
  'highlight',
  'neutral',
  'inverted',
  'info',
  'success',
  'warning',
  'critical',
  'brand',
  'disabled',
  'base',
  'elevation',
  'accent',
  'selected',
  'skeleton',
  'invisible',
];

const ROLE_LABELS = {
  primary: 'Primary',
  highlight: 'Highlight',
  neutral: 'Neutral',
  inverted: 'Inverted',
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  critical: 'Critical',
  brand: 'Brand',
  disabled: 'Disabled',
  base: 'Base',
  elevation: 'Elevation',
  accent: 'Accent',
  selected: 'Selected',
  skeleton: 'Skeleton',
  invisible: 'Invisible',
  default: 'Default',
  contrast: 'Contrast',
};

// Link uses its own 3-way taxonomy (the base link color vs. its "inverted"
// and "contrast" variants) rather than the general ROLE_ORDER above.
const LINK_ROLE_ORDER = ['default', 'inverted', 'contrast'];

// --- Role/step parsers --------------------------------------------------
// Each semantic color category nests its tokens a little differently (e.g.
// `surface/primary/default--hover` vs. `foreground/primary--hover` vs.
// `link/inverted/default--hover`) - these pull a `{ role, step }` pair out
// of a token's path segments so same-role tokens can be grouped (and, for
// surface/on-surface, paired together) regardless of exactly how many path
// levels deep that role sits, or whether a hover/pressed/etc. state is a
// separate segment or a `--suffix` on the last one.

function surfaceRoleStep(segments) {
  const rest = segments.slice(2);
  return rest.length === 1
    ? { role: rest[0], step: 'default' }
    : { role: rest[0], step: rest[1] };
}

function onSurfaceRoleStep(segments) {
  const [role, step] = segments.slice(2);
  return { role, step };
}

function foregroundRoleStep(segments) {
  const leaf = segments[2];
  if (leaf === 'disabled') return { role: 'disabled', step: 'default' };
  if (['default', 'subtle', 'subtler', 'placeholder'].includes(leaf)) {
    return { role: 'base', step: leaf };
  }
  const [role, state] = leaf.split('--');
  return { role, step: state || 'default' };
}

function linkRoleStep(segments) {
  const rest = segments.slice(2);
  if (rest.length === 1) {
    const [, state] = rest[0].split('--');
    return { role: 'default', step: state || 'default' };
  }
  const [role, leaf] = rest;
  const [, state] = leaf.split('--');
  return { role, step: state || 'default' };
}

function focusRoleStep(segments) {
  const leaf = segments[2];
  return { role: leaf === 'default' ? 'base' : leaf, step: 'default' };
}

// Semantic 'alpha' is a small, distinct group from the primitive alpha
// palettes (see UI_PRIMITIVE_COLOR_ORDER etc.) - all its tokens nest under
// 'backdrop'.
function alphaRoleStep(segments) {
  const rest = segments.slice(2);
  return rest.length === 2
    ? { role: 'base', step: rest[1] }
    : { role: rest[1], step: rest[2] };
}

function borderRoleStep(segments) {
  const rest = segments.slice(2);
  if (rest.length === 1) {
    return rest[0] === 'disabled'
      ? { role: 'disabled', step: 'default' }
      : { role: 'base', step: rest[0] };
  }
  return { role: rest[0], step: rest[1] };
}

function indexByRoleStep(segmentsList, roleStepFn) {
  const index = {};
  segmentsList.forEach((segments) => {
    const { role, step } = roleStepFn(segments);
    index[role] = index[role] || {};
    index[role][step] = segments;
  });
  return index;
}

// The role/step parsers above key a plain object by `{ role, step }`, so
// two tokens that parse to the same pair would silently collide (the
// second overwrites the first) instead of erroring - warn if that ever
// happens, e.g. after a future token rename changes how a parser splits a
// segment.
function warnOnRoleStepCollisions(description, segmentsList, index) {
  const indexed = Object.values(index).reduce(
    (sum, steps) => sum + Object.keys(steps).length,
    0,
  );
  if (indexed !== segmentsList.length) {
    console.warn(
      `[eds-tokens] ${description}: ${segmentsList.length} tokens parsed into only ${indexed} role/step slots - check for role/step collisions`,
    );
  }
}

function buildRoleGroupedSection(segmentsList, roleStepFn, order, description) {
  const index = indexByRoleStep(segmentsList, roleStepFn);
  warnOnRoleStepCollisions(description, segmentsList, index);
  const known = new Set(order);
  const extraRoles = Object.keys(index).filter((role) => !known.has(role));
  if (extraRoles.length) {
    console.warn(
      `[eds-tokens] ${description}: roles present but not in the display order: ${extraRoles.join(', ')}`,
    );
  }
  return [...order, ...extraRoles]
    .filter((role) => index[role])
    .map((role) =>
      buildSemanticColorGroup(
        ROLE_LABELS[role] || role,
        Object.values(index[role]),
      ),
    )
    .join('\n');
}

// Surface and on-surface tokens are designed to be used in pairs (a
// background plus the text/icon color meant to sit on top of it), so
// rather than two disconnected flat swatch grids, render one demo card per
// pair - grouped by role like the other semantic categories, but showing
// the actual background+foreground combination.
function baseStepOf(step) {
  return step.split('--')[0];
}

function pickToken(steps, step) {
  return steps[step] || steps[baseStepOf(step)] || steps.default;
}

function buildSurfaceOnSurfacePairs(role, surfaceSteps, onSurfaceSteps) {
  const steps = Array.from(
    new Set([...Object.keys(surfaceSteps), ...Object.keys(onSurfaceSteps)]),
  );
  const items = steps
    .map((step) => {
      const surfaceVar = cssVarName('eds', pickToken(surfaceSteps, step));
      const onSurfaceVar = cssVarName('eds', pickToken(onSurfaceSteps, step));
      return `          <div class="pair-item">
            <div class="pair-card" style="background: var(${surfaceVar}); color: var(${onSurfaceVar});">
              <div class="pair-card-label">${escapeHtml(step)}</div>
              <p class="pair-card-sample">The quick brown fox jumps over the lazy dog</p>
            </div>
            <code class="pair-card-var">${surfaceVar}</code>
            <code class="pair-card-var">${onSurfaceVar}</code>
          </div>`;
    })
    .join('\n');
  return renderGroup(
    ROLE_LABELS[role] || role,
    `        <div class="pair-grid">\n${items}\n        </div>`,
  );
}

function buildSurfaceOnSurfaceSection() {
  const surfaceIndex = indexByRoleStep(semanticGroups.surface, surfaceRoleStep);
  const onSurfaceIndex = indexByRoleStep(
    semanticGroups['on-surface'],
    onSurfaceRoleStep,
  );
  warnOnRoleStepCollisions('surface', semanticGroups.surface, surfaceIndex);
  warnOnRoleStepCollisions(
    'on-surface',
    semanticGroups['on-surface'],
    onSurfaceIndex,
  );

  const known = new Set(ROLE_ORDER);
  const extraRoles = Object.keys(surfaceIndex).filter(
    (role) => !known.has(role),
  );
  if (extraRoles.length) {
    console.warn(
      `[eds-tokens] surface: roles present but not in the display order: ${extraRoles.join(', ')}`,
    );
  }

  return [...ROLE_ORDER, ...extraRoles]
    .filter((role) => surfaceIndex[role])
    .map((role) => {
      const onSurfaceSteps = onSurfaceIndex[role];
      if (!onSurfaceSteps) {
        // No on-surface counterpart for this role (Elevation, Accent,
        // Selected, Skeleton, Invisible) - plain swatches instead of
        // fabricating a pairing the design system doesn't define.
        return buildSemanticColorGroup(
          ROLE_LABELS[role] || role,
          Object.values(surfaceIndex[role]),
        );
      }
      return buildSurfaceOnSurfacePairs(
        role,
        surfaceIndex[role],
        onSurfaceSteps,
      );
    })
    .join('\n');
}

function buildScaleRows(keys, renderPreview) {
  const rows = keys
    .map((key) => {
      const segments = key.split('/');
      const step = segments[segments.length - 1];
      const varName = cssVarName('eds', segments);
      return `          <div class="scale-row">
            <code class="scale-step">${escapeHtml(step)}</code>
            ${renderPreview(varName)}
            <code class="scale-var">${varName}</code>
          </div>`;
    })
    .join('\n');
  return `        <div class="scale-list">\n${rows}\n        </div>`;
}

function buildScaleGroup(title, keys, renderPreview) {
  return renderGroup(title, buildScaleRows(keys, renderPreview));
}

function buildTypographySection() {
  const rows = restKeysByPrefix('font/size/')
    .map((key) => {
      const step = key.split('/')[2];
      const sizeVar = cssVarName('eds', key.split('/'));
      const lineHeightKey = `font/line-height/${step}`;
      const lineHeightVar = light[lineHeightKey]
        ? `line-height: var(${cssVarName('eds', lineHeightKey.split('/'))});`
        : '';
      return `        <div class="type-row">
          <code class="type-step">${escapeHtml(step)}</code>
          <p style="font-size: var(${sizeVar}); ${lineHeightVar} font-family: var(--eds-f-family-display); margin: 0;">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>`;
    })
    .join('\n');

  const families = restKeysByPrefix('font/family/')
    .map((key) => {
      const varName = cssVarName('eds', key.split('/'));
      const name = key.split('/')[2];
      return `        <div class="type-row">
          <code class="type-step">${escapeHtml(name)}</code>
          <p style="font-family: var(${varName}); margin: 0;">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>`;
    })
    .join('\n');

  return `      <div class="group">
        <h3>family</h3>
        <div class="type-list">
${families}
        </div>
      </div>
      <div class="group">
        <h3>size / line-height</h3>
        <div class="type-list">
${rows}
        </div>
      </div>`;
}

function buildShadowSection() {
  const levels = Object.keys(light)
    .filter((key) => /^shadow\/elevation\/level-\d+\/color$/.test(key))
    .map((key) => key.split('/')[2]);
  return levels
    .map((level) => {
      const varName = cssVarName('eds', ['shadow', 'elevation', level]);
      return `        <div class="scale-row">
          <code class="scale-step">${escapeHtml(level)}</code>
          <div class="shadow-box" style="box-shadow: var(${varName});"></div>
          <code class="scale-var">${varName}</code>
        </div>`;
    })
    .join('\n');
}

const SHARED_STYLES = `<style>
  .eds-tokens * {
    box-sizing: border-box;
  }
  .eds-tokens {
    padding: var(--eds-sp-xl);
    background: var(--eds-c-surface-elevation-default);
    color: var(--eds-c-foreground-default);
    font-family: var(--eds-f-family-paragraph);
    min-height: 100vh;
  }
  .eds-tokens header {
    margin-bottom: var(--eds-sp-xl);
    padding-bottom: var(--eds-sp-m);
    border-bottom: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens h1 {
    font-size: var(--eds-f-size-2xl);
    margin: 0;
  }
  .eds-tokens h2 {
    font-size: var(--eds-f-size-xl);
    margin: var(--eds-sp-2xl) 0 var(--eds-sp-m);
  }
  .eds-tokens h3 {
    font-size: var(--eds-f-size-s);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--eds-c-foreground-subtle);
    margin: 0 0 var(--eds-sp-s);
  }
  .eds-tokens .section-note {
    font-size: var(--eds-f-size-xs);
    color: var(--eds-c-foreground-subtle);
    margin: calc(-1 * var(--eds-sp-s)) 0 var(--eds-sp-m);
  }
  .eds-tokens section {
    margin-bottom: var(--eds-sp-2xl);
  }
  .eds-tokens .group {
    margin-bottom: var(--eds-sp-xl);
  }
  .eds-tokens .swatch-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr));
    gap: var(--eds-sp-m);
  }
  .eds-tokens .swatch-color {
    height: 3.5rem;
    border-radius: var(--eds-br-s);
    border: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens .swatch-label {
    font-size: var(--eds-f-size-xs);
    margin-top: var(--eds-sp-3xs);
  }
  .eds-tokens .swatch-var {
    font-size: var(--eds-f-size-2xs);
    color: var(--eds-c-foreground-subtler);
    word-break: break-all;
  }
  .eds-tokens .pair-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    gap: var(--eds-sp-m);
  }
  .eds-tokens .pair-item {
    display: flex;
    flex-direction: column;
    gap: var(--eds-sp-3xs);
  }
  .eds-tokens .pair-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--eds-sp-s);
    min-height: 6rem;
    padding: var(--eds-sp-m);
    border-radius: var(--eds-br-s);
    border: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens .pair-card-label {
    font-size: var(--eds-f-size-2xs);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    opacity: 0.75;
  }
  .eds-tokens .pair-card-sample {
    font-size: var(--eds-f-size-s);
    margin: 0;
  }
  .eds-tokens .pair-card-var {
    display: block;
    font-size: var(--eds-f-size-2xs);
    color: var(--eds-c-foreground-subtler);
    word-break: break-all;
  }
  .eds-tokens .type-list,
  .eds-tokens .scale-list {
    display: flex;
    flex-direction: column;
    gap: var(--eds-sp-s);
  }
  .eds-tokens .type-row,
  .eds-tokens .scale-row {
    display: grid;
    grid-template-columns: 5rem 1fr 14rem;
    align-items: center;
    gap: var(--eds-sp-m);
  }
  .eds-tokens .type-step,
  .eds-tokens .scale-step,
  .eds-tokens .scale-var {
    font-size: var(--eds-f-size-2xs);
    color: var(--eds-c-foreground-subtler);
  }
  .eds-tokens .scale-bar {
    height: var(--eds-sz-m);
    background: var(--eds-c-surface-primary-default);
    border-radius: var(--eds-br-xs);
  }
  .eds-tokens .shape-box {
    width: var(--eds-sz-9xl);
    height: var(--eds-sz-6xl);
    background: var(--eds-c-surface-primary-subtle);
  }
  .eds-tokens .shadow-box {
    width: var(--eds-sz-9xl);
    height: var(--eds-sz-6xl);
    background: var(--eds-c-surface-elevation-default);
    border-radius: var(--eds-br-s);
  }
  .eds-tokens .opacity-box {
    width: var(--eds-sz-9xl);
    height: var(--eds-sz-6xl);
    border-radius: var(--eds-br-s);
    background: var(--eds-c-surface-primary-default);
    background-image: linear-gradient(45deg, #80808033 25%, transparent 25%),
      linear-gradient(-45deg, #80808033 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #80808033 75%),
      linear-gradient(-45deg, transparent 75%, #80808033 75%);
    background-size: 1rem 1rem;
    background-position:
      0 0,
      0 0.5rem,
      0.5rem -0.5rem,
      -0.5rem 0px;
  }
</style>`;

// Wraps a single story's `<section>...</section>` body with the shared
// style block and page header, and returns a Storybook HTML-framework
// render function for it - every named export below is just
// `renderTokensPage(sectionHtml)`.
function renderTokensPage(sectionHtml) {
  const markup = `${SHARED_STYLES}
<div class="eds-tokens">
  <header>
    <h1>EDS design tokens</h1>
  </header>
${sectionHtml}
</div>`;
  return () => {
    const container = document.createElement('div');
    container.innerHTML = markup;
    return container;
  };
}

export default {
  title: 'EDS/Design tokens',
};

// One named export per token category (mirrors how e.g. button.story.js
// splits Primary/Secondary/Tertiary into separate named exports/stories
// within a single file, rather than one file per variant) - this got split
// out of a single giant "everything on one page" story once that page grew
// too big to load/scan comfortably.

export const UiColorPrimitives = renderTokensPage(`
  <section>
    <h2>UI color primitives</h2>
    <p class="section-note">
      Reference only — primitive colors are not exposed as CSS custom
      properties, shown here as resolved hex values rather than
      <code>var(--eds-*)</code>.
    </p>
${buildPrimitiveColorSections(UI_PRIMITIVE_COLOR_ORDER)}
  </section>
`);
UiColorPrimitives.storyName = 'UI color primitives';

export const FunctionalColors = renderTokensPage(`
  <section>
    <h2>Functional colors</h2>
${buildPrimitiveColorSections(FUNCTIONAL_COLOR_ORDER)}
  </section>
`);
FunctionalColors.storyName = 'Functional colors';

export const AlphaColors = renderTokensPage(`
  <section>
    <h2>Alpha colors</h2>
${buildPrimitiveColorSections(ALPHA_COLOR_ORDER)}
  </section>
`);
AlphaColors.storyName = 'Alpha colors';

export const DomainColors = renderTokensPage(`
  <section>
    <h2>Domain colors</h2>
${buildPrimitiveColorSections(DOMAIN_COLOR_ORDER)}
  </section>
`);
DomainColors.storyName = 'Domain colors';

export const SemanticColors = renderTokensPage(`
  <section>
    <h2>Surface &amp; On-surface</h2>
    <p class="section-note">
      Surface and on-surface colors are designed to be used as a pair - each
      card below shows the surface color as a background with its matching
      on-surface color as the content on top of it.
    </p>
${buildSurfaceOnSurfaceSection()}
  </section>

  <section>
    <h2>Foreground</h2>
${buildRoleGroupedSection(semanticGroups.foreground, foregroundRoleStep, ROLE_ORDER, 'foreground')}
  </section>

  <section>
    <h2>Link</h2>
${buildRoleGroupedSection(semanticGroups.link, linkRoleStep, LINK_ROLE_ORDER, 'link')}
  </section>

  <section>
    <h2>Focus</h2>
${buildRoleGroupedSection(semanticGroups.focus, focusRoleStep, ROLE_ORDER, 'focus')}
  </section>

  <section>
    <h2>Alpha</h2>
${buildRoleGroupedSection(semanticGroups.alpha, alphaRoleStep, ROLE_ORDER, 'alpha')}
  </section>

  <section>
    <h2>Border</h2>
${buildRoleGroupedSection(semanticGroups.border, borderRoleStep, ROLE_ORDER, 'border')}
  </section>
`);
SemanticColors.storyName = 'Semantic colors';

const scaleBarPreview = (varName) =>
  `<div class="scale-bar" style="width: var(${varName});"></div>`;

export const Sizing = renderTokensPage(`
  <section>
    <h2>Sizing</h2>
${buildScaleGroup('Spacers', restKeysByPrefix('spacing/'), scaleBarPreview)}
${buildScaleGroup('Width and height', restKeysByPrefix('sizing/', 'sizing/icon/'), scaleBarPreview)}
${buildScaleGroup('Icon size', restKeysByPrefix('sizing/icon/'), scaleBarPreview)}
  </section>
`);
Sizing.storyName = 'Sizing';

export const Border = renderTokensPage(`
  <section>
    <h2>Border</h2>
    <p class="section-note">
      Border colors are shown alongside the rest of the semantic palette in
      the "Semantic colors" story.
    </p>
${buildScaleGroup(
  'Border radius',
  restKeysByPrefix('border-radius/'),
  (varName) =>
    `<div class="shape-box" style="border-radius: var(${varName});"></div>`,
)}
${buildScaleGroup(
  'Border width',
  restKeysByPrefix('border-width/'),
  (varName) =>
    `<div class="shape-box" style="border: var(${varName}) solid var(--eds-c-border-default);"></div>`,
)}
  </section>
`);
Border.storyName = 'Border';

export const Opacity = renderTokensPage(`
  <section>
    <h2>Opacity</h2>
${buildScaleRows(
  restKeysByPrefix('opacity/'),
  (varName) =>
    `<div class="opacity-box" style="opacity: var(${varName});"></div>`,
)}
  </section>
`);
Opacity.storyName = 'Opacity';

export const Shadow = renderTokensPage(`
  <section>
    <h2>Shadow</h2>
    <div class="scale-list">
${buildShadowSection()}
    </div>
  </section>
`);
Shadow.storyName = 'Shadow';

export const Typography = renderTokensPage(`
  <section>
    <h2>Typography</h2>
${buildTypographySection()}
  </section>
`);
Typography.storyName = 'Typography';
