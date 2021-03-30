---
title: Usage
order: 1
---

import { Anatomy, Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  The facts and figures component is used to deliver numerical representations
  of facts that are easier to portray visually through the use of statistics.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/FactFigure/Facts%20Figures%20-%20Desktop.png"
srcset="https://inno-ecl.s3.amazonaws.com/media/images/EC/FactFigure/Facts%20Figures%20-%20Mobile.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/FactFigure/Facts%20Figures%20-%20Desktop.png 734w"
alt="Anatomy of facts and figures"
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

| Elements    | Mandatory | Description                                       |
| ----------- | --------- | ------------------------------------------------- |
| icon        | no        | representative icon for the item in question      |
| statistic   | yes       | numerical value associated with the fact or label |
| label       | yes       | label of the numerical value                      |
| description | no        | short description of the fact                     |
| link        | no        | link to further facts (if any)                    |

## Do's

- use consistent capitalisation for all fields
- use 1-3 digits only
- always use representative icons that are consistent in design with other icons
- if using a view all metrics link, make sure the copy of the link represents what the interaction will do, such as 'Download'

## Don'ts

- don't use more than 2 words for labels
- don't exceed 3 lines of text in the descriptions

## When to use

- use when you want to visualise comparative statistics for a single theme

## When not to use

- do not use to compare statistics belonging to separate themes
