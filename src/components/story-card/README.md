# Story Card

The Story Card component presents content in an engaging, interactive format with different layouts optimized for mobile and desktop experiences.

## Features

- **Mobile Experience**: Full-width horizontal carousel powered by Embla Carousel with touch support
- **Desktop Experience**: Multi-card grid layout that expands selected cards inline (accordion-like behavior)
- **Responsive Controls**: Prev/Next navigation buttons with auto-play/pause functionality
- **Accessible**: Full ARIA support and keyboard navigation
- **Flexible Content**: Support for images, titles, descriptions, and call-to-action buttons

## Structure

### Mobile Layout

- Single card visible at a time
- Swipeable carousel with Embla
- Navigation controls below the card
- Counter showing current and total cards
- Play/Pause auto-play functionality

### Desktop Layout

- Grid display (up to 4 columns)
- Click to expand selected card
- Details slide in with smooth animation
- Only one card expanded at a time
- Maintains card aspect ratio in grid

## Usage

### Basic Example

```twig
{% include '@ecl/story-card/story-card.html.twig' with {
  items: [
    {
      id: 'story-1',
      image: {
        img: {
          src: 'image-url.jpg',
          alt: 'Story description',
        },
      },
      title: 'Story Title',
      description: 'Story description text here',
      cta: {
        label: 'Read more',
        path: '/path/to/story',
      },
    },
  ],
} only %}
```

### JavaScript Initialization

```javascript
import { StoryCard } from '@ecl/story-card';

const element = document.querySelector('[data-ecl-auto-init="StoryCard"]');
const storyCard = new StoryCard(element);
storyCard.init();
```

## Parameters

| Parameter          | Type   | Required | Default            | Description                 |
| ------------------ | ------ | -------- | ------------------ | --------------------------- |
| `items`            | array  | Yes      | `[]`               | List of story cards         |
| `color_mode`       | string | No       | `''`               | Color mode name (EC system) |
| `sr_description`   | string | No       | `''`               | Screen reader description   |
| `sr_prev`          | string | No       | `'Previous card'`  | Previous button label       |
| `sr_next`          | string | No       | `'Next card'`      | Next button label           |
| `sr_play`          | string | No       | `'Play carousel'`  | Play button label           |
| `sr_pause`         | string | No       | `'Pause carousel'` | Pause button label          |
| `extra_classes`    | string | No       | `''`               | Extra CSS classes           |
| `extra_attributes` | array  | No       | `[]`               | Extra HTML attributes       |

### Item Object

Each item in the `items` array should have:

| Field         | Type   | Required | Description              |
| ------------- | ------ | -------- | ------------------------ |
| `id`          | string | Yes      | Unique identifier        |
| `image`       | object | Yes      | Picture component object |
| `title`       | string | Yes      | Card title               |
| `description` | string | Yes      | Card description         |
| `cta`         | object | No       | Call-to-action button    |

## Accessibility

- Semantic HTML with proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Color contrast compliant

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

- `@ecl/dom-utils` - DOM utilities
- `@ecl/event-manager` - Event handling
- `embla-carousel` - Carousel engine
- `@ecl/button` - Button component
- `@ecl/picture` - Picture component
