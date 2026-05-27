# ECL Slogan ticker component

npm package: `@ecl/slogan-ticker`

```shell
npm install --save @ecl/slogan-ticker
```

### Parameters:

- **"id"** (string) (default: random)
- **"items"** (array) (default: []) slide items
  - "content" (string)
  - "link" (string) (optional)
  - "external" (boolean) (optional)
- **"color_mode"** (string) (default: '') color mode class to apply
- **"sr_play"** (string) (default: 'Play slogan ticker') screen reader label for play button
- **"sr_pause"** (string) (default: 'Pause slogan ticker') screen reader label for pause button
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, e.g. 'data-test'
  - "value" (string) Attribute value, e.g. 'data-test-1'

### Example:

```twig
{% include '@ecl/slogan-ticker/slogan-ticker.html.twig' with {
  id: 'slogan-ticker-example',
  color_mode: 'default',
  items: [
    { content: 'Europe invests in people, planet and prosperity.' },
    { content: 'Our digital future is green, open and fair.' },
    { content: 'Stronger together for resilience and innovation.' },
    { content: 'Sustainability and inclusion guide our vision.' },
  ],
} %}
```
