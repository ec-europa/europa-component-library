#!/usr/bin/env node
/**
 * ECL Design System: Color Token Export Script
 * Compiles the EC and EU theme packages with Sass (the same way the real
 * presets do) and exports every resolved color design token - including all
 * EC color-mode variants - to a single JSON file for comparison against
 * external sources (e.g. a Figma color-styles export).
 *
 * Usage:
 *   node scripts/token-analysis/list-ecl-token.js [repoRoot] [--out <file>]
 */

const fs = require('fs');
const path = require('path');

function resolveSass(repoRoot) {
  const builderDir = path.join(repoRoot, 'src/tools/builder');
  const sassPath = require.resolve('sass', { paths: [builderDir, repoRoot] });
  return require(sassPath);
}

// Sass never evaluates CSS var() references (they are runtime CSS, not Sass
// variables), so tokens defined as `--foo: var(--bar)` are left untouched by
// the compiler. This walks those chains against a dictionary of raw
// (unresolved) custom-property declarations until it bottoms out on a
// literal value.
const VAR_REGEX =
  /var\(\s*(--[a-zA-Z0-9-]+)\s*(?:,[^()]*(?:\([^()]*\)[^()]*)*)?\)/g;

function resolve(name, rawDict, memo, visiting = new Set()) {
  if (memo.has(name)) return memo.get(name);
  const raw = rawDict[name];
  if (raw === undefined) return `var(${name})`;
  if (visiting.has(name)) return raw; // circular reference guard
  visiting.add(name);
  const resolved = raw.replace(VAR_REGEX, (fullMatch, varName) =>
    resolve(varName, rawDict, memo, visiting),
  );
  visiting.delete(name);
  memo.set(name, resolved);
  return resolved;
}

function resolveAll(rawDict) {
  const memo = new Map();
  const out = {};
  Object.keys(rawDict).forEach((key) => {
    out[key] = resolve(key, rawDict, memo);
  });
  return out;
}

function parseCss(css) {
  const noComments = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const blocks = {};
  const blockRegex = /([^{}]+)\{([^{}]*)\}/g;
  let match;
  while ((match = blockRegex.exec(noComments))) {
    const selector = match[1].trim();
    const props = {};
    match[2]
      .split(';')
      .map((l) => l.trim())
      .filter(Boolean)
      .forEach((decl) => {
        const idx = decl.indexOf(':');
        if (idx === -1) return;
        const prop = decl.slice(0, idx).trim();
        const value = decl.slice(idx + 1).trim();
        if (prop.startsWith('--')) props[prop] = value;
      });
    blocks[selector] = props;
  }
  return blocks;
}

function isColorValue(value) {
  return (
    /^#[0-9a-f]{3,8}$/i.test(value) ||
    /^rgb/i.test(value) ||
    /^hsl/i.test(value) ||
    /^color-mix/i.test(value) ||
    /^linear-gradient/i.test(value) ||
    value === 'transparent'
  );
}

function filterColorProps(props) {
  const out = {};
  Object.entries(props).forEach(([k, v]) => {
    if (isColorValue(v)) {
      out[k] = v
        .replace(/\s+/g, ' ')
        .replace(/\(\s+/g, '(')
        .replace(/\s+\)/g, ')')
        .trim();
    }
  });
  return out;
}

// Short internal aliases (--c-p, --c-p-600, --c-d, --c-ov-l, ...) are plain
// var() duplicates of the long --ecl-color-* names, so they carry no extra
// information for a token export. Semantic --cm-* tokens are NOT aliases:
// they have no dash between "c" and "m" ("--cm-xxx"), unlike aliases which
// always have a dash right after "c" ("--c-xxx").
function isShortAlias(name) {
  return /^--c-/.test(name);
}

function dropShortAliases(props) {
  const out = {};
  Object.entries(props).forEach(([k, v]) => {
    if (!isShortAlias(k)) out[k] = v;
  });
  return out;
}

