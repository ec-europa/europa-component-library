---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The radio button component is an input{' '}
  <strong>with at least two, mutually exclusive options</strong>, where{' '}
  <strong>just one selection</strong> can be made at any time so that an option
  is selected, the other options are deselected.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Radio/Radio%20buttons2.jpg"
alt="Anatomy of radio button"
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

| Elements           | Mandatory | Description                                                                      |
| ------------------ | --------- | -------------------------------------------------------------------------------- |
| heading            | yes       | the **heading of the group** of related radio buttons                            |
| group helper text  | no        | helper information to describe the radio button group                            |
| radio button       | yes       | the **actionable part** of the component - either selected or un-selected        |
| radio button label | yes       | the label of the radio button                                                    |
| helper text        | no        | helper information to assist the user in selecting the appropriate radio buttons |

### Conditional

| Elements           | Mandatory | Description                                                                                                                                 |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| optional indicator | yes       | indicator stating **if** input fields are **optional**. **All fields are mandatory by default - only ask for information that is required** |
| error message      | yes       | a message informing the user **if** there is a problem with their entry                                                                     |

## Do's

- aim for **distinct headings** within the same group in order to improve scannability and reduce possible confusion
- **use labels as click targets** (clicking the label will select that option)
- **arrange them vertically** to improve scannability and reduce errors
- **group** related fields
- **order** logically (such as ages 18-25, ages 25-35, ages, 35-50, over 65)
- indicate whether the input group is **optional** - **if it's mandatory, have a neutral option (such as other, n/a) selected by default**
- **make use of helper text** if there are further directions or hints the users may need in completing their goal
- **write specific and clear error messages**, so users understand how to address the error

## Don'ts

- **don't add them without grouping first**, in a logical order of successive tasks
- **don't nest elements** under radio buttons - keep all the options on the same level

## When to use

- **when you have under 10 items**
- **when only one selection is needed** from a list
- when users need to **select options** or **toggle settings**, for example
- **in forms** with multiple non-exclusive options (such as search filters)

## When not to use

- avoid when more than one option can be selected

## Related components

- <Link to="/ec/components/forms/checkbox/usage/" label="Checkbox" standalone />
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
