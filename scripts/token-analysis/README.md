# ECL Token Analysis Script

This directory contains the script to analyze CM- design token usage across the ECL codebase.

## Scripts

### `analyse-ec-token.py`

**Comprehensive Python script** that generates detailed token usage matrices and analysis.

**Features:**

- Complete token usage matrices showing which components use which tokens
- Token categorization (border, surface, on-surface)
- Component-level usage tracking with ✅/❌ indicators
- Comprehensive cleanup recommendations
- Detailed statistics and efficiency metrics
- Identifies unused tokens for immediate removal

**Usage:**

```bash
# Run from repository root
python3 scripts/token-analysis/analyse-ec-token.py

# Or specify a different repository path
python3 scripts/token-analysis/analyse-ec-token.py /path/to/ecl/repo
```

**Output:** `scripts/token-analysis/reports/token-usage-YYYY-MM-DD.md` with detailed matrices and analysis

### `list-ecl-token.js`

**Node script** that compiles the EC and EU theme packages with Sass (the same
way the real presets do) and exports every resolved color design token to a
single JSON file - handy for diffing against an external source of truth
(e.g. a Figma color-styles export).

**Features:**

- Compiles `@ecl/theme-ec` and `@ecl/theme-eu` for real, so `map.get()`,
  `color-mix()` and CSS `var()` chains all resolve to final literal values
  (no raw Sass expressions or unresolved `var(--x)` references)
- Exports EC's flat palette tokens plus every `--cm-` color-mode token,
  including the base/default mode and all 15 named modes (blue, green,
  orange, purple, blue-navy, blue-electric, blue-ocean, green-lemon,
  green-pine, warm-grey, red-crayola, yellow-gold, purple-violet,
  red-tomato, green-dark)
- Exports EU's flat palette tokens (EU has no color-mode system)
- Drops short internal `--c-*` aliases (e.g. `--c-p-600`) since they are
  plain duplicates of the long `--ecl-color-*` names

**Usage:**

```bash
# Run from repository root
node scripts/token-analysis/list-ecl-token.js

# Or specify a different repository path
node scripts/token-analysis/list-ecl-token.js /path/to/ecl/repo

# Or write to a specific file instead of the dated default
node scripts/token-analysis/list-ecl-token.js --out /tmp/ecl-color-tokens.json
```

**Requirements:** run after `pnpm install` (needs the workspace's `sass`
dependency and the `@ecl/theme-ec` / `@ecl/theme-eu` / `@ecl/color-modes`
package symlinks that `pnpm install` sets up).

**Output:** `scripts/token-analysis/reports/ecl-color-tokens-YYYY-MM-DD.json`
with `ec.tokens`, `ec.colorModes` (per mode) and `eu.tokens`.

## Reports Directory

All generated reports are saved in `scripts/token-analysis/reports/` with the naming pattern:

- `token-usage-YYYY-MM-DD.md`

This keeps the analysis organized and allows for easy comparison between different analysis runs.

## Requirements

- Python 3.6+
- No external dependencies (uses only standard library)

## Expected Output

The script generates comprehensive markdown reports with:

1. **Executive Summary**
   - Total tokens defined/used/unused
   - Utilization statistics by category

2. **Token Usage Matrices**
   - Border tokens usage by component
   - Surface tokens usage by component
   - On-surface tokens usage by component

3. **Cleanup Recommendations**
   - Unused tokens for immediate removal
   - Single-use tokens for consolidation
   - Core tokens to preserve

4. **Component Impact Analysis**
   - Components with highest token dependency
   - Usage patterns and efficiency metrics

## File Structure

The script analyzes these locations:

- `src/themes/ec/_custom-properties.scss` - Token definitions
- `src/themes/ec/variables/*.scss` - Component variable files
- `src/components/**/*.scss` - Component implementation files

## Integration

To run this analysis regularly:

```bash
# Add to package.json scripts
"analyze-tokens": "python3 scripts/token-analysis/analyse-ec-token.py"

# Or create a git hook for pre-commit analysis
# .git/hooks/pre-commit
#!/bin/bash
python3 scripts/token-analysis/analyse-ec-token.py
```

## Directory Structure

```
scripts/token-analysis/
├── analyse-ec-token.py    # Comprehensive Python analysis script
├── README.md              # This documentation
└── reports/               # Generated reports directory
    └── token-usage-YYYY-MM-DD.md
```

## Troubleshooting

**Permission denied:**

```bash
chmod +x scripts/token-analysis/analyse-ec-token.py
```

**Python not found:**

- Install Python 3.6+ or use `python` instead of `python3`

**Files not found:**

- Ensure you're running from the ECL repository root
- Check that the expected directory structure exists

**Reports directory missing:**

- The scripts will automatically create the `reports/` directory if it doesn't exist
