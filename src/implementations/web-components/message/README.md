# ECL Message web-component

npm package: `@ecl/web-component-message`

```shell
npm install --save @ecl/web-component-message
```

## Attributes

- **"data-title"** (mandatory) (string)
- **"data-description"** (mandatory) (string)
- **"data-variant"** (mandatory) (string)
- **"data-system"** (string) (ec or eu) default: ec
- **"data-close-label"** (mandatory) (string)
- **"data-ecl-script"** (optional) (boolean) Load the ECL js
- **"data-ecl-autoInit"** (optional) (boolean) Initialise the component javascript
- **"data-classes"** (optional) (array of valid classNames) eg: '["extra-class", "extra-class-2"]'
- **"data-attributes"** (optional) (object) eg: '{"test-attribute": "test-value"}'

## Html source:

<!-- prettier-ignore -->
```twig
<ecl-message  
  data-system="ec"  
  data-title="Information message"  
  data-variant="info"  
  data-decription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan semper lorem"  
  data-ecl-autoinit  
  data-ecl-script  
></ecl-message>
```
