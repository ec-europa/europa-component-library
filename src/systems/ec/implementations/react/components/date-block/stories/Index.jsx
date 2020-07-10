import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import demoContent from '@ecl/ec-specs-date-block/demo/data';

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

Default.story = {
  name: 'default',
};

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

Ongoing.story = {
  name: 'ongoing',
};

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

Cancelled.story = {
  name: 'cancelled',
};

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

Past.story = {
  name: 'past',
};
