# Sections

SUMMARY (Components, elements, modifiers)

.section (component)
  Elements:
    .section__group
    Element modifiers:
      .section__group--biography-top
      .section__group--highlight-grey
      .section__group--highlight-grey-lightest
      .section__group--highlight-yellow
      .section__group--collapsible
      .section__group--bottom-header
      .section__group--no-margin
      .section__group--full-width
    .section__item

  Component modifiers:
    .section--row-three
    .section--row-two
    .section--two-columns

## Section component.

The section component is used to wrap block of contents.
Its implementation ensures the correct vertical spacing between different
groups of contents, it uses the margin collapse mechanism (css2) so that you
don't have to worry when you place two sections one after the other, only one
of the two margins will be applied, indeed.

It can contain different set of html elements and components, but the
predefined ones are its unique element {section group}, the {listing wrapper},
the {sidebar-field-group}.

The way it works is that the first {section group} in the section doesn't get
any margin (the parent is already defining that) while the last doesn't get the
margin-bottom (still for the same reason).
When there's only one {section group} element it doesn't get any vertical margin.
Please do not reset any of these margins.

Mind that there is also a .section__group--full-width modifier which is not
demoed here, it works when the section is not wrapped into a width limiting
container.

WHAT TO AVOID:
Do not wrap a section component into a row element, this would break the
collapsing margin.
