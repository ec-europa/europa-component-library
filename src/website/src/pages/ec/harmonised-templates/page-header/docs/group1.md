---
title: Group 1
order: 1
---
import { Paragraph, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  The Harmonised group 1 page header gives context and confidence to the users
  so they understand what the page is about, to be placed just below the Site
  header.
</Paragraph>

## Anatomy

![](/cms-images/harmonised-1-page-header1b.png)

| Component                                                                           | Mandatory | Description                                                                                                      |
| ----------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| <Link to="/ec/components/navigation/breadcrumb/usage/" standalone>breadcrumb</Link> | optional  | breadcrumb component provides information on the page and its relationship to the site's hierarchy and structure |
| meta                                                                                | optional  | metadata related with the content of the page                                                                    |
| page title                                                                          | yes       | title of the page                                                                                                |
| introduction                                                                        | optional  | short description of the page                                                                                    |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't use more than one Page header per page

## When to use

- always use a Page header when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/standardised-template/">Standardised</Link> or <Link to="/ec/core-template/">Core</Link> category