function extractEcTokens(sass, repoRoot) {
  console.log('Compiling EC theme (base tokens + color modes)...');

  const entry = `
    @use '@ecl/theme-ec/custom-properties';
    @use '@ecl/theme-ec/theme' as theme;
    @use '@ecl/color-modes/color-modes' with (
      $theme: theme.$theme
    );
  `;
  const { css } = sass.compileString(entry, {
    loadPaths: [path.join(repoRoot, 'src/presets/ec/node_modules')],
  });

  const blocks = parseCss(css);
  const rootRaw = blocks[':root'] || {};
  const rootResolved = resolveAll(rootRaw);

  const tokens = dropShortAliases(filterColorProps(rootResolved));

  const colorModes = {};

  // Base/default mode: --cm-* tokens declared directly in :root, applied
  // before any .ecl-color-mode--X class overrides them.
  const defaultModeRaw = {};
  Object.keys(rootRaw).forEach((k) => {
    if (k.startsWith('--cm-')) defaultModeRaw[k] = rootResolved[k];
  });
  colorModes.default = filterColorProps(defaultModeRaw);

  // Named modes: only the properties each .ecl-color-mode--X class
  // overrides, resolved against (root + that class's own overrides).
  Object.entries(blocks).forEach(([selector, rawProps]) => {
    const m = selector.match(/^\.ecl-color-mode--(.+)$/);
    if (!m) return;
    const combinedRaw = { ...rootRaw, ...rawProps };
    const memo = new Map();
    const modeResolved = {};
    Object.keys(rawProps).forEach((key) => {
      modeResolved[key] = resolve(key, combinedRaw, memo);
    });
    colorModes[m[1]] = filterColorProps(modeResolved);
  });

  console.log(`   ${Object.keys(tokens).length} base color tokens`);
  console.log(
    `   ${Object.keys(colorModes).length} color modes (default + ${
      Object.keys(colorModes).length - 1
    } named)`,
  );

  return { tokens, colorModes };
}

function extractEuTokens(sass, repoRoot) {
  console.log('Compiling EU theme (base tokens, no color modes)...');

  const entry = "@use '@ecl/theme-eu/custom-properties';";
  const { css } = sass.compileString(entry, {
    loadPaths: [path.join(repoRoot, 'src/presets/eu/node_modules')],
  });

  const blocks = parseCss(css);
  const rootRaw = blocks[':root'] || {};
  const rootResolved = resolveAll(rootRaw);
  const tokens = dropShortAliases(filterColorProps(rootResolved));

  console.log(`   ${Object.keys(tokens).length} base color tokens`);

  return { tokens };
}

function parseArgs(argv) {
  const args = { repoRoot: null, out: null };
  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--out') {
      args.out = argv[i + 1];
      i += 1;
    } else {
      rest.push(argv[i]);
    }
  }
  [args.repoRoot] = rest;
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = path.resolve(args.repoRoot || path.join(__dirname, '../..'));

  console.log('ECL Color Token Export');
  console.log('='.repeat(50));

  const sass = resolveSass(repoRoot);

  const ec = extractEcTokens(sass, repoRoot);
  const eu = extractEuTokens(sass, repoRoot);

  const result = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: 'europa-component-library',
      description:
        'ECL color design tokens (fully resolved CSS custom properties: var() chains and color-mix()/map lookups resolved to final hex/color-mix values), for EC and EU systems. EC includes color-mode variants; EU is light-mode only per ECL conventions.',
      ec: {
        tokens:
          'Flat --ecl-color-* palette tokens declared in :root (not color-mode specific). Short internal aliases (--c-p, --c-p-600, ...) are omitted - they are plain duplicates of these.',
        colorModes:
          '--cm-* semantic tokens (surface/on-surface/border). "default" is the base set applied at :root before any .ecl-color-mode--X class; each named mode (blue, green, orange, ...) lists only the tokens IT overrides relative to default - merge default + mode to get that mode\'s full token set.',
      },
      eu: {
        tokens:
          'Flat --ecl-color-* palette tokens declared in :root. Short internal aliases (--c-p, --c-d, ...) are omitted - they are plain duplicates of these. EU has no color-mode system.',
      },
    },
    ec,
    eu,
  };

  const reportsDir = path.join(__dirname, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });
  const defaultOut = path.join(
    reportsDir,
    `ecl-color-tokens-${new Date().toISOString().slice(0, 10)}.json`,
  );
  const outFile = path.resolve(args.out || defaultOut);

  fs.writeFileSync(outFile, JSON.stringify(result, null, 2));

  console.log('');
  console.log('Export Summary:');
  console.log(`   EC base tokens: ${Object.keys(ec.tokens).length}`);
  console.log(`   EC color modes: ${Object.keys(ec.colorModes).length}`);
  console.log(`   EU base tokens: ${Object.keys(eu.tokens).length}`);
  console.log('');
  console.log(`Report saved to: ${outFile}`);
}

main();
