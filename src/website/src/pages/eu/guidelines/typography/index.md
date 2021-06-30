---
title: Typography
order: 1
---

import Playground from '@ecl/website-components/Playground';
import { RemToPixels } from '@ecl/website-components';

Note: all values expressed in pixels are in fact dynamically converted from rem values. The conversion depends on the settings of your browser.

## Typeface

Arial is the standard typeface for the websites under the Europa.eu domain. The sans serif typeface family is versatile and universal.

```css
font-family: Arial, sans-serif;
```

## Modular type scale

A modular type scale is a set of type sizes that are proportionally multiplied by the ratio working its way up or down.

The purpose of using the modular type scale is to create a design that is visually pleasing, consistent, and balanced.

We set 16px (1rem) as the base font size for body text to ensure readability. It is the default font size for most browsers.

**Type Scale**

Font Size x Type Scale Ratio = Next Font Size

**Line Height**

Font Size x Line Height Ratio = Line Height

**Paragraph**

Line Height x Paragraph Ratio = Paragraph Spacing

**Line-height rounding**

Multiple of four

## Weight

Font weight is the thickness of a font's stroke, with various weights used to differentiate content hierarchy. The bold style emphasises the importance in comparison with the regular font style in the font family. We use 400 for regular and 600 for bold. Usually the bold style is assigned to headings. Regular text is used for body text.

## Line height

Line-height, relevant to the size of the typeface itself. Ideal line-height for standard copy uses 1:1.5 ratio. The exception to this rule is headings, which needs less spacing and therefore have a line-height ratio of 1:1.2. The line-height value is always divisible by 4 in order to support the grid.

## Line length

Line-height, relevant to the size of the typeface itself. Ideal line-height for standard copy uses 1:1.5 ratio. The exception to this rule are headings, which need less spacing and therefore have a line-height ratio of 1:1.2. The line-height value is always divisible by 4 in order to support the grid.

## Headings

**Font weight: 600 (bold)**

### Heading 1

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-5xl ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-6xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                      | Line height                                  |
| ------- | ---------------------------------------------- | -------------------------------------------- |
| mobile  | 5XL - 2.25rem - <RemToPixels rem="2.25" />px   | 5XL - 2.75rem - <RemToPixels rem="2.75" />px |
| desktop | 6XL - 2.625rem - <RemToPixels rem="2.625" />px | 6XL - 3.25rem - <RemToPixels rem="3.25" />px |

### Heading 2

<Playground hideCode>
  <div className="ecl-u-ph-m ecl-u-pv-xl">
    <div className="ecl-u-type-4xl ecl-u-type-bold">
      The quick brown fox jumps over the lazy dog
    </div>
    <div className="ecl-u-type-5xl ecl-u-type-bold ecl-u-mt-m">
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
</Playground>

|         | Font size                                    | Line height                                  |
| ------- | -------------------------------------------- | -------------------------------------------- |
| mobile  | 4XL - 2rem - <RemToPixels rem="2" />px       | 4XL - 2.5rem - <RemToPixels rem="2.5" />px   |
| desktop | 5XL - 2.25rem - <RemToPixels rem="2.25" />px | 5XL - 2.75rem - <RemToPixels rem="2.75" />px |

### Heading 3

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

|         | Font size                                    | Line height                                |
| ------- | -------------------------------------------- | ------------------------------------------ |
| mobile  | 3XL - 1.75rem - <RemToPixels rem="1.75" />px | 3XL - 2rem - <RemToPixels rem="2" />px     |
| desktop | 4XL - 2rem - <RemToPixels rem="2" />px       | 4XL - 2.5rem - <RemToPixels rem="2.5" />px |

### Heading 4

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

|         | Font size                                    | Line height                                  |
| ------- | -------------------------------------------- | -------------------------------------------- |
| mobile  | 2XL - 1.5rem - <RemToPixels rem="1.5" />px   | 2XL - 1.75rem - <RemToPixels rem="1.75" />px |
| desktop | 3XL - 1.75rem - <RemToPixels rem="1.75" />px | 3XL - 2rem - <RemToPixels rem="2" />px       |

### Heading 5

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

|         | Font size                                   | Line height                                  |
| ------- | ------------------------------------------- | -------------------------------------------- |
| mobile  | XL - 1.25rem - <RemToPixels rem="1.25" />px | XL - 1.5rem - <RemToPixels rem="1.5" />px    |
| desktop | 2XL - 1.5rem - <RemToPixels rem="1.5" />px  | 2XL - 1.75rem - <RemToPixels rem="1.75" />px |

### Heading 6

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

|         | Font size                                    | Line height                                          |
| ------- | -------------------------------------------- | ---------------------------------------------------- |
| mobile  | L - 1.125rem - <RemToPixels rem="1.125" />px | L Prolonged - 1.75rem - <RemToPixels rem="1.75" />px |
| desktop | XL - 1.25rem - <RemToPixels rem="1.25" />px  | XL Prolonged- 1.75rem - <RemToPixels rem="1.75" />px |

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
