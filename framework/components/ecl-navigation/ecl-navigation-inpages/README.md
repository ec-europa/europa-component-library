# Inpage navigations

## Why and how to use this component

Inpage navigation gives the user an overview of page contents.  
It provides in-page (or anchor) links to all H2 headings on that page. It helps users to orient themselves on the page and allows them to jump directly to content that is lower on the page, without scrolling first through the rest of the page content. A page with in-page links to content also makes it easier to refer to that specific content when shared.

## When to use this component

- on pages with extensive body text that is clearly structured
- left column, always at the top of the page
- note that the page’s first columns are reserved for the in-page navigation

## Do not use this component

- when the content is above the fold (the part of the page visible without scrolling)

## Implementation

Inpage navigation relies on two javascript libraries.  
These libraries have to be included manually, and properly started (see below) for the component to work correctly.

[**stickybits**](https://github.com/dollarshaveclub/stickybits)
```javascript
<script src="/path-to-js/stickybits.min.js"></script>
<script type="text/javascript">
  stickybits(
    '.ecl-navigation-inpage',
    {
      useStickyClasses: true,
    }
  );
</script>
```

[**gumshoe**](https://github.com/cferdinandi/gumshoe/)
```javascript
<script src="/path-to-js/gumshoe.min.js"></script>
<script type="text/javascript">
gumshoe.init(
  {
    selector: '.ecl-navigation-inpage__link',
    activeClass: 'ecl-navigation-inpage__link--is-active',
    offset: 20,
    callback: function (nav) {
      if (!nav) return;

      const navigationTitle = document.querySelector('.ecl-navigation-inpage__trigger');
      navigationTitle.innerHTML = nav.nav.innerHTML;
    }
  }
);
</script>
```
