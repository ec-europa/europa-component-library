---
title: Use of images
order: 4
---

We should only use visual material when it is complementary to the content in the webpages.

## When to use what

Use different types of visuals in different contexts:

_Photographs_: For dynamic content like news and people. Photographs can also be used in banners to communicate substance and emotions.

_Illustrations_: For static content that is transformable into something visual, such as topics and themes. Provided they are informative, and descriptive.

_Infographics_: Use these for visual storytelling to make complex information easier to understand. For example, an infographic could describe a workflow, how an investment plan works or the law-making process.

## Best practices

- your visual content is relevant to the topic of the webpage
- only add an image whenever it adds value to the webpage
- place images near the relevant text
- the most important image should be near the top of the webpage
- avoid embedding text in images, not all users can access them (page translation tools can't read images)
- text in HTML, provide alt text for images; follow rules of [accessibility](https://webstyleguide.com/wsg3/11-graphics/8-web-graphics-markup.html#alt-text)
- create good content is equally important as visual content for images

## Widely supported image formats

| File type (short) | File type (long)                      | File extension |
| ----------------- | ------------------------------------- | -------------- |
| GIF               | graphics Interchange Format           | .gif           |
| JPEG              | joint Photographic Expert Group image | .jpeg .jpg     |
| PNG               | portable Network Graphics             | .png           |
| SVG               | scalable Vector Graphics              | .svg           |

### Raster graphic

Raster images are pixel-based. When you scale up a raster image you'll see jagged and blurry edges.

#### GIF (Graphics Interchange Format)

- fewer colours, file size is smaller than JPEG
- interlaced progressive loading, low-quality version first, more detailed image is loaded next
- fewer colours, file size is smaller than JPEG
- does not lose any data with compression
- best use for web graphics with few colours only, and line drawings

#### JPG/JPEG (Joint Photographic-Experts-Group)

- can display millions of colours, use JPEG format for photographs, still images, shading with light and dark
- use JPEG when file size is more important than the quality of the image
- optimising JPEG images; 60% - 75% is usually optimal for web publishing
  16-bit data format
- compatible across many platforms and image editors

#### PNG (Portable Network Graphics)

- support transparency (alpha channel), allow a translucent look
- lossless compression, no loss of data
- manage high-contrast or detailed images better than JPEG
- they can go down to very small file sizes when there are limited colours, use an 8-bit colour palette instead of a 24 colour palette
- PNG images can be used in any colour background still maintain the original appearance

### Vector graphic

Vector image format can produce results with high fidelity at every resolution setting. It is an ideal format for high-resolution screens. If you zoom into a vector graphic it will always remain the same quality.

#### SVG (Scalable Vector Graphics)

- SVG is in vector format – it does not lose any data when compressed
- SVG formats are supported by most contemporary browsers
- the image file size is lightweight and compressible
  supports transparency
- ECL icons are of type SVG and are distributed in `@ecl/resources-ec-icons` and `@ecl/resources-eu-icons`.

When implementing ECL icons, please pay extra attention to image paths with relation to files' physical location. Here is an example of how markup would look like in a component's showcase:

```html
<svg
  focusable="false"
  aria-hidden="true"
  data-ecl-accordion-icon="true"
  class="ecl-accordion2__toggle-icon ecl-icon ecl-icon--m"
>
  <use xlink:href="/component-library/dist/media/icons.865a18d2.svg#plus"></use>
</svg>
```

To have actual plus sign icon rendered correctly, replace the `/component-library/` path to your absolute or relative path where you have hosted ECL resources. Also, the `865a18d2` value can be removed to be `icons.svg#plus`.

## Editing visuals

- don't apply effects, gradients, borders or filters. It can make the picture look manipulated
- don't pick photos with frames, rounded corners or drop shadows
- cropping. Pay attention to the copyright. In some cases you need prior consent from the author to alter the image
