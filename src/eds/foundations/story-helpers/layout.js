// Breakpoint and grid tables for the "Breakpoints & grid" story.
import tokens from '../tokens.json';
import { escapeHtml } from './render';

export function buildBreakpointTable() {
  const rows = Object.entries(tokens.primitives.breakpoint)
    .map(
      ([step, value]) => `          <tr>
            <th scope="row">${escapeHtml(step)}</th>
            <td>${escapeHtml(value)}</td>
            <td><code>--eds-bp-${step}</code></td>
          </tr>`,
    )
    .join('\n');
  return `        <table class="breakpoint-table">
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Min-width</th>
              <th scope="col">Custom property</th>
            </tr>
          </thead>
          <tbody>
${rows}
          </tbody>
        </table>`;
}

export function buildGridTable() {
  const tiers = [
    ['mobile', 'Mobile'],
    ['tablet', 'Tablet'],
    ['desktop', 'Desktop'],
  ];
  const rows = tiers
    .map(([key, label]) => {
      const grid = tokens.primitives.grid[key];
      return `          <tr>
            <th scope="row">${escapeHtml(label)}</th>
            <td>${grid.columns}</td>
            <td>${escapeHtml(grid.gutter)}</td>
            <td>${escapeHtml(grid.margin)}</td>
          </tr>`;
    })
    .join('\n');
  return `        <table class="breakpoint-table">
          <thead>
            <tr>
              <th scope="col">Tier</th>
              <th scope="col">Columns</th>
              <th scope="col">Gutter</th>
              <th scope="col">Margin</th>
            </tr>
          </thead>
          <tbody>
${rows}
          </tbody>
        </table>`;
}
