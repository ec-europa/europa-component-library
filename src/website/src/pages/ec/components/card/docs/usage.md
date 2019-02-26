---
title: Usage
order: 1
---

The cards component serves as a container that groups various information and interface elements. They are an entry point to more detailed information and are grouped on the grid.

They can be formatted in landscape or portrait.

Cards are grouped on the grid, and can be formatted in landscape or portrait.

More information will be uploaded, work in progress.


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


| Name          | Mandatory     | Note              |
| ------------- |:-------------:| -----:            |
| Thumbnail     |               |                   |
| Title         |               |                   |
| Description   |               |                   |
| Meta          |               |                   |
| Tags          |               |                   |
| Infos         |               |                   |


## When to use

- To group various types of content, helping users to easily navigate through
  - several types of content 
- For information browsing (as opposed to searching) 
- To provide a visual boundary, allowing users to easily navigate through 
  - several distinct items 
  - To enhance information browsing 
- The user goals that the card-based web design best responds to: 
  - scrolling through
  - scanning through
  - browsing through 

## When not to use

- When you perform a search and expect to quickly access a particular type of information. 
- When you have a small screen display and you want to offer immediate access to results it is better to avoid cards as they force users to scroll down and rely on their short-term memory. This creates a cognitive overload which harms UX.
