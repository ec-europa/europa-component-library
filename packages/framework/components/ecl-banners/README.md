# Banners

## Why use this component

The banner is used for optional, mainly promotional material.

## Type of banners

### Background banner

- background image
- title with a link
- description

### Quote Banner

- quote

#### Guidance

- The author should always be available
- The author can't be omitted
- The quote should not exceed 250 characters
- The quote can be placed inside a banner, at the top of the page or within the content area of the page via the wysiwyg
- The quote must always start with a quote symbol
- The quote must start with uppercase
- The quote must end with a dot
- The author name should always start with a "―" (quotation dash)

### Video Banner

- quote or audiovisual material (image or video)
- paragraph

## When to use this component

### Background banner / Video banner

Should be the first element on the content area of the page

### Quote banner

Within the content area of the page, at the top, bottom, or between blocks of content

## Do not use this component

- do not use more than one background banner or video banner on a page
- do not use more than two quote banners on a page

## Technical details

The banner itself is not a standalone component, one of the following modifiers should always be used:

- `ecl-banner--background`: banner with background-image.
- `ecl-banner--video`: banner with video and description. Based on ecl-files component.
- `ecl-banner--quote`: banner with a quote. Based on ecl-blockquotes component.
