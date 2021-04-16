---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Standardised footer is present on every page. It provides supplementary
  information such as copyright, legal, privacy, social media, contact
  information and links to other important sections within the EC ecosystem, to
  be placed at the bottom of the page.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/StandardisedTemplate/standardised-footer.png"
alt="Anatomy of standardised footer"
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

| Component                     | Mandatory | Description                                                                                                                                                                                                    |
| ----------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| site name                     | yes       | name of the site                                                                                                                                                                                               |
| content owner details         | yes       | indicates ownership over the site's content                                                                                                                                                                    |
| DG-related service navigation | optional  | links to the services the DG provides<br/>\* use a DG-related service navigation if there are any services that need extra exposure in the footer                                                              |
| other DG-related navigation   | optional  | provides the user with extra navigation related to the DG, link dependent on DG requirements<br/>\* use a Other DG-related navigation to list other pages that might benefit from extra exposure in the footer |
| class names                   | yes       | parent classes under which the DG falls                                                                                                                                                                        |
| corporate name                | yes       | european Commission - parent owner of the site                                                                                                                                                                 |
| service navigation            | yes       | contains services links - consistent throughout the family sites                                                                                                                                               |
| legal navigation              | yes       | contains legal information links - consistent throughout the family sites                                                                                                                                      |

## Do's

- make sure the pages contain all the elements in the anatomy table above
- group items together in the local content and place under a title (such as "Contact us", "Related sites") if they can be grouped, otherwise use without title

## Don'ts

- don't use more than one Footer per page

## When to use

- always use a Footer when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/core-template/">Core</Link> or <Link to="/ec/harmonised-templates/group1/">Harmonised</Link> category
