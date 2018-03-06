# Meta

## Why and when to use this component

The meta information displays extra context about a piece of content that the
user is browsing.\
It should always be displayed in uppercase and different meta items should be separated
with pipe characters.\
You shouldn't have more than two meta items on a single entry.

## When to use this component

* the default meta should be used on list blocks to provide extra context to a
  particular entry before the user clicks through to its detail page
* the header meta should be used on the aforementioned detail pages on the page
  header area
* the header meta should also be used on other single pages where you want to
  display extra context about what the page is about

## Do not use this component

* on landing pages
* with lowercase except for dates

## Implementation

Here are the possible modifiers:

* **.ecl-meta--header**: Meta header modifier that is currently used in the page
  header, it is larger than the meta component alone
