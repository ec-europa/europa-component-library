ECL components and website have been developed with accessibility in mind on many levels. Here is a non-exhaustive list of items taken into considerations.

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

Although with lesser value in comparison to our conscient efforts to achieve maximum accessibility, these are a few tools used in our development tool-chain to automate accessibility checks of our source code:

- `axe-core` is used in component testing interfaces to ensure WCAG rules coverage
- `eslint-plugin-jsx-a11y` is used to validate ECL website's source code

Components and combinations of components (compositions) provide demonstration of HTML representation combined with CSS rules (classes) and sometimes JavaScript behaviors. These aim to make implementation of existing best practices as simple and straight-forward as possible.

With the provision of such guidelines ECL hopes to facilitate its consumers and implementers and empower them to develop and maintain accessible websites and applications.
