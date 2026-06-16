# ECL News ticker component

npm package: `@ecl/news-ticker`

```shell
npm install --save @ecl/news-ticker
```

### Parameters:

- **"id"** (string) (default: random) Unique id for the news ticker
- **"items"** (array) (default: []) Slide items; format:
  - "content" (string) Item text content
  - "link" (string) Item link URL
  - "external" (boolean) Whether the link is external
  - "icon" (object) Icon following ECL Icon structure (used instead of img)
  - "img" (object) Alternative to icon:
    - "path" (string) (default: '') Image path
    - "title" (string) (default: '') Image title
    - "alt" (string) (default: '') Image alt text
- **"counter_label"** (string) (default: 'of') Label between current and total count
- **"sr_external"** (string) (default: 'External link') Screen reader label for external icon
- **"sr_previous"** (string) (default: 'Previous news') Screen reader label for previous button
- **"sr_next"** (string) (default: 'Next news') Screen reader label for next button
- **"sr_play"** (string) (default: 'Play news ticker') Screen reader label for the play button
- **"sr_pause"** (string) (default: 'Pause news ticker') Screen reader label for the pause button
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/news-ticker/news-ticker.html.twig' with { 
  id: 'news-ticker-example', 
  counter_label: 'of', 
  items: [ 
    { 
      content: 'EMA starts rolling review of COVID-19 vaccine Vidprevtyn', 
      link: 'https://www.ema.europa.eu/en/news/ema-starts-rolling-review-covid-19-vaccine-vidprevtyn',
      icon: { 
        name: 'euro', 
      }, 
    }, 
    {
      content:
        'President von der Leyen announced that the EU has achieved its goal of fully vaccinating 70% of its adult population on 31 August',
      link: 'https://ec.europa.eu/commission/presscorner/detail/en/ip_21_4362',
      icon: { 
        name: 'euro', 
      }, 
    }, 
    { 
      content:
        'President von der Leyen announced that the EU has achieved its goal of fully vaccinating 70% of its adult population on 31 August', 
      icon: { 
        name: 'euro', 
      }, 
    }, 
    ...
  ], 
} %}
```
