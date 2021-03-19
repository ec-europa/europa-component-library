---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The checkbox is an input with at least two non-mutually exclusive options,
  where more than one selection can be made at any time.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Checkboxes/Checkboxes.png"
alt="Anatomy of a checkbox"
legend={{
    items: [
      {
        color: '#404040',
        label: 'mandatory',
      },
      {
        color: '#004494',
        label: 'optional',
      },
    ],
  }}
/>

### Default

| Elements          | Mandatory | Description                                                                 |
| ----------------- | --------- | --------------------------------------------------------------------------- |
| heading           | yes       | the heading of the group of related checkboxes                              |
| group helper text | no        | helper information to describe the checkbox group                           |
| checkbox          | yes       | actionable part of the component - either ticked or un-ticked               |
| checkbox label    | yes       | the label of the checkbox, also actionable                                  |
| helper text       | no        | helper information to assist the user in selecting the appropriate checkbox |

### Conditional

| Elements           | Mandatory | Description                                                                                                                     |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| optional indicator | yes       | indicator stating if input fields are optional. All fields are mandatory by default - only ask for information that is required |
| error message      | yes       | a message informing the user if there is a problem with their entry                                                             |

## Do's

- always make sure each checkbox has a short, distinct and indicative checkbox label
- aim for distinct checkbox labels within the same group in order to improve scannability & reduce possible confusion
- use checkbox labels as click targets (clicking the label will select that option)
- arrange them vertically, in a single column layout to improve scannability and reduce errors
- group related fields
- order logically
- indicate whether the input group is optional
- make use of helper text if there are further directions or hints the users may need in completing their goal
- write specific and clear error messages, so users understand how to properly address and recover from the error

## Don'ts

- don't add them without grouping first, in a logical order
- don't restrict the number of checkboxes that can be ticked at any time
- don't nest elements under the checkbox - keep all the options on the same level

## When to use

- use in any situation where the input information is known to the organisation
- when users need to select options or toggle settings
- in forms with multiple non-exclusive options
- in search filters
- to turn a setting option on or off

## When not to use

- do not use it when you have mutually exclusive items - use <Link to="/ec/components/forms/radio/usage/">radio buttons</Link> instead
- do not use it if the checkbox selection will perform an action

## Related components

- <Link
    to="/ec/components/forms/radio/usage/"
    label="Radio button"
    standalone
  />
- <Link to="/ec/components/forms/select/usage/" label="Select" standalone />
- <Link
    to="/ec/components/forms/text-area/usage/"
    label="Text area"
    standalone
  />
- <Link
    to="/ec/components/forms/text-field/usage/"
    label="Text field"
    standalone
  />
