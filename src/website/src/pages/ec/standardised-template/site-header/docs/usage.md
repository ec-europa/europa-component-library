---
title: Usage
order: 1
---

import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Standardised site header is present on every page. It communicates the
  European Commission brand and provides basic structure and guidance, to be
  placed at the top of the page.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/StandardisedTemplate/standardised-site-header.png"
alt="Anatomy of standardised site header"
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

| Component                                                                               | Mandatory | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| European Commission logo                                                                | yes       | logo of the European Commission                                                                                                                                       |
| language select                                                                         | optional  | language select component through which users can select their desired language<br />\* use a Language select component if your website supports multilingual content |
| <Link to="/ec/components/forms/search-form/usage/" standalone>Europa search form</Link> | yes       | enables the user to search and retrieve related information from the database using keywords                                                                          |
| class name                                                                              | yes       | Banner indicating the parent class under which the site falls                                                                                                         |
| site name                                                                               | yes       | name of the site                                                                                                                                                      |
| <Link to="/ec/components/navigation/menu/usage/" standalone>menu</Link>                 | optional  | main navigation of the website                                                                                                                                        |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't use more than one Site header per page

## When to use

- always use the appropriate Site header when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/core-template/">Core</Link> or <Link to="/ec/harmonised-templates/group1/">Harmonised</Link> category
