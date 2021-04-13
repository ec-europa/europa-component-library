---
title: Group 2
order: 2
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Harmonised group 2 site footer is present on every page. It provides
  supplementary information such as copyright, legal, privacy, social media,
  contact information and links to other important sections within the EC
  ecosystem, to be placed at the bottom of the page.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/HarmonisedTemplate/harmonised-2-footer.png"
alt="Anatomy of harmonised group 2 footer"
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
system="ec"
selectedKind="components-footers-harmonised"
selectedStory="group-2"
/>

| Component          | Mandatory | Description                                                               |
| ------------------ | --------- | ------------------------------------------------------------------------- |
| corporate name     | yes       | european Commission - parent owner of the website                         |
| service navigation | yes       | contains services links - consistent throughout the family sites          |
| legal navigation   | yes       | contains legal information links - consistent throughout the family sites |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't add additional information that is not listed in the anatomy table above

## When to use

- always use a Footer when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/standardised-template/">Standardised</Link> or <Link to="/ec/core-template/">Core</Link> category
