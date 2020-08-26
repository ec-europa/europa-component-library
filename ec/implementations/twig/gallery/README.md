# ECL-Twig Gallery

npm package: `@ecl-twig/ec-component-gallery`

```shell
npm install --save @ecl-twig/ec-component-gallery
```

### Parameters

- **"overlay"** (object) (default: {})
  - "close" (object) (default: {}): object of type button
  - "previous" (object) (default: {}): object of type button
  - "next" (object) (default: {}): object of type button
  - "counter_separator" (string) (default: '')
  - "download" (object) (default: {}): object of type link
  - "share" (object) (default: {}): object of type link
- **"items"** (array) (default: [])
  - "path" (string) (default: '')
  - "alt" (string) (default: '')
  - "description" (string) (default: '')
  - "meta" (string) (default: '')
  - "icon" (object) (default: {}): object of type icon
  - "share_path" (string) (default: '')
- **"footer"** (object) (default: {}) Footer link
- **"view_all_label"** (string) (default: '') Label of the view all button
- **"counter_label"** (string) (default: '') Label of the counter
- **"selected_item_id"** (int) (default: 0)
- **"extra_classes"** (optional) (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (optional) (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'
- **"_compliance_"** (boolean) (default: false) Activates debug

### Example :

<!-- prettier-ignore -->
```twig
{% include '@ecl-twig/ec-component-gallery/ecl-gallery.html.twig' with {  
  view_all_label: 'View all', 
  counter_label: 'Media files in this gallery' , 
  items: [ 
    { 
      path: 'path/to/image.jpg', 
      alt: 'Image 1', 
      description: 
        'The EU in brief, institutions and bodies, countries, symbols, history, facts and figures', 
      meta: 'Copyright, Author, Licence for image 1', 
      share_href: '/share#example-image.jpg', 
    }, 
    { 
      path: 'path/to/image2.jpg', 
      alt: 'Image 2', 
      description: 'Living, working, travelling in the EU', 
      meta: 'Copyright, Author, Licence for image 2', 
      icon: { 
        path: 'path/to/icons.svg', 
        type: 'general', 
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
      type: "ui", 
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
        type: 'ui', 
        name: 'close', 
        size: 's', 
      }, 
    }, 
    previous: { 
      variant: 'ghost', 
      label: 'Previous', 
      icon: { 
        path: 'path/to/icons.svg', 
        type: 'ui', 
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
        type: 'ui', 
        name: 'corner-arrow', 
        transform: 'rotate-90', 
        size: 'l', 
      }, 
    }, 
    counter_separator: 'of', 
    download: { 
      label: 'Download', 
      icon: { 
        path: 'path/to/icons.svg', 
        type: 'ui', 
        name: 'download', 
        size: 'fluid', 
      }, 
    }, 
    share: { 
      label: 'Share', 
      icon: { 
        path: 'path/to/icons.svg', 
        type: 'general', 
        name: 'share', 
        size: 'fluid', 
      }, 
    }, 
  }, 
} %}
```
