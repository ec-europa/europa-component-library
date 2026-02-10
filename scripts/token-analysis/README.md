# ECL Token Analysis Script

This directory contains the script to analyze CM- design token usage across the ECL codebase.

## Script

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
