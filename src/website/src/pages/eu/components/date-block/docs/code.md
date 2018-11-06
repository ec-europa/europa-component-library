---
title: Showcase
order: 2
---

import Playground from '@ecl/website-components/Playground'
import DateBlock from '@ecl/eu-react-component-date-block/DateBlock'
import demoDefault from '@ecl/eu-specs-date-block/demo/data--default';
import demoCancelled from '@ecl/eu-specs-date-block/demo/data--cancelled';
import demoOngoing from '@ecl/eu-specs-date-block/demo/data--ongoing';
import demoPast from '@ecl/eu-specs-date-block/demo/data--past';

Introduction text.

<Playground playgroundLink="/storybook/eu/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    weekDay={demoDefault.week_day}
    day={demoDefault.day}
    month={demoDefault.month}
  />
</Playground>

## Cancelled

<Playground playgroundLink="/storybook/eu/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoCancelled.variant}
    weekDay={demoCancelled.week_day}
    day={demoCancelled.day}
    month={demoCancelled.month}
  />
</Playground>

## Ongoing

<Playground playgroundLink="/storybook/eu/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoOngoing.variant}
    weekDay={demoOngoing.week_day}
    day={demoOngoing.day}
    month={demoOngoing.month}
  />
</Playground>

## Past

<Playground playgroundLink="/storybook/eu/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoPast.variant}
    weekDay={demoPast.week_day}
    day={demoPast.day}
    month={demoPast.month}
  />
</Playground>
