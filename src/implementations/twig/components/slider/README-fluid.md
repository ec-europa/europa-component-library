# ECL Slider

The slider functionality is designed as a standalone feature and does not include a predefined visual template. It can be seamlessly integrated into existing projects.
Integration is straightforward—simply add `data-ecl-auto-init="Slider"` to a container element with children. The expected markup includes a `<ul>` element with `<li>` children, or a container (e.g., `<div>`) where its children are utilized as individual slides.
Alternatively a slider instance can be created as usual also manually by:

var elt = document.querySelector('mySelector');
var slider = new ECL.Slider(elt);
slider.init();

It comes with two variants, or actually only one, the default is to slide between items like `cards`, all the slides get the same width and a certain number of items will be visible in relation to the available space.
The variant is `fluid` and can be used to slide in a list of `ecl tags`, or even better an `ecl tag set`, this variant would also work with simple links or buttons, elements that gets their width determined by the text that they contain.

### Example:

<!-- prettier-ignore -->
```html
<ul
  class="ecl-tag-set"
  data-ecl-auto-init="Slider"
  data-ecl-slider-variant="fluid"
>
  <li class="ecl-tag-set__item">
    <a href="./example#22wqx" class="ecl-tag">Lorem ipsum dolor sit Tag 1</a>
  </li>
  <li class="ecl-tag-set__item">
    <a href="./example#kymrf" class="ecl-tag"
      >Lorem ipsum dolor sit amet consectetur ut labore. 2</a
    >
  </li>
  <li class="ecl-tag-set__item">
    <a href="./example#hv61p" class="ecl-tag">Link tag 3</a>
  </li>
  <li class="ecl-tag-set__item">
    <a href="./example#hv610" class="ecl-tag">Lorem ipsum dolor sit Tag 4</a>
  </li>
  <li class="ecl-tag-set__item">
    <a href="./example#hv61i" class="ecl-tag"
      >Lorem ipsum dolor sit amet consectetur ut labore. 5</a
    >
  </li>
  <li class="ecl-tag-set__item">
    <a href="./example#hv613" class="ecl-tag">Link tag 6</a>
  </li>
</ul> 
```
