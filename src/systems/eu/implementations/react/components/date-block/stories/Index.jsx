import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-date-block/demo/data';

import DateBlock from '../src/DateBlock';

export default {
  title: 'Components/Date Block',
  decorators: [withKnobs],
};

export const Default = () => (
  <DateBlock
    dateTime={demoContent.dateTime}
    day={text('Day', demoContent.day)}
    month={text('Month', demoContent.month)}
    monthFull={text('Month (full)', demoContent.monthFull)}
    year={text('Year', demoContent.year)}
  />
);

Default.storyName = 'default';

export const Ongoing = () => (
  <DateBlock
    variant="ongoing"
    dateTime={demoContent.dateTime}
    day={text('Day', demoContent.day)}
    month={text('Month', demoContent.month)}
    monthFull={text('Month (full)', demoContent.monthFull)}
    year={text('Year', demoContent.year)}
  />
);

Ongoing.storyName = 'ongoing';

export const Cancelled = () => (
  <DateBlock
    variant="canceled"
    dateTime={demoContent.dateTime}
    day={text('Day', demoContent.day)}
    month={text('Month', demoContent.month)}
    monthFull={text('Month (full)', demoContent.monthFull)}
    year={text('Year', demoContent.year)}
  />
);

Cancelled.storyName = 'cancelled';

export const Past = () => (
  <DateBlock
    variant="past"
    dateTime={demoContent.dateTime}
    day={text('Day', demoContent.day)}
    month={text('Month', demoContent.month)}
    monthFull={text('Month (full)', demoContent.monthFull)}
    year={text('Year', demoContent.year)}
  />
);

Past.storyName = 'past';
