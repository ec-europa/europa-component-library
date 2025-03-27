# ECL Skip Link component

npm package: `@ecl/skip-link`

```shell
npm install --save @ecl/skip-link
```

### Parameters

- **"label"** (string) (default: '') - Content of link
- **"href"** (string) (default: '') - href attribute

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/skip-link/skip-link.html.twig' with { 
    label: 'Skip to main content', 
    href: '#top', 
} %}
```
