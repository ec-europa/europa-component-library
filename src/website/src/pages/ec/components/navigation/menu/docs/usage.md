---
title: Usage
order: 1
---
The Menu component provides the primary site-level navigation for European Commission websites. It presents a persistent, horizontal list of top-level parent pages, with optional second-level children pages, giving users a reliable and always-visible mental model of what the site contains and where they currently are within it.

Its role is structural rather than contextual: it communicates the site's overall information architecture, not the content of any individual page. By anchoring navigation consistently at the top of every page, it reduces orientation effort and supports confident, self-directed exploration.

### **Do's**

- keep item labels short, distinct, and relevant at a glance - brief labels help users scan
- allow a minimum 20% character buffer in all labels to accommodate translations that may be greater in length than English, for example
- reflect the site's information architecture - menu items should correspond directly to destination pages
- limit the menu to two levels of navigation at most - a clear parent-child relationship helps users anticipate what they will find
- ensure every item in the menu is a navigable link
- mark the currently active section visually and semantically, giving users a consistent sense of where they are in the site

### **Don'ts**

- do not duplicate the Menu in different areas of the page - it should only appear once, in a fixed, predictable location within the Site Header
- do not overload the menu with too many first-level items, the overflow function allows for more items placed horizontally with dedicated buttons to scroll, but they will be hidden from initial view

### **When to use**

- use the Menu when a site has a clear set of distinct top-level sections and users need persistent, cross-page navigation to move between them

### **When not to use**

- do not use on single-page or very shallow sites

  - if the site contains only one page or a small number of pages without a meaningful hierarchy, persistent primary navigation adds unnecessary complexity

- do not use on sites with a complex, deep architecture, when the site requires more than two levels of navigation. Consider using the [Mega menu](https://ec.europa.eu/component-library/ec/components/navigation/mega-menu/code/), designed to accommodate navigational structures with contextual groupings and supplementary links
- do not use the Menu for anything other than the site's primary navigation
- do not use for secondary or utility navigation(i.e. login, language switching, help, etc.) items that are not primary navigation destinations and should be handled through the Site Header's dedicated utility areas, rather than the Menu
