---
title: Usage
order: 1
---
The range input is an interactive component through which users have a visual indicator of adjustable content, on a pre-defined range and for a pre-defined increment, between two items on a horizontal track. By default it is set between 0-100, however this can be changed to any numerical value (i.e. years slider).

## Do's

- always make sure you use a short, distinct and indicative label
- indicate whether the input group is optional or mandatory
- choose appropriate width (s, m, l)
- make use of helper text if there are further directions or hints the users may need in completing their goal
- write specific and clear error messages, so users understand how to properly address and recover from the error
- use an appropriate range value label within the numerical context (e.g. Age, Years)

## Don'ts

- don't use extensive ranges; being mindful of the restricted width of the component, users might have difficulty selecting the precise value
- don't limit potentially useful increments or steps (e.g. increments of 10 for a years filter)

## When to use

- when it is easier for users to add input via a slider

## When not to use

- do not use for strings or other non-numerical items, use a [Text field](https://ec.europa.eu/component-library/ec/components/forms/text-field/code/) or [Text area](https://ec.europa.eu/component-library/ec/components/forms/text-area/code/) instead
- do not use when users might benefit more granularity (e.g. [Datepicker](https://ec.europa.eu/component-library/ec/components/forms/datepicker/code/) for specific dates, [Radio button](https://ec.europa.eu/component-library/ec/components/forms/radio/code/) or [Select](https://ec.europa.eu/component-library/ec/components/forms/select/code/) for options)
