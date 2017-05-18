# ECL Grid

A grid provides a structure of rows and columns for aligning content. Grids are useful because they help create a familiar and easily navigable structure for content.

Please consider using [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) before jumping into grids when you are looking for solutions for component-specific layout management,

ECL uses the Bootstrap 4 grid system in order to facilitate the adoption, and try to increase developers' productivity. Thus, the grid is based on the widely-known 12 columns, it's responsive, and provides great flexibility in terms of implementation. Refer to [Bootstrap documentation](http://v4-alpha.getbootstrap.com/layout/grid/) for understanding the general concepts.

When using the grid of ECL, use `.ecl-` namespace in front of Bootstrap's classes in order to avoid collisions.

---

A grid can create a basic structure, a skeleton for your design. They consist of “invisible” lines upon which your design elements can be placed.
Doing so ties them together in an overall “system” and supports your composition—rationally.

The Next Europa platform uses Bootstrap 3.3.5. Designs are based on the 12-column Bootstrap grid system.
We use 5 breakpoints, of which 3 of them are native to Bootstrap.

| Extra small | Medium small | Small | Medium | Large |
|---|---|---|---|---|
| <480px | ≥480px | ≥622px | ≥768px | ≥992px |
| | <622px | <768px | <992px | <1200px |

Bootstrap includes a responsive, mobile first fluid grid system that appropriately scales up to 12 columns as the device or viewport size increases.
It includes predefined classes for easy layout options, as well as powerful mixins for generating more semantic layouts.

## Possible grid combinations:

## Grid page types

### Homepage and landing pages (new)

Example: http://ec.europa.eu/info/index_en

### Landing page (old)

Example: http://ec.europa.eu/info/business-economy-euro_en

### List page with filter

Example: https://ec.europa.eu/info/topics_en
Example: https://ec.europa.eu/info/departments

### Detail page

Used for example for an announcement detail.

Example: http://ec.europa.eu/news/2016/06/20160628_en.htm

### Detail page with in-page navigation

Example: http://ec.europa.eu/info/departments/administration-and-payment-individual-entitlements_en

### Topic page

Example: http://ec.europa.eu/info/topics/agriculture_en
