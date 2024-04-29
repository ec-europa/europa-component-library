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
  data-ecl-auto-init="Slider"
  data-ecl-slider-progress
  data-ecl-prev-label="Prev"
  data-ecl-next-label="Next"
> 
  <li> 
    <article class="ecl-card"> 
      <div class="ecl-card__body"> 
        <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block> 
          <div class="ecl-content-block__title" data-ecl-title-link> 
            <a href="/component-library/v4.0.0-beta-1/example" class="ecl-link ecl-link--standalone">Title 1</a> 
          </div> 
          <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus </div> 
        </div> 
      </div> 
    </article> 
  </li> 
  <li> 
    <article class="ecl-card"> 
      <div class="ecl-card__body"> 
        <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block> 
          <div class="ecl-content-block__title" data-ecl-title-link> 
            <a href="/component-library/v4.0.0-beta-1/example" class="ecl-link ecl-link--standalone">Title 2</a> 
          </div> 
          <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus </div> 
        </div> 
      </div> 
    </article> 
  </li> 
  <li> 
    <article class="ecl-card"> 
      <div class="ecl-card__body"> 
        <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block> 
          <div class="ecl-content-block__title" data-ecl-title-link> 
            <a href="/component-library/v4.0.0-beta-1/example" class="ecl-link ecl-link--standalone">Title 3</a> 
          </div> 
          <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus </div> 
        </div> 
      </div> 
    </article> 
  </li> 
  <li> 
    <article class="ecl-card"> 
      <div class="ecl-card__body"> 
        <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block> 
          <div class="ecl-content-block__title" data-ecl-title-link> 
            <a href="/component-library/v4.0.0-beta-1/example" class="ecl-link ecl-link--standalone">Title 4</a> 
          </div> 
          <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus </div> 
        </div> 
      </div> 
    </article> 
  </li> 
  <li> 
    <article class="ecl-card"> 
      <div class="ecl-card__body"> 
        <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block> 
          <div class="ecl-content-block__title" data-ecl-title-link> 
            <a href="/component-library/v4.0.0-beta-1/example" class="ecl-link ecl-link--standalone">Title 5</a> 
          </div> 
          <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus, quis tincidunt sem viverra. Nunc vestibulum, mauris quis porta venenatis, justo odio commodo tellus </div> 
        </div> 
      </div> 
    </article> 
  </li> 
</ul> 

```
