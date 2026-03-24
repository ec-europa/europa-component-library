#!/usr/bin/env python3
"""
ECL Design System: CM- Token Usage Analysis Script
Generates comprehensive token usage matrices and cleanup recommendations.
"""

import os
import re
import json
from pathlib import Path
from collections import defaultdict, Counter
from datetime import datetime

class CMTokenAnalyzer:
    def __init__(self, repo_root=None):
        self.repo_root = Path(repo_root) if repo_root else Path(__file__).parent.parent.parent
        self.custom_properties_file = self.repo_root / "src/themes/ec/_custom-properties.scss"
        self.variables_dir = self.repo_root / "src/themes/ec/variables"
        self.components_dir = self.repo_root / "src/components"

        # Output directory for reports
        self.reports_dir = Path(__file__).parent / "reports"
        self.reports_dir.mkdir(exist_ok=True)

        # Data storage
        self.tokens = set()
        self.token_usage = defaultdict(lambda: defaultdict(int))  # token -> component -> count
        self.component_files = defaultdict(list)  # component -> [files]

    def extract_cm_tokens(self):
        """Extract all --cm- tokens from custom properties file."""
        print("Extracting cm- tokens from custom properties...")

        with open(self.custom_properties_file, 'r') as f:
            content = f.read()

        # Find all --cm- tokens
        token_pattern = r'--cm-[a-zA-Z0-9-]+'
        tokens = re.findall(token_pattern, content)
        self.tokens = set(tokens)

        print(f"   Found {len(self.tokens)} unique cm- tokens")
        return self.tokens

    def analyze_file_usage(self, file_path, component_name):
        """Analyze cm- token usage in a single file."""
        try:
            with open(file_path, 'r') as f:
                content = f.read()
        except UnicodeDecodeError:
            # Skip binary files
            return

        for token in self.tokens:
            count = len(re.findall(re.escape(token), content))
            if count > 0:
                self.token_usage[token][component_name] += count

    def scan_directories(self):
        """Scan variables and components directories for token usage."""
        print("Scanning directories for token usage...")

        # Scan variables directory
        for scss_file in self.variables_dir.glob("*.scss"):
            component_name = scss_file.stem.replace('_', '')  # Remove leading underscore
            self.component_files[component_name].append(str(scss_file))
            self.analyze_file_usage(scss_file, component_name)

        # Scan components directory
        for scss_file in self.components_dir.rglob("*.scss"):
            # Extract component name from path
            relative_path = scss_file.relative_to(self.components_dir)
            component_name = relative_path.parts[0]  # First directory is component name
            self.component_files[component_name].append(str(scss_file))
            self.analyze_file_usage(scss_file, component_name)

        print(f"   Analyzed {len(self.component_files)} components")

    def categorize_tokens(self):
        """Categorize tokens by type (border, surface, on-surface)."""
        categories = {
            'border': [],
            'surface': [],
            'on-surface': []
        }

        for token in sorted(self.tokens):
            if '--cm-border-' in token:
                categories['border'].append(token)
            elif '--cm-surface-' in token:
                categories['surface'].append(token)
            elif '--cm-on-surface-' in token:
                categories['on-surface'].append(token)

        return categories

    def generate_usage_matrix(self, tokens, title):
        """Generate a markdown table for token usage matrix."""
        if not tokens:
            return ""

        # Get all components that use any of these tokens
        components = set()
        for token in tokens:
            components.update(self.token_usage[token].keys())

        components = sorted(components)

        if not components:
            return f"### {title}\n\nNo usage found for these tokens.\n\n"

        # Create table header
        table = f"### {title}\n\n"
        header = "| Component |"
        for token in tokens:
            clean_token = token.replace('--cm-', '').replace('-', '-')
            header += f" `{clean_token}` |"
        table += header + "\n"

        # Create separator
        separator = "|-----------|"
        for _ in tokens:
            separator += ":----------------:|"
        table += separator + "\n"

        # Create data rows
        for component in components:
            row = f"| {component} |"
            for token in tokens:
                count = self.token_usage[token][component]
                if count > 0:
                    row += " ✅ |"
                else:
                    row += " - |"
            table += row + "\n"

        # Add usage count row
        usage_row = "| **USAGE COUNT** |"
        for token in tokens:
            total_usage = sum(self.token_usage[token].values())
            usage_row += f" **{total_usage}** |"
        table += usage_row + "\n\n"

        return table

    def get_usage_statistics(self):
        """Calculate usage statistics."""
        total_tokens = len(self.tokens)
        used_tokens = len([t for t in self.tokens if sum(self.token_usage[t].values()) > 0])
        unused_tokens = total_tokens - used_tokens

        return {
            'total_tokens': total_tokens,
            'used_tokens': used_tokens,
            'unused_tokens': unused_tokens,
            'utilization_rate': (used_tokens / total_tokens * 100) if total_tokens > 0 else 0
        }

    def get_unused_tokens(self):
        """Get list of completely unused tokens."""
        return [token for token in sorted(self.tokens) if sum(self.token_usage[token].values()) == 0]

    def get_single_use_tokens(self):
        """Get list of tokens used only once."""
        return [token for token in sorted(self.tokens) if sum(self.token_usage[token].values()) == 1]

    def get_most_used_tokens(self, limit=10):
        """Get most frequently used tokens."""
        token_counts = [(token, sum(usage.values())) for token, usage in self.token_usage.items()]
        return sorted(token_counts, key=lambda x: x[1], reverse=True)[:limit]

    def get_component_token_counts(self):
        """Get components with highest token usage."""
        component_counts = defaultdict(set)

        for token, usage in self.token_usage.items():
            for component in usage.keys():
                component_counts[component].add(token)

        return [(comp, len(tokens)) for comp, tokens in sorted(component_counts.items(), key=lambda x: len(x[1]), reverse=True)]

    def generate_report(self, output_file=None):
        """Generate comprehensive markdown report."""
        if output_file is None:
            output_file = self.reports_dir / f"token-usage-{datetime.now().strftime('%Y-%m-%d')}.md"

        print(f"Generating report: {output_file}")

        # Get data for report
        stats = self.get_usage_statistics()
        categories = self.categorize_tokens()
        unused_tokens = self.get_unused_tokens()
        single_use_tokens = self.get_single_use_tokens()
        most_used = self.get_most_used_tokens()
        component_usage = self.get_component_token_counts()

        # Generate report content
        report = f"""# ECL Design System: CM- Token Usage Analysis

**Analysis Date:** {datetime.now().strftime("%B %d, %Y")}
**Codebase:** Europa Component Library (ECL) 5.x
**Scope:** All `--cm-` design tokens in `src/themes/ec/_custom-properties.scss`

## Executive Summary

- **Total cm- tokens defined:** {stats['total_tokens']}
- **Total cm- tokens used:** {stats['used_tokens']} ({stats['utilization_rate']:.1f}% utilization)
- **Total cm- tokens unused:** {stats['unused_tokens']} ({100 - stats['utilization_rate']:.1f}% - cleanup candidates)
- **Components analyzed:** {len(self.component_files)} across `src/themes/ec/variables/` and `src/components/`

## Token Categories Overview

| Category | Total Defined | Used | Unused | Efficiency |
|----------|:-------------:|:----:|:------:|:----------:|
"""

        for category, tokens in categories.items():
            used = len([t for t in tokens if sum(self.token_usage[t].values()) > 0])
            unused = len(tokens) - used
            efficiency = (used / len(tokens) * 100) if tokens else 0
            report += f"| {category.title()} | {len(tokens)} | {used} | {unused} | {efficiency:.0f}% |\n"

        report += f"""
---

## Detailed Token Usage Tables

{self.generate_usage_matrix(categories['border'], 'BORDER TOKENS (' + str(len(categories['border'])) + ' total)')}
{self.generate_usage_matrix(categories['surface'], 'SURFACE TOKENS (' + str(len(categories['surface'])) + ' total)')}
{self.generate_usage_matrix(categories['on-surface'], 'ON-SURFACE TOKENS (' + str(len(categories['on-surface'])) + ' total)')}

---

## Cleanup Recommendations

### Unused Tokens ({len(unused_tokens)} tokens - candidates for removal)

"""

        # Group unused tokens by category
        unused_by_category = defaultdict(list)
        for token in unused_tokens:
            if '--cm-border-' in token:
                unused_by_category['Border'].append(token)
            elif '--cm-surface-' in token:
                unused_by_category['Surface'].append(token)
            elif '--cm-on-surface-' in token:
                unused_by_category['On-surface'].append(token)

        for category, tokens in unused_by_category.items():
            report += f"\n**{category} tokens ({len(tokens)} unused):**\n"
            for token in sorted(tokens):
                report += f"- `{token}`\n"

        report += f"""

### Single-Use Tokens ({len(single_use_tokens)} tokens - review for consolidation)

These tokens are used only once in the codebase and may be candidates for consolidation with more common tokens:

"""

        # Group single-use tokens by category
        single_use_by_category = defaultdict(list)
        for token in single_use_tokens:
            if '--cm-border-' in token:
                single_use_by_category['Border'].append(token)
            elif '--cm-surface-' in token:
                single_use_by_category['Surface'].append(token)
            elif '--cm-on-surface-' in token:
                single_use_by_category['On-surface'].append(token)

        for category, tokens in single_use_by_category.items():
            report += f"\n**{category} tokens ({len(tokens)} used once):**\n"
            for token in sorted(tokens):
                # Find which component uses this token
                component = next((comp for comp, count in self.token_usage[token].items() if count > 0), None)
                if component:
                    report += f"- `{token}` (used in: {component})\n"
                else:
                    report += f"- `{token}`\n"

        report += f"""

### High-Priority Core Tokens (Keep these)

**Most frequently used tokens:**
"""

        for i, (token, count) in enumerate(most_used[:5], 1):
            report += f"{i}. `{token}` ({count} uses)\n"

        report += f"""

### Components with Highest Token Dependency

**Monitor these components when making token changes:**
"""

        for i, (component, count) in enumerate(component_usage[:5], 1):
            report += f"{i}. **{component}** ({count} different tokens)\n"

        report += f"""

---

## File Locations

**Source files analyzed:**
- CSS Custom Properties: `src/themes/ec/_custom-properties.scss`
- Component Variables: `src/themes/ec/variables/*.scss` ({len(list(self.variables_dir.glob('*.scss')))} files)
- Component Styles: `src/components/**/*.scss` ({len([f for files in self.component_files.values() for f in files])} files total)

**Generated:** {datetime.now().strftime("%B %d, %Y")}
**Tool:** Python CM- Token Analysis Script

## Usage Commands

To regenerate this analysis:

```bash
# Run the analysis script
python3 scripts/token-analysis/analyse-ec-token.py
```
"""

        # Write report to file
        with open(output_file, 'w') as f:
            f.write(report)

        print(f"Report generated: {output_file}")
        return output_file

    def run_analysis(self):
        """Run complete analysis and generate report."""
        print("ECL CM- Token Usage Analysis")
        print("=" * 50)

        # Extract tokens
        self.extract_cm_tokens()

        # Scan for usage
        self.scan_directories()

        # Generate report
        output_file = self.generate_report()

        # Print summary
        stats = self.get_usage_statistics()
        print(f"""
Analysis Summary:
   - Total tokens: {stats['total_tokens']}
   - Used tokens: {stats['used_tokens']} ({stats['utilization_rate']:.1f}%)
   - Unused tokens: {stats['unused_tokens']}
   - Components analyzed: {len(self.component_files)}

Report saved to: {output_file}
""")

def main():
    """Main entry point."""
    import sys

    repo_root = sys.argv[1] if len(sys.argv) > 1 else None
    analyzer = CMTokenAnalyzer(repo_root)
    analyzer.run_analysis()

if __name__ == "__main__":
    main()