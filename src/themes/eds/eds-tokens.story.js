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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function restKeysByPrefix(prefix) {
  return Object.keys(light).filter(
    (key) => key.startsWith(prefix) && light[key].$type !== 'color',
  );
}

function buildColorSections() {
  const groups = groupColorTokens(light);
  return Object.keys(groups)
    .sort()
    .map((groupName) => {
      const swatches = groups[groupName]
        .map((segments) => {
          const varName = cssVarName('eds', segments);
          const label = segments.slice(2).join(' / ') || segments[1];
          return `        <div class="swatch">
          <div class="swatch-color" style="background: var(${varName})"></div>
          <div class="swatch-label">${escapeHtml(label)}</div>
          <code class="swatch-var">${varName}</code>
        </div>`;
        })
        .join('\n');
      return `      <div class="group">
        <h3>${escapeHtml(groupName)}</h3>
        <div class="swatch-grid">
${swatches}
        </div>
      </div>`;
    })
    .join('\n');
}

// No `var(--eds-*)` to reference for these (see the `primitiveColors`
// comment above) - each swatch gets its background as a plain resolved
// hex, and shows that hex (instead of a custom property name) as its label.
function buildPrimitiveColorSections() {
  const groups = groupPrimitiveColorTokens(primitiveColors);
  return Object.keys(groups)
    .sort()
    .map((groupName) => {
      const swatches = groups[groupName]
        .map((segments) => {
          const key = segments.join('/');
          const hex = colorToHex(primitiveColors[key].$value);
          const label = segments[segments.length - 1];
          return `        <div class="swatch">
          <div class="swatch-color" style="background: ${hex}"></div>
          <div class="swatch-label">${escapeHtml(label)}</div>
          <code class="swatch-var">${hex}</code>
        </div>`;
        })
        .join('\n');
      return `      <div class="group">
        <h3>${escapeHtml(groupName)}</h3>
        <div class="swatch-grid">
${swatches}
        </div>
      </div>`;
    })
    .join('\n');
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

function buildScaleSection(prefix, renderPreview) {
  return restKeysByPrefix(prefix)
    .map((key) => {
      const segments = key.split('/');
      const step = segments[segments.length - 1];
      const varName = cssVarName('eds', segments);
      return `        <div class="scale-row">
          <code class="scale-step">${escapeHtml(step)}</code>
          ${renderPreview(varName)}
          <code class="scale-var">${varName}</code>
        </div>`;
    })
    .join('\n');
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

const markup = `<style>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--eds-sp-m);
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
  .eds-tokens button {
    font: inherit;
    padding: var(--eds-sp-xs) var(--eds-sp-m);
    border-radius: var(--eds-br-s);
    border: var(--eds-bw-xs) solid var(--eds-c-border-default);
    background: var(--eds-c-surface-elevation-default);
    color: var(--eds-c-foreground-default);
    cursor: pointer;
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
</style>
<div class="eds-tokens">
  <header>
    <h1>EDS design tokens</h1>
    <button type="button" id="eds-theme-toggle">Toggle dark mode</button>
  </header>

  <section>
    <h2>Color</h2>
${buildColorSections()}
  </section>

  <section>
    <h2>Primitive colors</h2>
    <p class="section-note">
      Reference only — not exposed as CSS custom properties, shown here as
      resolved hex values rather than <code>var(--eds-*)</code>.
    </p>
${buildPrimitiveColorSections()}
  </section>

  <section>
    <h2>Typography</h2>
${buildTypographySection()}
  </section>

  <section>
    <h2>Spacing</h2>
    <div class="scale-list">
${buildScaleSection(
  'spacing/',
  (varName) => `<div class="scale-bar" style="width: var(${varName});"></div>`,
)}
    </div>
  </section>

  <section>
    <h2>Sizing</h2>
    <div class="scale-list">
${buildScaleSection(
  'sizing/',
  (varName) => `<div class="scale-bar" style="width: var(${varName});"></div>`,
)}
    </div>
  </section>

  <section>
    <h2>Border radius</h2>
    <div class="scale-list">
${buildScaleSection(
  'border-radius/',
  (varName) =>
    `<div class="shape-box" style="border-radius: var(${varName});"></div>`,
)}
    </div>
  </section>

  <section>
    <h2>Border width</h2>
    <div class="scale-list">
${buildScaleSection(
  'border-width/',
  (varName) =>
    `<div class="shape-box" style="border: var(${varName}) solid var(--eds-c-border-default);"></div>`,
)}
    </div>
  </section>

  <section>
    <h2>Shadow</h2>
    <div class="scale-list">
${buildShadowSection()}
    </div>
  </section>

  <section>
    <h2>Opacity</h2>
    <div class="scale-list">
${buildScaleSection(
  'opacity/',
  (varName) =>
    `<div class="opacity-box" style="opacity: var(${varName});"></div>`,
)}
    </div>
  </section>
</div>`;

export default {
  title: 'EDS/Design tokens',
};

export const TokensShowcase = () => {
  const container = document.createElement('div');
  container.innerHTML = markup;
  // A <script> tag would be inert here (innerHTML never executes embedded
  // scripts), so the toggle is wired up imperatively after insertion instead.
  const toggle = container.querySelector('#eds-theme-toggle');
  toggle.addEventListener('click', () => {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  });
  return container;
};

TokensShowcase.storyName = 'EDS tokens';
