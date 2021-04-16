---
title: Group 3
order: 3
---

import { Paragraph, List, Anatomy, Link } from '@ecl/website-components';

<Paragraph size="lead">
  On this page you will find information related to the{' '}
  <strong>EC branded Harmonised group 3 websites</strong> that host specific
  content that answers a particular communication purpose, in particular{' '}
  <strong>partnership websites</strong>.
</Paragraph>
<Paragraph size="lead">
  A Partnership website is where the European Commission is a co-operating
  partner in its creation but is not the sole owner of the information contained
  therein. It is a joint effort between the EC and non-EC partners in terms of
  concept, budget, management and maintenance and requires its own individual
  form of governance and custom style guides to accommodate possible
  co-branding.
</Paragraph>

## Anatomy

<Anatomy
image="https://inno-ecl.s3.amazonaws.com/media/images/EC/HarmonisedTemplate/harmonised-3-template.png"
alt="Anatomy of the harmonised template - group 3"
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

| Elements                                                                                                           | Mandatory | Description                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <Link to="https://webgate.ec.europa.eu/fpfis/wikis/display/webtools/Global+banner" standalone>global banner</Link> | optional  | the Global banner is the official EU stamp that gives a visual indicator and easy access to EU institutions and bodies sites, guaranteeing the user visits an official EU website. The global banner it’s only mandatory for sites under the europa domain.               |
| <Link to="/ec/harmonised-templates/site-header/group3/" standalone>harmonised site header</Link>                   | yes       | <p>the Harmonised site header is present on every page. It communicates the site brand and provides basic structure and guidance. The site header is composed of several mandatory and optional elements such as:</p><ul><li>partnership logo</li><li>site name</li></ul> |
| <Link to="/ec/harmonised-templates/footer/group3/" standalone>harmonised footer</Link>                             | yes       | the Harmonised footer is present on every page. It provides supplementary information about the partnerships                                                                                                                                                              |

**NOTE**: On the Page body section, European Components Library (ECL) components are not mandatory.

## Structural anatomy

When designing the page, make sure to follow appropriate category guidelines available below in terms of structure and layout

| Elements                                                           | Mandatory   | Description                |
| ------------------------------------------------------------------ | ----------- | -------------------------- |
| <Link to="/ec/utilities/grid/" standalone>grid</Link>              | recommended | enhance visual consistency |
| <Link to="/ec/guidelines/colours/" standalone>colours</Link>       | no          |                            |
| <Link to="/ec/guidelines/typography/" standalone>typography</Link> | no          |                            |
| <Link to="/ec/guidelines/spacing/" standalone>spacing</Link>       | no          |                            |
| <Link to="/ec/guidelines/iconography/" standalone>icons</Link>     | no          |                            |
| <Link to="/ec/guidelines/images/" standalone>images</Link>         | no          |                            |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- do not replace pages only on existing websites as this will create visual inconsistencies, this must be done at a site level

## When to use

- the Harmonised template must be used for all new development and can also be introduced on existing pages to replace a previous template, but this should be done on a site basis, not page by page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the <Link to="/ec/core-template/">Core</Link> or <Link to="/ec/standardised-template/">Standardised</Link> category
- do not follow these guidelines when you are updating sites that fall under web information systems, network or internal policy websites - use <Link to="/ec/harmonised-templates/group1/">Harmonised Group 1</Link> instead
- do not follow these guidelines when you are updating sites that fall under events, campaigns or blogs - use <Link to="/ec/harmonised-templates/group2/">Harmonised Group 2</Link> instead
