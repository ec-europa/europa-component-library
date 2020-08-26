# ECL-Twig Skip Link component

npm package: `@ecl-twig/ec-component-skip-link`

```shell
npm install --save @ecl-twig/ec-component-skip-link
```

### Parameters

- **"link"** (associative array) (default: 'predefined structure below')
  - "label" (string) (default: '') - Content of link
  - "href" (string) (default: '') - href attribute
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-skip-link/ecl-skip-link.html.twig' with { 
    label: 'Skip to main content', 
    href: '#top', 
} %}
```
