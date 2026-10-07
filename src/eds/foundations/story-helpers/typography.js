// Font-size/line-height entries for the "Typography" story.
import tokens from '../tokens.json';
import { buildTypeGroup } from './render';

export function fontSizeEntries() {
  return Object.keys(tokens.primitives.typography['font-size']).map((step) => ({
    step,
    varName: `--eds-f-s-${step}`,
    lineHeightVar: tokens.primitives.typography['font-line-height'][step]
      ? `--eds-f-lh-${step}`
      : null,
  }));
}

export function buildResponsiveTypeSection() {
  return Object.keys(tokens.semantic.typography.mobile)
    .map((type) => {
      const entries = Object.keys(tokens.semantic.typography.mobile[type]).map(
        (step) => ({
          step,
          varName: `--eds-f-${type}-${step}-size`,
          lineHeightVar: `--eds-f-${type}-${step}-line-height`,
        }),
      );
      return buildTypeGroup(
        type,
        entries,
        (
          varName,
          lineHeightVar,
        ) => `<p style="font-size: var(${varName}); line-height: var(${lineHeightVar}); font-family: var(--eds-f-family); margin: 0;">
            The quick brown fox jumps over the lazy dog
          </p>`,
      );
    })
    .join('\n');
}
