# Dropdowns

Dropdown components contain elements that, when tapped, reveal additional
content.

## Implementation notes

If you plan on using multiple dropdown components on the same page, make sure you give them unique IDs to the component itself but also to the button component that it contains. Initialization can be acheived like this:

```javascript
ECL.initExpandables('#news-expandable-button1');
ECL.initExpandables('#news-expandable-button2');
ECL.dropdown('#dropdown1');
ECL.dropdown('#dropdown2');
```

## Resources

Menu Button General Information

* <https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20161214/#menubutton>
* <https://w3c.github.io/aria-practices/#menubutton>

Examples:

* <https://www.w3.org/TR/2016/WD-wai-aria-practices-1.1-20161214/examples/menu-button/menu-button-1/menu-button-1.html>
* <https://w3c.github.io/aria-practices/examples/menu-button/menu-button-links.html>
