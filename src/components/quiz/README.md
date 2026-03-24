# ECL Quiz component

npm package: `@ecl/quiz`

```shell
npm install --save @ecl/quiz
```

## Parameters

- **"quiz"** (associative array) (default: {}):
  - **"extra_classes"** (optional) (string) (default: ''): Extra css classes, added to the root picture tag
  - **"extra_image_classes"** (optional) (string) (default: ''): Extra css classes, added to to the img tag
  - **"extra_attributes"** (optional) (array) (default: [])
    - "name" (string) Attribute name, eg. 'data-test'
    - "value" (optional) (string) Attribute value, eg: 'data-test-1'

## Example:

<!-- prettier-ignore -->
```twig
{% include '@ecl/quiz/quiz.html.twig' with { 
  quiz: {
  },
} %}
```
