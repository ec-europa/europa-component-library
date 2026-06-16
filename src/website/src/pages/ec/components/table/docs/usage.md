---
title: Usage
order: 1
---
The Table component organises complex, multi-dimensional data into a structured grid so users can scan, compare, and reference efficiently. It clarifies relationships between data.

### **Do's**

- provide clear, descriptive titles so users can orient themselves before reading the data
- size the table to fit its content rather than stretching it to fill available width
- always align content from left to right within cells, following reading direction conventions
- use a dash ("-") to represent null or missing data in cells, rather than leaving them empty

### **Don'ts**

- use numerals, not words in data cells as users can scan and compare more quickly
- do not use colour as the sole means of conveying information; always provide a text-based equivalent to ensure accessibility
- do not use a table for content that lacks a genuine relational structure between rows and columns

### **When to use**

- use when presenting structured, static data
- use when users need to compare values across multiple items or dimensions, such as statistics, specifications, or dates across a set of entries
- se the Default variant as your baseline - it applies uniform row styling and is appropriate for most data tables where the content volume is moderate
- use the Zebra variant when the table contains many rows and users are likely to scan horizontally. Alternating row backgrounds reduces the risk of the eye tracking to the wrong row
- use the Multi header variant when your data has a hierarchical structure that cannot be expressed with a single row of column headers. This is appropriate when grouped columns share a category label that sits above individual column headers, such as when separating time periods, geographic regions, or data source groupings
- use the Sort variant when users need to reorder rows by a particular column. Users might want to sort alphabetically, by date, or by a numeric value, for example

### **When not to use**

- do not use a table when the content items have no meaningful relationship to one another; instead, use a [List](https://ec.europa.eu/component-library/ec/components/list/code/) for simple, unrelated content
- do not use a table to create layouts or visual structure; tables are for data, not page composition
