---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Core site header is present on every page. It communicates the European
  Commission brand and provides basic structure and guidance, to be placed at
  the top of the page.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/Core/core-site-header.png"
alt="Anatomy of core site header"
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

| Component                                                                               | Mandatory | Description                                                                                  |
| --------------------------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------- |
| European Commission logo                                                                | yes       | logo of the European Commission                                                              |
| language select                                                                         | yes       | language select component through which users can select their desired language              |
| <Link to="/ec/components/forms/search-form/usage/" standalone>Europa search form</Link> | yes       | enables the user to search and retrieve related information from the database using keywords |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't use more than one Site header per page

## When to use

- always use a Site header when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/standardised-template/">Standardised</Link> or <Link to="/ec/harmonised-templates/group1/">Harmonised</Link> category
