---
title: Typography
order: 1
---

import Playground from '@ecl/website-components/Playground';
import { RemToPixels } from '@ecl/website-components';

Disclaimer: all values expressed in pixels are in fact dynamically converted from rem values. The conversion depends on the settings of your browser.

## Typeface

Arial is the standard typeface we use. We chose Arial because it is a system font that is suited for multilingual use.

```css
font-family: Arial, sans-serif;
```

## Type scale

Each step on the scale is determined by the previous step on the scale. We use the carbon design formula (X₂=X₁+{INT[(n-2)/4]+1}x2), starting from the font size of 0.75rem (<RemToPixels rem="0.75" />px).

## Line height

Line-heights are based on the size of the typeface itself. Ideal line-heights for standard copy have a ratio around 1:1.5. The exception to this rule are headings, which need less spacing and therefore have a line-height ratio of 1:1.2. The line-height values need to be always divisible by 4 so they can support a vertical grid. According to the use of text we separate typeface into two categories. Prolonged reading has a bigger ratio (1.5) to match accessibility guidelines and UI standard is for bigger titles and UI elements (buttons etc).

## Font weight

Font weight is an important typographic style that can add emphasis and is used to differentiate content hierarchy. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold. We use 400 for Regular and 600 for bold. The bold font weight is used to put emphasis on important words and to add visual emphasis on headings.

## Line length

Line-length, traditionally known as measure, is the number of characters in a single line. It also directly contributes to the readability and pacing of copy. Lines that are too long degrade eye tracking from line to line, making it difficult to gauge which line to read next. In contrast, lines that are too short make it difficult for a reader to maintain a steady reading rhythm. Short lines often create disproportionate ragged edges that negatively affect the design. We use a range of 75-85 characters per line.

## Headings

Headings and subheadings should be organised in a hierarchy, with heading first, followed by subheadings in order.

**Font weight: 600 (bold)**

### Heading 1

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-3xl ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-4xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                    | Line height                                   |
| ------- | -------------------------------------------- | --------------------------------------------- |
| mobile  | 3XL - 1.75rem - <RemToPixels rem="1.75" />px | 3XL UI - 2rem - <RemToPixels rem="2" />px     |
| desktop | 4XL - 2rem - <RemToPixels rem="2" />px       | 4XL UI - 2.5rem - <RemToPixels rem="2.5" />px |

### Heading 2

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-2xl ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-3xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                    | Line height                                     |
| ------- | -------------------------------------------- | ----------------------------------------------- |
| mobile  | 2XL - 1.5rem - <RemToPixels rem="1.5" />px   | 2XL UI - 1.75rem - <RemToPixels rem="1.75" />px |
| desktop | 3XL - 1.75rem - <RemToPixels rem="1.75" />px | 3XL UI - 2rem - <RemToPixels rem="2" />px       |

### Heading 3

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-xl ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-2xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                   | Line height                                     |
| ------- | ------------------------------------------- | ----------------------------------------------- |
| mobile  | XL - 1.25rem - <RemToPixels rem="1.25" />px | XL UI - 1.5rem - <RemToPixels rem="1.5" />px    |
| desktop | 2XL - 1.5rem - <RemToPixels rem="1.5" />px  | 2XL UI - 1.75rem - <RemToPixels rem="1.75" />px |

### Heading 4

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-l ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-prolonged-xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                    | Line height                                           |
| ------- | -------------------------------------------- | ----------------------------------------------------- |
| mobile  | L - 1.125rem - <RemToPixels rem="1.125" />px | L Prolonged - 1.75rem - <RemToPixels rem="1.75" />px  |
| desktop | XL - 1.25rem - <RemToPixels rem="1.25" />px  | XL Prolonged - 1.75rem - <RemToPixels rem="1.75" />px |

### Heading 5

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-m ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|                  | Font size                            | Line height                                        |
| ---------------- | ------------------------------------ | -------------------------------------------------- |
| mobile & desktop | M - 1rem - <RemToPixels rem="1" />px | M Prolonged - 1.5rem - <RemToPixels rem="1.5" />px |

## Paragraphs

**Font weight: 400 (regular)**

### Lead paragraph

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-l">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-prolonged-xl">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                    | Line height                                           |
| ------- | -------------------------------------------- | ----------------------------------------------------- |
| mobile  | L - 1.125rem - <RemToPixels rem="1.125" />px | L Prolonged - 1.75rem - <RemToPixels rem="1.75" />px  |
| desktop | XL - 1.25rem - <RemToPixels rem="1.25" />px  | XL Prolonged - 1.75rem - <RemToPixels rem="1.75" />px |

### Medium paragraph

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|                  | Font size                            | Line height                                        |
| ---------------- | ------------------------------------ | -------------------------------------------------- |
| mobile & desktop | M - 1rem - <RemToPixels rem="1" />px | M Prolonged - 1.5rem - <RemToPixels rem="1.5" />px |

### Small paragraph

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-s">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|                  | Font size                                    | Line height                                          |
| ---------------- | -------------------------------------------- | ---------------------------------------------------- |
| mobile & desktop | S - 0.875rem - <RemToPixels rem="0.875" />px | S Prolonged - 1.25rem - <RemToPixels rem="1.25" />px |

### Extra Small paragraph

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-prolonged-xs">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|                  | Font size                                   | Line height                                           |
| ---------------- | ------------------------------------------- | ----------------------------------------------------- |
| mobile & desktop | XS - 0.75rem - <RemToPixels rem="0.75" />px | XS Prolonged - 1.25rem - <RemToPixels rem="1.25" />px |
