# Table responsive

## Why and how to use this component

Tables show data sets organized in columns and rows.

## When to use this component

* when there is a need to show tables that will be displayed across different
  devices.
* when you want to compare one set of values with another.
* when you want to show how various parts comprise the whole.
* when you want to understand trends over time for variable(s).
* when you want to see which values deviate from the norm.
* when you want to establish (or show) relationship between 2 (or more) variables.

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

Tables have a default responsive behaviour which can be progressively enhanced
with JavaScript. This dynamic behaviour organizes the tables' elements in a more
accessible way on small screens.

More specifically, content editors can include the `ecl-table--responsive` class
next to the root `ecl-table` when creating tables from WYSIWYG. This class is a
flag for JavaScript behaviours to add improvements in mobile.

The JavaScript enhancements are added manually, only when necessary and when the
structure of tables allow correct functioning of the JavaScript.

For example, an enhancement could be expressed in the following. Given the
following table.

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

When the table is in a small viewport (mobile view), the information about
`Name` of `thead > tr > th` should be added visually to the
`tbody > tr > td`. The JavaScript behaviour is only responsible for binding
these sets of information.

JavaScript behaviour is not responsible for any other visual, cosmetic or
generally styling modifications. Responsive behaviour is handled by CSS.

### Adding JavaScript behaviours

When using ECL tables, make sure to call the related JavaScript function:

```javascript
ECL.eclTables();
```

You can also apply this script on a subset of elements:

```javascript
ECL.eclTables(elements);
```

### Implementation goals

JavaScript behaviours are meant to be attached manually, in special cases, with
conscious choice that information should be displayed correctly after default
responsive layout in exceptional user scenarios.

By default, tables should be displayed well only with CSS. Use JavaScript with
caution, especially in the administration pages of your CMS.
