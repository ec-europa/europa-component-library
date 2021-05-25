---
title: Usage
order: 1
---

import { Link, Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  Display utilities let you manage how an element is displayed (inline, or a
  separate line, etc). It also let you select its box-sizing to prevent overflow
  or unwanted behaviors.
</Paragraph>

## Display

By using classes `ecl-u-d-*` you can set the display of an element.
Available values are:

- ecl-u-d-block,
- ecl-u-d-inline,
- ecl-u-d-inline-block,
- ecl-u-d-flex,
- ecl-u-d-inline-flex,
- ecl-u-d-table,
- ecl-u-d-table-cell,
- ecl-u-d-none,

## Box sizing

By using classes `ecl-u-box-sizing-*` you can set the box-sizing of an element.
See <Link to="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">this page</Link> for more information about `box-sizing`.
Available values are:

- ecl-u-box-sizing-content (content-box)
- ecl-u-box-sizing-border (border-box)
