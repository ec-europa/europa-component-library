---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Core footer is present on every page. It provides supplementary
  information such as copyright, legal, privacy, social media, contact
  information and links to other important sites within the European Commission
  ecosystem, to be placed at the bottom of the page.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Core/core-footer.png"
alt="Anatomy of core footer"
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

| Component             | Mandatory | Description                                                               |
| --------------------- | --------- | ------------------------------------------------------------------------- |
| site name             | yes       | site's name                                                               |
| content owner details | yes       | indicates ownership over the site's content                               |
| class navigation      | yes       | provides the user with navigation through class names                     |
| service navigation    | yes       | contains services links - consistent throughout the family sites          |
| legal navigation      | yes       | contains legal information links - consistent throughout the family sites |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't use more than one Footer per page

## When to use

- always use a Footer when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/standardised-template/">Standardised</Link> or <Link to="/ec/harmonised-templates/group1/">Harmonised</Link> category
