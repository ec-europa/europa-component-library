---
title: Spacing
order: 6
---

Spacing tokens are used to consistently apply margin and padding across components and UIs. Having a set spacing scale brings a rhythm to the product and creates a natural and familiar flow from page to page.

## Two spacing scales

We use two spacing scales:

- inner spacing: spacing within components
- layout spacing: the position of the components in the layout and defining relationships between them.

The spacing system needs to be in harmony with the typography and the components. For spacing tokens to be able to conform in the baseline grid and contribute to the vertical rhythm, all sizes must be divisible by 4. The spacing tokens always refer to fixed values (are not responsive). All spacing tokens can be used as values for margins or paddings.

## Use of space

We use space to create hierarchy and relationships. By using space we can create proximity, grouping and relationships between components that establish a visual hierarchy that can organize information and improve the user experience.

## Inner component scale

Whenever we need a fixed horizontal or vertical spacing inside components then these spacing tokens are to be used. All the values are multiple of 4px so they can complement with the typography and placed in a 4px vertical grid. The values are based in a geometric progression. There are some exception like the 48px/3rem that doesn't fit in the geometric progression that we might need it in some cases. In annotations these spacings will be blue overlays.

| Name | Token (example) | Size          |
| ---- | --------------- | ------------- |
| 4xl  | \$spacing-4xl   | 64px - 4rem   |
| 3xl  | \$spacing-3xl   | 48px - 3rem   |
| 2xl  | \$spacing-2xl   | 40px - 2.5rem |
| xl   | \$spacing-xl    | 32px - 2rem   |
| l    | \$spacing-lg    | 24px - 1.5rem |
| m    | \$spacing-md    | 16px - 1rem   |
| s    | \$spacing-sm    | 24px - 1.5rem |
| xs   | \$spacing-xs    | 8px - 0.5rem  |
| 2xs  | \$spacing-2xs   | 4px - 0.25rem |

<img src="https://inno-ecl.s3.amazonaws.com/media/images/EC/Space/Space%20Inner.svg" alt=" Space token of components " width="300"/>

## Layout scale

Whenever we need a fixed horizontal or vertical spacing to place components in a layout then the below tokens need to be used. In most cases, the horizontal spacing is been determined to be the 12 column horizontal grid (If there are cases of fixed horizontal spacing then the tokens need to be used). So the layout spacing tokens are used mostly to define the vertical relationships between components. These spaces are always fixed (thus we use the tokens). In annotations, these spacings will be green overlays.

| Name | Token (example) | Size          |
| ---- | --------------- | ------------- |
| 4xl  | \$layout-4xl    | 64px - 4rem   |
| 3xl  | \$layout-3xl    | 48px - 3rem   |
| 2xl  | \$layout-2xl    | 40px - 2.5rem |
| xl   | \$layout-xl     | 32px - 2rem   |
| l    | \$layout-lg     | 24px - 1.5rem |
| m    | \$layout-md     | 16px - 1rem   |
| s    | \$layout-sm     | 24px - 1.5rem |
| xs   | \$layout-xs     | 8px - 0.5rem  |
| 2xs  | \$layout-2xs    | 4px - 0.25rem |

<img src="https://inno-ecl.s3.amazonaws.com/media/images/EC/Space/Space%20Layout.svg" alt=" Space token of layouts " width="300"/>
