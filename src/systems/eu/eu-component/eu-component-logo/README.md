# EU Logo

Default EU logo.

```html
<a href="https://ec.europa.eu" class="ecl-logo ecl-logo--logotype" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/generic-component-logo' with {
  'type': type|default('right'),
  'title': 'European Union',
  'href': 'https://europa.eu'
} only %}
```
