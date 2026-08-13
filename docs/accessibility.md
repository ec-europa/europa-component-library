# Accessibility

ECL components and website have been developed with accessibility in mind on many levels to ensure compliance with **WCAG 2.1 Level AA** standards.

## Compliance Target

ECL aims to meet [Web Content Accessibility Guidelines (WCAG) 2.1 Level AA](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa) requirements. This ensures that:

- Content is perceivable, operable, understandable, and robust
- Text and interactive elements have sufficient color contrast (minimum 4.5:1 for normal text, 3:1 for large text)
- Components are keyboard accessible and screen reader friendly
- Content is accessible to users with various disabilities

## Implementation Approach

Here is a non-exhaustive list of items taken into consideration.

### HTML

- it's structured with as-simple-as-possible architecture
- it's semantic using native elements as much as possible
- content has been described with all possible attributes (dates, abbreviations, etc.)
- text labels are also as descriptive as possible
- tables include additional attributes for accessibility
- SVG images are used instead of font icons
- ARIA roles have been utilized at all possible cases

### CSS

- focus states are styled distinctively
- visibility rules using `visibility: hidden` and `display: none` have been used with careful considerations of actual implications
- color contrast have been taken into account and continuously tested in components visualisation testing

### JavaScript

- it's used as an enhancement rather than content management approach
- keyboard navigation has been ensured both automatically and manually

### Automations

Although with lesser value in comparison to our conscious efforts to achieve maximum accessibility, these are a few tools used in our development tool-chain to automate accessibility checks of our source code:

- `axe-core` is used in component testing interfaces to ensure WCAG rules coverage
- `eslint-plugin-jsx-a11y` is used to validate ECL website's source code

Components and combinations of components (compositions) provide demonstration of HTML representation combined with CSS rules (classes) and sometimes JavaScript behaviors. These aim to make implementation of existing best practices as simple and straight-forward as possible.

With the provision of such guidelines ECL hopes to facilitate its consumers and implementers and empower them to develop and maintain accessible websites and applications.

## Testing Accessibility

To run accessibility tests on components:

```bash
# Run all component tests (includes a11y checks)
pnpm test:components

# Test a specific component
pnpm test:components -- button
```

Component tests include `axe-core` checks to catch common accessibility violations.

## Component-Specific Guidelines

Each component has a dedicated accessibility tab in its documentation on the ECL website. For example:

- Accordion: https://ec.europa.eu/component-library/ec/components/accordion/accessibility/
- Button: https://ec.europa.eu/component-library/ec/components/button/accessibility/

These pages provide component-specific accessibility considerations, keyboard interactions, and screen reader behavior.
