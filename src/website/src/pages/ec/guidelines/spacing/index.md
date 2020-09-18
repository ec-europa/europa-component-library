---
title: Spacing
order: 6
---

import { Paragraph, RemToPixels } from '@ecl/website-components';

<Paragraph size="lead">
  Spacing tokens are used to consistently apply margin and padding across elements, components and layouts. With a set scale for spacing, information can be structured to have a consistent and intuitive user interface across the website.
</Paragraph>

## Two spacing scales

ECL provides two separate sets of scales:

1. Inner spacing: the spacing within the components
2. Layout spacing: the spacing between the components (+ other elements outside of a component)

For spacing tokens to be able to conform in the baseline grid and contribute to the vertical rhythm, all sizes must be multiples of <RemToPixels rem="0.25" />px. A vertical rhythm starts from a baseline and it’s the basis for everything from the font sizes, line height and image sizes. The spacing tokens always referring to fixed values and thus they are not responsive. All spacing tokens can be used as values for both margins and paddings.

## Use of space

Space is used to create hierarchy and visual relationships. By using the space tokens, you can achieve visual grouping and other associations both between and within the components. Along with the typography system, they contribute to an overall visual hierarchy, providing users with a structured way of organising information.

## Inner component space

Whenever we need a fixed horizontal or vertical spacing inside components then these spacing tokens are to be used. All the values are multiples of <RemToPixels rem="0.25" />px so they can complement the typography when placed in a <RemToPixels rem="0.25" />px vertical grid. The values are based on a geometric progression. There are some exceptions like the <RemToPixels rem="0.75" />px/0.75rem and <RemToPixels rem="3" />px/3rem that they don't fit in the geometric progression, but the need of having was apparent for some rare occasions where the only using geometric progression values wasn't enough

<img src="https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Inner%20component%20scale.png" srcset="https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Inner%20component%20scale%20-%20Mobile.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Inner%20component%20scale.png 734w" alt="Space token of components" width="600" />

## Layout spacing

Whenever we need a fixed horizontal or vertical spacing to place components in a layout then the below tokens need to be used. In most cases, the horizontal spacing has been determined to be the 12 column horizontal grid (If there are cases of fixed horizontal spacing, then the tokens need to be used). So the layout spacing tokens are used mostly to define the vertical relationships between components. These spaces are always fixed (thus we use the tokens).

<img src="https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Layout%20scale.png" srcset="https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Layout%20scale%20-%20Mobile.png 598w, https://inno-ecl.s3.amazonaws.com/media/images/EC/Spacing/Spacing%20-%20Layout%20scale.png 734w" alt="Space token of components" width="600" />

<!-- prettier-ignore-start -->
| Name | Token (example) | Size                                   |
| ---- | --------------- | -------------------------------------- |
| 4xl  | $layout-4xl     | <RemToPixels rem="4" />px - 4rem       |
| 3xl  | $layout-3xl     | <RemToPixels rem="3" />px - 3rem       |
| 2xl  | $layout-2xl     | <RemToPixels rem="2.5" />px - 2.5rem   |
| xl   | $layout-xl      | <RemToPixels rem="2" />px - 2rem       |
| l    | $layout-lg      | <RemToPixels rem="1.5" />px - 1.5rem   |
| m    | $layout-md      | <RemToPixels rem="1" />px - 1rem       |
| s    | $layout-sm      | <RemToPixels rem="0.75" />px - 0.75rem |
| xs   | $layout-xs      | <RemToPixels rem="0.5" />px - 0.5rem   |
| 2xs  | $layout-2xs     | <RemToPixels rem="0.25" />px - 0.25rem | 
<!-- prettier-ignore-end -->

## Do's

- always use the spacing token when spacing out element (either margin or padding)

## Don'ts

- don't go outside the provided spacing tokens
- don't stack the spacing tokens (such as <RemToPixels rem="0.75" />px + <RemToPixels rem="1" />px)

## When to use

- whenever you need to space out the inner parts within a component (when creating a new component that is outside what ECL provided)
- whenever you need to space out one component from another or other elements outside of a component

## When not to use

- do not use when you want to have responsive spacing since the token are fixed values
