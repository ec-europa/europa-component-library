# Story Card

npm package: `@ecl/story-card`

```shell
npm install --save @ecl/story-card
```

## Parameters

- **"color_mode"** (string) (default: '') Name of the color mode
- **"variant"** (string) (default: story) story or testimonial
- **"id"** (string) (default: 'random') Id of the element
- **"title"** (string) (default: '') Title of the story card
- **"description"** (string) (default: '') Description of the story card
- **"items"** (array) (default: [])
  - "teaser_label" (string): label displayed on the image
  - "title" (string): Title displayed in the details panel
  - "description" (string): Description
  - "picture" (object) (default: {}) Image following ECL Picture structure
  - "author" (string): Author of the quote
  - "role" (string): Role of the author
  - "source" (string): Source of the quote
  - "card_link" (object) Object of type ECL link
- **"sr_prev"** (string) (default: 'Previous card'): Previous button label
- **"sr_next"** (string) (default: 'Next card'): Next button label
- **"sr_play"** (string) (default: 'Play story cards'): Play button label
- **"sr_pause"** (string) (default: 'Pause story cards'): Pause button label
- **"extra_classes"** (string) (default: '') Extra classes (space separated)
- **"extra_attributes"** (array) (default: []) Extra attributes
  - "name" (string) Attribute name, eg. 'data-test'
  - "value" (string) Attribute value, eg: 'data-test-1'

### Example

```twig
{% include '@ecl/story-card/story-card.html.twig' with {
  id: 'story-card',
  items: [
    {

      picture: {
        img: {
          src: 'image-url.jpg',
          alt: 'Story description',
        },
      },
      title: 'Story Title',
      description: 'Story description text here',
      card_link: {
        label: 'Read more',
        path: '/path/to/story',
      },
    },
  ],
} only %}
```
