# Responsive Typography Mixins

This SCSS module provides mixins and utilities for applying responsive typography styles defined in a centralized `$typography` map. It supports responsive `font-size`, `line-height` and consistent `font-family` and `font-weight` settings.

## Setup

Before using the mixins, ensure the `$typography` map is properly configured and passed into the module:

```scss
@use '@your-design-system/mixins-typography/mixins' with (
  $typography: $your-typography-map
);
```

## Exports

- `@mixin responsive-font($token)`

## Typography Map Structure

```scss
$typography: (
  font-family: 'Open Sans, sans-serif',

  heading1: (
    mobile: (
      size: var(--fs-6xl),
      line-height: var(--lh-3xl),
    ),
    tablet: (
      size: var(--fs-7xl),
      line-height: var(--lh-6xl),
    ),
    desktop: (
      size: var(--fs-8xl),
      line-height: var(--lh-8xl),
    ),
    font-weight: 300,
    letter-spacing-compact: -0.01em,
  ),

  body: (
    m: (
      mobile: (
        size: var(--fs-s),
        line-height: var(--lh-s),
      ),
      tablet: (
        size: var(--fs-m),
        line-height: var(--lh-m),
      ),
      desktop: (
        size: var(--fs-m),
        line-height: var(--lh-m),
      ),
    ),
  ),
);
```

## Usage Examples

### Using a token string

```scss
@use '@ecl/mixins-typography/mixins';

.title {
  @include mixins.responsive-font('heading1');
}
```

### Using a nested variant (e.g. `body-m`)

```scss
@use '@ecl/mixins-typography/mixins';

.article-text {
  @include mixins.responsive-font('body-m');
}
```

### Using a direct map input

```scss
@use '@ecl/mixins-typography/mixins';

$custom-map: (
  mobile: (
    size: 1rem,
    line-height: 1.5,
  ),
  tablet: (
    size: 1.125rem,
    line-height: 1.75,
  ),
  desktop: (
    size: 1.25rem,
    line-height: 2,
  ),
  font-weight: 400,
);

.custom-component {
  @include mixins.responsive-font($custom-map);
}
```

## Notes

- `$token` can be either:
  - A string (like `'heading1'` or `'body-m'`) that resolves inside the `$typography` map.
  - A direct SCSS map matching the expected structure.
- Font family is applied from `$typography['font-family']`.
- Font weight is set once, not per breakpoint.
- Supports `mobile` (base), `tablet`, and `desktop` breakpoints.
