# Expandables

## When and how to use this component

If you need to present a lot of content on a page, it can be divided into sub-sections in a structured way.

The expandable component is a list of headers that can be clicked to hide or reveal additional content. It is also possible to add an icon to the headers.

## When to use this component

- when you have a large amount of information
- on FAQ pages

## Do not use this component

- as a rule avoid hiding information as much as possible

## Implementation

In order to automatically attach event listeners on your expandables, add the following script to your page:

```javascript
document.addEventListener('DOMContentLoaded', function () {
  ECL.initExpandables();
});
```

## Resources

- [Using the WAI-ARIA aria-expanded state to mark expandable and collapsible regions, WCAG Working Group](https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions)
- [Progressive collapsibles, ARIA Examples, Heydon Pickering](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)
- [A11y Toggle, Edenspiekermann](https://edenspiekermann.github.io/a11y-toggle/)
