// Generic, token-agnostic markup builders shared by every foundations story.
// Domain-specific logic lives in ./colors.js, ./typography.js, ./layout.js.
import { SHARED_STYLES } from './styles';

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function renderGroup(title, innerHtml) {
  return `      <div class="group">
        <h3>${escapeHtml(title)}</h3>
${innerHtml}
      </div>`;
}

export function renderSwatchGrid(items, { compact = false } = {}) {
  const gridClass = compact
    ? 'swatch-grid swatch-grid--compact'
    : 'swatch-grid';
  const swatchClass = compact ? 'swatch swatch--compact' : 'swatch';
  return `        <div class="${gridClass}">
${items
  .map(
    (item) => `          <div class="${swatchClass}">
            <div class="swatch-color" style="background: ${item.background}">
              <span class="swatch-label">${escapeHtml(item.label)}</span>
            </div>
            <code class="swatch-var" title="${escapeHtml(item.code)}">${escapeHtml(item.code)}</code>
          </div>`,
  )
  .join('\n')}
        </div>`;
}

// { none: '0rem', xs: '2px' } -> [{ step: 'none', varName: '--eds-{prefix}-none', value: '0rem' }, ...]
export function scaleEntries(map, prefix) {
  return Object.keys(map).map((step) => ({
    step,
    varName: `--eds-${prefix}-${step}`,
    value: map[step],
  }));
}

export function buildScaleRows(entries, renderPreview) {
  const rows = entries
    .map(({ step, varName, value }) => {
      // Shadow entries carry a decomposed object, not a scalar - skip those.
      const valueText =
        typeof value === 'string' || typeof value === 'number'
          ? escapeHtml(value)
          : '';
      return `          <div class="scale-row">
            <code class="scale-step">${escapeHtml(step)}</code>
            ${renderPreview(varName)}
            <code class="scale-value">${valueText}</code>
            <code class="scale-var">${varName}</code>
          </div>`;
    })
    .join('\n');
  return `        <div class="scale-list">\n${rows}\n        </div>`;
}

export function buildScaleGroup(title, entries, renderPreview) {
  return renderGroup(title, buildScaleRows(entries, renderPreview));
}

export function buildTypeRows(entries, renderSample) {
  return entries
    .map(
      ({ step, varName, lineHeightVar }) => `        <div class="type-row">
          <code class="type-step">${escapeHtml(step)}</code>
          ${renderSample(varName, lineHeightVar)}
        </div>`,
    )
    .join('\n');
}

export function buildTypeGroup(title, entries, renderSample) {
  return `      <div class="group">
        <h3>${escapeHtml(title)}</h3>
        <div class="type-list">
${buildTypeRows(entries, renderSample)}
        </div>
      </div>`;
}

function renderPairCard({ suffix, surfaceVar, onSurfaceVar }) {
  return `          <div class="pair-item">
            <div class="pair-card" style="background: var(${surfaceVar}); color: var(${onSurfaceVar});">
              <div class="pair-card-label">${escapeHtml(suffix)}</div>
              <p class="pair-card-sample">The quick brown fox jumps over the lazy dog</p>
            </div>
            <code class="pair-card-var">${surfaceVar}</code>
            <code class="pair-card-var">${onSurfaceVar}</code>
          </div>`;
}

export function renderPairGrid(pairs) {
  return `        <div class="pair-grid">\n${pairs.map(renderPairCard).join('\n')}\n        </div>`;
}

export function renderTokensPage(sectionHtml) {
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
