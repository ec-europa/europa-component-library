# Table responsive

## Why and how to use this component

Tables show data sets organized in columns and rows.

## When to use this component

* when there is a need to show tables that will be displayed across different
  devices.
* when you want to compare one set of values with another.
* you want to show how various parts comprise the whole.
* you want to understand trends over time for variable(s).
* you want to see which values deviate from the norm.
* you want to establish (or show) relationship between 2 (or more) variables.

## Structure

### Headers

In-page data tables always contain a header **row**, a header **column** or
**both**, that lists column titles. **(required)**

#### Web writing guidelines

* row/column titles should be kept short and clear.
* table headers should never be empty. This is particularly of concern for the
  top-left cell of some tables.

#### Accessibility guidelines

* the scope attribute identifies whether a table header is a column header or a
  row header.
* the thread element defines the header rows for tables.

### Rows and columns

The sets of raw data are displayed in rows below the header row.

If there are 5 rows or more, the rows have alternating colours (zebra stripes).

## Do not use this component

* don't use data tables to structure content that isn't part of a data set

## Technical information

When using ecl tables, make sure to call related javascript:

```javascript
ECL.eclTables();
```

It will handle responsive behavior

You can also apply this script only to a subset of elements:

```javascript
ECL.eclTables(elements);
```
