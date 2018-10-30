import Playground from '@ecl/website-components/Playground'
import DateBlock from '@ecl/ec-react-component-date-block/DateBlock'
import demoDefault from '../demo/data--default';
import demoCancelled from '../demo/data--cancelled';
import demoOngoing from '../demo/data--ongoing';
import demoPast from '../demo/data--past';

Introduction text.

<Playground playgroundLink="/storybook/ec/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    weekDay={demoDefault.week_day}
    day={demoDefault.day}
    month={demoDefault.month}
  />
</Playground>

## Cancelled

<Playground playgroundLink="/storybook/ec/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoCancelled.variant}
    weekDay={demoCancelled.week_day}
    day={demoCancelled.day}
    month={demoCancelled.month}
  />
</Playground>

## Ongoing

<Playground playgroundLink="/storybook/ec/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoOngoing.variant}
    weekDay={demoOngoing.week_day}
    day={demoOngoing.day}
    month={demoOngoing.month}
  />
</Playground>

## Past

<Playground playgroundLink="/storybook/ec/index.html?selectedKind=DateBlock&selectedStory=interactive&stories=1">
  <DateBlock
    variant={demoPast.variant}
    weekDay={demoPast.week_day}
    day={demoPast.day}
    month={demoPast.month}
  />
</Playground>
