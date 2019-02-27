---
title: Usage
order: 1
---

import { Paragraph } from '@ecl/website-components';

<Paragraph size="lead">
  Cards act as an entry point to more detailed information. A card is container for a few short, related pieces of information. It roughly resembles a playing card in size and shape, and is intended as a linked, short representation of a conceptual unit.
</Paragraph>

## Anatomy

All elements are optional. Card layouts can vary to support the types of content they contain. The following elements are commonly found.

| Name        | Mandatory |                     Note |
| ----------- | :-------: | -----------------------: |
| Thumbnail   |           | SHOULD BE CLICKABLE !!!! |
| Title       |           | SHOULD BE CLICKABLE !!!! |
| Description |           |                          |
| Meta        |           |                          |
| Tags        |           |                          |
| Infos       |           |                          |

## When to use

- For information browsing (as opposed to searching)
- To group heterogeneous types of content
- To provide a visual boundary, allowing users to easily navigate through
  - several distinct items
  - To enhance information browsing
- The user goals that the card-based web design best responds to:
  - scrolling through
  - scanning through
  - browsing through

## When not to use

- For information searching (as opposed to browsing).
- When you have a small screen display and you want to offer immediate access to results it is better to avoid cards as they force users to scroll down and rely on their short-term memory. This creates a cognitive overload which harms UX.

## DO's

- Use cards to emphasize on contents
- Only display the most relevant information on each card
  illustration: card with a thumbnail, title, description
- Keep the amount of links on the cards as low as possible

## DON'Ts

- Use cards as an image gallery (link to image gallery)
- Use cards to display images or video (link to media container)
- Avoid to displaying a large amount of cards
  illustration: card with multiple meta, tags
- Avoid having too many links on a cards, keep it
