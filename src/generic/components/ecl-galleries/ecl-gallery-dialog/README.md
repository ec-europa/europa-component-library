# Galleries

## When and how to use this component

This component helps the user to quickly browse available media thumbnails
(images, videos and audio clips) related to the page's textual content. These
thumbnails display a caption describing the media item along with a visual icon
to distinguish between video clips, audio clips and images. It should always be
used with the Gallery dialog component, which allows the user to visualize the
media in a bigger size and access additional controls for video and audio
playback. (The Gallery dialog component needs to be enabled).

## When to use this component

* When I want to have a gallery with different media in order to provide the
  user with more information about a certain topic, complement existing
  information.
* In events pages.
* When a gallery of images is, in general, needed.

## Do not use this component

* Without the Gallery dialog component

## Notes on technical implementation

In order to make this component work, you will need to combine:

* Template of `@ec-europa/ecl-carousels`
* Javascript behaviors of `@ec-europa/ecl-dialogs`

As long as you have HTML representation matching the output of carousel
component on the page (which is treated as a gallery component) you just need to
integrate this markup with the Javascript behaviors of the dialog framework by:

* including ECL.js object
* instantiating both the carousel and dialog libraries

```js
document.addEventListener('DOMContentLoaded', function() {
  ECL.dialogs({
    dialogWindowId: 'ecl-carousel',
  });
  ECL.carousels();
});
```

For further configuration options of both carousel and dialog components, you
can read their corresponding JavaScript files, which expose clear APIs.
