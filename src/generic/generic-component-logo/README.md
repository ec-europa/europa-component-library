# EC logo

Default EC logo.

```html
<a href="https://ec.europa.eu" class="ecl-logo" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/generic-component-logo' with {
  'href': 'https://ec.europa.eu',
  'title': 'European Commission',
} %}
```

## EC logotype

EC logo with text. Add `logo--logotype` class to use it:

```html
<a href="https://ec.europa.eu" class="logo logo--logotype" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/generic-component-logo' with {
  'href': 'https://ec.europa.eu',
  'title': 'European Commission',
  'type': 'right',
} %}
```

## EC logotype with text below the logo

EC logo with text below. Add `logo--logotypebelow` class to use it:

```html
<a href="https://ec.europa.eu" class="logo logo--logotypebelow" title="European Commission">
  <span class="ecl-u-sr-only">European Commission</span>
</a>
```

Or using Twig:

```twig
{% include '@ecl/generic-component-logo' with {
  'href': 'https://ec.europa.eu',
  'title': 'European Commission',
  'type': 'below',
} %}
```

## External classes

Additionally, you can add external classes with the `extra_class` optional
parameter.

For example:

```twig
{% include '@ecl/generic-component-logo' with {
  'href': 'https://ec.europa.eu',
  'title': 'Home - European Commission',
  'type': 'right',
  'extra_classes': 'site-header__logo'
} %}
```
