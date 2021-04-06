---
title: Usage
order: 1
---

import { Paragraph, DoDont, Link } from '@ecl/website-components';

<Paragraph size="lead">
  Used to present chunks of information in a concise and scannable way, lists
  help to organize content related to a single topic, grouping together a set of
  items or text options.
</Paragraph>

## Anatomy

A list is a series of related items displayed in a single column. The content of each item can be plain text, an external link or a short paragraph. Even if lists can be nested inside of each other (to display sub-sections for example), it's not recommended nesting lists deeper than three levels in order to avoid confusion.

Below we'll cover the three list types: [ordered](#ordered), [unordered](#unordered), [description list](#description-list).

<h2 id="ordered">Ordered list</h2>

Ordered lists display a set of items in a specific and logical order.
They are commonly used in step by step instructions.

Please note that different list styles can be applied to list items, like numbers, roman numerals or letters.

![ordered list](https://inno-ecl.s3.amazonaws.com/media/images/EC/List/ordered-list-desktop.jpg)

<DoDont
itemDo={{
    title: 'Do',
    image:
      'https://inno-ecl.s3.amazonaws.com/media/images/EC/List/ordered-list-desktop-do.jpg',
    alt: '',
    description: 'Show items in the right logical order.',
  }}
itemDont={{
    title: "Don't",
    image:
      'https://inno-ecl.s3.amazonaws.com/media/images/EC/List/ordered-list-desktop-dont.jpg',
    alt: '',
    description:
      'Respect the sequential order and do not use unordered or blank lists.',
  }}
/>

<h2 id="unordered">Unordered list</h2>

Unordered lists are used to show content with the same importance, so the order of the items doesn't matter.

Please note that different list styles can be applied to bullets, like disc, circle, square or hyphen.

![unordered list](https://inno-ecl.s3.amazonaws.com/media/images/EC/List/unordered-list-desktop.jpg)

#### Guidelines

- be sure to organize the items in a logical way
- start bullet list items with a lowercase letter and blank list items with capital letters
- limit the numbers of items between 5 to 9

<h2 id="description-list">Description list</h2>

Description lists are lists of terms with their related definition or description, like a glossary or a list of speakers with relative biography.

![description list](https://inno-ecl.s3.amazonaws.com/media/images/EC/List/description-list-desktop.jpg)

#### Guidelines

- avoid using more than one or two short sentences
- add a meaningful description or explanation of each term, avoiding active voices

## When to use

- use a bullet list when the order of the items is not relevant and to increase scannability and readability
- use an ordered list when you need to communicate priorities or to show a specific sequence
- use a description list when the terms in the list require a specific description or explanation

## When not to use

- do not use for navigation purpose; use <Link to="/ec/compositions/navigation-lists/usage/">navigation lists</Link> instead
- do not use to display search results; use <Link to="/ec/utilities/stacks/usage/">stacks</Link> instead
