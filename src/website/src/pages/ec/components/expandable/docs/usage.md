---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The expandable is a <strong>progressive disclosure component</strong>. Such
  components truncate information for the general layout/design and are intended
  to <strong>deliver additional content depending on users' interests</strong>.
  They help keep the interface clean and reduce scrolling by saving vertical
  space, while being{' '}
  <strong>
    indicative of the additional content that is available through extra
    interaction
  </strong>
  .
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Expandable/Expandable2.jpg"
alt="Anatomy of the expandable"
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

| Elements          | Mandatory | Description                                                                                                                                                                   |
| ----------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button            | yes       | actionable item (expands/collapses) - The button label must be short and **descriptive of the action that follows after being clicked**<br/>Contains Label & Action indicator |
| action indicator  | yes       | varies depending on the state (collapsed/expanded). **Indicates what the next action will do - expands/collapses content container on click**                                 |
| content container | yes       | this element displays relevant content in a **container that's initially hidden**                                                                                             |

## Do's

- **use a button label for each item** with a short, distinct and indicative title of the hidden content

## Don'ts

- **don't use with large blocks of content**
- **don't hide important information** that should be present at all times

## When to use

- use when additional information is offered that will **only benefit a small group of users**
- when you can **make extensive and complex content easier to digest through descriptive labels**

## When not to use

- do not use as a button
- do not use it consecutively - use <Link to="/ec/components/accordion/usage/">accordions</Link> instead
- don't use when pages are short (reading time: under 3 minutes)

## Notes

### Accessibility

- **progressive disclosure elements** can be helpful accessibility aids as **they give users the choice of revealing content to read or bypass**, making page navigation more efficient for screen-reader users and people using the keyboard or alternative input devices
