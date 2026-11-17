#!/usr/bin/env python3
"""Extract real content from the democracy-campaign source material into JSON.

Reads the two source files kept in this folder (not regenerated,
see docs/agentic/ecl-static-page.md's "Real content" section):
  - 20260409_democracy_campaign_revA2.docx  (campaign copy/body content)
  - ec-commission-sitemap.xlsx              (site structure / page list)

Writes campaign.json + sitemap.json into the output dir given as argv[1]
(the derived JSON is page-specific output, not source-of-truth, so it
belongs in each dist/{page}/ that consumes it, not here — see the doc
section above). Re-run per page after dist/{page}/ is (re)created, after
the source files change, or after deleting the JSON to confirm
`.data.js` fails clearly without it.

Usage: python3 extract.py <output-dir>
"""
import json
import sys
from pathlib import Path

import docx
import openpyxl

HERE = Path(__file__).parent
OUT = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE


def extract_docx():
    doc = docx.Document(HERE / "20260409_democracy_campaign_revA2.docx")
    blocks = []
    for p in doc.paragraphs:
        text = p.text.strip()
        if not text:
            continue
        blocks.append({"style": p.style.name if p.style else None, "text": text})
    # Tables sometimes carry structured content (e.g. quotes, stats) docx paragraphs miss.
    tables = []
    for t in doc.tables:
        rows = []
        for row in t.rows:
            rows.append([cell.text.strip() for cell in row.cells])
        tables.append(rows)
    out = {"blocks": blocks, "tables": tables}
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "campaign.json").write_text(json.dumps(out, indent=2, ensure_ascii=False))
    print(f"campaign.json: {len(blocks)} paragraphs, {len(tables)} tables -> {OUT}")


def extract_xlsx():
    wb = openpyxl.load_workbook(HERE / "ec-commission-sitemap.xlsx", data_only=True)
    out = {}
    for ws in wb.worksheets:
        rows = []
        for row in ws.iter_rows(values_only=True):
            if all(c is None for c in row):
                continue
            rows.append(list(row))
        out[ws.title] = rows
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "sitemap.json").write_text(json.dumps(out, indent=2, ensure_ascii=False, default=str))
    print(f"sitemap.json: sheets = {list(out.keys())} -> {OUT}")


if __name__ == "__main__":
    extract_docx()
    extract_xlsx()
