# ECL Slider pager

npm package: `@ecl/slider`

```shell
npm install --save @ecl/slider
```

### Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"prev_label"** (string) (default: '') Label of the previous button
- **"next_label"** (string) (default: '') Label of the next button
- **"hide_label"** (boolean) (default: false) Icon only buttons
- **"play_label"** (string) (default: '') Label of the play button
- **"pause_label"** (string) (default: '') Label of the pause button
- **"size"**: (string) (default: s) s, m or l Size of the buttons
- **"prev_extra_classes"** (string) (default: '') Previous button extra classes (space separated)
- **"prev_extra_attributes"** (array) (default: []) Previous button extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"next_extra_classes"** (string) (default: '') Next button extra classes (space separated)
- **"next_extra_attributes"** (array) (default: []) Next Button extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"play_extra_classes"** (string) (default: '') Play button extra classes (space separated)
- **"play_extra_attributes"** (array) (default: []) Play button extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"pause_extra_classes"** (string) (default: '') Pause button extra classes (space separated)
- **"pause_extra_attributes"** (array) (default: []) Pause button extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"dots_extra_classes"** (string) (defult: '') Dots container extra classes (space separated)
- **"dot_extra_classes"** (string) (defult: '') Dot extra classes (space separated)
- **"template_data_attribute"** (string) (default: '') Attribute of the template
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/slider/slider-pager.html.twig' with {
  prev_label: 'Previous',
  next_label: 'Next',
  hide_label: true,
  extra_classes: '',
  prev_extra_classes: '',
  prev_extra_attributes: [],
  next_extra_classes: '',
  next_extra_attributes: [],
  dots_extra_classes: '',
  dot_extra_classes: '',
  template_data_attribute: '',
} %}
```
