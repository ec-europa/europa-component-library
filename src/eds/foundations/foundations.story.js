// Renders every token in tokens.json as a visual reference for designers.
// Semantic tokens use live `var(--eds-*)` refs so dark mode / viewport
// resize update them; primitives aren't exposed as custom properties (see
// README.md), so they render as resolved hex values instead.
//
// Builders live in ./story-helpers - this file just composes pages.
import tokens from './tokens.json';
import {
  renderTokensPage,
  scaleEntries,
  buildScaleGroup,
  buildScaleRows,
  buildTypeGroup,
  renderPairGrid,
} from './story-helpers/render';
import {
  UI_COLOR_ORDER,
  FUNCTIONAL_COLOR_ORDER,
  ALPHA_COLOR_ORDER,
  DOMAIN_COLOR_ORDER,
  buildPrimitiveColorSections,
  buildAlphaColorGroup,
  buildGroupedSwatchSections,
  buildGroupedPairSections,
  rolePairs,
  domainPairs,
  unpairedSurfaceItems,
  foregroundItems,
  linkItems,
  focusItems,
  borderItems,
  alphaItems,
} from './story-helpers/colors';
import {
  fontSizeEntries,
  buildResponsiveTypeSection,
} from './story-helpers/typography';
import { buildBreakpointTable, buildGridTable } from './story-helpers/layout';

export default {
  title: 'EDS/Foundations',
};

export const PrimitiveColors = renderTokensPage(`
  <section>
    <h2>UI color primitives</h2>
    <p class="section-note">
      Reference only — primitive colors are not exposed as CSS custom
      properties, shown here as resolved hex values.
    </p>
${buildPrimitiveColorSections(UI_COLOR_ORDER)}
  </section>

  <section>
    <h2>Functional colors</h2>
${buildPrimitiveColorSections(FUNCTIONAL_COLOR_ORDER)}
  </section>

  <section>
    <h2>Alpha colors</h2>
${buildPrimitiveColorSections(ALPHA_COLOR_ORDER, buildAlphaColorGroup)}
  </section>
`);
PrimitiveColors.storyName = 'Primitive colors';

export const DomainColors = renderTokensPage(`
  <section>
    <h2>Domain colors (primitive)</h2>
    <p class="section-note">Reference only — resolved hex values.</p>
${buildPrimitiveColorSections(DOMAIN_COLOR_ORDER)}
  </section>
`);
DomainColors.storyName = 'Domain colors';

export const SemanticColors = renderTokensPage(`
  <section>
    <h2>Surface &amp; on-surface</h2>
    <p class="section-note">
      Each card pairs a surface color with its matching on-surface color —
      live <code>var(--eds-c-*)</code> values, so toggling dark mode above
      updates both. A few surfaces have no on-surface counterpart (pure
      background utilities, not meant to host text) and are shown as plain
      swatches instead.
    </p>
${buildGroupedPairSections(rolePairs)}
${unpairedSurfaceItems.length ? buildGroupedSwatchSections(unpairedSurfaceItems) : ''}
  </section>

  <section>
    <h2>Domain</h2>
${renderPairGrid(domainPairs)}
  </section>

  <section>
    <h2>Foreground</h2>
${buildGroupedSwatchSections(foregroundItems)}
  </section>

  <section>
    <h2>Link</h2>
${buildGroupedSwatchSections(linkItems)}
  </section>

  <section>
    <h2>Focus</h2>
${buildGroupedSwatchSections(focusItems)}
  </section>

  <section>
    <h2>Border</h2>
${buildGroupedSwatchSections(borderItems)}
  </section>

  <section>
    <h2>Alpha / backdrop</h2>
${buildGroupedSwatchSections(alphaItems)}
  </section>
`);
SemanticColors.storyName = 'Semantic colors';

const scaleBarPreview = (varName) =>
  `<div class="scale-bar" style="width: var(${varName});"></div>`;

export const Spacing = renderTokensPage(`
  <section>
    <h2>Spacing &amp; sizing</h2>
${buildScaleGroup('Spacing', scaleEntries(tokens.semantic.spacing.spacing, 'sp'), scaleBarPreview)}
${buildScaleGroup('Sizing', scaleEntries(tokens.semantic.spacing.sizing, 'si'), scaleBarPreview)}
${buildScaleGroup('Icon sizing', scaleEntries(tokens.semantic.spacing['icon-sizing'], 'is'), scaleBarPreview)}
  </section>
`);
Spacing.storyName = 'Spacing & sizing';

