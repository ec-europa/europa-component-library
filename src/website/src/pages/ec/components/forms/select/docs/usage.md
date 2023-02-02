---
title: Usage
order: 1
---
# Default single select

The select component, also known as a select or dropdown menu, is a widget which displays a list of selectable items from which the user can select one value.

Having the same functionality as a [Radio button](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) but relatively more UI friendly from a screen real estate perspective, when there is a large (usually 5 or more) number of list items. These are hidden in a container that is made is available on interaction.

## Do's

- allow placeholder text to indicate type of input desired
- use the select component to limit the number of choices that the user can make
- use appropriate size (small, medium, large) depending on the situation you are using the component in
- use dropdown select menu labels as click targets (clicking the label will trigger the action)
- ensure that the clickable area of the select component is large enough to be easily selectable with a cursor or finger

## Don'ts

- don't use the select component for large items or data that requires complex analysis

## When to use

- use when you have 5 or more items that are mutually exclusive

## When not to use

- do not use when you have 5 or more items from which users can select more than one - use [Multi-select instead](#)

# Multi-select

The multi-select component, is a variation of the select component, which displays a list of selectable items from which the user can select multiple values.

It offers the same functionality as a [Checkbox](https://ec.europa.eu/component-library/ec/components/forms/checkbox/code/) but it is more UI friendly from a screen real estate perspective, when there is a large (usually 5+) number of list items. These are hidden in a container that is made is available on interaction.

## Do's

- allow placeholder text to indicate type of input desired
- use the select component to limit the number of choices that the user can make
- use appropriate size (small, medium, large) depending on the situation you are using the component in
- use dropdown select menu labels as click targets (clicking the label will trigger the action)
- ensure that the clickable area of the select component is large enough to be easily selectable with a cursor or finger
- keep in mind that the order is based on the HTML structure, for this reason group select options into logical categories and provide a clear label for each group

## Don'ts

- don't use the select component for large items or data that requires complex analysis
- don’t use the multi-select component to limit the number of choices that the user can make, use default instead

## When to use

- use when you have 5 or more items that are not mutually exclusive

## When not to use

- do not use when you have 5 or more items where you want to restrict selection to a single one - use [Select instead](#)
