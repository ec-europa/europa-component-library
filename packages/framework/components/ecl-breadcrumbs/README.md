# Breadcrumbs

## Why and how to use this component

Users need a way to see a page's location in the site hierarchy. They also need a way to navigate to higher levels in the site architecture.

The breadcrumb - included on every page except the homepage itself - provides the user with a 'sense of place' and a relationship to the site's hierarchy and structure. This is particularly useful for a user who has arrived at a page directly through a link, bookmark/favourite or a search engine.

### General

- breadcrumbs start on the highest level of the site
- the links in the breadcrumb must point to pages in the same language as the current page
- clicking an item in the breadcrumb directs the user to that level in the hierarchy above the current page
- the title of the current page is not repeated in the breadcrumb
- labels should provide continuity to the website. This is done by ensuring each tab label is styled the same
- each label is parted with a separating character
- the separating characters and the spaces between the links and the labels are not linked

### Improved sites

For the breadcrumb, DGs are asked to include the term 'European Commission', followed by the class, followed by the optional architecture levels, followed by the name of the site.

**Example**: European Commission > Strategy > Digital single Market

### When to use this component

- breadcrumbs are required and should appear in the page header on every page of the site (except on the homepage of European Commission's political and information sites)

### Do not use this component

- if there is no second level to show

### Accessibility

If you do not use a `<nav>` element, you need to add `role="navigation"` to the markup. Note: this role is implied when you use the `<nav>` element so it is a bit redundant to use both at the same time. Read [more guidelines](http://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-breadcrumbs).