export const Border = renderTokensPage(`
  <section>
    <h2>Border</h2>
    <p class="section-note">
      Border colors are shown alongside the rest of the semantic palette in
      the "Semantic colors" story.
    </p>
${buildScaleGroup(
  'Border radius',
  scaleEntries(tokens.semantic['border-radius'], 'br'),
  (varName) =>
    `<div class="shape-box" style="border-radius: var(${varName});"></div>`,
)}
${buildScaleGroup(
  'Border width',
  scaleEntries(tokens.semantic['border-width'], 'bw'),
  (varName) =>
    `<div class="shape-box" style="border: var(${varName}) solid var(--eds-c-border-divider);"></div>`,
)}
  </section>
`);
Border.storyName = 'Border';

export const Opacity = renderTokensPage(`
  <section>
    <h2>Opacity</h2>
${buildScaleRows(
  scaleEntries(tokens.semantic.opacity, 'op'),
  (varName) =>
    `<div class="opacity-box" style="opacity: var(${varName});"></div>`,
)}
  </section>
`);
Opacity.storyName = 'Opacity';

export const Shadow = renderTokensPage(`
  <section>
    <h2>Shadow</h2>
${buildScaleRows(
  scaleEntries(tokens.semantic.shadow, 'sh'),
  (varName) =>
    `<div class="shadow-box" style="box-shadow: var(${varName});"></div>`,
)}
  </section>
`);
Shadow.storyName = 'Shadow';

export const Typography = renderTokensPage(`
  <section>
    <h2>Primitives</h2>
${buildTypeGroup(
  'Family',
  [
    { step: 'base', varName: '--eds-f-family' },
    { step: 'monospace', varName: '--eds-f-family-monospace' },
  ],
  (varName) =>
    `<p style="font-family: var(${varName}); margin: 0;">The quick brown fox jumps over the lazy dog</p>`,
)}
${buildTypeGroup(
  'Font size / line-height',
  fontSizeEntries(),
  (varName, lineHeightVar) => {
    const lh = lineHeightVar ? `line-height: var(${lineHeightVar});` : '';
    return `<p style="font-size: var(${varName}); ${lh} font-family: var(--eds-f-family); margin: 0;">The quick brown fox jumps over the lazy dog</p>`;
  },
)}
${buildTypeGroup(
  'Font weight',
  scaleEntries(tokens.primitives.typography['font-weight'], 'f-w'),
  (varName) =>
    `<p style="font-weight: var(${varName}); font-size: var(--eds-f-s-m); margin: 0;">The quick brown fox jumps over the lazy dog</p>`,
)}
${buildTypeGroup(
  'Letter spacing',
  scaleEntries(tokens.primitives.typography['letter-spacing'], 'f-ls'),
  (varName) =>
    `<p style="letter-spacing: var(${varName}); font-size: var(--eds-f-s-m); margin: 0;">The quick brown fox jumps over the lazy dog</p>`,
)}
  </section>

  <section class="section--gap-before">
    <h2>Responsive type scale</h2>
    <p class="section-note">
      Each row uses the real <code>var(--eds-f-{type}-{step}-size/-line-height)</code>
      custom properties — resize the browser window (or this preview's
      viewport) past 768px and 1140px to see the values actually change,
      live.
    </p>
${buildResponsiveTypeSection()}
  </section>
`);
Typography.storyName = 'Typography';

export const BreakpointsAndGrid = renderTokensPage(`
  <section>
    <h2>Breakpoints</h2>
    <p class="section-note">
      Live <code>var(--eds-bp-*)</code> values.
    </p>
${buildBreakpointTable()}
  </section>

  <section class="section--gap-before">
    <h2>Grid</h2>
    <p class="section-note">
      Reference only — <code>--eds-gr-*</code> only ever holds the current
      viewport's tier (mobile below 768px, tablet 768–1140px, desktop from
      1140px), so all three tiers are shown side by side here instead.
    </p>
${buildGridTable()}
  </section>
`);
BreakpointsAndGrid.storyName = 'Breakpoints & grid';
