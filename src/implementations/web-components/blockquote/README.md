# ECL Blockquote web-component

npm package: `@ecl/web-component-blockquote`

```shell
npm install --save @ecl/web-component-blockquote
```

## Attributes

- **"data-citation"** (mandatory) (string)
- **"data-author"** (mandatory) (string)
- **"data-system"** (string) (ec or eu) default: ec
- **"data-aria-label"** (mandatory) (string)
- **"data-image"** (optional) (string) Image src, eg. 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg'
- **"data-classes"** (optional) (array of valid classNames) eg: '["extra-class", "extra-class-2"]'
- **"data-attributes"** (optional) (object) eg: '{"test-attribute": "test-value"}'

## Html markup rendered:

<!-- prettier-ignore -->
```twig
<ecl-blockquote  
  data-system="ec"  
  data-citation="Lorem ipsum dolor sit amet, consectetur adipiscing elit."  
  data-aria-label="aria label"  
  data-image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image-square.jpg"  
>  
</ecl-blockquote>
```
