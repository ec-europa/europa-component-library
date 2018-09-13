/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

import demoContent from '@ecl/ec-specs-breadcrumb/demo/data';

import Breadcrumb from '../Breadcrumb';

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Breadcrumb items={demoContent.items} label={demoContent.label} />
  ));
