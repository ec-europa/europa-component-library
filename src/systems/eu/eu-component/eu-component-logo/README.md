# EU Logo

Default EU logo.

```html
<a href="https://ec.europa.eu" class="ecl-logo ecl-logo--logotype" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/eu-component-logo' with {
  'title': 'European Union',
  'href': 'https://europa.eu',
  'type': 'right'
} only %}
```
