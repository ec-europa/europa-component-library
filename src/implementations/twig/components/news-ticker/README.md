# ECL News ticker component

npm package: `@ecl/twig-component-news-ticker`

```shell
npm install --save @ecl/twig-component-news-ticker
```

### Parameters:

- **"id"** (string) (default: '')
- **"items"** (array) (default: []) slide items
  - "content" (string)
  - "link" (string) (optional)
- **"icon_path"** (string) (default: ''): path to the icons svg
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/news-ticker/news-ticker.html.twig' with { 
  id: 'news-ticker-example', 
  icon_path: '/icons.svg', 
  counter_label: 'of', 
  items: [ 
    { 
      content: 'EMA starts rolling review of COVID-19 vaccine Vidprevtyn', 
      link: 'https://www.ema.europa.eu/en/news/ema-starts-rolling-review-covid-19-vaccine-vidprevtyn', 
    }, 
    {
      content:
        'President von der Leyen announced that the EU has achieved its goal of fully vaccinating 70% of its adult population on 31 August',
      link: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_21_4362',
    }, 
    { 
      content:
        'President von der Leyen announced that the EU has achieved its goal of fully vaccinating 70% of its adult population on 31 August', 
    }, 
    ...
  ], 
} %}
```
