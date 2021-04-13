---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  A text field is an input that can be used on a form, sign-in or any place
  where data is requested from the user. Its intent is for limited amounts of
  information; for larger amounts of text, use a{' '}
  <Link to="/ec/components/forms/text-area/usage/" label="text area" />.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Text%20Input/Text%20Field2.jpg"
alt="Anatomy of text field"
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

| Elements    | Mandatory | Description                                                                       |
| ----------- | --------- | --------------------------------------------------------------------------------- |
| heading     | yes       | title of the text input field                                                     |
| helper text | no        | additional information the user might need, to help them provide the correct data |
| text field  | yes       | the area where the user enters their response                                     |

### Conditional

| Elements           | Mandatory | Description                                                             |
| ------------------ | --------- | ----------------------------------------------------------------------- |
| optional indicator | yes       | indicator stating **if** input fields are **optional**                  |
| error message      | yes       | a message informing the user **if** there is a problem with their entry |

## Do's

- **allow copy/paste** for ease of use
- match the text field to the expected size of the input - make it wide enough for the user to see their entire entry
- **write specific and clear error message texts, so users understand how to address the error**

## Don'ts

- **don't use placeholder text** in the text field - this may not be read by screen reading software, leading to accessibility issues
- **don't have a mandatory minimum** input of characters
- **don't restrict** the use of uncommon or special **characters**
- **don't disable copy and paste** functions

## When to use

- use in any situation where the user needs **to input limited** amount of data (name, email address, age, etc)

## When not to use

- do not use where the user needs **to input a large, or unknown**, amount of data - if longer, use a <Link to="/ec/components/forms/text-area/usage/" label="Text area" /> instead
- do not use when the user must respond with specific options which are known to the organisation - use form types such as Checkboxes, <Link to="/ec/components/forms/radio/usage/" label="Radio buttons" /> or <Link to="/ec/components/forms/select/usage/" label="Select" /> instead

## Notes

### Accessibility

- placeholder text in a text field is bad for accessibility - may not be read by screen reading software, and can be problematic for users with a visual impairment; use helper text if further information needs to be conveyed

## Related components

- <Link to="/ec/components/forms/checkbox/usage/" label="Checkbox" standalone />
- <Link
    to="/ec/components/forms/radio/usage/"
    label="Radio button"
    standalone
  />
- <Link to="/ec/components/forms/select/usage/" label="Select" standalone />
- <Link
    to="/ec/components/forms/text-area/usage/"
    label="Textarea"
    standalone
  />
