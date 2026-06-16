# ECL Picture component reference

Use this when a task involves adding or modifying an image in a component.

## Plain `<img>` vs Picture sub-component

ECL images are typically rendered via the **Picture sub-component** (`@ecl/picture`), not
a plain `<img>` tag. If the task does not specify, **ask the user**:
"Should this use the ECL Picture component or a plain `<img>`?"

## Using the Picture sub-component

**`package.json`** — add to `dependencies`:

```json
"@ecl/picture": "<VERSION>"
```

**Twig** — pass `extra_classes` to get a scoped class for styling:

```twig
{% include '@ecl/picture/picture.html.twig' with _image|merge({
  extra_classes: 'ecl-{name}__picture',
}) only %}
```

**Demo data** — minimal shape (no sources required for demos):

```js
image: {
  picture: {
    img: {
      src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
      alt: 'Description',
    },
  },
}
```

**SCSS** — always set `width: 100%` on the inner `img` to prevent overflow:

```scss
.ecl-{name}__picture {
  width: 100%;

  img {
    display: block;
    width: 100%;
  }
}
```

## Using a plain `<img>`

Use the standard example URL in demo data:
`https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg`
