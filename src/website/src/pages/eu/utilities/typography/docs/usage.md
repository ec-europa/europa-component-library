---
title: Usage
order: 1
---

import { Link, Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  Typography utilities let you display text related elements like heading or
  paragraphs. It also allows you to change text display if needed (font size,
  colour, ...).
</Paragraph>

## Headings

Use classes `ecl-u-type-heading-1` to `ecl-u-type-heading-5` to apply headings styles.

See <Link to="/eu/guidelines/typography/">typography guidelines</Link> for more information.

## Paragraph

Use class `ecl-u-type-paragraph` on a `<p>` element to apply related styles.  
Several type of paragraphs are availables, depending on your needs.

See <Link to="/eu/guidelines/typography/">typography guidelines</Link> for more information.

## Text colour

By using classes `ecl-u-type-color-*` you can set the colour of the text.
All the colours listed <Link to="/eu/guidelines/colours/">in the guidelines</Link> are available.

These utilities can also be used to change icons colour. 

**Accessibility warning**

When changing text colour, make sure to always keep a high enough contrast ratio (4.5:1 for normal text and 3:1 for large text).

There are several online tools to check the contrast, for instance [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Text alignment

By using classes `ecl-u-type-align-*` you can set the alignment of the text.
Available values are:

- `ecl-u-type-align-left`
- `ecl-u-type-align-right`
- `ecl-u-type-align-center`

## Text styles

Several classes are available to alter text display (uppercase, underline, strike, ...).  
In most cases, styles included in components are enough, but you can use one of these classes in for specific cases.

See the showcase to have the list of classes.
