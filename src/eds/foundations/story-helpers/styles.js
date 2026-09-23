// Shared CSS for every foundations story page.
export const SHARED_STYLES = `<style>
  .eds-tokens * {
    box-sizing: border-box;
  }
  .eds-tokens {
    padding: var(--eds-sp-xl);
    font-family: var(--eds-f-family);
    color: var(--eds-c-foreground);
    background: var(--eds-c-surface-elevation);
    min-height: 100vh;
  }
  .eds-tokens header {
    margin-bottom: var(--eds-sp-xl);
    padding-bottom: var(--eds-sp-m);
    border-bottom: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens h1 {
    font-size: var(--eds-f-s-2xl);
    margin: 0;
  }
  .eds-tokens h2 {
    font-size: var(--eds-f-s-xl);
    margin: var(--eds-sp-2xl) 0 var(--eds-sp-m);
  }
  .eds-tokens h3 {
    font-size: var(--eds-f-s-l);
    font-weight: var(--eds-f-w-medium);
    color: var(--eds-c-foreground-subtle);
    margin: 0 0 var(--eds-sp-s);
  }
  .eds-tokens .section-note {
    font-size: var(--eds-f-s-m);
    color: var(--eds-c-foreground-subtle);
    margin: calc(-1 * var(--eds-sp-s)) 0 var(--eds-sp-m);
  }
  .eds-tokens section {
    margin-bottom: var(--eds-sp-2xl);
  }
  .eds-tokens .section--gap-before {
    padding-top: var(--eds-sp-2xl);
  }
  .eds-tokens .group {
    margin-bottom: var(--eds-sp-xl);
  }
  .eds-tokens .swatch-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    gap: var(--eds-sp-m);
  }
  .eds-tokens .swatch-color {
    height: 3.5rem;
    border-radius: var(--eds-br-s);
    border: var(--eds-bw-xs) solid var(--eds-c-border-divider);
    display: flex;
    align-items: flex-end;
    padding: var(--eds-sp-3xs);
    overflow: hidden;
  }
  .eds-tokens .swatch-label {
    /* Opaque chip, not text-on-swatch, so it stays legible on any color. */
    display: inline-block;
    max-width: 100%;
    padding: 0.1em 0.5em;
    border-radius: var(--eds-br-xs);
    background: rgb(255 255 255 / 85%);
    color: #111;
    font-size: var(--eds-f-s-xs);
    line-height: 1.5;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .eds-tokens .swatch-var {
    display: block;
    margin-top: var(--eds-sp-2xs);
    font-size: var(--eds-f-s-xs);
    line-height: 1.5;
    color: var(--eds-c-foreground-subtler);
    word-break: break-all;
  }
  .eds-tokens .swatch-grid--compact {
    /* Denser than swatch-grid: primitive/domain families pack 11-15 shades. */
    grid-template-columns: repeat(auto-fill, minmax(6.5rem, 1fr));
    gap: var(--eds-sp-xs);
  }
  .eds-tokens .swatch--compact .swatch-color {
    height: 2.75rem;
    padding: 0.25rem;
  }
  .eds-tokens .swatch--compact .swatch-label,
  .eds-tokens .swatch--compact .swatch-var {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .eds-tokens .pair-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
    gap: var(--eds-sp-m);
  }
  .eds-tokens .pair-item {
    display: flex;
    flex-direction: column;
    gap: var(--eds-sp-2xs);
  }
  .eds-tokens .pair-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--eds-sp-s);
    min-height: 6.5rem;
    padding: var(--eds-sp-m);
    border-radius: var(--eds-br-s);
    border: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens .pair-card-label {
    font-size: var(--eds-f-s-m);
    font-weight: var(--eds-f-w-medium);
    word-break: break-word;
  }
  .eds-tokens .pair-card-sample {
    font-size: var(--eds-f-s-s);
    margin: 0;
  }
  .eds-tokens .pair-card-var {
    display: block;
    font-size: var(--eds-f-s-s);
    line-height: 1.5;
    color: var(--eds-c-foreground-subtler);
    word-break: break-all;
  }
  .eds-tokens .type-list,
  .eds-tokens .scale-list {
    display: flex;
    flex-direction: column;
    gap: var(--eds-sp-s);
  }
  .eds-tokens .type-row {
    display: grid;
    grid-template-columns: 6rem 1fr;
    align-items: center;
    gap: var(--eds-sp-m);
  }
  .eds-tokens .scale-row {
    display: grid;
    grid-template-columns: 5rem 6rem 6rem 1fr;
    align-items: center;
    gap: var(--eds-sp-m);
  }
  .eds-tokens .scale-var {
    font-size: var(--eds-f-s-xs);
    color: var(--eds-c-foreground-subtler);
  }
  .eds-tokens .type-step,
  .eds-tokens .scale-step,
  .eds-tokens .scale-value {
    font-size: var(--eds-f-s-s);
    font-weight: var(--eds-f-w-medium);
    color: var(--eds-c-foreground);
  }
  .eds-tokens .scale-bar {
    height: var(--eds-si-m);
    background: var(--eds-c-surface-primary);
    border-radius: var(--eds-br-xs);
  }
  .eds-tokens .shape-box {
    width: var(--eds-si-9xl);
    height: var(--eds-si-6xl);
    background: var(--eds-c-surface-primary-subtle);
  }
  .eds-tokens .shadow-box {
    width: var(--eds-si-9xl);
    height: var(--eds-si-6xl);
    background: var(--eds-c-surface-elevation);
    border-radius: var(--eds-br-s);
  }
  .eds-tokens .opacity-box {
    width: var(--eds-si-9xl);
    height: var(--eds-si-6xl);
    border-radius: var(--eds-br-s);
    background: var(--eds-c-surface-primary);
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
  .eds-tokens .breakpoint-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--eds-f-s-s);
  }
  .eds-tokens .breakpoint-table th,
  .eds-tokens .breakpoint-table td {
    text-align: left;
    padding: var(--eds-sp-s) var(--eds-sp-m);
    border-bottom: var(--eds-bw-xs) solid var(--eds-c-border-divider);
  }
  .eds-tokens .breakpoint-table thead th {
    color: var(--eds-c-foreground-subtle);
    font-weight: var(--eds-f-w-medium);
  }
</style>`;
