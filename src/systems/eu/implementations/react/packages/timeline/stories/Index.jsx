/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import demoContent from '@ecl/eu-specs-timeline/demo/data';

import Timeline from '../src/Timeline';

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .add('default', () => <Timeline {...demoContent} />);
