# ECL-Twig Search Form

npm package: `@ecl-twig/ec-component-search-form`

```shell
npm install --save @ecl-twig/ec-component-search-form
```

### Parameters

- **"text_input"** (associative array) default: A predefined structure for EC Text Input
- **"button"** (associative array) default: A predefined structure for EC Button
- **"extra_form_elements"** (optional) (string) (default: '') Extra elements for the form
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"\_compliance"** (boolean) (default: false) Activates debug
- **"_compliance_inner_check_"** (boolean) (default: false) Inline compliance report

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-search-form/ecl-search-form.html.twig' with { 
  text_input: { 
    id: 'input-search', 
    name: 'search', 
    extra_classes: 'ecl-search-form__text-input' 
  }, 
  button: { 
    variant: 'search', 
    icon: { 
      type: 'general', 
      name: 'search', 
      path: '/path-to-the-icon-file', 
    }, 
    label: 'Search', 
    extra_classes: 'ecl-search-form__button' 
  }, 
  extra_form_elements: '<input type="hidden" id="custId" name="custId" value="1">'
} %}
```
