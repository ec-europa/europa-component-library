# Images

Using images, just like any other component of a website, should be done with careful thought and consideration. Use Images with purpose.

## Images with purpose

Use Images with purpose.

## Aspect ratio

Aspect ratio is the relationship between the image's width and height. When cropping your photos, consider the context of the photo, the composition of the layout, and how well photos balance visually with the surrounding chunks.We recommend picking one of the following image aspect ratios:

- The image caption follows 1:1 image aspect ratio
- The image caption follows 3:2 image aspect ratio
- The image caption follows 8:3 image aspect ratio

## Image sizes

Image Size Guidelines:
- Content Image - 600 x 400px
- Small Thumbnail - 270 x 180px
- Medium Thumbnail - 360 x 240px
- Banner Image - 2400 x 900px
- Square Portrait Image - 160 x 160px

## Caption & copyright
Caption: Images can have captions (style?)
Copyright: An image can contain copyright details.


> Pattern: images (more about the content model, gallery e.a.)

---

Images should be responsive by default.

We use the following (opinionated) CSS rule on all `img` elements:

```css
img {
  height: auto;
  max-width: 100%;
}
```

Pro tip: [use `<picture>` and srcset](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/)
