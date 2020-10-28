# ECL Blockquote component

npm package: `@ecl/twig-component-blockquote`

```shell
npm install --save @ecl/twig-component-blockquote
```

## Parameters

- **"citation"** (string) (default: '')
- **"author"** (string) (default: '')
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"\_compliance\_"** (optional) (boolean) (default: false): Activates debug

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/blockquote/blockquote.html.twig' with { 
  citation: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.', 
  author: 'Mark Twain' 
} %}
```
