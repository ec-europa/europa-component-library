# ECL-Twig Blockquote component

npm package: `@ecl-twig/ec-component-blockquote`

```shell
npm install --save @ecl-twig/ec-component-blockquote
```

## Parameters

- **"citation"** (string) (default: '')
- **"author"** (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-blockquote/ecl-blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain' 
} %}
```
