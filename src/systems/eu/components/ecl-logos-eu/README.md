# EU Logo

Default EU logo.

```html
<a href="https://ec.europa.eu" class="logo" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/generic-component-logo' with {
  'to': 'https://europa.eu',
  'title': 'European Union',
} %}
```
