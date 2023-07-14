# ECL Gallery

npm package: `@ecl/twig-component-gallery`

```shell
npm install --save @ecl/twig-component-gallery
```

### Parameters

- **"overlay"** (object) (default: {})
  - "close" (object) (default: {}): object of type button
  - "previous" (object) (default: {}): object of type button
  - "next" (object) (default: {}): object of type button
  - "counter_separator" (string) (default: '')
  - "full_screen_label" (string) (default: '')
  - "download" (object) (default: {}): object of type link
  - "share" (object) (default: {}): object of type link
- **"items"** (array) (default: [])
  - "description" (string) (default: '')
  - "meta" (string) (default: '')
  - "icon" (object) (default: {}): object of type icon
  - "picture" (optional) (object) (default: {}) object of type picture
  - "video" (optional) (object) (default: {})
  - "embedded_video" (optional) (object) (default: {})
  - "share_path" (optional) (string) (default: '')
- **"visible_items"** (integer) (default: 8) Number of visible items in an expandable gallery
- **"expandable"** (boolean) (default: true) collapsible/expandable gallery
- **"icon_path"** (string) (default: '') Path to the icon sprite
- **"footer"** (object) (default: {}) Footer link
- **"view_all_label"** (string) (default: '') Label of the view all button
- **"view_all_expanded_label"** (string) (default: '') Label when the gallery is expanded
- **"counter_label"** (string) (default: '') Label of the counter
- **"disable_overlay"** (boolean) (default: false) Disables the overlay functionality
- **"full_width"** (boolean) (default: false) Full width gallery for desktop and tablet viewports
- **"selected_item_id"** (int) (default: 0)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes

  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

  Deprecated:

  - "item.image" - Replaced by item.picture.img.src
  - "item.path" - Replaced by item.picture.img.src
  - "item.alt" - Replaced by item.picture.img.alt

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl/gallery/gallery.html.twig' with {  
  view_all_label: 'View all', 
  counter_label: 'Media files in this gallery' , 
  visible_items: 6,
  disable_overlay: false,
  items: [ 
    { 
      picture: {
        img: {
          src: 'path/to/image.jpg', 
          alt: 'Image 1',
        },
      }, 
      description: 
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures', 
      meta: 'Copyright, Author, Licence for image 1', 
      share_href: '/share#example-image.jpg', 
    }, 
    { 
      picture: {
        img: {
          src: 'path/to/image2.jpg', 
          alt: 'Image 2',
        },
      }, 
      description: 'Living, working, travelling in the EU', 
      meta: 'Copyright, Author, Licence for image 2', 
      icon: { 
        path: 'path/to/icons.svg', 
        name: 'audio', 
      }, 
      share_href: '/share#example-image2.jpg', 
    }, 
    ... 
  ], 
  footer: { 
    link: { 
      label: "Link to further media items", 
      path: "/example", 
      aria_label: "View all link aria-label value" 
    }, 
    icon: { 
      path: "/icons.svg", 
      name: "external", 
      size: "s" 
    } 
  },
  overlay: { 
    close: { 
      variant: 'ghost', 
      label: 'Close', 
      icon: { 
        path: 'path/to/icons.svg', 
        name: 'close', 
        size: 's', 
      }, 
    }, 
    previous: { 
      variant: 'ghost', 
      label: 'Previous', 
      icon: { 
        path: 'path/to/icons.svg', 
        name: 'corner-arrow', 
        transform: 'rotate-270', 
        size: 'l', 
      }, 
      icon_position: 'before', 
    }, 
    next: { 
      variant: 'ghost', 
      label: 'Next', 
      icon: { 
        path: 'path/to/icons.svg', 
        name: 'corner-arrow', 
        transform: 'rotate-90', 
        size: 'l', 
      }, 
    }, 
    counter_separator: 'of', 
    full_screen_label: 'View original',
    share: { 
      label: 'Share', 
      icon: { 
        path: 'path/to/icons.svg', 
        name: 'share', 
        size: 'fluid', 
      }, 
    }, 
  }, 
} %}
```
