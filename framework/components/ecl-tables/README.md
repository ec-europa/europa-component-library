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

Tables created by content writers (via WYSIWYG for example) can optionally
include a manually set `ecl-table--responsive` class next to the root
`ecl-table`. When this class is present, it's a flag for JavaScript behaviors
attach correcting code to take effect on `<thead>` of the table.

The correcting behavior is expressed in the following. Given the following
table.

```html
<thead>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">Registration date</th>
    <th scope="col">Email</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td data-th="Name">John Doe</td>
    <td data-th="Registration date">01/01/2016</td>
    <td data-th="Email"><a href="mailto:john.doe@mail.com">john.doe@mail.com</a></td>
  </tr>
  <tr>
    <td data-th="Name">Jane Doe</td>
    <td data-th="Registration date">06/12/2016</td>
    <td data-th="Email"><a href="mailto:jane.doe@mail.com">jane.doe@mail.com</a></td>
  </tr>
  <tr>
    <td data-th="Name">Jack Doe</td>
    <td data-th="Registration date">03/05/2017</td>
    <td data-th="Email"><a href="mailto:jack.doe@mail.com">jack.doe@mail.com</a></td>
  </tr>
</tbody>
```

When table is in a small viewport (mobile view), the information about `Name` of
`thead > tr > th` should be added visually to the `tbody > tr > td`. The
JavaScript behavior is only responsible of "binding" these sets of information.

JavaScript behavior is not responsible for any other visual, cosmetic or
generally styling modifications. Responsive behavior is handled by CSS.

Further details on these and other behavioral corrections needed by JavaScript,
please refer to an
[internal wiki page](https://webgate.ec.europa.eu/CITnet/confluence/display/NEXTEUROPA/Table).

### Adding JavaScript behaviors

When using ecl tables, make sure to call related javascript:

```javascript
ECL.eclTables();
```

It will handle responsive behavior

You can also apply this script only to a subset of elements:

```javascript
ECL.eclTables(elements);
```

### Implementation goals

JavaScript behavios are meant to be attached on-demand, in special cases, with
conscious choice that information should be displayed correctly after default
responsive layout in exceptional user scenarios.

By default, tables should be displayed well only with CSS. Use JavaScript with
caution, especially in admin pages of your CMS.
