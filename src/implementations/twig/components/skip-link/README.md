# ECL Skip Link component

npm package: `@ecl/twig--component-skip-link`

```shell
npm install --save @ecl/twig-component-skip-link
```

### Parameters

- **"link"** (associative array) (default: 'predefined structure below')
  - "label" (string) (default: '') - Content of link
  - "href" (string) (default: '') - href attribute
- **"\_compliance\_"** (boolean) (default: false) Activates debug

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/skip-link/skip-link.html.twig' with { 
    label: 'Skip to main content', 
    href: '#top', 
} %}
```
