---
title: Group 1
order: 1
---
![](/cms-images/soon-to-be-deprecated-image.png)

### Notice

From release 3.3 onwards, the individual templates (Core, Standardised & Harmonised) can be found on the ECL **as configurations of the structurally merged components** (Site header, Page header & Footer), which now have a single, dedicated page. Concurrently, the EWG (Europa Web Guide) has also been updated to better accommodate information regarding the optionality of components & elements per site type. Please follow the corresponding links found in the table below for more information.

| Knowledge base                 | New location                                                                                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EWG (Europa web guide)         | [Guidelines for EC branded Harmonised websites - Site header(s)](https://wikis.ec.europa.eu/display/WEBGUIDE/EC+branded+harmonised+websites+design)                                                                           |
| ECL (Europa component library) | [EC Site header component - Harmonised config.](https://citnet.tech.ec.europa.eu/CITnet/confluence/pages/viewpage.action?pageId=1092071063https://ec.europa.eu/component-library/ec/components/site-header/usage/#harmonised) |

---

The Harmonised group 1 site header is present on every page. It communicates
the European Commission brand and provides basic structure and guidance, to be
placed at the top of the page.

## Anatomy

| Component                | Mandatory | Description                                                                                                                                                                                       |
| ------------------------ | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| European Commission logo | yes       | logo of the European Commission                                                                                                                                                                   |
| Login                    | optional  | login component for ECAS account (\*use a Login component if your website has a user database)                                                                                                    |
| Language select          | optional  | language select component through which users can select their desired language, on the left of the search form (\*use a Language select component if your website supports multilingual content) |
| Search form              | optional  | enables the user to search and retrieve related information from the database using keywords                                                                                                      |
| Class name               | optional  | banner indicating the parent class under which the site falls (\*use a Class name component if the website you are creating or updating falls under one of the classes on the Core site)          |
| Site name                | yes       | name of the site                                                                                                                                                                                  |
| Menu                     | optional  | main navigation of the website                                                                                                                                                                    |

## Do's

- make sure the pages contain all the elements in the anatomy table above

## Don'ts

- don't use more than one Site header per page

## When to use

- always use a Site header when building your page

## When not to use

- do not follow these guidelines when you are updating sites that fall under the Standardised or Core category
