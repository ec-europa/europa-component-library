import { ColorCard, ColorLayout, ColorPalette } from '@ecl/website-components'
import tokens from '@ecl/eu-theme-default/exports/tokens.json'

The colour palette is designed to support a flexible, modular visual style that feels connected across EC and EU websites and platforms. The intent of the palette is to **convey a united and open European spirit**, and leave users feeling welcome and in good hands.

## Primary colours

---

The **primary color palette** is comprised of blues, yellows and greys. These colors are present accross all pages and, together with the neutral white, they make up for about 80% of the colors in the page layout. Use these colours to **create consistency** and a strong **visual hierarchy** throughout the page.

<ColorLayout>
  <ColorCard tokens={tokens} name="COLOR_PRIMARY" />
  <ColorCard tokens={tokens} name="COLOR_SECONDARY" />
  <ColorCard tokens={tokens} name="COLOR_TEXT" />
</ColorLayout>

### Variations

<ColorLayout>
  <ColorPalette tokens={tokens} category="color.variations.1" />
  <ColorPalette tokens={tokens} category="color.variations.2" />
  <ColorPalette tokens={tokens} category="color.variations.3" />
</ColorLayout>

## Notification colours

---

The secondary colour palette is mainly used for notification colours. The secondary colours should make up 20% or less of the colour in the layout and should be used sparingly to highlight important information and calls to action.

<ColorLayout cols="12 md-3">
  <ColorCard tokens={tokens} name="COLOR_INFO" />
  <ColorCard tokens={tokens} name="COLOR_WARNING" />
  <ColorCard tokens={tokens} name="COLOR_SUCCESS" />
  <ColorCard tokens={tokens} name="COLOR_ERROR" />
</ColorLayout>

## Background colour

---

White is the background colour of the EC-website.

<ColorLayout>
  <ColorCard tokens={tokens} name="COLOR_WHITE_100" />
</ColorLayout>
