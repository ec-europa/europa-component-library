# Expandables

## Why and how to use this component

Users need a way to manage an overabundance of content in a structure way.

The expandable component is a list of headers that can be clicked to hide or reveal additional content. It is also possible to add an icon.

## When to use this component

-   when you have a large amount of information.
-   on FAQ pages.

## Do not use this component

-   as a rule. We avoid to hide information as much as possible.

## Implementation

```js
document.addEventListener('DOMContentLoaded', function () {
  ECL.initExpandables();
});
```

## Resources

-   [Using the WAI-ARIA aria-expanded state to mark expandable and collapsible regions, WCAG Working Group](https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions)
-   [Progressive collapsibles, ARIA Examples, Heydon Pickering](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)
-   [A11y Toggle, Edenspiekermann](https://edenspiekermann.github.io/a11y-toggle/)
