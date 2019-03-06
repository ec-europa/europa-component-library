---
title: Usage
order: 1
---

import { Link, Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  Cards act as an entry point to more detailed information. A card is container for a few short, related pieces of information. It roughly resembles a playing card in size and shape, and is intended as a linked, short representation of a conceptual unit.
</Paragraph>

## Anatomy

Card layouts can vary to support the types of content they contain.

| Name        | Mandatory |                     Note |
| ----------- | :-------: | -----------------------: |
| Thumbnail   |           | SHOULD BE CLICKABLE !!!! |
| Title       |     X     | SHOULD BE CLICKABLE !!!! |
| Description |           |                          |
| Meta        |           |                          |
| Tags        |           |                          |
| Infos       |           |                          |

## When to use

- Browsing for information (as opposed to searching)
- Grouping heterogeneous types of content
- To provide a visual boundary, allowing users to easily navigate through:
  - several distinct items
  - To enhance information browsing
- The user goals that the card-based web design best responds to:
  - scrolling through
  - scanning through
  - browsing through

## When not to use

- Searching for information (as opposed to browsing).
- On small screen display avoid using too many cards as they force users to scroll down and rely on their short-term memory. This creates a cognitive overload, a negative user experience.

## DO's

- Use cards to emphasize on contents
- Only display the most relevant information on each card
  illustration: card with a thumbnail, title, description
- Keep the amount of links on the cards as low as possible

## DON'Ts

- Overuse cards; Limit the amount of cards to small groups of item.
- Use cards as an image gallery, use <Link to="/ec/components/media/gallery/usage">gallery</Link> instead.
- Use cards to display images or video, use <Link to="/ec/components/media/media-container/usage">media container</Link> instead.

  illustration: card with multiple meta, tags

- Display too many links on a cards, the main and ideally only action on card should remain to navigate to the content it represent.
