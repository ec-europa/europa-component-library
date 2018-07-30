# Inpage navigations

## Why and how to use this component

Inpage navigation gives the user an overview of page contents.\
It provides in-page (or anchor) links to all H2 headings on that page. It helps users
to orient themselves on the page and allows them to jump directly to content that
is lower on the page, without scrolling first through the rest of the page content.
A page with in-page links to content also makes it easier to refer to that specific
content when shared.

## When to use this component

* on pages with extensive body text that is clearly structured
* left column, always at the top of the page
* note that the page’s first columns are reserved for the in-page navigation

## Do not use this component

* when the content is above the fold (the part of the page visible without
  scrolling)

## Implementation

Inpage navigation relies on expandable component, and two javascript libraries.

* [**stickyfilljs**](https://github.com/wilddeer/stickyfill)
* [**gumshoe**](https://github.com/cferdinandi/gumshoe/)

Also, following script has to be added to your page:

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.navigationInpages();
});
```
