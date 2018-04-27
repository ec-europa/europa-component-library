# Expandables

## When and how to use this component

If you need to present a lot of content on a page, it can be divided into
sub-sections in a structured way.

## When to use this component

* when you have a large amount of information

## Do not use this component

* as a rule avoid hiding information as much as possible

## Implementation

In order to automatically attach event listeners on your expandables, add the
following script to your page (keep in mind that the selector is mandatory):

```javascript
document.addEventListener('DOMContentLoaded', function() {
  ECL.initExpandables('#selector-of-my-expandable');
});
```

## Change button label when the component is collapsed/expanded

You can attach `data-label-expanded` and `data-label-collapsed` attributes to
your button. The button label will be updated dynamically according to these
values. Check the first example for more information.

## Resources

* [Using the WAI-ARIA aria-expanded state to mark expandable and collapsible regions, WCAG Working Group](https://www.w3.org/WAI/GL/wiki/Using_the_WAI-ARIA_aria-expanded_state_to_mark_expandable_and_collapsible_regions)
* [Progressive collapsibles, ARIA Examples, Heydon Pickering](http://heydonworks.com/practical_aria_examples/#progressive-collapsibles)
* [A11y Toggle, Edenspiekermann](https://edenspiekermann.github.io/a11y-toggle/)
