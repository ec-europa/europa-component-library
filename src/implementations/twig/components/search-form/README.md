# ECL Search Form

npm package: `@ecl/twig-component-search-form`

```shell
npm install --save @ecl/twig-component-search-form
```

### Parameters

- **"text_input"** (associative array) default: Predefined structure for the text-Input component
- **"button"** (associative array) default: Predefined structure for the Button component
- **"extra_form_elements"** (optional) (string) (default: '') Extra elements for the form
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/search-form/search-form.html.twig' with { 
  text_input: { 
    id: 'input-search', 
    name: 'search', 
    extra_classes: 'ecl-search-form__text-input' 
  }, 
  button: { 
    variant: 'search', 
    icon: { 
      name: 'search', 
      path: '/path-to-the-icon-file', 
    }, 
    label: 'Search', 
    extra_classes: 'ecl-search-form__button' 
  }, 
  extra_form_elements: '<input type="hidden" id="custId" name="custId" value="1">'
} %}
```
