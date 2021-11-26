---
title: Usage
order: 1
---
The Loading indicator is an infinite looped animation that provides **visual feedback about the system status.**

|     |       |     |     |                                         |
| --- | ----- | --- | --- | --------------------------------------- |
| 1   | Label | yes | yes | Label indicating loading is in progress |

## Do's

- make sure you have a message along with the loading indicator, such as "Loading"

## Don'ts 

- don't state the processing time if it cannot be reliably estimated

## When to use

- the page/results will take **more than 1 second** to load
- when an action is performed by the user, to show an indication that their request is being handled

## When not to use

- don't use if the delay is less than 1 second

# Large Loading Indicator

The large loading indicator, is designed to indicate if a page or bigger section of a page is loading.

## Dos 

- make sure you have a message along with the loading indicator, such as "Loading"

## Don'ts

- do not use more than once per page
- don't state the processing time if it cannot be reliably estimated

## When to use

- when an action is performed by the user, to show an indication that their request is being handled
- to indicate the progression of the loading status for an entire page or a bigger section of a page (e.g. filter/pool pages)

## When not to use

- don't use them at a grouping of components (e.g. forms) or large component (e.g. Media container buffering) level  - use Medium indicators instead
- don't use them at components level (e.g. images, buttons, etc) - use Small indicators instead

# Medium Loading Indicator

The medium loading indicator, is designed to indicate if a grouping or large component is loading.

## Dos 

- indicate the progression of the loading status in a grouping of components (e.g. forms) or large component (e.g. Media container buffering)

## Don'ts

- do not use more than once per page
- don't state the processing time if it cannot be reliably estimated

## When to use

- when an action is performed by the user, to show an indication that their request is being handled
- when you have multiple components that are coupled together by an action (e.g. submitting a form)

## When not to use

- do not use this version for loading a page or bigger section of a page - use the Large indicator instead
- don't use them at components level (e.g. buttons, file download, etc.) - use Small indicators instead

# Small Loading Indicator

The small loading indicator, is designed to used as feedback for smaller components when an action is preformed

## Dos 

- indicate the progression of the loading status in smaller components

## Don'ts

- don't state the processing time if it cannot be reliably estimated

## When to use

- when an action is preformed by the user, to show an indication that their request is being handled
- when the action takes longer than 1 second to load for smaller components

## When not to use

- do not use this version for loading a page or bigger section of a page - use the Large indicator instead
- don't use them at a grouping of components (e.g. forms) level  - use Medium indicators instead
